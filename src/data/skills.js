// Skills data — sourced from the current resume (Khalid_Hasan_Meskat_Resume.docx).
//
// Experience labels replace percentage metrics. Semantics:
//   production  — shipped and maintained in live/finished projects
//   comfortable — used regularly across real project work
//   familiar    — working knowledge; used with docs/reference nearby
//   learning    — actively studying, no production use yet
//
// `accent: true` marks the "Currently Learning" group (amber-accented card).

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
  SiVercel,
  SiFigma,
  SiTypescript,
  SiDaisyui,
  SiShadcnui,
  SiGsap,
  SiThreedotjs,
  SiReacthookform,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiStripe,
  SiJsonwebtokens,
  SiNetlify,
  SiRender,
  SiNpm,
  SiEslint,
  SiPrettier,
  SiGooglechrome,
  SiPython,
  SiGooglegemini,
  SiClaude,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  FiShield,
  FiGlobe,
  FiLayout,
  FiZap,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
  FiBookOpen,
  FiShare2,
  FiBarChart2,
  FiBell,
  FiSmartphone,
  FiEye,
  FiSearch,
  FiCheckCircle,
  FiRefreshCw,
  FiTerminal,
  FiMessageSquare,
} from "react-icons/fi";

/** Ordered label definitions — single source of truth for badges + legend. */
export const experienceLevels = {
  production: { label: "Production-ready", hint: "shipped in live projects" },
  comfortable: { label: "Comfortable", hint: "used regularly" },
  familiar: { label: "Familiar", hint: "working knowledge" },
  learning: { label: "Learning", hint: "studying now" },
};

export const skillCategories = [
  {
    category: "Frontend",
    Icon: FiMonitor,
    skills: [
      { name: "HTML5", Icon: SiHtml5, dark: "#e34f26", light: "#c2410c", level: "production" },
      { name: "CSS3", Icon: FaCss3Alt, dark: "#1572b6", light: "#1d4ed8", level: "production" },
      { name: "JavaScript (ES6+)", Icon: SiJavascript, dark: "#f7df1e", light: "#a16207", level: "production" },
      { name: "TypeScript", Icon: SiTypescript, dark: "#60a5fa", light: "#1d4ed8", level: "familiar" },
      { name: "React.js", Icon: SiReact, dark: "#61dafb", light: "#0369a1", level: "production" },
      { name: "Next.js 15 — App Router", Icon: SiNextdotjs, dark: "#f5f5f5", light: "#0a0a0a", level: "production" },
      { name: "Context API", Icon: FiShare2, dark: "#61dafb", light: "#0369a1", level: "comfortable" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, dark: "#38bdf8", light: "#0e7490", level: "production" },
      { name: "DaisyUI", Icon: SiDaisyui, dark: "#a78bfa", light: "#6d28d9", level: "comfortable" },
      { name: "HeroUI", Icon: FiLayout, dark: "#fbbf24", light: "#b45309", level: "production" },
      { name: "shadcn/ui", Icon: SiShadcnui, dark: "#f5f5f5", light: "#0a0a0a", level: "familiar" },
      { name: "Framer Motion", Icon: FiZap, dark: "#f472b6", light: "#be185d", level: "production" },
      { name: "GSAP", Icon: SiGsap, dark: "#a3e635", light: "#4d7c0f", level: "familiar" },
      { name: "React Three Fiber", Icon: SiThreedotjs, dark: "#c084fc", light: "#7e22ce", level: "familiar" },
      { name: "Recharts", Icon: FiBarChart2, dark: "#5eead4", light: "#0f766e", level: "familiar" },
      { name: "React Hook Form", Icon: SiReacthookform, dark: "#fb7185", light: "#be123c", level: "production" },
      { name: "React Toastify", Icon: FiBell, dark: "#fb923c", light: "#c2410c", level: "comfortable" },
      { name: "Responsive Design", Icon: FiSmartphone, dark: "#4ade80", light: "#15803d", level: "production" },
      { name: "Accessibility", Icon: FiEye, dark: "#34d399", light: "#047857", level: "comfortable" },
      { name: "SEO Basics", Icon: FiSearch, dark: "#38bdf8", light: "#0e7490", level: "comfortable" },
    ],
  },

  {
    category: "Backend",
    Icon: FiServer,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, dark: "#4ade80", light: "#15803d", level: "production" },
      { name: "Express.js", Icon: SiExpress, dark: "#f5f5f5", light: "#0a0a0a", level: "production" },
      { name: "REST API", Icon: FiGlobe, dark: "#4ade80", light: "#15803d", level: "production" },
      { name: "Mongoose ODM", Icon: SiMongoose, dark: "#f97066", light: "#b91c1c", level: "production" },
      { name: "JWT Auth", Icon: SiJsonwebtokens, dark: "#f472b6", light: "#be185d", level: "comfortable" },
      { name: "Better Auth", Icon: FiShield, dark: "#fbbf24", light: "#b45309", level: "production" },
      { name: "Stripe Payments", Icon: SiStripe, dark: "#a78bfa", light: "#6d28d9", level: "production" },
      { name: "Server-side Validation", Icon: FiCheckCircle, dark: "#4ade80", light: "#15803d", level: "comfortable" },
      { name: "CRUD & Protected Routes", Icon: FiRefreshCw, dark: "#38bdf8", light: "#0284c7", level: "production" },
    ],
  },
  {
    category: "Database",
    Icon: FiDatabase,
    skills: [
      { name: "MongoDB", Icon: SiMongodb, dark: "#4ade80", light: "#166534", level: "production" },
      { name: "MySQL", Icon: SiMysql, dark: "#7dd3fc", light: "#0369a1", level: "familiar" },
      { name: "PostgreSQL", Icon: SiPostgresql, dark: "#60a5fa", light: "#1d4ed8", level: "familiar" },
    ],
  },
  {
    category: "Tools",
    Icon: FiTool,
    skills: [
      { name: "Git", Icon: SiGit, dark: "#f97066", light: "#b91c1c", level: "production" },
      { name: "GitHub", Icon: SiGithub, dark: "#f5f5f5", light: "#0a0a0a", level: "production" },
      { name: "VS Code", Icon: VscCode, dark: "#60a5fa", light: "#1d4ed8", level: "production" },
      { name: "Vercel", Icon: SiVercel, dark: "#f5f5f5", light: "#0a0a0a", level: "production" },
      { name: "npm", Icon: SiNpm, dark: "#f97066", light: "#b91c1c", level: "production" },
      { name: "Netlify", Icon: SiNetlify, dark: "#5eead4", light: "#0f766e", level: "comfortable" },
      { name: "Render", Icon: SiRender, dark: "#c084fc", light: "#7e22ce", level: "comfortable" },
      { name: "ESLint", Icon: SiEslint, dark: "#c084fc", light: "#6d28d9", level: "comfortable" },
      { name: "Prettier", Icon: SiPrettier, dark: "#f9a8d4", light: "#be185d", level: "comfortable" },
      { name: "Chrome DevTools", Icon: SiGooglechrome, dark: "#fbbf24", light: "#b45309", level: "comfortable" },
      { name: "Figma-to-Code", Icon: SiFigma, dark: "#f472b6", light: "#be185d", level: "comfortable" },
      { name: "ChatGPT", Icon: TbBrandOpenai, dark: "#5eead4", light: "#0f766e", level: "comfortable" },
      { name: "Gemini", Icon: SiGooglegemini, dark: "#60a5fa", light: "#1d4ed8", level: "comfortable" },
      { name: "Claude", Icon: SiClaude, dark: "#fb923c", light: "#c2410c", level: "comfortable" },
      { name: "Cursor", Icon: FiTerminal, dark: "#93c5fd", light: "#1d4ed8", level: "comfortable" },
      { name: "Prompt Engineering", Icon: FiMessageSquare, dark: "#a78bfa", light: "#6d28d9", level: "comfortable" },
    ],
  },
  {
    category: "Currently Learning",
    Icon: FiBookOpen,
    accent: true,
    skills: [
      { name: "Python (basics)", Icon: SiPython, dark: "#facc15", light: "#a16207", level: "learning" },
      { name: "Java (basics)", Icon: FaJava, dark: "#fb923c", light: "#c2410c", level: "learning" },
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Self Learning",
  "Technical Documentation",
  "Team Communication",
  "Feedback Handling",
  "Deadline Ownership",
];