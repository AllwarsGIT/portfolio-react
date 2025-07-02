import HeroContent from "./HeroContent"
import styles from "./Hero.module.css"




const Hero: React.FC = () => {
  return (
    <section className={`${styles.background} relative h-screen text-white flex flex-wrap items-center justify-start overflow-hidden px-20`}>
      <HeroContent className={styles.letters} />

    </section>
  );
};

export default Hero;
