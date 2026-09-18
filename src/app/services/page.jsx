import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="Services" title="How I can help" description="Focused frontend and full-stack support for useful, polished digital products." />
          <Services />
        </div>
      </main>
      <Footer />
    </>
  );
}
