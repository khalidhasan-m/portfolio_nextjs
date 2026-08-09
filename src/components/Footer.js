"use client";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t dark:border-white/10 border-black/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm dark:text-gray-400 text-gray-500">
              Designed & built by{" "}
              <span className="text-amber-500">Khalid Hasan Meskat</span>
            </p>
            <p className="text-xs dark:text-gray-500 text-gray-400 mt-1">
              © {new Date().getFullYear()} — All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/khalidhasan-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/khalidhasanmeskat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:khalidhasanmeskat@gmail.com"
              className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <button
              onClick={scrollTop}
              className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
