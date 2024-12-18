import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ActivityFilters() {
  return (
    <>
      <div className="flex flex-col w-full rounded-lg shadow-md bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-400 text-white rounded-t-lg">
          <span className="text-lg font-semibold">Filters</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6h10M10 12h7m-7 6h10M4 6h.01M4 12h.01M4 18h.01"
            />
          </svg>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-700 focus:bg-gray-700 text-gray-300 hover:text-white focus:text-white hover:rounded-b-md">
            All Activities
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-700 focus:bg-gray-700 text-gray-300 hover:text-white focus:text-white hover:rounded-b-md">
            I'm going
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-700 focus:bg-gray-700 text-gray-300 hover:text-white focus:text-white hover:rounded-b-md">
            I'm hosting
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Calendar />
      </div>
    </>
  );
}
