
export default function ActivityDetailedSidebar() {
  const attendees = [
    { name: 'Bob', isHost: true, isFollowing: true },
    { name: 'Tom', isFollowing: true },
    { name: 'Sally' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg">
      {/* Sidebar Header */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-md text-white text-center py-4">
        <h2 className="text-xl font-semibold text-white">{attendees.length} People Going</h2>
      </div>
      {/* Sidebar Content */}
      <div className="p-6 space-y-6 bg-gray-200">
        {attendees.map((attendee, index) => (
          <div key={index} className="flex items-center gap-4 border-b border-gray-400 mb-1">
            <img
              src="/assets/user.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{attendee.name}</h4>
              {attendee.isHost && <p className="text-orange-500">Host</p>}
              {attendee.isFollowing && <p className="text-gray-500">Following</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
