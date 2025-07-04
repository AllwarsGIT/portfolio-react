import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SideBar from "../components/SideBar/SideBar"
import Projects from "../components/Projects/Projects"

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="w-full h-screen scroll-smooth">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
