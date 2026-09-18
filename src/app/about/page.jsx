import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="About" title="A little about me" description="The story, values, and working style behind the interfaces I build." />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
