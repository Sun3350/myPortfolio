import React, { useState, useEffect, useRef } from "react";
import { motion,  useScroll, useTransform } from "framer-motion";
import profile from '../../Images/ay 1.png';
import profile2 from '../../Images/ay 5.png'
import profile3 from '../../Images/ay 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './profile.css';
import { useNavigate} from 'react-router-dom'

import gloo1 from '../../Images/gloo/gloo1.png';
import gloo2 from '../../Images/gloo/gloo2.png';
import gloo3 from '../../Images/gloo/gloo3.png';
import gloo4 from '../../Images/gloo/gloo4.png';
import gloo5 from '../../Images/gloo/gloo5.png';
import gloo6 from '../../Images/gloo/gloo6.png';
import comeriver1 from '../../Images/comeriver/comeriver (1).png';
import comeriver2 from '../../Images/comeriver/comeriver (2).png';
import comeriver3 from '../../Images/comeriver/comeriver (3).png';
import comeriver4 from '../../Images/comeriver/comeriver (4).png';
import comeriver5 from '../../Images/comeriver/comeriver (5).png';
import comeriver6 from '../../Images/comeriver/comeriver (6).png';
import dehelpmate1 from '../../Images/dehelpmate/dehelpmate (1).png';
import dehelpmate2 from '../../Images/dehelpmate/dehelpmate (2).png';
import dehelpmate3 from '../../Images/dehelpmate/dehelpmate (3).png';
import dehelpmate4 from '../../Images/dehelpmate/dehelpmate (4).png';
import dehelpmate5 from '../../Images/dehelpmate/dehelpmate (5).png';
import dehelpmate6 from '../../Images/dehelpmate/dehelpmate (6).png';
import nestebook1 from '../../Images/nestebook/nestebook (1).png';
import nestebook2 from '../../Images/nestebook/nestebook (2).png';
import nestebook3 from '../../Images/nestebook/nestebook (3).png';
import nestebook4 from '../../Images/nestebook/nestebook (4).png';
import nestebook5 from '../../Images/nestebook/nestebook (5).png';
import nestebook6 from '../../Images/nestebook/nestebook (6).png';
import nestgeek1 from '../../Images/nestgeek/nestgeek (1).png';
import nestgeek2 from '../../Images/nestgeek/nestgeek (2).png';
import nestgeek3 from '../../Images/nestgeek/nestgeek (3).png';
import nestgeek4 from '../../Images/nestgeek/nestgeek (4).png';
import nestgeek5 from '../../Images/nestgeek/nestgeek (5).png';
import nestgeek6 from '../../Images/nestgeek/nestgeek (6).png';
import EmblaCarousel from "../carousel/EmblaCarousel";

const Profile = () => {
  const OPTIONS = { loop: true }
  const text = "• VIEW AYOMIDE ISAAC's PROFILE •";
  const navigate =  useNavigate()


  const items = [
    {
      content: (
        <div className="flex w-full p-5 md:p-10 justify-center items-center">
          <div className=" top-container top-conainer2 flex items-center ">
            <div className='profile2-image about-one'>
            <img className=' w-full h-full rounded-[10px]' src={profile2} alt="" />
            </div>
           <div className='h-[70%]   about-two p-0 md:pl-16 lg:px-20'> 
            <p className='font-bold text-3xl'>He's a multi-faceted Lagos-based developer</p>
            <p className='mt-10 text-sm lg:text-[15px]'>—Ayomide Isaac is a skilled Front-End, Mobile-App and WordPress developer with a passion for building dynamic, user-friendly applications. With experience in front-end, mobile-App and WordPress web-development, he has a knack for turning complex ideas into seamless digital experiences. Ayomide's expertise spans modern JavaScript frameworks, responsive design, and efficient API integrations, allowing him to deliver robust and scalable solutions across various platforms.</p>
            <p className='mt-10 text-sm lg:text-[15px]'>His work reflects a commitment to clean code, innovative problem-solving, and a constant drive for improvement, making him a valuable asset in any tech-driven project.</p>
           </div>
           </div>
          
        </div>
      ),
      bgColor: "bg-blue-500",
    },
    {
     
      content: (
        <div className=" w-full h-full  flex items-center justify-center">
          <motion.div
        className="top-container p-5 md:p-14 lg:p-28 w-full"
        
      >
        <div className='w-full md:w-3/4  h-full  text-left font-bold text-2xl lg:text-3xl'>
          <img src={profile} alt=""  className="mb-10 md:w-[20%] w-30%" />
           <div className="">
       "His journey as a Front-End. Mobile-App and WordPress web-developer is filled with challenges that inspire growth. Each setback is a lesson, fueling his passion for problem-solving and the endless possibilities in technology."
       </div>
        </div>
      
       <div className='lg:w-1/2 w-full  md:w-[30%] text-[16px] h-full flex items-center text-left pl-0 mt-5 md:mt-0 md:pl-10 lg:pl-20 md:text-[20px] leading-6 '>
       "Ayomide Isaac graduated with a B.Tech in Physics Telecommunications from the Federal University of Technology, Minna, and have been passionate about software development for over 4 years."
       </div>
      </motion.div>
        
        </div>
      ),
      bgColor: "bg-green-500",
    },
    {
     
      content: (
        <div className="flex bg-stone-900 text-white h-full items-center justify-center w-full ">
              <div className="top-container">
              <div className=' about-one'>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <img src={profile3} alt=""  style={{width:'70%'}}/>
                <p className='text-[14px] mt-5'>Ayomide Isaac (August 2024)</p>
            </div>              
            </div>
            <div className=" about-two p-0 md:pl-16 lg:px-20 flex flex-col justify-center items-center ">
              <div className="font-light w-full h-36 md:text-[200px] text-[100px] flex justify-center items-center work-p ">Work</div>
              <div className='hhh text-[17px] md:text-lg my-3 md:my-10 px-5 md:p-0'>Ayomide Isaac as worked across different tech companies,realEstate companies, finTech companies, digitalmarketing companies and so on.</div>
              <div className='flex w-full md:mt-0 mt-3 md:p-0 px-5 items-center'><div className='work-direction'><FontAwesomeIcon icon={faArrowDown}/></div> <div className='ml-5 w-60  text-[14px] md:text-[18px] leading-5'>Here are some featured projects, keep scrolling to see</div></div>

            </div>
            </div>
        </div>
      ),
      bgColor: "bg-red-500",
    },
    {
     
      content: (
        <div className="w-full h-full flex items-center justify-center ">
          <div className="flex md:flex-col flex-col-reverse w-[93%] md:w[90%]   ">
             <div className="w-full ">
              <h2 className="text-4xl">Gloo</h2>
              <a className="text-lg" href="https://gloo.com">www.gloo.com</a> 
                   <p className="md:text-[18px] text-[13px] my-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic, dolor ab at nostrum vel!</p>
                   <h6 className="font-bold">Role: <span className="text-[16px] font-[400] ">Front-End Devoloper</span></h6>
                <div className="flex w-full justify-between mt-5 mobile">
                <div className="md:w-[75%] w-full md:h-[20vh] h-auto pb-5 md:pb-0  ">
                 
                  <div className=" w-full">
                    <p className="mt-0 text-[20px] font-bold">Description:</p> 
                    <span className="md:text-[14px] text-[14px]  leading-5 font-[400] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quidem animi pariatur sint assumenda eligendi, ab, similique, perspiciatis aliquam eius beatae! Cum inventore magnam a amet molestias sit ratione sed neque, praesentium quod eos quasi dolorem vel sequi dolorum eligendi labore expedita accusantium vero ipsam facere autem quibusdam perspiciatis blanditiis.</span>
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex justify-center h-full">
                   <button className="py-3 md:px-10 px-20 text-[15px] bg-black text-white rounded-[50px] "><a href="https://gloo.com">Visit</a></button>

                </div>
              </div>
             </div>
             <div>

             </div>
             <div className="md:mt-10 mt-2 mb-4 md:mb-0">
              <EmblaCarousel options={OPTIONS} slides={[gloo1, gloo2, gloo3, gloo4, gloo5, gloo6]} />
            </div>
          </div>
        </div>
      ),
    
      bgColor: "bg-purple-500",
    },
    
    {
     
      content: (
        <div className="w-full h-full flex items-center justify-center ">
          <div className="flex md:flex-col flex-col-reverse w-[93%] md:w[90%] ">
             <div className="w-full ">
              <h2 className="md:text-4xl text-3xl">DE-HELPMATE GLOBAL CONCEPT</h2>
              <a className="text-lg" href="https://dehelpmate.com.ng/">www.dehelpmate.com.ng</a> 
                   <p className="md:text-[18px] text-[13px] my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic, dolor ab at nostrum vel!</p>
                   <h6 className="font-bold">Role: <span className="text-[16px] font-[400] ">Front-End Devoloper</span></h6>
                <div className="flex w-full justify-between mt-5 mobile">
                <div className="md:w-[75%] w-full md:h-[20vh] h-auto pb-5 md:pb-0  ">
                 
                  <div className=" w-full">
                    <p className="mt-0 text-[20px] font-bold">Description:</p> 
                    <span className="md:text-[14px] text-[14px]  leading-5 font-[400] ">Collaborated with a team of frontend and backend developers to design and develop a responsive and feature-rich
fintech website.
Developed a WebView-based mobile application that extended the functionality of the fintech website to mobile users.
Customized website features for WebView, ensuring smooth navigation, consistent design, and responsive layouts
across devices.
</span>
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex justify-center h-full">
                   <button className="py-3 md:px-10 px-20 text-[15px] bg-blue-600 text-white rounded-[50px] "><a href="https://gloo.com">Visit</a></button>

                </div>
              </div>
             </div>
             <div>

             </div>
             <div className="md:mt-10 mt-2 mb-4 md:mb-0">
              <EmblaCarousel options={OPTIONS} slides={[dehelpmate1, dehelpmate2, dehelpmate3, dehelpmate4, dehelpmate5, dehelpmate6]} />
            </div>
          </div>
        </div>
      ),
    
      bgColor: "bg-purple-500",
    },
    {
     
      content: (
        <div className="w-full h-full flex items-center justify-center ">
          <div className="flex md:flex-col flex-col-reverse w-[93%] md:w[90%] ">
             <div className="w-full ">
              <h2 className="text-4xl">NestEbook</h2>
              <a className="text-lg" href="https://nestebook.com/">www.nestebook.com</a> 
                   <p className="md:text-[18px] text-[13px] my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic, dolor ab at nostrum vel!</p>
                   <h6 className="font-bold">Role: <span className="text-[16px] font-[400] ">WordPress Devoloper</span></h6>
                <div className="flex w-full justify-between mt-5 mobile">
                <div className="md:w-[75%] w-full md:h-[20vh] h-auto pb-5 md:pb-0  ">
                 
                  <div className=" w-full">
                    <p className="mt-0 text-[20px] font-bold">Description:</p> 
                    <span className="md:text-[14px] text-[14px]  leading-5 font-[400] ">Designed and developed two fully functional WordPress websites for the company, tailored to meet specific business
requirements and branding guidelines.
Customized WordPress themes and plugins to enhance website functionality, ensuring a unique and user-friendly
experience
Integrated third-party tools and APIs to enhance website capabilities, including payment gateways, email marketing
platforms, and analytics tools</span>
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex justify-center h-full">
                   <button className="py-3 md:px-10 px-20 text-[15px] bg-orange-600 text-white rounded-[50px] "><a href="https://gloo.com">Visit</a></button>

                </div>
              </div>
             </div>
             <div>

             </div>
             <div className="md:mt-10 mt-2 mb-4 md:mb-0">
              <EmblaCarousel options={OPTIONS} slides={[nestebook1, nestebook2, nestebook3, nestebook4, nestebook5, nestebook6]} />
            </div>
          </div>
        </div>
      ),
    
      bgColor: "bg-purple-500",
    },
    {
     
      content: (
        <div className="w-full h-full flex items-center justify-center ">
          <div className="flex md:flex-col flex-col-reverse w-[93%] md:w[90%] ">
             <div className="w-full ">
              <h2 className="md:text-4xl text-3xl">NestGeeks Realty and Investment LTD</h2>
              <a className="text-lg" href="https://nestgeeks.org">www.nestgeeks.org</a>
                   <p className="md:text-[18px] text-[13px] my-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic, dolor ab at nostrum vel!</p>
                   <h6 className="font-bold">Role: <span className="text-[16px] font-[400] ">WordPress Devoloper</span></h6>

                <div className="flex w-full justify-between mt-5 mobile">
                <div className="md:w-[75%] w-full md:h-[20vh] h-auto pb-5 md:pb-0  ">
                 
                  <div className=" w-full">
                    <p className="mt-0 text-[20px] font-bold">Description:</p> 
                    <span className="md:text-[14px] text-[14px]  leading-5 font-[400] ">Designed and developed two fully functional WordPress websites for the company, tailored to meet specific business
requirements and branding guidelines.
Customized WordPress themes and plugins to enhance website functionality, ensuring a unique and user-friendly
experience
</span>
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex justify-center h-full">
                   <button className="py-3 md:px-10 px-20 text-[15px] bg-lime-700 text-white rounded-[50px] "><a href="https://gloo.com">Visit</a></button>

                </div>
              </div>
             </div>
             <div>

             </div>
             <div className="md:mt-10 mt-2 mb-4 md:mb-0">
              <EmblaCarousel options={OPTIONS} slides={[nestgeek1, nestgeek2, nestgeek3, nestgeek4, nestgeek5, nestgeek6]} />
            </div>
          </div>
        </div>
      ),
    
      bgColor: "bg-purple-500",
    },
   
    {
      content: (
         <div className="w-full h-full flex justify-center items-end md:items-center">
             <div className=" w-full h-[90%] md:h-[70%] thank">
              <div className="w-[25%] h-[60%] md:flex hidden ">
              <div className='w-full h-full flex justify-center items-center flex-col'>
                <img src={profile3} alt=""  style={{width:'70%'}}/>
                <p className='text-[14px] mt-5'>Ayomide Isaac (August 2024)</p>
            </div> 
              </div>
             <div className="w-[95%] h-[50%] md:h-full flex  flex-col items-center">
                       <h6 className="text-[80px] md:text-[200px] sm:text-[100px] ">Thank you!</h6>
                       <div className="flex flex-wrap justify-center gap-2 p-4">
                        <button className="social-button">X</button>
                        <a href="www.linkedin.com/in/ayomide-isaac-profile">
                          <button className="social-button">LinkedIn</button>
                        </a>
                        <button className="social-button">Instagram</button>
                        <a href="mailto:isaacayomide2359@gmail.com">
                          <button className="social-button">Mail me</button>
                        </a>
                        <a href="/AyomideIsaacResume (1).pdf" download="AyomideIsaacResume CV.pdf">
                          <button className="social-button">Download CV</button>
                        </a>
                        </div>

             </div>
             <div className="md:w-[25%] w-[100%] h-[50%] md:h-[60%] ">
              
       <div className="circle-container ">
      <div className="circle">
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${i * (360 / text.length)}deg)` }}
            className="circle-text text-black"
          >
            {char}
          </span>
        ))}
      </div>
      {/* Icon in the middle */}
      <div className="icon-center "  onClick={() => navigate('/profile')}>
      <FontAwesomeIcon 
        className='cursor-pointer text-black'
        icon={faArrowRight} 
      />{/* You can replace this with any icon or image */}
      </div>
    </div>
       </div>
             </div>
         </div>
      
      ),
      bgColor: "bg-yellow-500",
    },
  ];

  const totalItems = items.length;
  // Start with top section visible (activeIndex = -1)
  const [activeIndex, setActiveIndex] = useState(-1);
  const isScrolling = useRef(false);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Sensitivity / threshold settings:
  const SCROLL_DELAY = 1000;       // Delay to prevent rapid transitions
  const MIN_SCROLL_DELTA = 50;       // Minimum mouse scroll delta to trigger
  const MIN_SWIPE_DISTANCE = 80;     // Minimum vertical swipe distance to trigger

  // Refs to track touch positions:
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return;
      if (Math.abs(event.deltaY) < MIN_SCROLL_DELTA) return;

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), SCROLL_DELAY);

      if (event.deltaY > 0 && activeIndex < totalItems - 1) {
        setActiveIndex(prev => prev + 1);
      } else if (event.deltaY < 0 && activeIndex > -1) {
        setActiveIndex(prev => prev - 1);
      }
    };

    // Only initiate stacking if the swipe does not start on a clickable element.
    const handleTouchStart = (e) => {
      // If the target is a button or link, do nothing:
      if (e.target.closest("button, a")) return;
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // Again, if over a clickable element, ignore:
      if (e.target.closest("button, a")) return;
      touchEndRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isScrolling.current) return;
      const swipeDistance = touchStartRef.current - touchEndRef.current;
      // Only trigger if the swipe distance is significant:
      if (Math.abs(swipeDistance) < MIN_SWIPE_DISTANCE) return;

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), SCROLL_DELAY);

      if (swipeDistance > 0 && activeIndex < totalItems - 1) {
        // Swipe up → scroll down:
        setActiveIndex(prev => prev + 1);
      } else if (swipeDistance < 0 && activeIndex > -1) {
        // Swipe down → scroll up:
        setActiveIndex(prev => prev - 1);
      }
    };

    // Attach event listeners:
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, totalItems]);
  return (
    
    <div className="profile relative h-[100vh] w-full overflow-hidden">
      {/* Initial Top Section */}
      <motion.div
        className="  flex items-center flex-col w-full h-full text-black text-4xl font-bold bg-slate-100"
        initial={{ y: "0%" }}
        animate={{ y: activeIndex === -1 ? "0%" : "-100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
         <div className="w-full flex justify-between h-20  px-5 md:px-14 items-center">
          <a href="/home" className="text-sm sm:text-1xl uppercase">HOME</a>
          <a href="/Achieve" className=" text-sm sm:text-1xl uppercase">Achieve</a>
        </div>
        <div className="profile-image-container">
          <img className="w-full h-full rounded-[10px] object-cover" src={profile} alt="Profile" />
        </div>
        
      

      </motion.div>
     
      {/* Stacking Sections */}
      {items.map((text, index) => (
        <motion.div
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: index === activeIndex ? "0%" : "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0  w-full h-full   "
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

{/** 
     
      content: (
        <div className="w-full h-full flex items-center justify-center ">
          <div className="flex md:flex-col flex-col-reverse w-[93%] md:w[90%] ">
             <div className="w-full ">
             <h2 className="text-4xl">Comeriver LTD</h2>
             <a className="text-lg" href="https://gloo.com">www.comeriver.com</a> 
             <p className="md:text-[18px] text-[13px] my-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic, dolor ab at nostrum vel!</p>
             <h6 className="font-bold">Role: <span className="text-[16px] font-[400] ">Front-End Devoloper</span></h6>
                <div className="flex w-full justify-between mt-5 mobile">
                <div className="md:w-[75%] w-full md:h-[20vh] h-auto pb-5 md:pb-0  ">
                 
                  <div className=" w-full">
                    <p className="mt-0 text-[20px] font-bold">Description:</p> 
                    <span className="md:text-[14px] text-[14px]  leading-5 font-[400] ">Developed and maintained responsive web applications, implementing key frontend features using JavaScript
frameworks like React.
Collaborated with design and backend teams to ensure unified integration of APIs and improve user experience across
platforms.
Designed and implemented secure login and password reset features for a mobile application, ensuring user
authentication and data protection
.Integrated backend APIs for user authentication and password recovery, ensuring secure communication between the
app and the server.</span>
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex justify-center h-full">
                   <button className="py-3 md:px-10 px-20 text-[15px] bg-yellow-600 text-white rounded-[50px] "><a href="https://comeriver.com">Visit</a></button>

                </div>
              </div>
             </div>
             <div>

             </div>
             <div className="md:mt-10 mt-2 mb-4 md:mb-0">
              <EmblaCarousel options={OPTIONS} slides={[comeriver1, comeriver2, comeriver3, comeriver4, comeriver5, comeriver6]} />
            </div>
          </div>
        </div>
      ),
    
      bgColor: "bg-purple-500",
    */}