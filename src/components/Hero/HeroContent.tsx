import React from 'react';
import styles from './Hero.module.css';

interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full px-4  md:px-8 ${className ?? ''}`}
    >
      <div className={`${styles.textResponsive} mx-auto max-w-md w-full text-left px-4 sm:px-8 `}> 
        <p className="text-blue-400 font-semibold mb-4 text-base  md:text-xl lg:text-2xl">
          Hola, soy
        </p>
        <p className="text-blue-200 font-bold mb-4 text-2xl  md:text-4xl lg:text-5xl">
          Álvaro Sánchez.
        </p>
        <p className="text-gray-400 font-bold mb-4 text-2xl  md:text-4xl lg:text-5xl">
          Front developer.
        </p>
        <p className="text-gray-500 text-sm sm:text-base md:text-xl">
          Desarrollo webs limpias, accesibles y con estilo.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;



