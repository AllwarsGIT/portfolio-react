import HeroContent from "./HeroContent"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  return (
    <section
      className={`${styles.background} borderBottomGradient relative w-full min-h-[40vh] text-center flex items-center justify-center px-4  md:px-16 lg:px-20`}
    >
      <HeroContent className={`${styles.letters} `} />
    </section>
  );
};

export default Hero;
