import React from 'react';

interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <div className={`flex flex-row flex-wrap justify-between items-center w-full ${className ?? ''}`}>
      <div className="flex flex-col py-10 space-y-4 relative z-10 text-white max-w-[calc(100%-620px)]">
        <h2 className="font-bold text-4xl" style={{ transform: 'translateY(20px)' }}>
          Portfolios responsive, rápidos y elegantes
        </h2>
      </div>
    </div>
  );
};

export default HeroContent;
