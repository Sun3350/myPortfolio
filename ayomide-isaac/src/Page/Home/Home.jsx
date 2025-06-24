import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./home.css";
import main from "../../Images/main.png";
import web1 from "../../Images/work/dehelpmate (1).png";
import web2 from "../../Images/work/web3.png";
import Mobile2 from "../../Images/work/Admin.png";
import Mobile1 from "../../Images/work/comeriver (3).png";
import web3 from "../../Images/work/gloo2.png";
import wp1 from "../../Images/work/nestebook (1).png";
import wp2 from "../../Images/work/nestgeek (1).png";

const workData = {
  web: [
    {
      image: web1,
      title: "Modern Web UI",
      desc: "Built with React, TailwindCSS and Framer Motion.",
      tech: "React",
    },
    {
      image: web2,
      title: "Admin Dashboard",
      desc: "Interactive dashboard with live stats.",
      tech: "Next.js",
    },
    {
      image: web3,
      title: "Admin Dashboard",
      desc: "Interactive dashboard with live stats.",
      tech: "Next.js",
    },
    {
      image: web1,
      title: "Admin Dashboard",
      desc: "Interactive dashboard with live stats.",
      tech: "Next.js",
    },
  ],
  mobile: [
    {
      image: Mobile1,
      title: "Mobility/ Ride-hailing App",
      desc: "Cross-platform app with smooth UX.",
      tech: "React Native",
    },
    {
      image: Mobile2,
      title: "FinTech App",
      desc: "Budgeting app for Android/iOS.",
      tech: "Expo",
    },
  ],
  wordpress: [
    {
      image: wp2,
      title: "Real Estate Website",
      desc: "Elegant theme with custom animations.",
      tech: "WordPress",
    },
    {
      image: wp1,
      title: "E-commerce Store",
      desc: "Clean layout for small businesses.",
      tech: "Elementor",
    },
  ],
};
const Home = () => {
  // First page animations
  const leftTextControls = useAnimation();
  const rightTextControls = useAnimation();
  const imageControls = useAnimation();
  const [activeTab, setActiveTab] = useState("web");

  const tabs = ["web", "mobile", "wordpress"];
  // Second page elements
  const aboutContainerRef = useRef(null);
  const isAboutInView = useInView(aboutContainerRef, { amount: 0.3 });
  const aboutBgControls = useAnimation();
  const aboutImageControls = useAnimation();
  const aboutTextControls = useAnimation();

  useEffect(() => {
    // First page animations (unchanged)
    const startFirstPageAnimations = async () => {
      await Promise.all([
        leftTextControls.start({
          x: "-50%",
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 30,
            damping: 10,
            mass: 1,
            delay: 0.3,
          },
        }),
        rightTextControls.start({
          x: "80%",
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 30,
            damping: 10,
            mass: 1,
            delay: 0.3,
          },
        }),
        imageControls.start({
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: "easeOut",
          },
        }),
      ]);
    };
    startFirstPageAnimations();

    // Scroll animation handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const firstPageProgress = Math.min(scrollY / (windowHeight * 0.8), 1);
      const aboutPageOffset =
        aboutContainerRef.current?.offsetTop || windowHeight;
      const aboutPageProgress = Math.min(
        Math.max(
          0,
          (scrollY - aboutPageOffset + windowHeight * 0.5) /
            (windowHeight * 0.8)
        ),
        1
      );

      // First page animations
      leftTextControls.start({
        x: `calc(-50% - ${firstPageProgress * 100}%)`,
        opacity: 1 - firstPageProgress,
        transition: { duration: 0 },
      });

      rightTextControls.start({
        x: `calc(80% + ${firstPageProgress * 100}%)`,
        opacity: 1 - firstPageProgress,
        transition: { duration: 0 },
      });

      imageControls.start({
        y: firstPageProgress * 80,
        opacity: 1 - firstPageProgress * 0.8,
        scale: 1 - firstPageProgress * 0.2,
        transition: { duration: 0 },
      });

      // About page animations
      if (isAboutInView) {
        // Background text becomes more visible as we scroll down
        aboutBgControls.start({
          opacity: 0.1 + aboutPageProgress * 0.9,
          transition: { duration: 0 },
        });

        // Image and text appear gradually based on scroll position
        aboutImageControls.start({
          x: -50 + aboutPageProgress * 50,
          opacity: aboutPageProgress,
          transition: { duration: 0 },
        });

        aboutTextControls.start({
          x: 50 - aboutPageProgress * 50,
          opacity: aboutPageProgress,
          transition: { duration: 0 },
        });
      } else {
        // Reset positions when not in view
        aboutImageControls.start({ x: -100, opacity: 0 });
        aboutTextControls.start({ x: 100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    isAboutInView,
    leftTextControls,
    rightTextControls,
    imageControls,
    aboutBgControls,
    aboutImageControls,
    aboutTextControls,
  ]);

  return (
    <div>
      <div className="home-container w-full h-screen flex flex-col justify-center items-center relative overflow-hidden  px-4">
        {/* Top Word */}
        <motion.h1
          className="relative z-10 text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-bold text-white mb-2 md:mb-4"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={leftTextControls}
          style={{ transform: "translateX(-20%)" }}>
          AYOMIDE
        </motion.h1>

        {/* Bottom Word */}
        <motion.h1
          className="relative z-10 text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-bold text-white mt-2 md:mt-4"
          initial={{ x: "100vw", opacity: 0 }}
          animate={rightTextControls}
          style={{ transform: "translateX(20%)" }}>
          ISAAC
        </motion.h1>

        {/* Center Image - Smaller on mobile */}
        <motion.img
          src={main}
          alt="Developer"
          className="absolute w-48 sm:w-64 md:w-80 lg:w-96 h-auto z-20"
          initial={{ y: 30, opacity: 0 }}
          animate={imageControls}
        />

        {/* Top Right Sentences - Smaller on mobile */}
        <motion.div
          className="absolute top-14 sm:top-10 right-4 sm:right-10 text-right space-y-1 sm:space-y-2 text-xs sm:text-sm text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}>
          <p>Welcome to my creative zone.</p>
          <p>I turn coffee into code.</p>
          <p>Let's build something amazing.</p>
        </motion.div>

        {/* Bottom Left Sentences - Smaller on mobile */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}>
          <p>DotNet. React. Node. Next.js.</p>
          <p>Mobile/Desktop App Dev.</p>
          <p>Wordpress Web Dev.</p>
        </motion.div>
      </div>
      <section className="w-full  text-white py-24 px-6 md:px-24 relative overflow-hidden">
        {/* Sticky ABOUT label */}
        <div className="sticky top-10 left-0 z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-500"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            ABOUT
          </motion.h1>
        </div>

        {/* Content */}
        <motion.div
          className="mt-16 space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
            Ayomide Isaac – A Multi-Faceted Developer
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            —Ayomide Isaac is a skilled Front-End, Mobile-App and WordPress
            developer with a passion for building dynamic, user-friendly
            applications. With experience in front-end, mobile-App and WordPress
            web-development, he has a knack for turning complex ideas into
            seamless digital experiences. Ayomide's expertise spans modern
            JavaScript frameworks, responsive design, and efficient API
            integrations, allowing him to deliver robust and scalable solutions
            across various platforms.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            His work reflects a commitment to clean code, innovative
            problem-solving, and a constant drive for improvement, making him a
            valuable asset in any tech-driven project.
          </p>

          <blockquote className="text-gray-400 italic border-l-4 border-blue-600 pl-4">
            "His journey is filled with challenges that inspire growth. Each
            setback fuels his passion for problem-solving and the endless
            possibilities in technology."
          </blockquote>

          <p className="text-sm text-gray-500 pt-4 border-t border-gray-700">
            🎓 B.Tech in Physics Telecommunications from FUTMinna • 4+ Years of
            Experience in Web & App Development
          </p>
        </motion.div>
      </section>
      <section className="w-full min-h-screen  py-24 px-6 md:px-24 text-white relative overflow-hidden">
        {/* Sticky Work Label */}
        <div className="sticky top-10 left-0 z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            WORK
          </motion.h1>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mt-12 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-black text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}>
              {tab === "web"
                ? "Web Apps"
                : tab === "mobile"
                ? "Mobile Apps"
                : "WordPress Sites"}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeTab}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          {workData[activeTab].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black p-4 rounded-xl shadow-xl hover:scale-105 hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              <span className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full">
                {item.tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
