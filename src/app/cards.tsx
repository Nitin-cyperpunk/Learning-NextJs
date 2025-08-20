"use client";
import { useState, useEffect } from "react";

interface UnsplashUser {
  name: string;
  location?: string;
}

interface UnsplashUrls {
  regular: string;
}

interface UnsplashImage {
  alt_description: string | null;
  description: string | null;
  urls: UnsplashUrls;
  user: UnsplashUser;
  likes: number;
  created_at: string;
}
const unsplashApiUrl = 'https://api.unsplash.com/photos/random?client_id=PmRETeLc9CdCow_ja4wAa9loI5uZoxooSTis3TRHqdk';
export default function Home() {
  const [img, setImg] = useState<UnsplashImage | null>(null);
 const [error, setError] = useState(false);

  useEffect(() => {
    fetch(unsplashApiUrl)
      .then(r => r.json())
      .then((data: UnsplashImage) => setImg(data))
      .catch(() => setError(true));
  }, []);


  useEffect(() => {
    fetch(unsplashApiUrl)
      .then(response => response.json())
      .then((data: UnsplashImage) => setImg(data))
      .catch(console.error);
  }, []);
  setTimeout(() => {
    console.log("Fetched image data:", img);
  }, 1000);

  return (
    <div className="flex flex-row items-center justify-center p-4 mt-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-[500px]   ">
        {img ? (
          <>
            <img
              src={img.urls.regular}
              alt={img.alt_description ?? "Unsplash Image"}
              className="rounded-xl w-[300px] h-[310px] hover:scale-110 transition-transform"
               
            />
            <div className="w-[300px] h-[400px] mt-4">
                 <h1 className="text-amber-500 font-thin text-2xl">
              {img.alt_description ?? "No Description"}
            </h1>
            <p className="text-gray-500 italic">
              {img.description ?? "No extra description"}
            </p>
            <div className="flex gap-2 items-center mt-4">
                <button className="bg-amber-100 text-black p-2 rounded-xl hover:bg-amber-300 transition-colors duration-200"
                onClick={() => { img.likes++; setImg({ ...img }); }}>
                 👍 Like
                </button>
              <span className="ml-2 text-amber-200 ">🩷{img.likes} Likes</span>
            </div>
            <span className="text-gray-400 text-sm mt-2">
              Uploaded on: {new Date(img.created_at).toLocaleDateString()}
              {img.user.location ? ` · 🗾${img.user.location}` : ""}
            </span>

            </div>
           
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
