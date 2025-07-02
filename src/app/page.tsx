import Hero from "../components/Hero/Hero";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import VideoBackground from "../components/VideoBackground";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Header />
      <main className="w-full h-screen overflow-y-scroll  scroll-smooth">
        <Hero />
        <Portfolio />

        {/* <section className="h-screen  bg-gray-900 text-white flex items-center justify-center">
          <h2 className="text-3xl">Desarrollador frontend con pasión por el diseño</h2>
        </section> */}

        <section className="h-screen  bg-gray-800 text-white flex items-center justify-center">
          <h3 className="text-2xl">Contáctame: alvaro@email.com</h3>
        </section>
      </main>
    </>
  );
}
