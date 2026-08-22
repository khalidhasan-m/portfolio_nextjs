import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const TechMarquee = dynamic(() => import("@/components/TechMarquee"));
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Skills = dynamic(() => import("@/components/Skills"));
const Education = dynamic(() => import("@/components/Education"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <Hero />
          <TechMarquee />
          <About />
          <Services />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
