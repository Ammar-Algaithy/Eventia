import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityDashboard({
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectedActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity,
    submitting
  }: Props) {
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
                <ActivityList activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}/>
            </div>
            </div>
            
            {/* Activity Details Modal */}
            {selectedActivity && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative p-6 w-full max-w-lg rounded-lg shadow-lg">
                <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectedActivity={cancelSelectedActivity}
                    openForm={openForm}
                />
                </div>
            </div>
            )}
            {editMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative p-6 w-full max-w-lg rounded-lg shadow-lg">
                        <ActivityForm closeForm={closeForm} 
                        activity={selectedActivity} 
                        createOrEdit={createOrEdit}
                        submitting={submitting}/>
                    </div>
                </div>
            )}
        </main>
    );
  }
  
