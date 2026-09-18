"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiUsers } from "react-icons/fi";
import { useInView } from "@/hooks/useInView";
import { skillCategories, softSkills, experienceLevels } from "@/data/skills";

// Badge weight encodes the level — filled → tinted → outline → dashed.
// No numeric proficiency scores anywhere on this page.
const LEVEL_BADGE = {
  production: "bg-amber-500 text-black border border-amber-500",
  comfortable:
    "border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  familiar:
    "border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700",
  learning: "border border-dashed border-amber-500/50 text-amber-700 dark:text-amber-400",
};

function SkillPill({ skill }) {
  const meta = experienceLevels[skill.level];
  return (
    <li
      className="skill-chip group flex items-center gap-2.5 pl-2 pr-2.5 py-2 rounded-xl border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-white dark:hover:border-amber-500/30 hover:border-amber-500/40 dark:hover:bg-amber-500/[0.06] hover:bg-amber-500/[0.06] hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/40 transition-all duration-200 cursor-default min-w-0"
      title={meta ? `${skill.name} — ${meta.label}: ${meta.hint}` : skill.name}
    >
      <SkillIcon Icon={skill.Icon} darkColor={skill.dark} lightColor={skill.light} />
      <span className="flex-1 min-w-0">
        <span className="block truncate text-[13px] font-medium dark:text-gray-200 text-gray-800 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
          {skill.name}
        </span>
        {meta && (
          <span
            className={`mt-1 inline-block font-mono text-[9px] leading-none uppercase tracking-wider px-1.5 py-1 rounded-full whitespace-nowrap ${LEVEL_BADGE[skill.level] ?? ""}`}
          >
            {meta.label}
          </span>
        )}
      </span>
    </li>
  );
}

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

function LevelBadge({ level, compact = false }) {
  const meta = experienceLevels[level];
  if (!meta) return null;
  return (
    <span
      className={`shrink-0 font-mono uppercase whitespace-nowrap rounded-full ${
        compact
          ? "text-[9px] leading-none tracking-wider px-1.5 py-1"
          : "text-[10px] leading-none tracking-wide px-2 py-1.5"
      } ${LEVEL_BADGE[level] ?? ""}`}
    >
      {meta.label}
    </span>
  );
}

export default function Skills() {
  const ref = useInView();

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
              Grouped by area and labelled by real experience — no percentage scores.
            </p>
          </div>

          <ul className="flex items-center gap-2.5 mb-4 sm:mb-5">
            {Object.entries(experienceLevels).map(([id, meta]) => (
              <li key={id} className="inline-flex items-center gap-1.5">
                <LevelBadge level={id} />
                <span className="text-[10px] dark:text-gray-500 text-gray-500">{meta.hint}</span>
              </li>
            ))}
          </ul>

          <div className="cq-grid">
            <div className="cq-cols-dense">
              {skillCategories.map((cat, index) => {
                const CatIcon = cat.Icon;
                return (
                  <section
                    key={cat.category}
                    aria-label={`${cat.category} skills`}
                    className={`cq-card cq-skill-pad rounded-2xl border transition-all duration-300 shadow-sm dark:hover:shadow-black/30 hover:shadow-md min-w-0 ${
                      cat.accent
                        ? "border-dashed border-amber-500/40 dark:border-amber-500/40 bg-amber-500/[0.04] dark:bg-amber-500/[0.05]"
                        : "dark:bg-white/5 bg-white dark:border-white/10 border-black/10 dark:hover:border-amber-500/20 hover:border-amber-500/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b dark:border-white/10 border-black/10">
                      <span
                        className={`p-2 rounded-xl flex-shrink-0 ${
                          cat.accent
                            ? "dark:bg-amber-500/15 bg-amber-500/15 text-amber-500"
                            : "dark:bg-amber-500/10 bg-amber-500/15 text-amber-500"
                        }`}
                        aria-hidden="true"
                      >
                        <CatIcon size={20} />
                      </span>
                      <h3 className="font-semibold dark:text-white text-gray-900 text-base">
                        {cat.category}
                      </h3>
                      <span className="ml-auto font-mono text-[11px] dark:text-gray-500 text-gray-500 tabular-nums shrink-0">
                        {cat.skills.length}
                      </span>
                    </div>

                    <ul
                      className={`grid gap-2 sm:gap-2.5 ${
                        index === 0
                          ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                          : "grid-cols-2 md:grid-cols-3"
                      }`}
                    >
                      {cat.skills.map((skill) => (
                        <SkillPill key={skill.name} skill={skill} />
                      ))}
                    </ul>
                  </section>
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
