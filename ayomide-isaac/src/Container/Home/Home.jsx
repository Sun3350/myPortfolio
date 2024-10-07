import React, {useState} from 'react'
import { motion } from "framer-motion";
import video1 from '../../Images/1.mp4'
import video2 from '../../Images/2.mp4'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  
  const text = "• VIEW AYOMIDE ISAAC's PROFILE •";

  const firstTextVariant = {
    initial: {
      y: 0, // Default state, visible
    },
    hover: {
      y: -80, // Move out of view upwards on hover
      transition: {
        duration: 0.3, // Timing for the animation
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 0, // Go back to original position when not hovered
      transition: {
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  
  const secondTextVariant = {
    initial: {
      y: 80, // Start out of view, below
    },
    hover: {
      y: 0, // Slide into view on hover
      transition: {
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 80, // Go back to original position when mouse leaves
      transition: {
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  
  const [videoVisible, setVideoVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoSrc, setVideoSrc] = useState("");
  

  const handleMouseMove = (e) => {
    // Use the actual mouse position relative to the viewport
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (video) => {
    setVideoSrc(video); // Set the specific video source on hover
    setVideoVisible(true); // Show video
  };

  const handleMouseLeave = () => {
    setVideoVisible(false); // Hide video on mouse leave
  };

  return (
    <div className='home-container w-full  flex  justify-center items-center relative'>
      <div className='w-full h-full px-14 absolute top-0 left-0 right-0 bottom-0 z-20'>
      <div className='w-full container1 flex justify-between items-center'>
           <a href="/Profile" className='uppercase'>PROFILE</a>
           <a href="" className='uppercase'>Achieve</a>
      </div>
      <div className='w-full flex items-center container2'>
         <div className='profile-container flex items-center h-full justify-center ' >
          <div className='profile-image'></div>
          {videoVisible && (
        <motion.video
          src={videoSrc} // Dynamic video source
          autoPlay
          muted
          loop
          className="fixed w-96 h-96 rounded-lg shadow-lg"
          style={{
            top: `${mousePosition.y}px`, // Position relative to viewport
            left: `${mousePosition.x}px`, // Position relative to viewport
            transform: 'translate(-50%, -50%)', // Center the video on the cursor
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0,
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: mousePosition ? 1 : 1.5,
           }}
          transition={{ duration: 0.2 }} // Smooth transition on show/hide
        />
      )}
          <div className='w-1/2 h-60 flex flex-col py-8  ml-10'>
          <div className='flex w-full flex-col mb-8'>
            <h1 className='text-2xl font-semibold'>Ayomide Isaac</h1>
            <h2 className='mt-2 uppercase'>FrontEnd & Wordpress Developer</h2>
          </div>
          <p >Base in Abuja Nigeria</p>
         </div>
         </div>
           <div className='w-3/5'>
             <h4 >01</h4>
                   <motion.div
                     onMouseMove={handleMouseMove}
                     onMouseEnter={() => handleMouseEnter(video2)} // First video
                     onMouseLeave={handleMouseLeave}
                     
                       initial="initial"
                       whileHover="hover"
                       animate="animate"
                       className="relative overflow-hidden mt-8" // Keep the overflow hidden for smooth animation
                     >
                       {/* First text (default) */}
                       <motion.h5
                         variants={firstTextVariant}
                         className="text-[#000000] text-[70px]  ml-5 uppercase"
                       >
                         Frontend - dev
                       </motion.h5>
                 
                       {/* Second text (hidden by default) */}
                       <motion.h5
                         variants={secondTextVariant}
                         aria-hidden="true"
                         className="absolute top-3 left-0 text-[#000000] text-[70px]  ml-5 uppercase"
                       >
                         Frontend - dev
                       </motion.h5>
                     </motion.div>
           </div> 
          
      </div>
      <div className='w-full flex justify-between items-center container3 '>
        <div className='second-text  mr-5'>
        <div className='flex w-full justify-between items-center ' >
       
        <div className='second-text-two flex'>
        <div   onMouseMove={handleMouseMove}
                     onMouseEnter={() => handleMouseEnter(video1)} // First video
                     onMouseLeave={handleMouseLeave}><h4>02</h4></div>
        <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => handleMouseEnter(video1)} // Second video
        onMouseLeave={handleMouseLeave}

                       initial="initial"
                       whileHover="hover"
                       animate="animate"
                       className="relative overflow-hidden " // Keep the overflow hidden for smooth animation
                     >
                       {/* First text (default) */}
                       <motion.h5
                         variants={firstTextVariant}
                         className="h5 text-[#000000] text-[65px]  ml-5 uppercase"
                       >
                         wordpress
                       </motion.h5>
                 
                       {/* Second text (hidden by default) */}
                       <motion.h5
                         variants={secondTextVariant}
                         aria-hidden="true"
                         className="h5 absolute top-3 left-0 text-[#000000] text-[65px]  ml-5 uppercase"
                       >
                         wordpress
                       </motion.h5>
                     </motion.div>
                    
        </div>
        <div className='w-60 flex justify-center '>
          <p>vthese mostly go on instagram to her 23k plus audience. 🔥 edits, we highly recommend</p></div>
      </div>
        <div className='flex w-full h-32 justify-between items-center mt-4 ' >
        <div className='w-3/12  '>
          <p>these mostly go on instagram to her 23k plus audience.</p></div>
       
        <div className='second-text-two flex h-4/5'>
        <div   onMouseMove={handleMouseMove}
                     onMouseEnter={() => handleMouseEnter("video1.mp4")} // First video
                     onMouseLeave={handleMouseLeave}><h4>03</h4></div>
        <motion.div
         onMouseMove={handleMouseMove}
         onMouseEnter={() => handleMouseEnter("video3.mp4")} // Third video
        onMouseLeave={handleMouseLeave}

                       initial="initial"
                       whileHover="hover"
                       animate="animate"
                       className="relative overflow-hidden " // Keep the overflow hidden for smooth animation
                     >
                       {/* First text (default) */}
                       <motion.h5
                         variants={firstTextVariant}
                         className="text-[#000000] text-[70px]  ml-5 uppercase"
                       >
                        backend
                       </motion.h5>
                 
                       {/* Second text (hidden by default) */}
                       <motion.h5
                         variants={secondTextVariant}
                         aria-hidden="true"
                         className="absolute top-0 left-0 text-[#000000] text-[70px]  ml-5 uppercase"
                       >
                        backend
                       </motion.h5>
                     </motion.div>
                    
        </div>
      </div>
   
        </div>
       <div className='circle- '>
       <div className="circle-container">
      <div className="circle">
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${i * (360 / text.length)}deg)` }}
            className="circle-text"
          >
            {char}
          </span>
        ))}
      </div>
      {/* Icon in the middle */}
      <div className="icon-center "  >
      <FontAwesomeIcon 
        className='cursor-pointer'
        icon={faArrowRight} 
      />{/* You can replace this with any icon or image */}
      </div>
    </div>
       </div>
      </div>
     
      </div>
      <div className="image-container"></div>
    </div>
  )
}

export default Home
