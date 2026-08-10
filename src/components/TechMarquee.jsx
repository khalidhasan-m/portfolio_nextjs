"use client";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const items = [
  { name: "React", Icon: SiReact, dark: "#61dafb", light: "#0369a1" },
  { name: "Next.js", Icon: SiNextdotjs, dark: "#f5f5f5", light: "#0a0a0a" },
  { name: "JavaScript", Icon: SiJavascript, dark: "#f7df1e", light: "#a16207" },
  { name: "TypeScript", Icon: SiTypescript, dark: "#60a5fa", light: "#1d4ed8" },
  { name: "HTML5", Icon: SiHtml5, dark: "#e34f26", light: "#c2410c" },
  { name: "CSS3", Icon: FaCss3Alt, dark: "#1572b6", light: "#1d4ed8" },
  { name: "Tailwind", Icon: SiTailwindcss, dark: "#38bdf8", light: "#0e7490" },
  { name: "Node.js", Icon: SiNodedotjs, dark: "#4ade80", light: "#15803d" },
  { name: "MongoDB", Icon: SiMongodb, dark: "#4ade80", light: "#166534" },
  { name: "Git", Icon: SiGit, dark: "#f97066", light: "#b91c1c" },
  { name: "GitHub", Icon: SiGithub, dark: "#f5f5f5", light: "#0a0a0a" },
  { name: "Vercel", Icon: SiVercel, dark: "#f5f5f5", light: "#0a0a0a" },
  { name: "Figma", Icon: SiFigma, dark: "#f472b6", light: "#be185d" },
];

export default function TechMarquee() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <section aria-label="Technologies" className="py-8 sm:py-10 border-y dark:border-white/5 border-black/5 dark:bg-white/[0.02] bg-black/[0.02]">
      <Marquee pauseOnHover speed={40} gradient={false}>
        {items.map((item) => (
          <div
            key={item.name}
            className="mx-6 sm:mx-8 flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity"
          >
            <span
              className="text-2xl"
              style={{ color: isDark ? item.dark : item.light }}
              aria-hidden="true"
            >
              <item.Icon />
            </span>
            <span className="font-medium text-sm dark:text-gray-300 text-gray-800 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
