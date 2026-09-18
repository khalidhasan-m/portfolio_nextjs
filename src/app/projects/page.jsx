import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Khalid Hasan Meskat — apps built with Next.js, React, Node.js, Express, MongoDB, and Stripe, with live demos and source code.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Khalid Hasan Meskat",
    description:
      "Full-stack projects by Khalid Hasan Meskat — apps built with Next.js, React, Node.js, Express, MongoDB, and Stripe, with live demos and source code.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/projects/og-image",
        width: 1200,
        height: 630,
        alt: "Khalid Hasan Meskat — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Khalid Hasan Meskat",
    description:
      "Full-stack projects by Khalid Hasan Meskat — apps built with Next.js, React, Node.js, Express, MongoDB, and Stripe, with live demos and source code.",
    images: ["/projects/twitter-image"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
