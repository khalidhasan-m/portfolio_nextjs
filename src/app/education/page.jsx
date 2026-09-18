import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export const metadata = {
  title: "Education & Experience",
  description:
    "Full-stack developer from Bangladesh with an MA in English, plus full-stack training and certifications from Programming Hero — including Next.js, Node.js, and Better Auth.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <Education />
        </div>
      </main>
      <Footer />
    </>
  );
}
