import Hero from "../components/Hero"
import SideBar from "../components/SideBar"
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
// import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <SideBar />
      <main className=" bg-blackPrimary w-full scroll-smooth">
        <Hero />
        <Projects />
        <AboutMe />
        <Analytics />
        {/* <ContactMe /> */}
      </main>
      <Footer />
    </>
  );
}
