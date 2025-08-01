"use client"
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';



function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (id: string) => {
  const element = document.getElementById(id);
  const header = document.querySelector("header");

  if (element && header) {
    const headerHeight = header.getBoundingClientRect().height;
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  setIsOpen(false);
};

    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.10,
    });



  return (

    <header className={`bg-card  sticky top-0 px-10 left-0 w-full flex  items-center z-10 ${isIntersecting ? 'opacity-100 translate-0' : 'opacity-0 -translate-y-10'} transition-all ease-[cubic-bezier(0.4,0,0.2,1)] duration-1500`} ref={elementRef}>
      <nav className="text-graySecondary flex items-center py-5  w-full justify-items-center justify-between"
        
        >
        <a className="font-bold text-lg text-grayPrimary">Álvaro.S</a>



        {/* Menú normal */}

        <ul className="hidden md:flex flex-wrap space-x-15 text-xl ">
            <li 
            className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary "
            onClick={() => handleMenuClick("projects")}
            >
              <span className="text-bluePrimary text-sm font-mono mr-2">01.</span>
              <a
                className="text-base font-semibold"
                
              >
                Proyectos
              </a>
            </li>
            <li 
            className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary "
            onClick={() => handleMenuClick("aboutme")}
            >
              <span className="text-bluePrimary text-sm font-mono mr-2">02.</span>
              <a
                className="text-base font-semibold"
                
              >
                Acerca de
              </a>
            </li>
            {/* <li 
            className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary "
            onClick={() => handleMenuClick("contact")}
            >
              <span className="text-bluePrimary text-sm font-mono mr-2">03.</span>
              <a
                className="text-base font-semibold"
                
              >
                Contacto
              </a>
            </li> */}
        </ul>




          {/* Menú para móvil */}      
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 text-xl p-4">
            <li className="flex items-baseline cursor-pointer">
              <span className="text-bluePrimary text-sm font-mono mr-2">01.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => handleMenuClick("projects")}
                >
                  Mis Proyectos
                </a>
            </li>
            <li className="flex items-baseline cursor-pointer">
              <span className="text-bluePrimary text-sm font-mono mr-2">02.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => handleMenuClick("aboutme")}
                >
                  Acerca de mí
                </a>
            </li>
            {/* <li className="flex items-baseline cursor-pointer">
              <span className="text-bluePrimary text-sm font-mono mr-2">03.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => handleMenuClick("contact")}
                >
                  Contacto
                </a>
            </li> */}

          </ul>
        )}

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          >
          {isOpen ? <RxCross1 size={24}/> : <CiMenuBurger size={24}/>}
        </button>
      </nav>  
    </header>
  )
}

export default Header
