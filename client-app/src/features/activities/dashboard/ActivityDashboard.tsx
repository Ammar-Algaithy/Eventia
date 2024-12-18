import ActivityList from "./ActivityList";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, loadingInitial } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) {
      loadActivities();
    }
  }, [loadActivities, activityRegistry.size]);

  if (loadingInitial) return <LoadingComponent content="Loading ..." />;

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="rounded border shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700">
            Dashboard
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex gap-8">
        {/* Activity List */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Activities
          </h2>
          <ActivityList />
        </div>

        {/* Filters and Calendar */}
        <aside className="w-80 space-y-6">
          {/* Activity Filters */}
          <div className="bg-white p-6 rounded-lg shadow">
            <ActivityFilters />
          </div>
        </aside>
      </div>
    </main>
  );
});
