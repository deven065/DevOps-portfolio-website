import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectsSection from "./components/FeaturedProjects";
import ExperienceCard from "./components/ExperienceCard";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--body-bg)',
        color: 'var(--text-main)',
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      <Header />
      <Hero />
      <Skills />
      <ProjectsSection />
      <ExperienceCard />
      <ConnectSection />
      <Footer />
    </main>
  );
}
