import React, { useState, useEffect, useRef } from "react";
import { motion,  useScroll, useTransform } from "framer-motion";
import profile from '../../Images/ay 1.png';
import profile2 from '../../Images/ay 4.png'
import profile3 from '../../Images/ay 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './profile.css';

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Start with the top section
 

  const items = [
    {
      content: (
        <div className="flex w-full justify-center items-center p-10">
          <div className="w-[80%] flex items-center">
            <div className='w-[50%] about-one'>
            <img className='profile2-image w-full h-full rounded-[10px]' src={profile2} alt="" /></div>
           <div className='h-[70%]  w-[50%]  about-two p-0 md:pl-16 lg:px-20'> 
            <p className='font-bold text-3xl'>is a Lagos based freelanced web developer</p>
            <p className='mt-10 text-sm lg:text-[15px]'>—Ayomide Isaac is a skilled full-stack web developer with a passion for building dynamic, user-friendly applications. With experience in both front-end and back-end development, he has a knack for turning complex ideas into seamless digital experiences. Ayomide's expertise spans modern JavaScript frameworks, responsive design, and efficient API integrations, allowing him to deliver robust and scalable solutions across various platforms.</p>
            <p className='mt-10 text-sm lg:text-[15px]'>His work reflects a commitment to clean code, innovative problem-solving, and a constant drive for improvement, making him a valuable asset in any tech-driven project.</p>
           </div></div>
          
        </div>
      ),
      bgColor: "bg-blue-500",
    },
    {
      title: "Personal Details",
      description: "Some fun facts about me.",
      content: (
        <div className="">
          <motion.div
        className="top-container p-8 md:p-14 lg:p-28 w-full"
        
      >
       <div className='w-full md:w-3/4  h-full flex text-left font-bold text-2xl lg:text-3xl'>
       "His journey as a full-stack developer is filled with challenges that inspire growth. Each setback is a lesson, fueling his passion for problem-solving and the endless possibilities in technology."
       </div>
       <div className='lg:w-1/2 w-full md:w-[30%] text-[20px] h-full flex text-left pl-0 mt-5 md:mt-0 md:pl-10 lg:pl-20'>
       "Ayomide Isaac graduated with a B.Tech in Physics Telecommunications from the Federal University of Technology, Minna, and have been passionate about software development for over 4 years."
       </div>
      </motion.div>
        
        </div>
      ),
      bgColor: "bg-green-500",
    },
    {
     
      content: (
        <div className="flex p-10 bg-stone-900 text-white h-full items-center justify-center w-full ">
            <div className="w-full h-full flex">
            <div className='w-[50%] about-one'>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <img src={profile3} alt=""  style={{width:'70%'}}/>
                <p className='text-[14px] mt-5'>Ayomide Isaac (August 2024)</p>
            </div>              
            </div>
            <div className="w-[50%] about-two p-0 md:pl-16 lg:px-20 flex flex-col justify-center items-center ">
              <div className="font-light w-full h-36  text-[200px] flex justify-center items-center work-p ">Work</div>
              <div className='hhh text-lg my-10'>Ayomide Isaac as worked across different tech companies,realEstate companies, finTech companies, digitalmarketing companies and now a freelancer.</div>
              <div className='flex w-full items-center'><div className='work-direction'><FontAwesomeIcon icon={faArrowDown}/></div> <div className='ml-5 w-60  text-[18px] leading-5'>Here are some featured projects, keep scrolling to seee</div></div>

            </div>
            </div>
        </div>
      ),
      bgColor: "bg-red-500",
    },
    {
      title: "Projects & Skills",
      description: "Things I've built and technologies I use.",
      content: (
        <div className="flex flex-col items-center">
          <p className="mt-4 text-lg">⚡ React | Next.js | Tailwind CSS | Framer Motion</p>
        </div>
      ),
      bgColor: "bg-purple-500",
    },
    {
      title: "Thank You!",
      description: "That's all about me. Thanks for scrolling!",
      content: <p className="text-xl">🚀 Hope to connect with you soon!</p>,
      bgColor: "bg-yellow-500",
    },
  ];

  const totalItems = items.length;
  const isScrolling = useRef(false); // Prevent multiple triggers
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return; // Prevent rapid scroll

      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // Add a delay for smooth transition

      if (event.deltaY > 0 && activeIndex < totalItems - 1) {
        // Scroll Down (Stop at "Thank You!")
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && activeIndex > -1) {
        // Scroll Up
        setActiveIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  return (
    
    <div className="profile relative h-screen w-full overflow-hidden">
      {/* Initial Top Section */}
      <motion.div
        className="  flex items-center flex-col w-full h-[150vh] text-black text-4xl font-bold bg-slate-100"
        initial={{ y: "0%" }}
        animate={{ y: activeIndex === -1 ? "0%" : "-100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
         <div className="w-full container1 flex justify-between h-20  px-5 md:px-14 items-center">
          <a href="/" className="text-sm sm:text-1xl uppercase">HOME</a>
          <a href="/Achieve" className=" text-sm sm:text-1xl uppercase">Achieve</a>
        </div>
        <div className="profile-image-container">
          <img className="w-full h-full rounded-[10px]" src={profile} alt="Profile" />
        </div>
        
      

      </motion.div>
     
      {/* Stacking Sections */}
      {items.map((text, index) => (
        <motion.div
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: index === activeIndex ? "0%" : "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center w-full h-full text-white text-3xl font-semibold"
          style={{
            zIndex: totalItems - index,
            color:"black"
          }}
        >
          {text.content}
        </motion.div>
      ))}
    </div>
  );
};

export default Profile;