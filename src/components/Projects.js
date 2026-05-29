"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 dark:bg-white/[0.01] bg-black/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[60px]" />
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">04. Projects</span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white text-gray-900 font-mono mb-3">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="dark:text-gray-500 text-gray-500 text-sm max-w-lg mx-auto">
            A selection of projects that demonstrate my skills in frontend development.
          </p>
        </div>

        <div ref={ref} className="section-fade grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card group rounded-2xl overflow-hidden dark:bg-white/3 bg-white/90 border dark:border-white/8 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/90 text-black font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-3xl font-bold text-white/20 font-mono">0{i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold dark:text-white text-gray-900 text-lg mb-1 group-hover:text-amber-500 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-600 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded dark:bg-white/5 bg-black/5 dark:text-gray-500 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs transition-all duration-200">
                      View Details
                      <FiArrowRight size={12} />
                    </button>
                  </Link>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FiGithub size={15} />
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
                      aria-label="Live"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
