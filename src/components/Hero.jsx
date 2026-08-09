"use client";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import { PROFILE_IMAGE, RESUME_PDF } from "@/data/assets";

export default function Hero() {
  const heroRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/profile.jpg");

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center dot-grid overflow-hidden cq-section">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0" ref={heroRef}>
        <div className="cq-hero pt-24 sm:pt-20 pb-8 sm:pb-10">
          {/* Text Content */}
          <div className="cq-hero-text space-y-4 sm:space-y-6 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 border dark:border-amber-500/20 border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-500 pulse-ring inline-block flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 font-mono">Available for work</span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base dark:text-gray-400 text-gray-600 font-mono tracking-widest uppercase">Hi, I&apos;m</p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-mono leading-[1.1]">
                <span className="gradient-text">Khalid</span>
                <br />
                <span className="dark:text-white text-gray-900">Hasan Meskat</span>
              </h1>
            </div>

            <div className="flex items-center gap-3 cq-hero-cta">
              <div className="h-px w-6 sm:w-8 bg-amber-500 flex-shrink-0" />
              <p className="text-lg sm:text-xl dark:text-gray-300 text-gray-700 font-medium">Frontend Developer</p>
            </div>

            <p className="text-sm sm:text-base dark:text-gray-400 text-gray-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Crafting responsive, user-friendly web experiences with{" "}
              <span className="text-amber-500 font-medium">React</span> &{" "}
              <span className="text-amber-500 font-medium">Next.js</span>. Passionate about clean code and polished UI.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 cq-hero-cta">
              <a
                href={RESUME_PDF}
                download="Khalid_Hasan_Meskat_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 min-h-[44px]"
              >
                <FiDownload size={16} />
                Download CV
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border dark:border-white/20 border-black/20 dark:text-white text-gray-900 dark:hover:bg-white/5 hover:bg-black/5 font-semibold text-sm transition-all duration-200 min-h-[44px]"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 cq-hero-social pt-1 sm:pt-2">
              <span className="text-xs sm:text-sm dark:text-gray-500 text-gray-500 font-mono">Find me on</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://github.com/khalidhasan-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-300 text-gray-700 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/khalidhasanmeskat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-300 text-gray-700 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="cq-hero-photo flex flex-col items-center gap-4 sm:gap-6">
            <div className="relative float-animation">
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 scale-110 animate-ping hidden sm:block" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-125 hidden sm:block" />
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-amber-500/40 amber-glow">
                <img
                  src={imgSrc}
                  alt="Khalid Hasan Meskat"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setImgSrc(PROFILE_IMAGE)}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-amber-500 text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                Open Source
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { value: "20+", label: "Repos" },
                { value: "1+", label: "Year Exp." },
                { value: "10+", label: "Skills" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-amber-500 font-mono">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs dark:text-gray-500 text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-4 sm:pb-8">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 dark:text-gray-600 text-gray-400 hover:text-amber-500 transition-colors duration-200 group min-h-[44px]"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
