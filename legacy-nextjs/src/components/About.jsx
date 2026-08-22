"use client";
import { useState } from "react";
import { FiCode, FiHeart, FiBook, FiCoffee, FiChevronDown } from "react-icons/fi";
import { GiSoccerBall } from "react-icons/gi";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: "Clean Code",
    desc: "Readable structure, clear naming, and components that stay easy to extend months later.",
  },
  {
    icon: <FiHeart size={20} />,
    title: "UI that feels right",
    desc: "Spacing, motion, and accessibility — the details people feel even when they can’t name them.",
  },
  {
    icon: <FiBook size={20} />,
    title: "Always learning",
    desc: "Real projects, docs, and open source keep me sharp — from React patterns to auth and APIs.",
  },
  {
    icon: <GiSoccerBall size={20} />,
    title: "Team player",
    desc: "Clear communication and collaboration matter as much as code. I enjoy shipping with others.",
  },
];

const facts = [
  { label: "Based in", value: "Bangladesh" },
  { label: "Focus", value: "Frontend · React · Next.js" },
  { label: "Background", value: "English Literature + Web Dev" },
  { label: "Open to", value: "Remote · Freelance · Full-time" },
];

export default function About() {
  const ref = useInView();
  const [openCard, setOpenCard] = useState(null);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-600 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            01. About Me
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade cq-split">
          <div className="space-y-4 sm:space-y-6 min-w-0">
            <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono">
              A bit about <span className="gradient-text">myself</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base dark:text-gray-300 text-gray-700 leading-relaxed">
              <p>
                I&apos;m <strong className="dark:text-white text-gray-900">Khalid Hasan Meskat</strong> — a
                frontend developer from Bangladesh who turns ideas into responsive, accessible web
                experiences with{" "}
                <span className="text-amber-700 dark:text-amber-400 font-medium">React</span> and{" "}
                <span className="text-amber-700 dark:text-amber-400 font-medium">Next.js</span>.
              </p>
              <p>
                Studying English literature taught me to write clearly and think in structure. Building
                for the web gave that skill a practical outlet: clean components, secure auth, REST
                integrations, and interfaces that hold up on every screen size.
              </p>
              <p>
                My toolkit includes Tailwind CSS, HeroUI, shadcn/ui, Framer Motion, Better Auth, and
                JWT. I keep projects public on GitHub and ship them on Vercel — because shipping is how
                I learn fastest.
              </p>
              <p>
                Off the screen I follow football, read, and tinker with new libraries. I&apos;m open to
                roles and collaborations where I can grow, contribute, and help build products people
                actually enjoy using.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl px-3 py-2.5 dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/8"
                >
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider dark:text-gray-500 text-gray-500">
                    {f.label}
                  </p>
                  <p className="text-xs sm:text-sm font-medium dark:text-gray-200 text-gray-800 mt-0.5">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <FiCoffee size={18} className="text-amber-600 dark:text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm dark:text-gray-400 text-gray-600 font-mono">
                Fueled by coffee &amp; curiosity
              </span>
            </div>
          </div>

          <div className="cq-grid">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, i) => {
                const isOpen = openCard === i;
                return (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => setOpenCard(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`text-left rounded-2xl dark:bg-white/5 bg-white border transition-all duration-300 group p-3 sm:p-4 shadow-sm ${
                      isOpen
                        ? "border-amber-500/50 dark:border-amber-500/40 ring-1 ring-amber-500/20"
                        : "dark:border-white/10 border-black/10 dark:hover:border-amber-500/30 hover:border-amber-500/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-2 sm:p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-600 dark:text-amber-400 w-fit group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <FiChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`dark:text-gray-500 text-gray-400 mt-1 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <h3 className="font-semibold dark:text-white text-gray-900 text-sm mt-2 sm:mt-3">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs dark:text-gray-400 text-gray-600 leading-relaxed mt-1.5 overflow-hidden transition-all duration-200 ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-10 opacity-90 line-clamp-2"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] dark:text-gray-500 text-gray-500 font-mono mt-2 text-center sm:text-left">
              Tap a card to expand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
