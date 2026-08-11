"use client";
import { useState } from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiCopy, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const EMAIL = "khalidhasanmeskat@gmail.com";

const contactItems = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "text-red-600 dark:text-red-400",
    bg: "dark:bg-red-500/10 bg-red-500/10",
    copyable: true,
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+880 1789-163147",
    href: "tel:+8801789163147",
    color: "text-green-700 dark:text-green-400",
    bg: "dark:bg-green-500/10 bg-green-500/10",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+880 1789-163147",
    href: "https://wa.me/8801789163147",
    color: "text-emerald-700 dark:text-emerald-400",
    bg: "dark:bg-emerald-500/10 bg-emerald-500/10",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Kalapara, Patuakhali, Bangladesh",
    href: null,
    color: "text-amber-700 dark:text-amber-400",
    bg: "dark:bg-amber-500/10 bg-amber-500/10",
  },
];

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    href: "https://github.com/khalidhasan-m",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/khalidhasanmeskat",
  },
];

export default function Contact() {
  const ref = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden cq-section">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[40px] sm:max-w-[60px]" />
          <span className="section-label text-amber-600 dark:text-amber-400 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase shrink-0">
            06. Contact
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="cq-heading font-bold dark:text-white text-gray-900 font-mono mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-600 max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
              I&apos;m open to new opportunities. Whether you have a project in mind, want to collaborate,
              or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-3 sm:space-y-4 min-w-0">
            {contactItems.map((item, i) => (
              <div key={i} className="relative">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="cq-contact-item flex items-center rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 group min-h-[56px] shadow-sm"
                  >
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs dark:text-gray-400 text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium dark:text-gray-200 text-gray-800 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 truncate">
                        {item.value}
                      </p>
                    </div>
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="ml-2 p-2 rounded-lg dark:hover:bg-white/10 hover:bg-black/5 dark:text-gray-400 text-gray-600 min-w-[40px] min-h-[40px] flex items-center justify-center"
                        aria-label={copied ? "Email copied" : "Copy email"}
                      >
                        {copied ? (
                          <FiCheck size={16} className="text-green-600 dark:text-green-400" aria-hidden="true" />
                        ) : (
                          <FiCopy size={16} aria-hidden="true" />
                        )}
                      </button>
                    )}
                  </a>
                ) : (
                  <div className="cq-contact-item flex items-center rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 min-h-[56px] shadow-sm">
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs dark:text-gray-400 text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium dark:text-gray-200 text-gray-800">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Primary mailto CTA */}
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello from your portfolio")}`}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 min-h-[48px]"
            >
              <FiMail size={16} aria-hidden="true" />
              Email me
            </a>

            <div className="pt-6">
              <p className="text-xs dark:text-gray-400 text-gray-500 mb-3 font-mono tracking-widest uppercase text-center">
                Find me on
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-black/5 dark:hover:bg-amber-500/10 hover:bg-amber-500/10 dark:text-gray-300 text-gray-700 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 text-sm font-medium border dark:border-white/5 border-black/10 dark:hover:border-amber-500/20 hover:border-amber-500/20 min-h-[44px]"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
