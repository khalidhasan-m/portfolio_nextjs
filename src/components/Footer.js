"use client";
import { FiGithub, FiLinkedin, FiHeart, FiCode } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t dark:border-white/8 border-black/8 dark:bg-[#080810] bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="font-mono text-xl font-bold">
              <span className="text-amber-500">&lt;</span>
              <span className="dark:text-white text-gray-900">KHM</span>
              <span className="text-amber-500"> /&gt;</span>
            </div>
            <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed max-w-xs">
              Junior Frontend Developer building clean, responsive web experiences with React &
              Next.js.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://github.com/khalidhasan-m"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-amber-500/10 hover:bg-amber-500/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/khalidhasanmeskat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-amber-500/10 hover:bg-amber-500/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold dark:text-white text-gray-900 mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm dark:text-gray-500 text-gray-500 dark:hover:text-amber-400 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold dark:text-white text-gray-900 mb-4 font-mono">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-sm dark:text-gray-500 text-gray-500">
                <a
                  href="mailto:khalidhasanmeskat@gmail.com"
                  className="dark:hover:text-amber-400 hover:text-amber-600 transition-colors duration-200"
                >
                  khalidhasanmeskat@gmail.com
                </a>
              </p>
              <p className="text-sm dark:text-gray-500 text-gray-500">
                <a
                  href="tel:+8801789163147"
                  className="dark:hover:text-amber-400 hover:text-amber-600 transition-colors duration-200"
                >
                  +880 1789-163147
                </a>
              </p>
              <p className="text-sm dark:text-gray-500 text-gray-500">
                Kalapara, Patuakhali, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t dark:border-white/5 border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs dark:text-gray-600 text-gray-400 font-mono">
            © {year} Khalid Hasan Meskat. All rights reserved.
          </p>
          <p className="text-xs dark:text-gray-600 text-gray-400 flex items-center gap-1.5">
            <FiCode size={12} />
            Built with Next.js & Tailwind CSS
            <span className="mx-1">·</span>
            Made with
            <FiHeart size={11} className="text-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
