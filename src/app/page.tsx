import Header from "./components/Header";
import Hero from "./components/Hero";
import MetricsDashboard from "./components/MetricsDashboard";
import Skills from "./components/Skills";
import ProjectsSection from "./components/FeaturedProjects";
import ExperienceCard from "./components/ExperienceCard";
import Certifications from "./components/Certifications";
import BlogArticles from "./components/BlogArticles";
import Testimonials from "./components/Testimonials";
import ConnectSection from "./components/ConnectSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import CursorFollower from "./components/CursorFollower";

export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundColor: 'var(--body-bg)',
        color: 'var(--text-main)',
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      <CursorFollower />
      <ScrollProgress />
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
      <MetricsDashboard />
      <Skills />
      <ProjectsSection />
      <ExperienceCard />
      <Certifications />
      <BlogArticles />
      <Testimonials />
      <ConnectSection />
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'var(--skills-bg)' }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--skills-title)' }}>
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps opportunities? I&apos;m always open to new challenges and collaborations.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer />
      </div>
    </main>
  );
}
