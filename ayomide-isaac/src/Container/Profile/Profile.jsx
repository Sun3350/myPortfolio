import React, {useEffect, useState, useRef} from 'react';
import './profile.css';
import profile from '../../Images/WhatsApp Image 2024-09-17 at 15.39.40_425163dd.jpg';
import profile2 from '../../Images/profile2.jpg'
import { useScroll, motion, useTransform } from 'framer-motion';

const Profile = () => {
  // Capture the scroll position
  const { scrollYProgress } = useScroll();

  // Transform the scroll position into an animation value
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);


 
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
  const carouselContent = [
    { id: 1, title: 'Item 1', description: 'Description for item 1', color: '#FF6347' },
    { id: 2, title: 'Item 2', description: 'Description for item 2', color: '#4682B4' },
    { id: 3, title: 'Item 3', description: 'Description for item 3', color: '#32CD32' },
    { id: 4, title: 'Item 4', description: 'Description for item 4', color: '#FFD700' },
    { id: 5, title: 'Item 5', description: 'Description for item 5', color: '#8A2BE2' },
    // Add more items if needed
  ];
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
        <div className="w-full container1 flex justify-between h-16 px-14 items-center">
          <a href="/" className="uppercase">PROFILE</a>
          <a href="/Achieve" className="uppercase">Achieve</a>
        </div>
        
        {/* Profile Image */}
        <div className="profile-image-container">
          <img className="w-full h-full" src={profile} alt="Profile" />
        </div>
        
        {/* Parallax Text */}
        <div className="parallax">
          <motion.div className="scroller" style={{ x }}>
            <span>OLUSANYA AYOMIDE ISAAC</span>
            <span>OLUSANYA AYOMIDE ISAAC</span>
            <span>OLUSANYA AYOMIDE ISAAC</span>
          </motion.div>
        </div>
        <div className='flex h '>
           <div className='w-1/2 h-full'><img className='profile2-image w-full h-full' src={profile2} alt="" /></div>
           <div className='w-1/2 h-full px-24'> 
            <p className='font-bold text-3xl'>is an Abuja based freelanced web developer</p>
            <p className='mt-10'>—in love with music and stories. On her youtube channel; she makes interviews, vlogs, and other experimental videos. She has previously worked at some of the best content studios in West Africa.</p>
            <p className='mt-10'>Eniola Korty, you may know her online as Korty Eo, leaves no room for error when it comes to creating. Korty has an impressive resume, as she credits being a graphic designer, model, artist, filmmaker, and now YouTuber. Her honest and frank storytelling, combined with her engaging and beautiful B-roll shots of her hometown, make for an engaging and captivating channel.</p>
           </div>
        </div>
        <motion.div
        className="top-container"
        initial={{ opacity: 1 }}
        animate={scrollAtStart ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Top Container</h1>
        <p>Scroll down to enter the carousel, and horizontal scrolling will take over.</p>
      </motion.div>
      <motion.div
        className="top-container"
        initial={{ opacity: 1 }}
        animate={scrollAtStart ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Top Container</h1>
        <p>Scroll down to enter the carousel, and horizontal scrolling will take over.</p>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        className="carousel-container"
        ref={carouselRef}
        style={{
          overflowY: scrollAtEnd ? 'auto' : 'hidden', // Allow vertical scroll after horizontal ends
        }}
        initial="hidden"
        animate={inCenter ? "visible" : "hidden"} // Trigger staggered animation when carousel is centered
        variants={containerVariants}
      >
        {carouselContent.map((item) => (
          <motion.div
            className="carousel-item"
            key={item.id}
            variants={itemVariants}
            style={{ backgroundColor: item.color }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Profile;