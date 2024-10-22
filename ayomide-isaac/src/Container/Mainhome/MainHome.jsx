import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './mainhome.css'; // Add custom styles here if needed
import profile from '../../Images/ay 2.png';

const MainHome = () => {
  const controls = useAnimation(); // Animation controls for the image

  // Variants for hover animation
  const hoverAnimation = { scale: 1.2, transition: { duration: 0.1, ease: 'easeInOut' } };

  // Variants for continuous bounce animation of the image
  const bounceAnimation = {
    y: [0, -20], // Move up and down
    transition: {
      y: {
        duration: 0.5,
        repeat: Infinity, // Repeat indefinitely
        repeatType: 'reverse', // Reverse the animation direction
       
      },
    },
  };

  // Variants for fade-in animation of the image
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.1 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  // Start the bounce animation when the component mounts
  useEffect(() => {
    controls.start(bounceAnimation);
  }, [controls]);

  // Handle the image click with a 2-second delay before navigating
  const handleImageClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      // Navigate using window.location.href to allow for loader execution
      window.location.href = '/home';
    }, 800); // Delay of 2 seconds (2000 milliseconds)
  };

  return (
    <div className='main-home-container w-full h-screen flex flex-col justify-center items-center relative'>
      {/* Image with fade-in animation */}
      <motion.div
        layout
        data-isOpen={isOpen}
        initial='initial'
        className="parent"
        onClick={handleImageClick}
      >
        <motion.div layout className="child" animate={controls}  variants={fadeInAnimation}   whileHover={hoverAnimation}>
          <motion.img
            src={profile}
            alt="Profile"
            className='profile-home' 
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </motion.div>
      <div className='  flex absolute bottom-20 left-20 flex-col'>''
        <p className='text-4xl text-white'>Ayomide</p>
        <p className='text-4xl text-white'>Isaac</p>
      </div>
    </div>
  );
};

export default MainHome;
