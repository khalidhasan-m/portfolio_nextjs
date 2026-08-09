"use client";
import { useEffect, useRef } from "react";
import { FiBook, FiBriefcase, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[60px]" />
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">
            03. Education & Experience
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiBook size={20} />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-gray-900 font-mono">
                Education
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-10">
              <div className="timeline-line" />

              {/* MA */}
              <div className="relative mb-8">
                <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900">
                      Master's — English
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                      2024
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm dark:text-gray-300 text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} />
                      Govt. B.M. College, Barishal
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

              {/* BA */}
              <div className="relative">
                <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900">
                      Bachelor of Arts (Honours) — English
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono whitespace-nowrap">
                      2022
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm dark:text-gray-300 text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} />
                      Govt. B.M. College, Barishal
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

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiBriefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-gray-900 font-mono">
                Experience
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-10">
              <div className="timeline-line" />

              {/* Open to work */}
              <div className="relative mb-8">
                <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-5 rounded-2xl dark:bg-green-500/10 bg-green-500/5 border dark:border-green-500/25 border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <h3 className="font-semibold dark:text-white text-gray-900">
                      Open to Opportunities
                    </h3>
                  </div>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed">
                    Currently seeking a full-time frontend developer role. Eager to contribute to a
                    team, work on real-world products, and continue growing as a developer.
                  </p>
                </div>
              </div>

              {/* Frontend Developer */}
              <div className="relative mb-8">
                <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 dark:border-[#0a0a0f] border-[#f8f7f4] z-10" />
                <div className="p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-semibold dark:text-white text-gray-900">
                      Frontend Developer
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 font-mono">
                      2025 — Present
                    </span>
                  </div>
                  <ul className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed space-y-2 list-none">
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                      <span>
                        Built and deployed 5+ full-stack web apps with React, Next.js, Tailwind CSS,
                        and Better Auth; all code is public on GitHub.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                      <span>
                        Implemented email/password and Google OAuth authentication, session
                        management, and protected routes.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                      <span>
                        Integrated RESTful APIs with Axios; built responsive, animated UIs with
                        HeroUI, shadcn/ui, and Framer Motion.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Courses */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
              <FiAward size={20} />
            </div>
            <h2 className="text-2xl font-bold dark:text-white text-gray-900 font-mono">
              Certifications & Courses
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Programming Hero */}
            <div className="p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                <h3 className="font-semibold dark:text-white text-gray-900">
                  Web Development (6-month course)
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full dark:bg-green-500/10 bg-green-500/15 text-green-600 dark:text-green-400 font-mono flex items-center gap-1">
                  <FiCheckCircle size={12} />
                  Passed
                </span>
              </div>
              <p className="text-sm dark:text-gray-300 text-gray-600">
                Programming Hero
              </p>
            </div>

            {/* Computer Office Application */}
            <div className="p-5 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/20 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                <h3 className="font-semibold dark:text-white text-gray-900">
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
    </section>
  );
}
