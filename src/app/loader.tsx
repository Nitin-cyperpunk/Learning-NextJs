"use client";
import React, { useRef, useEffect, useState } from "react";



const Loader: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const handleEnded = () => {
            // Fade out animation
            setTimeout(() => setLoading(false), 800); // match animation duration
        };
        video.addEventListener("ended", handleEnded);
        return () => video.removeEventListener("ended", handleEnded);
    }, []);

    return (
        <>
            {loading && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "#000",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.8s",
                        opacity: loading ? 1 : 0,
                        pointerEvents: "all",
                    }}
                >
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        autoPlay
                        muted
                        style={{
                            maxWidth: "80vw",
                            maxHeight: "80vh",
                            borderRadius: "16px",
                            boxShadow: "0 0 40px #000a",
                        }}
                    />
                </div>
            )}
            <div
                style={{
                    opacity: loading ? 0 : 1,
                    transition: "opacity 0.8s",
                }}
            >
                {/* Your website content goes here */}
                <h1>Welcome to the Website!</h1>
                {/* ... */}
            </div>
        </>
    );
};

export default function PageLoader() {
    return <Loader videoSrc="/logovideo.mp4" />;
}

