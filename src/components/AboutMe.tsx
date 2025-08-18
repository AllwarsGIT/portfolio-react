"use client"
import Image from 'next/image'
import React from 'react'
import TechBadgeAboutMe from './TechBadgeAboutMe'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


function AboutMe() {

  const { elementRef: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: textRef, isIntersecting: isTextVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: imageRef, isIntersecting: isImageVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="aboutme" className="bg-blackPrimary flex justify-center items-center pb-15">
      <div className="mx-auto px-4 text-left w-full max-w-[1500px] ">
          <div className={`flex items-baseline justify-center md:justify-start md:mx-30 my-15 p-5 max-w-[500px] ${isTitleVisible ? 'opacity-100 translate-0' : 'opacity-0 -translate-x-20'} transition-all ease-in-out duration-1000`}
          ref={titleRef}>
              <span className="text-bluePrimary number-responsive font-mono mr-2 md:text-left">02.</span>
              <h2 className="text-grayPrimary  font-bold  header-responsive">Acerca de mí</h2>
              <div className=" hidden md:block bg-graySecondary h-[1px] w-40 ml-4 self-center" />
          </div>

          <div className="flex  md:mx-30 flex-col md:flex-row items-center md:items-start justify-center text-center p-5">
            <div className={`md:w-3/7 text-base md:text-lg ${isTextVisible ? 'opacity-100 translate-0' : 'opacity-0 translate-y-20'} transition-all ease-in-out duration-900`} ref={textRef}>
              <p className="text-graySecondary text-left ">
                Mi nombre es <span className="text-grayPrimary font-bold">Álvaro</span> y soy desarrollador <span className="text-grayPrimary font-bold">Front-end</span> con experiencia en <span className="text-grayPrimary font-bold">diseño</span> y <span className="text-grayPrimary font-bold">desarrollo</span> de interfaces.
              </p>
              <br />
              <p className="text-graySecondary text-left ">
                Me especializo en crear interfaces web <span className="text-grayPrimary font-bold">limpias</span>, <span className="text-grayPrimary font-bold">accesibles</span> y <span className="text-grayPrimary font-bold">responsive</span> con un diseño intuitivo centrado en la experiencia del usuario.
              </p>
              <br />
              <p className="text-graySecondary text-left ">
                En mis aplicaciones busco tanto funcionalidad como estética, priorizando siempre una estructura de código <span className="text-grayPrimary font-bold">limpia</span> y <span className="text-grayPrimary font-bold">mantenible</span>.
              </p>
              <br />
              <p className="text-graySecondary text-left ">
                Tengo gran facilidad para aprender nuevas tecnologías y adaptarme a diferentes entornos de trabajo.
              </p>
              <br />
              <p className="text-graySecondary text-left ">
                Stack tecnológico principal (<span className="text-grayPrimary font-bold">2+</span> años):
              </p>
              <ul className=" grid grid-cols-2   text-left my-4 gap-3">
                <li>
                  <TechBadgeAboutMe techName="React" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="TailwindCSS" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="Node.js" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="Next.js" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="Typescript" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="Javascript" />
                </li>
              </ul>
              <p className="text-graySecondary text-left ">
                Otras Tecnologías :
              </p>
              <ul className=" grid grid-cols-2   text-left mt-4 gap-3">
                <li>
                  <TechBadgeAboutMe techName="Angular" />
                </li>
                <li>
                  <TechBadgeAboutMe techName="Vue.js" />
                </li>
              </ul>
              
            </div>
            <div className={`flex m-8  md:m-0 md:pt-10 md:pl-10 justify-center p-0 items-center ${isImageVisible ? 'opacity-100 translate-0' : 'opacity-0 translate-x-20'} transition-all ease-in-out duration-1000`} ref={imageRef}>
              <Image 
                className="rounded-md"
                src="/AlvaroLinkedin.png" 
                alt="Foto de Álvaro Sánchez Torre" 
                width={250} 
                height={350} 
                quality={90} />
            </div>
            
          </div>
          
          
      </div>
    </section>
  )
}

export default AboutMe
