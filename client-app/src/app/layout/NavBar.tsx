import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <nav className="bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <img className="h-auto w-12" src="/assets/logo.png" alt="Logo" />
            <span className="ml-3 text-4xl font-bold bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent">Eventia</span>
          </NavLink>

          {/* Center: Navigation Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Activities
            </NavLink>
            <NavLink
              to="/createActivity"
              className={({ isActive }) =>
                `flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Create Activity
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
