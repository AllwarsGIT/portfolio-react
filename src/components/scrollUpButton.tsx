"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

function ScrollUpButton() {
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true)
        } else {
            setVisible(false)
        }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div 
            className={`fixed z-20 bottom-5 right-5 w-12 h-12 rounded-full group bg-grayPrimary  flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out
            ${visible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <IoIosArrowUp size={30} className="text-card group-hover:text-blueTitle  font-bold transition-colors duration-500 ease-in-out"/>
        </div>
    )
}

export default ScrollUpButton
