import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
