"use client";
import { useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiGithub, FiExternalLink, FiAlertCircle, FiZap, FiLayers, FiCheckCircle } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="min-h-screen dark:bg-[#0a0a0f] bg-[#f8f7f4]">
      {/* Top bar */}
      <div className="sticky top-0 z-50 dark:bg-[#0a0a0f]/90 bg-[#f8f7f4]/90 backdrop-blur-xl border-b dark:border-white/5 border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/#projects">
            <button className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors duration-200">
              <FiArrowLeft size={16} />
              Back to Portfolio
            </button>
          </Link>
          <div className="font-mono text-sm font-bold">
            <span className="text-amber-500">&lt;</span>
            <span className="dark:text-white text-gray-900">KHM</span>
            <span className="text-amber-500"> /&gt;</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
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

        {/* Project image */}
        <div className="rounded-2xl overflow-hidden mb-10 border dark:border-white/8 border-black/8 shadow-2xl">
          <img src={project.image} alt={project.name} className="w-full h-72 sm:h-96 object-cover" />
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveLink !== "#" ? (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200">
              <FiExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold text-sm cursor-not-allowed">
              <FiExternalLink size={15} />
              Live Demo (Coming Soon)
            </span>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border dark:border-white/20 border-black/20 dark:text-white text-gray-900 dark:hover:bg-white/5 hover:bg-black/5 font-semibold text-sm transition-all duration-200">
            <FiGithub size={15} />
            View on GitHub
          </a>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Description */}
          <div className="p-6 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiLayers size={18} />
              </div>
              <h2 className="text-lg font-bold dark:text-white text-gray-900 font-mono">About This Project</h2>
            </div>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="p-6 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 text-amber-500">
                <FiLayers size={18} />
              </div>
              <h2 className="text-lg font-bold dark:text-white text-gray-900 font-mono">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-700 text-sm font-mono border dark:border-white/8 border-black/8">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="p-6 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl dark:bg-green-500/10 bg-green-500/10 text-green-500">
                <FiCheckCircle size={18} />
              </div>
              <h2 className="text-lg font-bold dark:text-white text-gray-900 font-mono">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Challenges */}
            <div className="p-6 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl dark:bg-red-500/10 bg-red-500/10 text-red-400">
                  <FiAlertCircle size={18} />
                </div>
                <h2 className="text-base font-bold dark:text-white text-gray-900 font-mono">Challenges</h2>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{project.challenges}</p>
            </div>

            {/* Future Plans */}
            <div className="p-6 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl dark:bg-blue-500/10 bg-blue-500/10 text-blue-400">
                  <FiZap size={18} />
                </div>
                <h2 className="text-base font-bold dark:text-white text-gray-900 font-mono">Future Plans</h2>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{project.improvements}</p>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="mt-16 pt-10 border-t dark:border-white/8 border-black/8">
          <p className="text-sm dark:text-gray-500 text-gray-500 font-mono mb-6 tracking-widest uppercase">Other Projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.filter((p) => p.id !== project.id).slice(0, 2).map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`}>
                <div className="group p-4 rounded-2xl dark:bg-white/3 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 flex items-center gap-4">
                  <img src={p.image} alt={p.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold dark:text-white text-gray-900 group-hover:text-amber-500 transition-colors duration-200 truncate">{p.name}</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 truncate mt-0.5">{p.tagline}</p>
                  </div>
                  <FiArrowLeft size={14} className="flex-shrink-0 rotate-180 dark:text-gray-600 text-gray-400 group-hover:text-amber-500 transition-colors duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
