"use client";
import { useState } from "react";
import {
  FiLayout,
  FiSmartphone,
  FiShield,
  FiZap,
  FiCode,
  FiCheck,
} from "react-icons/fi";

const services = [
  {
    id: "ui",
    icon: FiLayout,
    title: "Frontend UI Development",
    short: "Modern, responsive interfaces with React & Next.js",
    points: [
      "Pixel-conscious layouts with Tailwind CSS",
      "Reusable components (HeroUI, shadcn/ui)",
      "Dark mode and accessible design patterns",
    ],
  },
  {
    id: "apps",
    icon: FiSmartphone,
    title: "Full-stack Web Apps",
    short: "Auth, APIs, and deployment-ready projects",
    points: [
      "Email/password & OAuth authentication",
      "Protected routes and session handling",
      "REST API integration with Axios",
    ],
  },
  {
    id: "motion",
    icon: FiZap,
    title: "Motion & Polish",
    short: "Subtle animations that improve UX",
    points: [
      "Framer Motion page and component motion",
      "Hover states and micro-interactions",
      "Performance-conscious effects",
    ],
  },
  {
    id: "ship",
    icon: FiCode,
    title: "Ship & Maintain",
    short: "Clean repos, Vercel deploys, readable code",
    points: [
      "Public GitHub-ready project structure",
      "Vercel deployment and env setup",
      "Refactoring and feature iteration",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("ui");
  const current = services.find((s) => s.id === active) || services[0];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 cq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-600 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            02. Services
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono mb-3">
            How I can <span className="gradient-text">help</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-600 text-sm max-w-lg mx-auto px-2">
            Select a service to see what I typically deliver. Click around — it&apos;s interactive.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="lg:col-span-2 flex flex-col gap-2" role="tablist" aria-label="Services">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`service-tab-${s.id}`}
                  aria-controls={`service-panel-${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border transition-all duration-200 min-h-[52px] ${
                    isActive
                      ? "dark:bg-amber-500/15 bg-amber-500/15 border-amber-500/40 dark:border-amber-500/40"
                      : "dark:bg-white/5 bg-white border-black/10 dark:border-white/10 hover:border-amber-500/30 dark:hover:border-amber-500/25"
                  }`}
                >
                  <span
                    className={`p-2 rounded-lg flex-shrink-0 ${
                      isActive
                        ? "bg-amber-500 text-black"
                        : "dark:bg-white/10 bg-black/5 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold dark:text-white text-gray-900">
                      {s.title}
                    </span>
                    <span className="block text-xs dark:text-gray-400 text-gray-600 mt-0.5 line-clamp-1">
                      {s.short}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="lg:col-span-3"
            role="tabpanel"
            id={`service-panel-${current.id}`}
            aria-labelledby={`service-tab-${current.id}`}
          >
            <div className="h-full rounded-2xl p-5 sm:p-8 dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 shadow-sm transition-opacity duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-amber-500 text-black">
                  <current.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold dark:text-white text-gray-900 text-lg">
                    {current.title}
                  </h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">{current.short}</p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm dark:text-gray-300 text-gray-700">
                    <FiCheck className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" size={16} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black text-sm font-semibold transition-colors min-h-[44px]"
              >
                <FiShield size={16} aria-hidden="true" />
                Let&apos;s work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
