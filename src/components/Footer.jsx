"use client";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t dark:border-white/10 border-black/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Quick nav */}
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {quickLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 dark:text-gray-600 text-gray-400 select-none" aria-hidden="true">
                    ·
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="px-2 py-2 text-sm font-medium dark:text-gray-400 text-gray-600 dark:hover:text-amber-400 hover:text-amber-600 transition-colors duration-200 min-h-[44px]"
                >
                  {link.label}
                </button>
              </span>
            ))}
          </nav>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-mono text-sm dark:text-gray-400 text-gray-600">
                Designed & built by{" "}
                <span className="text-amber-600 dark:text-amber-400">Khalid Hasan Meskat</span>
              </p>
              <p className="text-xs dark:text-gray-500 text-gray-500 mt-1">
                © {new Date().getFullYear()} — All rights reserved
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/khalidhasan-m"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/khalidhasanmeskat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:khalidhasanmeskat@gmail.com"
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <FiMail size={18} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={scrollTop}
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Back to top"
              >
                <FiArrowUp size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
