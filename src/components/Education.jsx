"use client";
import { FiBook, FiBriefcase, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";
import { useInView } from "@/hooks/useInView";

export default function Education() {
  const ref = useInView();

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-600 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            04. Education & Experience
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade cq-split">
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 flex-shrink-0">
                <FiBook size={20} aria-hidden="true" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 font-mono">
                Education
              </h2>
            </div>

            <div className="relative cq-timeline">
              <div className="timeline-line" />

              <div className="relative mb-6 sm:mb-8">
                <div className="absolute left-[-27px] sm:left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                      Master&apos;s — English
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                      2024
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm dark:text-gray-300 text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} className="flex-shrink-0" aria-hidden="true" />
                      <span>Govt. B.M. College, Barishal</span>
                    </span>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-1">
                    National University, Bangladesh
                  </p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Result: <span className="text-amber-500 font-medium">2.58 / 4.00</span>
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-27px] sm:left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                      Bachelor of Arts (Honours) — English
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                      2022
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm dark:text-gray-300 text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} className="flex-shrink-0" aria-hidden="true" />
                      <span>Govt. B.M. College, Barishal</span>
                    </span>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-1">
                    National University
                  </p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Result: <span className="text-amber-500 font-medium">2.53 / 4.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 flex-shrink-0">
                <FiBriefcase size={20} aria-hidden="true" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 font-mono">
                Experience
              </h2>
            </div>

            <div className="relative cq-timeline">
              <div className="timeline-line" />

              <div className="relative mb-6 sm:mb-8">
                <div className="absolute left-[-27px] sm:left-[-31px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-4 sm:p-5 rounded-2xl dark:bg-green-500/10 bg-green-500/5 border dark:border-green-500/25 border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                      Open to Opportunities
                    </h3>
                  </div>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed">
                    Seeking a full-time or remote frontend role. Ready to ship UI, own features end to end,
                    and grow with a product team.
                  </p>
                </div>
              </div>

              <div className="relative mb-6 sm:mb-8">
                <div className="absolute left-[-27px] sm:left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                      Frontend Developer (Independent)
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                      2025 — Present
                    </span>
                  </div>
                  <ul className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed space-y-2 list-none">
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>
                        Shipped 5+ full-stack apps (React, Next.js, Tailwind, Better Auth) with public repos
                        and live Vercel deploys recruiters can try.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>
                        Implemented email/password + Google OAuth, session handling, and protected routes
                        across multiple products.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>
                        Integrated REST APIs with Axios; built responsive UIs with HeroUI, shadcn/ui, and
                        Framer Motion.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 flex-shrink-0">
              <FiAward size={20} aria-hidden="true" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 font-mono">
              Certifications & Courses
            </h2>
          </div>

          <div className="cq-grid">
            <div className="cq-cols">
              <div className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                    Web Development (6-month course)
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full dark:bg-green-500/10 bg-green-500/15 text-green-600 dark:text-green-400 font-mono flex items-center gap-1">
                    <FiCheckCircle size={12} aria-hidden="true" />
                    Passed
                  </span>
                </div>
                <p className="text-sm dark:text-gray-300 text-gray-600">Programming Hero</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <h3 className="font-semibold dark:text-white text-gray-900 text-sm sm:text-base">
                    Computer Office Application
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                    2020
                  </span>
                </div>
                <p className="text-sm dark:text-gray-300 text-gray-600 mb-1">
                  Bangladesh Technical Education Board
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Grade: <span className="text-amber-500 font-medium">4.00 / 5.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
