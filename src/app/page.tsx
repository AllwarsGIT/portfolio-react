import Hero from "../components/Hero/Hero";
import SideBar from "../components/SideBar"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <>
      <SideBar />
      <main className=" bg-blackPrimary scroll-smooth">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
