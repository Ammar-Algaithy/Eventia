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

    // Get activity by date

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
        Date.parse(a.date) - Date.parse(b.date));
    }

    // Load all activities into activityRegistry
    loadActivities = async () => {
        try {
            const activities = await agent.Activities.list();
            runInAction(() => {
                activities.forEach((activity) => {
                    activity.date = activity.date.split("T")[0];
                    this.activityRegistry.set(activity.id, activity); // Add to the registry
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

    // Helper to get all activities as an array (useful for rendering lists)
    get activities() {
        return Array.from(this.activityRegistry.values());
    }

    // Set loading state for initial data loading
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    // Select an activity
    selectActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    };

    // Cancel selected activity
    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    };

    // Open form for creating or editing an activity
    openForm = (id?: string) => {
        if (id) {
            this.selectActivity(id);
        } else {
            this.selectedActivity = undefined;
        }
        this.editMode = true;
    };

    // Close the form
    closeForm = () => {
        this.editMode = false;
    };

    // Create a new activity
    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid(); // Generate a unique ID for the new activity
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity); // Add to the registry
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
                this.activityRegistry.set(activity.id, activity); // Update the registry
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
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
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
