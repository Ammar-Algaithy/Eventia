

export default function ActivityDetailedChat() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center py-4">
        <h2 className="text-xl font-semibold">Chat about this event</h2>
      </div>
      {/* Chat Body */}
      <div className="p-6 space-y-6">
        {/* Comments */}
        {[1, 2].map((_, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src="/assets/user.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">User {index + 1}</h4>
              <p className="text-gray-600">Some comment goes here...</p>
            </div>
          </div>
        ))}
        {/* Reply Form */}
        <div className="flex items-start gap-4">
          <textarea
            placeholder="Add a reply..."
            className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
