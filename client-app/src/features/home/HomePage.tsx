import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center">
                    <div className="w-48 h-auto">
                        <img
                        src="/assets/logo.png"
                        alt="App Logo"
                        className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
                <h1 className="text-4xl font-bold">Welcome to <span className="text-teal-400">Eventia</span></h1>
                <div className="rounded bg-gradient-to-r from-teal-500 to-white p-[1.5px]">
                    <h3 className="text-lg bg-gray-800 text-white rounded w-full px-4 py-2">
                        Take me to{" "}
                        <Link
                        to={'/activities'}
                        className="text-teal-400 hover:text-teal-300 font-semibold"
                        >
                        Activities & Events
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
