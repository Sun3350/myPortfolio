import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, Routes } from 'react-router-dom';
import Loader from './Page/Loader'; // Import the Loader component
import Home from './Container/Home/Home'; // Example of your home component
import About from './Container/Profile/Profile'; // Example of another component
import { motion } from 'framer-motion';
import CursorFollower from './Page/CursorFollower';
import MainHome from './Container/Mainhome/MainHome';

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true on route change
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after a delay
      setContentVisible(true); // Make content visible after loading
    }, 4000); // Match the loader's duration

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, [location]); // Run effect on location change

  // Fade-in animation for main content
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      {loading && <Loader />}
      <CursorFollower />
      {/* Show loader during loading state */}
      <motion.div
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
        style={{ display: contentVisible ? 'block' : 'none' }} // Ensure content is hidden until ready
      >
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </motion.div>
    </>
  );
};

const App = () => {
  return (
      <AppContent />
  );
};

export default App;
