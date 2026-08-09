"use client";
import { useEffect, useRef } from "react";
import { FiCode, FiHeart, FiBook, FiCoffee } from "react-icons/fi";
import { GiSoccerBall } from "react-icons/gi";

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: "Clean Code",
    desc: "Writing scalable, maintainable code is my priority",
  },
  {
    icon: <FiHeart size={20} />,
    title: "UI/UX Passion",
    desc: "I love crafting beautiful, intuitive interfaces",
  },
  {
    icon: <FiBook size={20} />,
    title: "Continuous Learning",
    desc: "Always exploring new tools and best practices",
  },
  {
    icon: <GiSoccerBall size={20} />,
    title: "Team Player",
    desc: "I enjoy collaborating and sharing knowledge",
  },
];

export default function About() {
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
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-500 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            01. About Me
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-4 sm:space-y-6 min-w-0">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 font-mono">
              A bit about <span className="gradient-text">myself</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base dark:text-gray-300 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a frontend developer based in Bangladesh with a passion for building clean,
                responsive, and user-friendly web experiences. My background in English literature
                gives me strong communication and analytical skills that I bring into every project.
              </p>
              <p>
                I specialize in the React and Next.js ecosystem — crafting modern interfaces with
                Tailwind CSS, implementing secure authentication, and integrating REST APIs. I care
                deeply about code quality, accessibility, and polished UI details.
              </p>
              <p>
                Outside of coding, I enjoy football, reading, and exploring new technologies. I&apos;m
                always looking for opportunities to grow and contribute to meaningful products.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <FiCoffee size={18} className="text-amber-500 flex-shrink-0" />
              <span className="text-sm dark:text-gray-400 text-gray-500 font-mono">
                Fueled by coffee &amp; curiosity
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-3 sm:p-5 rounded-2xl dark:bg-white/5 bg-black/3 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="p-2 sm:p-2.5 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500 w-fit mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-semibold dark:text-white text-gray-900 mb-1 text-xs sm:text-sm">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
