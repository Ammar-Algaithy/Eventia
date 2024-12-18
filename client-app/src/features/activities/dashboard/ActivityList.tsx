import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupActivities } = activityStore;

  return (
    <div className="flex flex-col gap-8">
      {groupActivities.map(([group, activities]) => (
        <section key={group} className="w-full">
          {/* Group Header */}
          <header className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
            {group}
          </header>

          {/* Activity Items */}
          <div className="flex flex-col items-center gap-6">
            {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
});
