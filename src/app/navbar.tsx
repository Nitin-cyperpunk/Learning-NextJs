import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full h-auto backdrop-blur-sm bg-white/80 shadow-lg rounded-2xl px-6 py-3">
      <div className="flex flex-wrap items-center justify-between">
        
     
        <a href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
         Darzi
        </a>

        <div className="flex gap-6 text-lg font-medium text-gray-700">
          <a href="/" className="hover:text-indigo-600 transition-colors duration-200">Home</a>
          <a href="/about" className="hover:text-indigo-600 transition-colors duration-200">About</a>
          <a href="/dashboard" className="hover:text-indigo-600 transition-colors duration-200">Dashboard</a>
          <a href="/login" className="hover:text-indigo-600 transition-colors duration-200">Login</a>
          <a href="/register" className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Register
          </a>
        </div>

      </div>
    </div>
  );
}
