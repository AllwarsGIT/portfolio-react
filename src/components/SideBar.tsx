import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

function SideBar() {
  return (
    <div className="hidden md:flex fixed bottom-0 left-20 flex-col items-center space-y-4 text-white z-50">
        <ul className="flex flex-col items-center space-y-4 transition-colors duration-300">
            <li className="hover:text-blueprimary ">
            <a href="https://github.com/AllwarsGIT" target="_blank" rel="noopener noreferrer">
                <FiGithub size={24} className="text-graySecondary hover:text-bluePrimary hover:scale-110 transition-all duration-100"/>
            </a>
            </li>
            <li className="hover:text-blueprimary ">
            <a href="https://www.linkedin.com/in/%C3%A1lvaro-s%C3%A1nchez-831705366/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-graySecondary hover:text-bluePrimary hover:scale-110 transition-all duration-100"/>
            </a>
            </li>
        </ul>
        <div className="bg-graySecondary w-[1px] h-25 mt-4" />
    </div>
  );
}

export default SideBar;
