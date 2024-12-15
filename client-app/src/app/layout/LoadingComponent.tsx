interface Props {
    inverted?: boolean; // Optional prop
    content?: string; // Optional prop
  }
  
  export default function LoadingComponent({
    inverted = true,
    content = "Loading...",
  }: Props) {
    return (
      <div
        className={`flex items-center justify-center h-screen ${
          inverted ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
          <p className="text-lg font-semibold">{content}</p>
        </div>
      </div>
    );
  }
  