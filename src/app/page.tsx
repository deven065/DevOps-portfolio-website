import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
    </main>
  );
}
