import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
  
}

export default function ActivityDetails({ activity, cancelSelectedActivity, openForm }: Props) {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-50 border border-gray-300 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    {/* Image Section */}
    <img
        src={`/assets/categoryImages/${activity.category}.jpg`}
        alt={`${activity.category}`}
        className="w-full h-64 object-cover rounded-t-3xl"
    />

    {/* Content Section */}
    <div className="p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {activity.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4 italic">
        {new Date(activity.date).toLocaleDateString()}
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
        {activity.description}
        </p>
    </div>

    {/* Section for the buttons at the bottom of the card */}
    <div className="px-6 py-4 bg-gradient-to-r from-teal-50 to-rose-50 border-t border-gray-300">
        <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md hover:from-teal-600 hover:to-teal-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
                onClick={() => {
                    openForm(activity.id);
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                    />
                </svg>
                Edit
                </button>
                <button className="flex items-center gap-2 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md hover:from-rose-600 hover:to-rose-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all duration-200"
                    onClick={cancelSelectedActivity}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    Cancel
                </button>
            </div>
        </div>
    </div>
  );
}
