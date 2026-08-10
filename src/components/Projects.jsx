"use client";
import { useEffect, useRef, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import { projects } from "@/data/projects";

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center dark:bg-white/5 bg-black/5 gap-2">
        <FiImage size={32} className="text-amber-600/60 dark:text-amber-500/50" aria-hidden="true" />
        <span className="text-xs dark:text-gray-400 text-gray-600 font-mono">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" aria-label="Projects" className="py-16 sm:py-20 lg:py-24 dark:bg-white/[0.01] bg-black/[0.01] cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" aria-hidden="true" />
          <span className="section-label text-amber-700 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            04. Projects
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" aria-hidden="true" />
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono mb-3">
            Things I&apos;ve <span className="text-amber-600 dark:text-amber-400">Built</span>
          </h2>
          <p className="dark:text-gray-300 text-gray-700 text-sm max-w-lg mx-auto px-2">
            A selection of projects that demonstrate my skills in frontend development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 min-h-[36px] ${
                filter === cat
                  ? "bg-amber-500 text-black shadow-sm"
                  : "dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700 dark:hover:bg-white/10 hover:bg-black/10 border dark:border-white/10 border-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="section-fade cq-grid">
          <div className="cq-cols">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="project-card cq-card group rounded-2xl overflow-hidden dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 shadow-sm"
                >
                  <div className="relative cq-card-media overflow-hidden">
                    <ProjectImage src={project.image} alt={`${project.name} preview`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-black/50 backdrop-blur text-white hover:bg-amber-500 hover:text-black transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                        aria-label={`Live demo of ${project.name}`}
                      >
                        <FiExternalLink size={14} aria-hidden="true" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-black/50 backdrop-blur text-white hover:bg-amber-500 hover:text-black transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                        aria-label={`GitHub repository for ${project.name}`}
                      >
                        <FiGithub size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="cq-card-body space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="cq-card-title font-semibold dark:text-white text-gray-900 min-w-0">
                        {project.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700 font-mono whitespace-nowrap flex-shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-sm text-amber-700 dark:text-amber-400 hover:text-amber-600 font-medium transition-colors duration-200 min-h-[44px]"
                    >
                      View More <FiArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
