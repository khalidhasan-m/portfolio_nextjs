import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";

export const metadata = {
  title: "Skills",
  description:
    "Khalid Hasan Meskat's technical skills — React, Next.js, Node.js, Express, MongoDB, and more, grouped by area with honest experience labels.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Khalid Hasan Meskat",
    description:
      "Khalid Hasan Meskat's technical skills — React, Next.js 15, Node.js, Express, MongoDB, and more, grouped by area with honest experience labels.",
    url: "/skills",
    type: "website",
    images: [
      {
        url: "/skills/og-image",
        width: 1200,
        height: 630,
        alt: "Khalid Hasan Meskat — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Khalid Hasan Meskat",
    description:
      "Khalid Hasan Meskat's technical skills — React, Next.js 15, Node.js, Express, MongoDB, and more, grouped by area with honest experience labels.",
    images: ["/skills/twitter-image"],
  },
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <Skills />
        </div>
        <TechMarquee />
      </main>
      <Footer />
    </>
  );
}
