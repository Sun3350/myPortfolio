import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="p-4 text-white absolute top-0 left-0 w-full z-50 shadow-lg ">
      <div className="container mx-auto flex justify-center items-center">
        {/* Left: Name */}

        {/* Center: Social Media Links */}
        <nav className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl">
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl">
            <FaXTwitter />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl">
            <FaEnvelope />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
