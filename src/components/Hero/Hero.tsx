import HeroContent from "./HeroContent"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  return (
    <section
      className={`${styles.background} relative w-full h-[40vh] text-blueprimary flex items-center justify-center px-20`}
    >
      <HeroContent className={styles.letters} />
    </section>
  );
};

export default Hero;
