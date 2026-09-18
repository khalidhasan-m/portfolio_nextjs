import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <PageHeader eyebrow="Contact" title="Let's work together" description="Have a project in mind? Share a few details and start a conversation." />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
