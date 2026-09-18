import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="Skills" title="My technical toolkit" description="The technologies and practices I use to turn ideas into reliable products." />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}
