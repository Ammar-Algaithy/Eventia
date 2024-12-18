import { NavLink } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <div className="w-full max-w-2xl bg-white border rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* User Section */}
      <div className="flex items-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 gap-3">
        {/* User Image */}
        <img
          src={'/assets/user.png'} // Fallback user image
          alt="User"
          className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
        />
        {/* User Info */}
        <div>
          <h2 className="text-lg font-bold text-teal-300">{activity.title}</h2>
          <p className="text-sm text-gray-200">Hosted by Bob</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="border-t border-gray-100 px-4 bg-gray-100 py-2 space-y-1">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-8 4h4M6 21h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{activity.date}</span>
        </div>
        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.75s-6-5.25-6-9.75a6 6 0 1112 0c0 4.5-6 9.75-6 9.75z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
          <span>{activity.city}</span>
        </div>
      </div>

      {/* Attendees Section */}
      <div className="border-t bg-gray-100 px-4 py-3">
        <p className="text-sm text-gray-700">Attendees: John, Sarah, Mike...</p>
      </div>

      {/* Action Section */}
      <div className="flex justify-between items-center bg-gradient-to-b from-gray-100 to-gray-200 p-4 bg-gray-100">
        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-2">{activity.description}</p>
        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <NavLink
            to={`/activities/${activity.id}`}
            className="bg-gradient-to-b from-gray-900 to-gray-700 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-1 transition"
          >
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
}
