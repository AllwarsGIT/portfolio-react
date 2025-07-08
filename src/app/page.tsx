import Hero from "../components/Hero/Hero";
import SideBar from "../components/SideBar"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="w-full scroll-smooth">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
