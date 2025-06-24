import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**export default VideoHoverEffect;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoHoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Get the container's position relative to the viewport
    const container = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the container
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '500px',
        height: '300px',
        backgroundColor: '#f0f0f0',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid #ccc',
        cursor: 'none', // Optional: Hide default cursor
      }}
    >
      Hover inside the box

      {isHovered && (
        <div className='bg-black w-48 h-48 '>
        <motion.video
          src="your-video.mp4" // Add your video source here
          autoPlay
          muted
          loop
          style={{
            width: '150px',
            height: 'auto',
            position: 'absolute',
            pointerEvents: 'none', // Prevent interaction with the video
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: mousePosition.x - 75, // Center the video around the mouse
            y: mousePosition.y - 75,
          }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        </div>
      )}
    </div>
  );
};

export default VideoHoverEffect;*/
