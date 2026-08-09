"use client";
import Marquee from "react-fast-marquee";
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
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#e5e5e5" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Git", icon: <SiGit />, color: "#f05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#e5e5e5" },
  { name: "Vercel", icon: <SiVercel />, color: "#e5e5e5" },
  { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies" className="py-8 sm:py-10 border-y dark:border-white/5 border-black/5 dark:bg-white/[0.02] bg-black/[0.02]">
      <Marquee pauseOnHover speed={40} gradient={false}>
        {items.map((item) => (
          <div
            key={item.name}
            className="mx-6 sm:mx-8 flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="text-2xl" style={{ color: item.color }} aria-hidden="true">
              {item.icon}
            </span>
            <span className="font-medium text-sm dark:text-gray-300 text-gray-700 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
