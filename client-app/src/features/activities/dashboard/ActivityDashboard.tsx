import ActivityList from "./ActivityList";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry, loadingInitial} = activityStore;

    useEffect(() => {
      if (activityRegistry.size <= 1)
        {
            loadActivities();
        }
    }, [loadActivities, activityRegistry.size]);
  
    
    if (loadingInitial) return <LoadingComponent content='Loading ...' />
   
    return (
        <main>
            <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
            </header>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex gap-4">
            {/* Activity List */}
            <div className="flex-1 bg-gray-200 p-4 rounded-lg">
                <ActivityList />
            </div>
            </div>
            <h2>Activity filter</h2>
        </main>
    );
  })
  
