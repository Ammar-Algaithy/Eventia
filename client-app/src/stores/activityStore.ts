import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../app/models/activity";
import agent from "../app/api/agent";
import { v4 as uuid } from "uuid";

export default class ActivityStore {
    activityRegistry = new Map<string, Activity>(); // Use a Map for activities
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this);
    }

    // Get activities sorted by date
    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date)
        );
    }

    // Load all activities into the registry
    loadActivities = async () => {
        this.setLoadingInitial(true);
        try {
            const activities = await agent.Activities.list();
            runInAction(() => {
                activities.forEach((activity) => {
                    this.setActivity(activity); // Add to the registry
                });
                this.setLoadingInitial(false);
            });
        } catch (error) {
            console.error("Error loading activities:", error);
            runInAction(() => {
                this.setLoadingInitial(false);
            });
        }
    };

    // Load a specific activity by ID
    loadActivity = async (id: string): Promise<Activity | undefined> => {
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity = activity;
            return activity;
        } else {
            this.setLoadingInitial(true);
            try {
                activity = await agent.Activities.details(id); // Fetch from API
                runInAction(() => {
                    if (activity) {
                        this.setActivity(activity); // Add to the registry
                        this.selectedActivity = activity; // Set as selected
                    }
                    this.setLoadingInitial(false);
                });
                return activity;
            } catch (error) {
                console.error("Error loading activity details:", error);
                runInAction(() => {
                    this.setLoadingInitial(false);
                });
            }
        }
    };

    // Helper to retrieve an activity from the registry
    private getActivity = (id: string): Activity | undefined => {
        return this.activityRegistry.get(id);
    };

    // Add or update an activity in the registry
    private setActivity = (activity: Activity) => {
        activity.date = activity.date.split("T")[0]; // Format date
        this.activityRegistry.set(activity.id, activity);
    };

    // Set loading state for initial data
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    // Create a new activity
    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid(); // Generate a unique ID
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.setActivity(activity); // Add to the registry
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.error("Error creating activity:", error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    // Update an existing activity
    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.setActivity(activity); // Update the registry
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.error("Error updating activity:", error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    // Delete an activity
    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id); // Remove from the registry
                if (this.selectedActivity?.id === id) this.selectedActivity = undefined; // Clear selection if deleted
                this.loading = false;
            });
        } catch (error) {
            console.error("Error deleting activity:", error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}
