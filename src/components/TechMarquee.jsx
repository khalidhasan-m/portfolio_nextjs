"use client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { skillCategories } from "@/data/skills";

const items = skillCategories.flatMap((cat) => cat.skills);


function TechItem({ item, isDark }) {
  return (
    <div className="mx-6 sm:mx-8 flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity">
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
  );
}

export default function TechMarquee() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const techList = items.map((i) => i.name).join(", ");

  return (
    <section
      aria-label={`Technologies: ${techList}`}
      className="py-8 sm:py-10 border-y dark:border-white/5 border-black/5 dark:bg-white/[0.02] bg-black/[0.02]"
    >
      {reduceMotion ? (
        <div className="flex flex-wrap justify-center gap-y-3 max-w-6xl mx-auto px-4">
          {items.map((item) => (
            <TechItem key={item.name} item={item} isDark={isDark} />
          ))}
        </div>
      ) : (
        <div aria-hidden="true">
          <Marquee pauseOnHover speed={40} gradient={false}>
            {items.map((item) => (
              <TechItem key={item.name} item={item} isDark={isDark} />
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
}
