"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { PROFILE_AVATAR_FALLBACK, RESUME_PDF } from "@/data/assets";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  const [useFallback, setUseFallback] = useState(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-0 lg:min-h-[100svh] flex items-start lg:items-center justify-center dot-grid overflow-hidden cq-section"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="cq-hero pt-20 sm:pt-22 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            className="cq-hero-text space-y-3 sm:space-y-4 lg:space-y-6 min-w-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex mx-auto lg:mx-auto items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 border dark:border-amber-500/20 border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400 pulse-ring inline-block flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-400 font-mono">Available for work</span>
            </div>

            <div className="space-y-1">
              <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700 font-mono tracking-widest uppercase">Hi, I&apos;m</p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-mono leading-[1.1]">
                <span className="text-amber-600 dark:text-amber-400">Khalid</span>
                <br />
                <span className="dark:text-white text-gray-900">Hasan Meskat</span>
              </h1>
            </div>

            <div className="flex items-center gap-3 justify-start lg:justify-start justify-center">
              <div className="h-px w-6 sm:w-8 bg-amber-600 dark:bg-amber-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-lg sm:text-xl dark:text-gray-200 text-gray-800 font-medium">Frontend Developer</p>
            </div>

            <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700 max-w-lg leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
              Crafting responsive, user-friendly web experiences with{" "}
              <span className="text-amber-700 dark:text-amber-400 font-medium">React</span> &{" "}
              <span className="text-amber-700 dark:text-amber-400 font-medium">Next.js</span>. Passionate about clean code and polished UI.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 justify-start lg:justify-start justify-center">
              <a
                href={RESUME_PDF}
                download="Khalid_Hasan_Meskat_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 min-h-[44px]"
              >
                <FiDownload size={16} aria-hidden="true" />
                Download CV
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border dark:border-white/20 border-black/20 dark:text-white text-gray-900 dark:hover:bg-white/5 hover:bg-black/5 font-semibold text-sm transition-all duration-200 min-h-[44px]"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-start lg:justify-start justify-center">
              <span className="text-xs sm:text-sm dark:text-gray-400 text-gray-600 font-mono">Find me on</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://github.com/khalidhasan-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-200 text-gray-800 hover:text-amber-600 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="GitHub profile"
                >
                  <FiGithub size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/khalidhasanmeskat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-200 text-gray-800 hover:text-amber-600 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cq-hero-photo flex flex-col items-center gap-3 sm:gap-4 lg:gap-6"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative float-animation">
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 scale-110 animate-ping hidden sm:block" style={{ animationDuration: "3s" }} aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-125 hidden sm:block" aria-hidden="true" />
              <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-amber-500/40 amber-glow">
                {useFallback ? (
                  <img
                    src={PROFILE_AVATAR_FALLBACK}
                    alt="Khalid Hasan Meskat"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={imgSrc}
                    alt="Khalid Hasan Meskat"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 288px"
                    className="object-cover"
                    priority
                    onError={() => setUseFallback(true)}
                  />
                )}
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
                  <p className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-400 font-mono">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs dark:text-gray-400 text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
