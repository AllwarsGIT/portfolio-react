"use client"
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import React from "react";

function SideBar() {

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <div 
    className={`hidden md:flex fixed bottom-0 left-20 flex-col items-center space-y-4 text-white z-50 transition-all ease-in-out duration-1700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-22'}`} 
    ref={elementRef}
    >
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
