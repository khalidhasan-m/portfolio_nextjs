"use client";
import { useEffect, useRef } from "react";
import { FiCode, FiHeart, FiBook, FiCoffee } from "react-icons/fi";
import { GiSoccerBall } from "react-icons/gi";

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: "Clean Code",
    desc: "Writing scalable, maintainable code is my priority",
  },
  {
    icon: <FiHeart size={20} />,
    title: "UI/UX Passion",
    desc: "I love crafting beautiful, intuitive interfaces",
  },
  {
    icon: <FiBook size={20} />,
    title: "Always Learning",
    desc: "Self-directed learner, always exploring new tech",
  },
  {
    icon: <GiSoccerBall size={20} />,
    title: "Sports Fan",
    desc: "Football keeps me energized outside of coding",
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[60px]" />
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">
            01. About
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900 font-mono leading-tight">
              A dev who{" "}
              <span className="gradient-text">loves</span>
              <br /> great UX
            </h2>

            <div className="space-y-4 dark:text-gray-400 text-gray-600 leading-relaxed text-base">
              <p>
                My journey into programming started with curiosity — a desire to understand how
                beautiful, interactive websites work. What began as self-directed learning quickly
                became a genuine passion. I dove deep into{" "}
                <span className="text-amber-500 font-medium">React</span> and{" "}
                <span className="text-amber-500 font-medium">Next.js</span>, building projects that
                sharpened my skills in component architecture, state management, and API
                integration.
              </p>

              <p>
                I hold a{" "}
                <span className="dark:text-white text-gray-900 font-medium">
                  Master of Arts in English
                </span>{" "}
                from National University, Bangladesh — which has given me a unique edge in
                communication, documentation, and building user-friendly interfaces with clear
                language. My academic background complements my technical work by helping me think
                about user experience holistically.
              </p>

              <p>
                I enjoy working on projects where design meets functionality — where a clean
                codebase and a polished UI come together. I thrive in collaborative environments
                and love the challenge of turning complex requirements into simple, elegant
                solutions.
              </p>

              <p>
                Outside of programming, I&apos;m a{" "}
                <span className="text-amber-500 font-medium">football enthusiast</span> — the
                strategy, teamwork, and energy of the game inspire how I approach development. I
                also enjoy reading, especially about technology, philosophy, and language.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "Tailwind CSS", "JavaScript", "Better Auth", "REST APIs"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full dark:bg-amber-500/10 bg-amber-500/15 text-amber-600 dark:text-amber-400 border dark:border-amber-500/20 border-amber-500/30"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl dark:bg-white/3 bg-black/3 border dark:border-white/8 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 group"
                style={{
                  background:
                    "var(--tw-prose-body, inherit)",
                }}
              >
                <div className="w-10 h-10 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-semibold dark:text-white text-gray-900 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs dark:text-gray-500 text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Fun fact card */}
            <div className="col-span-2 p-5 rounded-2xl dark:bg-amber-500/5 bg-amber-500/8 border dark:border-amber-500/20 border-amber-500/25">
              <div className="flex items-center gap-3">
                <FiCoffee className="text-amber-500 flex-shrink-0" size={20} />
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  <span className="text-amber-500 font-medium">Fun fact:</span> I started learning
                  web development entirely through self-study — no bootcamp, just determination,
                  documentation, and lots of projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
