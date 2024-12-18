import { NavLink } from "react-router-dom";

interface Props {
  activity: {
    id: string;
    title: string;
    date: string;
    category: string;
  };
}

export default function ActivityDetailedHeader({ activity }: Props) {
  return (
    <div className="relative h-72 w-full rounded-t-lg overflow-hidden">
      {/* Background Image */}
      <img
        src={`/assets/categoryImages/${activity.category}.jpg`}
        alt={activity.title}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      {/* Overlay Content */}
      <div className="relative z-10 p-6 text-white space-y-2">
        <h1 className="text-4xl font-extrabold">{activity.title}</h1>
        <p className="text-lg">{activity.date}</p>
        <p className="text-sm">
          Hosted by <strong>Bob</strong>
        </p>
      </div>
      {/* Action Buttons */}
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 flex justify-between px-4 py-2 shadow-md">
        <button className="px-4 py-2 bg-gradient-to-br from-teal-300 to-teal-400 text-gray-900 rounded-md hover:bg-gray-900">
          Join Activity
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-orange-600 text-gray-900 hover:text-white">
          Cancel Attendance
        </button>
        <NavLink 
          className="px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-md hover:bg-gray-900 hover:text-teal-400" 
          to={`/manage/${activity.id}`}
        >
          Manage Event
        </NavLink>
      </div>
    </div>
  );
}
