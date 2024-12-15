import { SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function PostCard({ activities, selectActivity, deleteActivity, submitting }: Props) {
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="w-full max-w-2xl bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
        >
          {/* Header: Title */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">{activity.title}</h2>
            <p className="text-sm text-gray-500">
              Posted on {activity.date} in {activity.city}
            </p>
          </div>

          {/* Content: Description */}
          <div className="pt-4 pl-4">
            <p className="text-gray-700">{activity.description}</p>
          </div>

          {/* Content: city and venue */}
          <div className="pt-1 pl-4 pb-3">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Location:</span> {activity.city}, {activity.venue}
            </p>
          </div>

          {/* Footer: Actions */}
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-600 border border-gray-300 rounded-lg h-10 flex items-center px-4 py-1">
              {activity.category}
            </p>
            <button
              onClick={() => selectActivity(activity.id)}
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg h-10 hover:bg-blue-600 flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-6a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25H9m6.75-6.75L21 12m0 0l-5.25-5.25M21 12H9"
                />
              </svg>
            </button>
            <button
              onClick={(e) => handleActivityDelete(e, activity.id)}
              type="submit"
              name={activity.id}
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg h-10 flex items-center gap-2 shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
              disabled={submitting}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {target === activity.id && submitting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
