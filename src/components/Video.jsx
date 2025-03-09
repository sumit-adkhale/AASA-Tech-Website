import React, { useState } from "react";

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    const video = document.getElementById("videoElement");
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="w-full h-[60vh]  relative my-10 border-blue-400 border-1   rounded-xl shadow-[1px_1px_10px_rgba(0,0,139,0.3)]">
      <video
        id="videoElement"
        muted
        className="w-full h-full z-20"
        src="video.mp4"
      ></video>
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {isPlaying ? (
          <img src="pause.png" className="w-[100px] h-[100px]" alt="Pause" />
        ) : (
          <img src="play.png" className="w-[100px] h-[100px]" alt="Play" />
        )}
      </button>
    </div>
  );
}

export default Video;
