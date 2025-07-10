"use client"
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


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




  return (

    <header className="bg-blackPrimary border-b-1 border-grayTertiary sticky top-0 px-10 left-0 w-full flex  items-center z-10">
      <nav className="text-graySecondary flex items-center py-5  w-full justify-items-center justify-between">
        <a className="font-bold text-lg">Álvaro.S</a>



        {/* Menú normal */}

        <ul className="hidden md:flex flex-wrap space-x-15 text-xl ">
            <li className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary ">
              <span className="text-bluePrimary text-sm font-mono mr-2">01.</span>
              <a
                className="text-base font-semibold"
                onClick={() => handleMenuClick("projects")}
              >
                Proyectos
              </a>
            </li>
            <li className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary">
              <span className="text-bluePrimary text-sm font-mono mr-2">02.</span>
              <p className="text-base font-semibold">Acerca de</p>
            </li>
            <li className="flex items-baseline transition-all ease-in-out duration-200 cursor-pointer hover:text-bluePrimary">
              <span className="text-bluePrimary text-sm font-mono mr-2">03.</span>
              <p className="text-base font-semibold">Contacto </p>
            </li>
        </ul>




          {/* Menú para móvil */}      
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 text-xl p-4">
            <li className="flex items-baseline">
              <span className="text-bluePrimary text-sm font-mono mr-2">01.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => handleMenuClick("projects")}
                >
                  Proyectos
                </a>
            </li>
            <li className="flex items-baseline">
              <span className="text-bluePrimary text-sm font-mono mr-2">02.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Acerca de
                </a>
            </li>
            <li className="flex items-baseline">
              <span className="text-bluePrimary text-sm font-mono mr-2">03.</span>
                <a
                  className="text-base font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
            </li>

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
