"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { useInView } from "@/hooks/useInView";
import { skillCategories, learning, softSkills } from "@/data/skills";

function SkillIcon({ Icon, darkColor, lightColor }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const color = !mounted
    ? "#d97706"
    : resolvedTheme === "light"
      ? lightColor
      : darkColor;

  return (
    <div
      className="skill-icon text-xl flex-shrink-0 transition-transform duration-200 drop-shadow-sm"
      style={{ color }}
    >
      <Icon />
    </div>
  );
}

export default function Skills() {
  const ref = useInView();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = !mounted || resolvedTheme !== "light";

  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 dark:bg-white/[0.01] bg-black/[0.01] relative cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-600 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            03. Skills
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade space-y-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono mb-3">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-600 text-sm max-w-lg mx-auto px-2">
              Technologies I use to build modern, responsive web applications.
            </p>
          </div>

          <div className="cq-grid">
            <div className="cq-cols">
              {skillCategories.map((cat) => {
                const CatIcon = cat.Icon;
                return (
                  <div
                    key={cat.category}
                    className="cq-card cq-skill-pad rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 dark:hover:border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex flex-col items-center gap-2 text-center mb-4 sm:mb-5">
                      <span className="text-2xl text-amber-500" aria-hidden="true">
                        <CatIcon />
                      </span>
                      <h3 className="font-semibold dark:text-white text-gray-900 text-base">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="skill-card flex items-center gap-3 p-2.5 rounded-xl dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200 group cursor-default"
                        >
                          <SkillIcon Icon={skill.Icon} darkColor={skill.dark} lightColor={skill.light} />
                          <span className="text-sm dark:text-gray-200 text-gray-800 font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 sm:mt-6 rounded-2xl p-4 sm:p-6 dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 shadow-sm">
            <h3 className="font-semibold dark:text-white text-gray-900 text-sm mb-4 flex items-center gap-2">
              <FiBookOpen className="text-amber-500 text-base" aria-hidden="true" />
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => {
                const color = isDark ? item.dark : item.light;
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border dark:bg-amber-500/10 bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25"
                  >
                    <span style={{ color }} className="text-sm" aria-hidden="true">
                      <item.Icon />
                    </span>
                    {item.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-2xl p-4 sm:p-6 dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 shadow-sm">
            <h3 className="font-semibold dark:text-white text-gray-900 text-sm mb-4 flex items-center gap-2">
              <FiUsers className="text-amber-500 text-base" aria-hidden="true" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full dark:bg-amber-500/10 bg-amber-500/10 text-amber-700 dark:text-amber-400 border dark:border-amber-500/20 border-amber-500/25"
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
