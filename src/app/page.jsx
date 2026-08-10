import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

function SectionSkeleton({ className = "" }) {
  return (
    <div
      className={`py-16 sm:py-20 animate-pulse ${className}`}
      aria-hidden="true"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="h-4 w-32 mx-auto rounded bg-black/10 dark:bg-white/10" />
        <div className="h-8 w-64 mx-auto rounded bg-black/10 dark:bg-white/10" />
        <div className="h-4 w-full max-w-md mx-auto rounded bg-black/5 dark:bg-white/5" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4">
          <div className="h-40 rounded-2xl bg-black/5 dark:bg-white/5" />
          <div className="h-40 rounded-2xl bg-black/5 dark:bg-white/5 hidden sm:block" />
          <div className="h-40 rounded-2xl bg-black/5 dark:bg-white/5 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

const TechMarquee = dynamic(() => import("@/components/TechMarquee"), {
  loading: () => <div className="h-16 border-y dark:border-white/5 border-black/5" aria-hidden="true" />,
  ssr: true,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionSkeleton />,
});

const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <SectionSkeleton />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-24" aria-hidden="true" />,
});

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <div className="noise-bg">
          {/* Above the fold — load immediately */}
          <Hero />
          {/* Below the fold — code-split + lazy load */}
          <TechMarquee />
          <About />
          <Services />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
