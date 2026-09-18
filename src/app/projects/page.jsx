import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="Projects" title="Selected work" description="A selection of full-stack products, experiments, and client-focused builds." />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
