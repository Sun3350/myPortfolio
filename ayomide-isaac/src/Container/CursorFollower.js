import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css'
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(true); // To track whether the mouse is moving

  useEffect(() => {
    let timer;

    const mouseMoveHandler = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMoving(true);

      // Clear the timer if it exists
      clearTimeout(timer);

      // Set a timeout to detect when the mouse stops moving
      timer = setTimeout(() => {
        setIsMoving(false); // Set to false when no movement for 500ms
      }, 500); // Adjust the timeout as per your needs
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      clearTimeout(timer); // Clean up the timer
    };
  }, []);

  return (
    <motion.div
      className="cursor-follower"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isMoving ? 1 : 1.5, // Scale up when not moving
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
        mass: 0.2,
      }}
    />
  );
};

export default CursorFollower;
