import HeroContent from "./HeroContent"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  return (
    <section
      className={`${styles.background} borderBottomGradient relative w-full min-h-[40vh] text-blueprimary flex items-center justify-center px-20`}
    >
      <HeroContent className={`${styles.letters} ${styles.textResponsive}`} />
    </section>
  );
};

export default Hero;
