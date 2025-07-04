import React from 'react';
import styles from './Hero.module.css';

interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-8 ${className ?? ''}`}
    >
      <div className={`${styles.textResponsive} max-w-md w-full text-left m-5`}> 
        <p className={`${styles.holaSoy} text-grayDark text-1xl font-semibold mb-4`}>
          Hola, soy
        </p>
        <p className={`${styles.nombre} text-bluePrimary text-5xl font-bold mb-4`}>
          Álvaro Sánchez.
        </p>
        <p className={`${styles.title} text-grayDark font-bold text-5xl mb-4 `}>
          Front developer.
        </p>
        <p className={`${styles.textoPresentacion} text-grayLight text-m `}>
          Desarrollo webs limpias, accesibles y con estilo.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;



