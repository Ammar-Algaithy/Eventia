
interface Props {
  activity: {
    description: string;
    date: string;
    venue: string;
    city: string;
  };
}

export default function ActivityDetailedInfo({ activity }: Props) {
  return (
    <div className="bg-gray-200 shadow-md rounded-b-lg p-6 mb-4 space-y-6">
      {/* Description */}
      <div className="flex items-start gap-4 border-b border-gray-400 pb-2">
        <p className="text-gray-700 pl-4">{activity.description}</p>
      </div>
      {/* Date */}
      <div className="flex items-center gap-4 pl-4">
        <p className="text-gray-700">{activity.date}</p>
      </div>
      {/* Venue */}
      <div className="flex items-center gap-4 pl-4">
        <p className="text-gray-700">
          {activity.venue}, {activity.city}
        </p>
      </div>
    </div>
  );
}
