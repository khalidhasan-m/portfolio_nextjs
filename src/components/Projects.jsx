"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import { projects } from "@/data/projects";

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center dark:bg-white/5 bg-black/5 gap-2">
        <FiImage size={32} className="text-amber-500/50" />
        <span className="text-xs dark:text-gray-500 text-gray-400 font-mono">{alt}</span>
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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 dark:bg-white/[0.01] bg-black/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-500 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            04. Projects
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 font-mono mb-3">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-500 text-sm max-w-lg mx-auto px-2">
            A selection of projects that demonstrate my skills in frontend development.
          </p>
        </div>

        <div ref={ref} className="section-fade grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group rounded-2xl overflow-hidden dark:bg-white/5 bg-white/90 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <ProjectImage src={project.image} alt={project.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-black/50 backdrop-blur text-white hover:bg-amber-500 hover:text-black transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-black/50 backdrop-blur text-white hover:bg-amber-500 hover:text-black transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <FiGithub size={14} />
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold dark:text-white text-gray-900 text-base sm:text-lg min-w-0">
                    {project.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-500 font-mono whitespace-nowrap flex-shrink-0">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors duration-200 min-h-[44px]"
                >
                  View More <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
