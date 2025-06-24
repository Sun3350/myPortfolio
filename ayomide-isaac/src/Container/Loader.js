import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust total loading duration here
    return () => clearTimeout(timer);
  }, []);

  // Variants for the sliding animation from the right
  const slideRightVariants = (delay) => ({
    hidden: { x: '100vw' }, // Start off-screen (to the right)
    visible: { x: 0, transition: { duration: 0.7, delay: delay, ease: 'easeInOut' } }, // Slide in from the right
    exit: { x: '100vw', transition: { duration: 0.8 } } // Slide out to the right when exiting
  });

  // Fade-in effect for the content
  
  // Variants for the text animation with slide and fade effects
  const textSlideVariants = {
    hidden: { y: '100%', opacity: 0 }, // Start from the bottom, invisible
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, delay: 0.5 } // Slower fade-in while sliding up
    },
    exit: {
      y: '-100%', // Slide out to the top
      opacity: 0,
      transition: { duration: 1 } // Slide out and fade out together
    }
  };

  return (
    <>
      {loading && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor:'transparent' }}>
          {/* Black slide */}
          <motion.div
            style={{ backgroundColor: 'black', height: '100vh', width: '100vw', position: 'absolute' }} // Full height of viewport
            initial="hidden"
            animate="visible"
            variants={slideRightVariants(0)} // No delay for the black slide
          />

          {/* Text on black slide */}
          <motion.div
            style={{ position: 'absolute', bottom: '45%', left: '45%', transform: 'translate(-50%, 50%)', color: 'white', fontSize: '100px', textAlign: 'center' }} // Centered and larger font
            initial="hidden"
            animate="visible"
            exit="exit" // Ensure exit is triggered
            variants={textSlideVariants}
            className='font-loader'
          >
            AI
          </motion.div>

          {/* White slide #1 */}
          <motion.div
            style={{ backgroundColor: 'white', height: '100vh', width: '100vw', position: 'absolute' }} // Full height of viewport
            initial="hidden"
            animate="visible"
            variants={slideRightVariants(2)} // White slide follows after black
          />
        </div>
      )}

      
    </>
  );
};

export default Loader;
