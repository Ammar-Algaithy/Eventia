import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {selectedActivity, editMode, loadingInitial} = activityStore;

    if (loadingInitial) {
        // Render a skeleton or placeholder while loading
        return <div>Loading activities...</div>;
    }
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
            
            {/* Activity Details Modal */}
            {selectedActivity && !editMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative p-6 w-full max-w-lg rounded-lg shadow-lg">
                        <ActivityDetails />
                    </div>
                </div>
            )}

            {editMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative p-6 w-full max-w-lg rounded-lg shadow-lg">
                        <ActivityForm />
                    </div>
                </div>
            )}
        </main>
    );
  })
  
