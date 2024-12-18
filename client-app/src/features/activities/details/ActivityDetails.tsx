import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../stores/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedChats from "./ActivityDetailedChats";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";
import ActivityDetailedHeader from "./ActivityDetailedheader";
import ActivityDetailedInfo from "./ActivitydetailedInfo";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingComponent />
      </div>
    );
  }

  if (!activity) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        Activity not found.
      </p>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Left Column: Main Content */}
      <div className="lg:col-span-2 ">
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChats />
      </div>

      {/* Right Column: Sidebar */}
      <div className="lg:col-span-1">
        <ActivityDetailedSideBar />
      </div>
    </div>
  );
});
