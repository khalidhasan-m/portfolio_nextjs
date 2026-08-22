import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVite,
  SiFigma,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  FiShield,
  FiGlobe,
  FiLayout,
  FiKey,
  FiDatabase,
  FiZap,
  FiMonitor,
  FiServer,
  FiTool,
} from "react-icons/fi";

export const skillCategories = [
  {
    category: "Frontend",
    Icon: FiMonitor,
    skills: [
      { name: "HTML5", Icon: SiHtml5, dark: "#e34f26", light: "#c2410c" },
      { name: "CSS3", Icon: FaCss3Alt, dark: "#1572b6", light: "#1d4ed8" },
      { name: "JavaScript (ES6+)", Icon: SiJavascript, dark: "#f7df1e", light: "#a16207" },
      { name: "React", Icon: SiReact, dark: "#61dafb", light: "#0369a1" },
      { name: "Next.js", Icon: SiNextdotjs, dark: "#f5f5f5", light: "#0a0a0a" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, dark: "#38bdf8", light: "#0e7490" },
      { name: "DaisyUI", Icon: FiLayout, dark: "#a78bfa", light: "#6d28d9" },
      { name: "HeroUI", Icon: FiLayout, dark: "#fbbf24", light: "#b45309" },
      { name: "Framer Motion", Icon: FiZap, dark: "#f472b6", light: "#be185d" },
    ],
  },
  {
    category: "Backend",
    Icon: FiServer,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, dark: "#4ade80", light: "#15803d" },
      { name: "Express.js", Icon: SiExpress, dark: "#f5f5f5", light: "#0a0a0a" },
      { name: "MongoDB", Icon: SiMongodb, dark: "#4ade80", light: "#166534" },
      { name: "REST API", Icon: FiGlobe, dark: "#4ade80", light: "#15803d" },
      { name: "Better Auth", Icon: FiShield, dark: "#fbbf24", light: "#b45309" },
      { name: "JWT", Icon: FiKey, dark: "#facc15", light: "#a16207" },
    ],
  },
  {
    category: "Tools",
    Icon: FiTool,
    skills: [
      { name: "Git", Icon: SiGit, dark: "#f97066", light: "#b91c1c" },
      { name: "GitHub", Icon: SiGithub, dark: "#f5f5f5", light: "#0a0a0a" },
      { name: "VS Code", Icon: VscCode, dark: "#60a5fa", light: "#1d4ed8" },
      { name: "Postman", Icon: SiPostman, dark: "#fb923c", light: "#c2410c" },
      { name: "Vercel", Icon: SiVercel, dark: "#f5f5f5", light: "#0a0a0a" },
      { name: "Vite", Icon: SiVite, dark: "#a78bfa", light: "#6d28d9" },
      { name: "Figma", Icon: SiFigma, dark: "#f472b6", light: "#be185d" },
    ],
  },
];

export const learning = [
  { name: "TypeScript", Icon: SiTypescript, dark: "#60a5fa", light: "#1d4ed8" },
  { name: "SQL", Icon: FiDatabase, dark: "#7dd3fc", light: "#0369a1" },
  { name: "Docker", Icon: SiDocker, dark: "#38bdf8", light: "#0284c7" },
  { name: "AWS", Icon: FaAws, dark: "#fbbf24", light: "#b45309" },
];

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Team Collaboration",
  "Self-directed Learning",
  "Attention to Detail",
];
