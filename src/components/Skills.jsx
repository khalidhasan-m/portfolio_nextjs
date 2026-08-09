"use client";
import { useEffect, useRef } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiVite,
  SiFigma,
  SiTypescript,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";
import { FiShield, FiGlobe } from "react-icons/fi";

const skillCategories = [
  {
    category: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#e5e5e5" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "DaisyUI", icon: <SiDaisyui />, color: "#5a0ef8" },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#e5e5e5" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "REST API", icon: <FiGlobe />, color: "#22c55e" },
      { name: "Better Auth", icon: <FiShield />, color: "#f59e0b" },
    ],
  },
  {
    category: "Tools",
    emoji: "🧰",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#f05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#e5e5e5" },
      { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007acc" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "Vercel", icon: <SiVercel />, color: "#e5e5e5" },
      { name: "Vite", icon: <SiVite />, color: "#646cff" },
      { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
    ],
  },
];

const learning = [
  { name: "Node.js", status: "learning", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express.js", status: "learning", icon: <SiExpress />, color: "#e5e5e5" },
  { name: "MongoDB", status: "learning", icon: <SiMongodb />, color: "#47a248" },
  { name: "TypeScript", status: "upcoming", icon: <SiTypescript />, color: "#3178c6" },
  { name: "Docker", status: "upcoming", icon: <SiDocker />, color: "#2496ed" },
  { name: "AWS", status: "upcoming", icon: <SiAmazonwebservices />, color: "#ff9900" },
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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 dark:bg-white/[0.01] bg-black/[0.01] relative cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-500 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            02. Skills
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade space-y-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono mb-3">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-500 text-sm max-w-lg mx-auto px-2">
              Technologies I use to build modern, responsive web applications — aligned with my GitHub profile.
            </p>
          </div>

          <div className="cq-grid">
            <div className="cq-cols">
              {skillCategories.map((cat, ci) => (
                <div
                  key={ci}
                  className="cq-card cq-skill-pad rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/20 hover:border-amber-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {cat.skills.map((skill, si) => (
                      <div
                        key={si}
                        className="skill-card flex items-center gap-3 p-2.5 rounded-xl dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200 group cursor-default"
                      >
                        <div
                          className="skill-icon text-xl flex-shrink-0 transition-all duration-200 drop-shadow-sm"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-sm dark:text-gray-200 text-gray-700 font-medium group-hover:text-amber-500 transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mt-4 sm:mt-6 rounded-2xl p-4 sm:p-6 dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8">
            <h3 className="font-semibold dark:text-white text-gray-900 text-sm mb-4 flex items-center gap-2">
              <span>📚</span> Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item.name}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border ${
                    item.status === "learning"
                      ? "dark:bg-amber-500/10 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                      : "dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-600 dark:border-white/10 border-black/10"
                  }`}
                >
                  <span style={{ color: item.color }} className="text-sm">
                    {item.icon}
                  </span>
                  {item.name}
                  <span className="opacity-70">
                    {item.status === "learning" ? "🟡" : "🔜"}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="mt-4 rounded-2xl p-4 sm:p-6 dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8">
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
