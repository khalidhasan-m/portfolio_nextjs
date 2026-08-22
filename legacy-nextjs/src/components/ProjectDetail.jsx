"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiAlertCircle,
  FiZap,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectDetail({ project }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#0a0a0f] bg-[#f8f7f4]">
      <header className="sticky top-0 z-50 dark:bg-[#0a0a0f]/90 bg-[#f8f7f4]/90 backdrop-blur-xl border-b dark:border-white/5 border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors duration-200 min-h-[44px] px-1"
          >
            <FiArrowLeft size={16} aria-hidden="true" />
            Back to Portfolio
          </Link>
          <Link href="/" className="font-mono text-sm font-bold min-h-[44px] inline-flex items-center" aria-label="Home">
            <span className="text-amber-500" aria-hidden="true">&lt;</span>
            <span className="dark:text-white text-gray-900">KHM</span>
            <span className="text-amber-500" aria-hidden="true">{" "}/&gt;</span>
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-mono border dark:border-amber-500/20 border-amber-500/30">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900 font-mono mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-lg dark:text-gray-400 text-gray-600 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 border dark:border-white/10 border-black/8 shadow-2xl h-72 sm:h-96">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveLink !== "#" ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 min-h-[44px]"
            >
              <FiExternalLink size={15} aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold text-sm cursor-not-allowed min-h-[44px]">
              <FiExternalLink size={15} aria-hidden="true" />
              Live Demo (Coming Soon)
            </span>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border dark:border-white/20 border-black/20 dark:text-white text-gray-900 dark:hover:bg-white/5 hover:bg-black/5 font-semibold text-sm transition-all duration-200 min-h-[44px]"
          >
            <FiGithub size={15} aria-hidden="true" />
            View on GitHub
          </a>
        </div>

        <div className="space-y-6">
          <section className="p-6 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8" aria-labelledby="about-heading">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiLayers size={18} aria-hidden="true" />
              </div>
              <h2 id="about-heading" className="text-lg font-bold dark:text-white text-gray-900 font-mono">
                About This Project
              </h2>
            </div>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed">{project.description}</p>
          </section>

          <section className="p-6 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8" aria-labelledby="tech-heading">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiLayers size={18} aria-hidden="true" />
              </div>
              <h2 id="tech-heading" className="text-lg font-bold dark:text-white text-gray-900 font-mono">
                Tech Stack
              </h2>
            </div>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="px-3 py-1.5 rounded-lg dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700 text-sm font-mono border dark:border-white/10 border-black/8"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8" aria-labelledby="features-heading">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-green-500/10 bg-green-500/10 text-green-500">
                <FiCheckCircle size={18} aria-hidden="true" />
              </div>
              <h2 id="features-heading" className="text-lg font-bold dark:text-white text-gray-900 font-mono">
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <section className="p-6 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8" aria-labelledby="challenges-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl dark:bg-red-500/10 bg-red-500/10 text-red-400">
                  <FiAlertCircle size={18} aria-hidden="true" />
                </div>
                <h2 id="challenges-heading" className="text-base font-bold dark:text-white text-gray-900 font-mono">
                  Challenges
                </h2>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{project.challenges}</p>
            </section>

            <section className="p-6 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8" aria-labelledby="plans-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl dark:bg-blue-500/10 bg-blue-500/10 text-blue-400">
                  <FiZap size={18} aria-hidden="true" />
                </div>
                <h2 id="plans-heading" className="text-base font-bold dark:text-white text-gray-900 font-mono">
                  Future Plans
                </h2>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{project.improvements}</p>
            </section>
          </div>
        </div>

        <nav className="mt-16 pt-10 border-t dark:border-white/10 border-black/8" aria-label="Other projects">
          <p className="text-sm dark:text-gray-400 text-gray-500 font-mono mb-6 tracking-widest uppercase">
            Other Projects
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group p-4 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 flex items-center gap-4 min-h-[80px]"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold dark:text-white text-gray-900 group-hover:text-amber-500 transition-colors duration-200 truncate">
                      {p.name}
                    </p>
                    <p className="text-xs dark:text-gray-400 text-gray-500 truncate mt-0.5">{p.tagline}</p>
                  </div>
                  <FiArrowLeft
                    size={14}
                    className="flex-shrink-0 rotate-180 dark:text-gray-400 text-gray-400 group-hover:text-amber-500 transition-colors duration-200"
                    aria-hidden="true"
                  />
                </Link>
              ))}
          </div>
        </nav>
      </article>
    </div>
  );
}
