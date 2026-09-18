import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Education from "@/components/Education";
export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="Education" title="Learning and experience" description="A concise view of the foundations and experience shaping my work." />
          <Education />
        </div>
      </main>
      <Footer />
    </>
  );
}
