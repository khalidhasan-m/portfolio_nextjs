"use client";
import { useEffect, useRef } from "react";
import {
  SiJavascript, SiReact, SiNextdotjs, SiHtml5,
  SiTailwindcss, SiGit, SiGithub, SiVite, SiNetlify
} from "react-icons/si";
import { FiLayout, FiMonitor, FiShield, FiGlobe, FiCode } from "react-icons/fi";

const skillCategories = [
  {
    category: "Languages & Frameworks",
    emoji: "🧱",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FiCode />, color: "#1572b6" },
    ],
  },
  {
    category: "Styling & UI",
    emoji: "🎨",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "DaisyUI", icon: <FiLayout />, color: "#f59e0b" },
      { name: "Responsive Design", icon: <FiMonitor />, color: "#a855f7" },
    ],
  },
  {
    category: "Tools & Technologies",
    emoji: "🛠️",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#f05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
      { name: "Vite", icon: <SiVite />, color: "#646cff" },
      { name: "REST API", icon: <FiGlobe />, color: "#22c55e" },
      { name: "Better Auth", icon: <FiShield />, color: "#f59e0b" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00c7b7" },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 dark:bg-white/[0.01] bg-black/[0.01] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[60px]" />
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">
            02. Skills
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade space-y-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 font-mono mb-3">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="dark:text-gray-500 text-gray-500 text-sm max-w-lg mx-auto">
              Technologies I use to build fast, responsive, and scalable web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => (
              <div
                key={ci}
                className="rounded-2xl p-6 dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-amber-500/20 hover:border-amber-500/20 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-semibold dark:text-white text-gray-900 text-sm">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <div
                      key={si}
                      className="skill-card flex items-center gap-3 p-2.5 rounded-xl dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200 group cursor-default"
                    >
                      <div
                        className="skill-icon text-xl flex-shrink-0 transition-all duration-200"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm dark:text-gray-300 text-gray-700 font-medium group-hover:text-amber-500 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="mt-6 rounded-2xl p-6 dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
            <h3 className="font-semibold dark:text-white text-gray-900 text-sm mb-4 flex items-center gap-2">
              <span>💡</span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solving",
                "Analytical Thinking",
                "Communication",
                "Team Collaboration",
                "Self-directed Learning",
                "Attention to Detail",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full dark:bg-amber-500/10 bg-amber-500/10 text-amber-600 dark:text-amber-400 border dark:border-amber-500/20 border-amber-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
