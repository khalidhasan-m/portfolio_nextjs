import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Footer from "@/components/Footer";
import AIJourney from "@/components/AIJourney";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <Hero />
          <TechMarquee />
          {/* <AIJourney /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
