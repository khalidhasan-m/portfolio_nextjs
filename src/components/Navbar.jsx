"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-[#0a0a0f]/90 bg-[#f8f7f4]/90 backdrop-blur-xl border-b dark:border-white/5 border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="font-mono text-lg font-bold tracking-tight">
            <span className="text-amber-500">&lt;</span>
            <span className="dark:text-white text-gray-900">KHM</span>
            <span className="text-amber-500"> /&gt;</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href.replace("#", "")
                    ? "text-amber-500 dark:bg-amber-500/10 bg-amber-500/15"
                    : "dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/5 hover:bg-black/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 transition-all duration-200 dark:text-gray-300 text-gray-600"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FiSun size={18} className="text-amber-400" />
                ) : (
                  <FiMoon size={18} className="text-amber-600" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-600"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden dark:bg-[#0a0a0f]/95 bg-[#f8f7f4]/95 backdrop-blur-xl border-b dark:border-white/5 border-black/5`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                active === link.href.replace("#", "")
                  ? "text-amber-500 dark:bg-amber-500/10 bg-amber-500/15"
                  : "dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
