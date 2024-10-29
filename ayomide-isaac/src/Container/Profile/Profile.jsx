import React, {useEffect, useState, useRef} from 'react';
import './profile.css';
import profile from '../../Images/ay 1.png';
import profile2 from '../../Images/ay 4.png'
import profile3 from '../../Images/ay 2.png'
import { useScroll, motion, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import work1 from  '../../Images/LOGO.png'
import work2 from  '../../Images/pexel.jpg'
import loan from  '../../Images/loan.jpg'
import loan2 from  '../../Images/logo (1).png'
import console from  '../../Images/ay 5.png'

const Profile = () => {
  // Capture the scroll position
  const { scrollYProgress } = useScroll();
  const text = "• VIEW AYOMIDE ISAAC's CV •";

  // Transform the scroll position into an animation value
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const [scrollbarVisible, setScrollbarVisible] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      // Show the scrollbar when scrolling
      setScrollbarVisible(true);

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Hide the scrollbar after 1 second of no scrolling
      scrollTimeout = setTimeout(() => {
        setScrollbarVisible(false);
      }, 1000);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

 
  const carouselRef = useRef();
  const [isInCarousel, setIsInCarousel] = useState(false); // Track if in the carousel
  const [scrollAtEnd, setScrollAtEnd] = useState(false); // Track if horizontal scroll reaches the end
  const [scrollAtStart, setScrollAtStart] = useState(true); // Track if we are at the start of horizontal scrolling
  const [inCenter, setInCenter] = useState(false); // Track if carousel is in the center of the screen

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = (e) => {
      // If not in the carousel or it's not centered, do nothing
      if (!isInCarousel || !inCenter) return;

      e.preventDefault(); // Prevent default vertical scroll

      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      const scrollDirection = e.deltaY; // Positive for scrolling down, negative for scrolling up

      // Horizontal Scrolling Logic
      if (scrollDirection > 0 && !scrollAtEnd) {
        // Scrolling downward (forward through items)
        carousel.scrollLeft += scrollDirection * 0.5;

        // Check if we have reached the end of the horizontal scroll
        if (carousel.scrollLeft >= maxScrollLeft - 1) {
          setScrollAtEnd(true); // Horizontal scroll ended, allow vertical scrolling to resume
        }
        setScrollAtStart(false); // No longer at the start of horizontal scroll
      } else if (scrollDirection < 0 && !scrollAtStart) {
        // Scrolling upward (backward through items)
        carousel.scrollLeft += scrollDirection * 0.5;

        // Check if we have reached the start of the horizontal scroll
        if (carousel.scrollLeft <= 1) {
          setScrollAtStart(true); // Reached the start, resume vertical scroll upwards
          setIsInCarousel(false); // Allow vertical scroll upwards out of carousel
        }
        setScrollAtEnd(false); // No longer at the end of horizontal scroll
      }
    };

    // Intersection observer to detect when the carousel reaches the center of the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInCenter(entry.intersectionRatio > 0.8); // Carousel is in center if > 50% is visible
      },
      { threshold: 1 } // Trigger when the carousel is 50% in view
    );

    if (carousel) {
      observer.observe(carousel);
      carousel.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (carousel) {
        observer.unobserve(carousel);
        carousel.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isInCarousel, scrollAtEnd, scrollAtStart, inCenter]);

  // Reset scrollAtEnd when we are not in the carousel
  useEffect(() => {
    if (!isInCarousel) {
      setScrollAtEnd(false);
      setScrollAtStart(true); // Reset scrollAtStart when leaving the carousel
    }
  }, [isInCarousel]);

  // Observer to detect if we're in the carousel (not the center, but fully visible)
  useEffect(() => {
    const carousel = carouselRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInCarousel(entry.isIntersecting);
      },
      { threshold: 0.8 } // Trigger when at least 10% of the carousel is in view
    );

    if (carousel) {
      observer.observe(carousel);
    }

    return () => {
      if (carousel) {
        observer.unobserve(carousel);
      }
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1, // Delay between each item's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Items start faded out and down
    visible: { opacity: 1, y: 0 }, // Fade in and move up into view
  };
   
  return (
    <div className="main-profile w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full container1 flex justify-between h-20  px-5 md:px-14 items-center">
          <a href="/" className="text-sm sm:text-1xl uppercase">HOME</a>
          <a href="/Achieve" className=" text-sm sm:text-1xl uppercase">Achieve</a>
        </div>
        
        {/* Profile Image */}
        <div className="profile-image-container">
          <img className="w-full h-full" src={profile} alt="Profile" />
        </div>
        
        {/* Parallax Text */}
        <div className="parallax">
          <motion.div className="scroller" style={{ x }}>
            <span className='inline'>AYOMIDE <h6 className='italic inline '>Isaac</h6></span>
            <span className='inline'>AYOMIDE <h6 className='italic inline '>Isaac</h6></span>
            <span className='inline'>AYOMIDE <h6 className='italic inline '>Isaac</h6></span>
          </motion.div>
        </div>
        <div className='flex about px-8 md:px-14 h-auto'>
           <div className='h-full about-one'><img className='profile2-image w-full h-full' src={profile2} alt="" /></div>
           <div className='h-full about-two p-0 md:pl-16 lg:px-20'> 
            <p className='font-bold text-3xl'>is an Abuja based freelanced web developer</p>
            <p className='mt-10 text-sm lg:text-[15px]'>—Ayomide Isaac is a skilled full-stack web developer with a passion for building dynamic, user-friendly applications. With experience in both front-end and back-end development, he has a knack for turning complex ideas into seamless digital experiences. Ayomide's expertise spans modern JavaScript frameworks, responsive design, and efficient API integrations, allowing him to deliver robust and scalable solutions across various platforms.</p>
            <p className='mt-10 text-sm lg:text-[15px]'>His work reflects a commitment to clean code, innovative problem-solving, and a constant drive for improvement, making him a valuable asset in any tech-driven project.</p>
           </div>
        </div>
        <motion.div
        className="top-container p-8 md:p-14 lg:p-28 w-full"
        initial={{ opacity: 1 }}
        animate={scrollAtStart ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
       <div className='w-full md:w-3/4  h-full flex text-left font-bold text-2xl lg:text-3xl'>
       "His journey as a full-stack developer is filled with challenges that inspire growth. Each setback is a lesson, fueling his passion for problem-solving and the endless possibilities in technology."
       </div>
       <div className='lg:w-1/2 w-full md:w-[30%] h-full flex text-left pl-0 mt-5 md:mt-0 md:pl-10 lg:pl-20'>
       "Ayomide Isaac graduated with a B.Tech in Physics Telecommunications from the Federal University of Technology, Minna, and have been passionate about software development for over 4 years."
       </div>
      </motion.div>
        





     


      <motion.div
        className="mobile-item px-5 w-full"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
       <motion.div
            className=""
            variants={itemVariants}
          >
              <div className=' w-full h-full flex justify-center items-center flex-col'>
               <div className='text-right'>Ayomide Isaac as worked across different tech companies,realEstate companies, finTech companies, digitalmarketing companies and now a freelancer.</div>
                <h5 className=' tetx-1xl w-full text-right'>WORK</h5>
            </div>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <img src={profile3} alt=""  style={{width:'50%'}}/>
                <p className='text-black text-[14px] mt-5'>Ayomide Isaac (August 2024)</p>
            </div>
          
          </motion.div>
       <motion.div
            className="w-full text-right flex flex-col mt-5"
            variants={itemVariants}
          >
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>GLOO</a>
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>AAu Stories</a>
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>Techabari</a>
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>Nestgeeks</a>
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>DEHELPMATE</a>
              <a href='/' className='text-6xl overflow-x-hidden overflow-y-hidden my-2'>NESTEBOOKS</a>
              
          
          </motion.div>
      </motion.div>








      {/* Carousel Container */}
      <motion.div
        className="carousel-container "
        ref={carouselRef}
        style={{
          overflowY: scrollAtEnd ? 'auto' : 'hidden', // Allow vertical scroll after horizontal ends
        }}
        initial="hidden"
        animate={inCenter ? "visible" : "hidden"} // Trigger staggered animation when carousel is centered
        variants={containerVariants}
      >
       
          <motion.div
            className="carousel-item"
            variants={itemVariants}
          >
            <div className='work h-full flex justify-center items-center flex-col'>
                <img src={profile3} alt=""  style={{width:'70%'}}/>
                <p className='text-black text-[14px] mt-5'>Ayomide Isaac (August 2024)</p>
            </div>
            <div className=' work-second h-full flex justify-center items-center flex-col'>
               <h5 className=' work-p '>WORK</h5>
               <div className='hhh'>Ayomide Isaac as worked across different tech companies,realEstate companies, finTech companies, digitalmarketing companies and now a freelancer.</div>
               <div className='flex w-full justify-center items-center h-48'><div className='work-direction'><FontAwesomeIcon icon={faArrowRight}/></div> <div className='ml-5 w-60 whitespace-normal'>Here are some featured projects, keep scrolling to seee</div></div>
            </div>
          </motion.div>
        
          <motion.div
            className="carousel-item2"
          
            variants={itemVariants}
            
          >
            <div className='work flex pt-20 pr-10 items-end  flex-col'>
              <h2 className='text-4xl'>NESTGEEKS REALTY INVESTMENT LTD</h2>
              <img src={work1} alt=""  style={{width:'20%', marginTop:'5vh', marginBottom:'5vh'}}/>
                  <div className='work-direction cursor-pointer '>
                  <FontAwesomeIcon icon={faArrowRight} className='rotate-45'/>
                  </div>
            </div>
            <div className='work-second pt-20'>
              <img src={work2} alt="" style={{width:'50%'}}/>
              <div className='w-56 mt-10'>Developed a very dynamic and a user friendly website for a real Estate in Lagos Nigeria</div>
            </div>
          </motion.div>
        
          <motion.div
            className="carousel-item2"
            variants={itemVariants}
          >
             <div className='work flex pt-20 pr-10 items-end  flex-col'>
              <h2 className='text-4xl'>NESTGEEKS REALTY INVESTMENT LTD</h2>
              <img src={work1} alt=""  style={{width:'20%', marginTop:'5vh', marginBottom:'5vh'}}/>
                  <div className='work-direction cursor-pointer '>
                  <FontAwesomeIcon icon={faArrowRight} className='rotate-45'/>
                  </div>
            </div>
            <div className='work-second pt-20'>
              <img src={work2} alt="" style={{width:'50%'}}/>
              <div className='w-56 mt-10'>Developed a very dynamic and a user friendly website for a real Estate in Lagos Nigeria</div>
            </div>
          </motion.div>
        
          <motion.div
            className="carousel-item2"
           
            variants={itemVariants}
           
          >
             <div className='work flex pt-20 pr-10 items-end  flex-col'>
              <img src={loan} style={{width:'90%'}} alt="" />
              <div className='work-direction cursor-pointer mt-10 '>
                  <FontAwesomeIcon icon={faArrowRight} className='rotate-45'/>
                  </div>
            </div>
            <div className='work-second pt-20 relative'>
             <div className='loan'> DEHELPMATE</div>
             <div className='w-56 absolute bottom-72'>Developed a very dynamic and a user friendly website for a real Estate in Lagos Nigeria</div>
             <img src={loan2} className='loan2' style={{width:'20%'}} alt="" />
            </div>
          </motion.div>
        
          <motion.div
            className="carousel-item2  text-black"
           
            variants={itemVariants}
           
          >
            <div className='work- '>
              <div className='flex p-10 justify-between'>
              <div className='work-direction cursor-pointer '>
                  <FontAwesomeIcon icon={faArrowRight} className='rotate-45'/>
                  </div>
                  <div className='w-56 ml-8 '>Developed a very dynamic and a user friendly website for a real Estate in Lagos Nigeria</div>

              </div>
 
              <h2 className='text-[100px] leading-[17vh] px-28'>
  console.log("Crafting code step by step, 
  <img 
    src={console} 
    alt="" 
    style={{ width: '12%', display: 'inline', verticalAlign: 'middle', marginLeft:'10px' }} 
  />
  mastering one bug at a time");
</h2>              

            </div>
            
          </motion.div>
          <motion.div
            className="carousel-item2  text-black items-end"
            variants={itemVariants}
          >
            <div className='thank p-10 '>
            <span className='inline text-center font-thin'>Thank <h6 className='italic inline '>you!</h6></span>
            <div className='flex w-full justify-between  h-[60%]'>
              <div className='w-[19%]  h-full flex flex-col  items-center '>
                <img src={profile3} alt="" style={{width:'70%'}}/>
                <p className='mt-5'>Ayomide Isaac</p>
              </div>
              <div className='w-[39%] '>
                <p className='pr-40'>If you enjoyed going through this web experience, consider sharing it on social media so other people get to see it.</p>
                <div className='flex mt-8'>
                  <button className='social-button'>X</button>
                  <button className='social-button'>Instagram</button>
                  <button className='social-button'>LinkedIn</button>
                  <button className='social-button'>Tiktok</button>
                  <button className='social-button'>Github</button>
                </div>
              </div>
              <div className='w-[19%] '>
                <p>Have a look at the Credits and support all the awesome creators whose works were featured, If you still want to continue the experience, head over to the archive page.</p>
              </div>
              <div className='w-[19%]'>
       <div className="circle-container">
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
      <div className="icon-center "  >
      <FontAwesomeIcon 
        className='cursor-pointer text-black'
        icon={faArrowRight} 
      />{/* You can replace this with any icon or image */}
      </div>
    </div>
       </div>
      </div>
     
              
            </div>
            
          </motion.div>
        
      </motion.div>
      </div>

       <div>

       </div>
    </div>
  );
};

export default Profile;
