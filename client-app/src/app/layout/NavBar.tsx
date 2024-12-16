import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";


export default observer(function NavBar() {
  const {activityStore} = useStore();
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              className="h-8 w-8"
              src="/assets/logo.png"
              alt="Logo"
            />
            <span className="ml-3 text-white text-xl font-semibold">
                Reactivities
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex space-x-4">
            <a
              href="#activities"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Activities
            </a>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => activityStore.openForm()}
            >
              Create Activity
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
})
