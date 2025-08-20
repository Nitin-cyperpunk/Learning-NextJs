import Link from "next/link";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <div className="w-full h-auto px-5 py-3">
      <div className="flex flex-wrap items-center justify-between">
      <a href="/" className="text-4xl font-bold text-black drop-shadow-lg"  onClick={() => {
          const video = document.createElement("video");
          video.src = "/logovideo.mp4"; // Replace with your video path
          video.controls = true;
          video.autoplay = true;
          video.style.width = "400px";
          video.style.position = "fixed";
          video.style.top = "50%";
          video.style.left = "50%";
          video.style.transform = "translate(-50%, -50%)";
          video.style.zIndex = "1000";
          document.body.appendChild(video);

          video.onended = () => {
            document.body.removeChild(video);
          };
        }}>
        Darzi
      </a>
      
      <div className="flex gap-6 text-lg font-medium text-black drop-shadow-lg"></div>

        <div className="flex gap-6 text-lg font-medium text-black-700">
          <a href="/" className="hover:text-indigo-600 transition-colors duration-200">Home</a>
          <a href="/about" className="hover:text-indigo-600 transition-colors duration-200">About</a>
          <a href="/dashboard" className="hover:text-indigo-600 transition-colors duration-200">Dashboard</a>
          <a href="/login" className="hover:text-indigo-600 transition-colors duration-200">Login</a>
          <a href="/register" className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Register
          </a>
         <div className="flex items-center">
           <button
             onClick={() => setTheme("light")}
             className="p-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
           >
             <Sun className="w-5 h-5" />
           </button>
           <button
             onClick={() => setTheme("dark")}
             className="p-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
           >
             <Moon className="w-5 h-5" />
           </button>
         </div>

        </div>

      </div>
    </div>
  );
}
