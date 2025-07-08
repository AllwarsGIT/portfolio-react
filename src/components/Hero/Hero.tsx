import HeroContent from "./HeroContent"

const Hero: React.FC = () => {
  return (
    <section
      className="bg-blackPrimary borderBottomGradient relative w-full min-h-[40vh] text-center flex items-center justify-center px-4  md:px-16 lg:px-20"
    >
      <HeroContent  />
    </section>
  );
};

export default Hero;
