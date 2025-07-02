import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SideBar from "../components/SideBar/SideBar"

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="w-full h-screen overflow-y-scroll  scroll-smooth">
        <Hero />
      </main>
    </>
  );
}
