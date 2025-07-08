import React from 'react';



const HeroContent: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full px-4  md:px-8" 
    >
      <div className="mx-auto max-w-md w-full text-left px-4 sm:px-8 "> 
        <p className="text-bluePrimary font-semibold mb-4 text-base  md:text-xl lg:text-2xl">
          Hola, soy
        </p>
        <p className="text-blueSecondary font-bold mb-4 text-2xl  md:text-4xl lg:text-5xl">
          Álvaro Sánchez.
        </p>
        <p className="text-graySecondary font-bold mb-4 text-2xl  md:text-4xl lg:text-5xl">
          Front developer.
        </p>
        <p className="text-grayTertiary text-sm sm:text-base md:text-xl">
          Desarrollo webs limpias, accesibles y responsive.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;



