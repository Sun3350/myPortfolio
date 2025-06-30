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
      link: "https://dehelpmate.com/",
    },
    {
      image: web2,
      title: "Admin Dashboard",
      desc: "Interactive dashboard with live stats.",
      tech: "Next.js",
      link: "https://admin.busbuzzer.com/auth",
    },
    {
      image: web3,
      title: "Admin Dashboard",
      desc: "Interactive dashboard with live stats.",
      tech: "Next.js",
      link: "https://gloo.com/resources",
    },
  ],
  mobile: [
    {
      image: Mobile1,
      title: "Mobility/ Ride-hailing App",
      desc: "Cross-platform app with smooth UX.",
      tech: "React Native",
      link: "https://example.com/project1",
    },
    {
      image: Mobile2,
      title: "FinTech App",
      desc: "Budgeting app for Android/iOS.",
      tech: "Expo",
      link: "https://example.com/project1",
    },
  ],
  wordpress: [
    {
      image: wp2,
      title: "Real Estate Website",
      desc: "Elegant theme with custom animations.",
      tech: "WordPress",
      link: "https://nestGeeks.org",
    },
    {
      image: wp1,
      title: "E-commerce Store",
      desc: "Clean layout for small businesses.",
      tech: "Elementor",
      link: "https://nestebook.com/",
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
    const screenWidth = window.innerWidth;

    const xValue = screenWidth < 768 ? "-70%" : "-58%"; // mobile vs desktop
    const yValue = screenWidth < 768 ? "130%" : "90%"; // mobile vs desktop
    const startFirstPageAnimations = async () => {
      await Promise.all([
        leftTextControls.start({
          x: xValue,
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
          x: yValue,
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
        x: `calc(${xValue} - ${firstPageProgress * 100}%)`,
        opacity: 1 - firstPageProgress,
        transition: { duration: 0 },
      });

      rightTextControls.start({
        x: `calc(${yValue} + ${firstPageProgress * 100}%)`,
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
          className="absolute top-24 sm:top-12 right-4 sm:right-10 text-right space-y-1 sm:space-y-2 text-xs sm:text-sm text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}>
          <p>Welcome to my creative zone.</p>
          <p>I turn coffee into code.</p>
          <p>Let's build something amazing.</p>
        </motion.div>

        {/* Bottom Left Sentences - Smaller on mobile */}
        <motion.div
          className="absolute bottom-14 sm:bottom-10 left-4 sm:left-10 text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-white"
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
        <div className=" left-0 z-20">
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
        <div className=" left-0 z-20">
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
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 rounded-xl shadow-xl hover:scale-105 hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer flex flex-col"
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
              <span className="text-xs px-3 py-1 w-fit bg-blue-600 text-white rounded-full">
                {item.tech}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>
      <section className="w-full py-24 px-6 md:px-24 text-white relative overflow-hidden bg-[#0a0a0a]">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-10 "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          SKILLS
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          {[
            {
              name: "HTML",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "TailwindCSS",
              icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            },
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "TypeScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Next.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "React Native",
              icon: "https://reactnative.dev/img/header_logo.svg",
            },
            {
              name: "Expo",
              icon: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
            },
            {
              name: "WordPress",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
            },
            {
              name: "Elementor",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Elementor_Logo.svg/2048px-Elementor_Logo.svg.png",
            },
            {
              name: "Git & GitHub",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "MongoDB",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },

            {
              name: "C#",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            },
            {
              name: ".NET",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-3 object-contain"
              />
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="w-full py-24 px-6 md:px-24 text-white bg-black relative">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-10 "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          CONTACT
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="text-lg mb-6 text-gray-300">
            Want to build something amazing together? Reach out to me.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
      <footer className="w-full bg-[#0a0a0a] text-white py-10 px-6 md:px-24 text-center">
        <p className="text-sm text-gray-400 mb-2">
          © {new Date().getFullYear()} Ayomide Isaac. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 text-blue-500 text-xl mt-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:ayomide@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
