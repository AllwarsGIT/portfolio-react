import HeroContent from "./HeroContent"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  return (
    <section
      className={`${styles.background} relative w-full h-[40vh] text-blueprimary flex items-center justify-center px-20`}
    >
      <HeroContent className={styles.letters} />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
    </section>
  );
};

export default Hero;
