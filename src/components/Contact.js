"use client";
import { useEffect, useRef } from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactItems = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "khalidhasanmeskat@gmail.com",
    href: "mailto:khalidhasanmeskat@gmail.com",
    color: "text-red-400",
    bg: "dark:bg-red-500/10 bg-red-500/10",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+880 1789-163147",
    href: "tel:+8801789163147",
    color: "text-green-400",
    bg: "dark:bg-green-500/10 bg-green-500/10",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+880 1789-163147",
    href: "https://wa.me/8801789163147",
    color: "text-emerald-400",
    bg: "dark:bg-emerald-500/10 bg-emerald-500/10",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Kalapara, Patuakhali, Bangladesh",
    href: null,
    color: "text-amber-400",
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
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10 max-w-[60px]" />
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">
            05. Contact
          </span>
          <div className="h-px flex-1 dark:bg-white/10 bg-black/10" />
        </div>

        <div ref={ref} className="section-fade">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900 font-mono mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-600 max-w-xl mx-auto leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hi — my inbox is always open!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-6 font-mono">
                Reach me directly
              </h3>

              {contactItems.map((item, i) => (
                <div key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 dark:hover:border-amber-500/30 hover:border-amber-500/30 transition-all duration-300 group"
                    >
                      <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs dark:text-gray-400 text-gray-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium dark:text-gray-200 text-gray-800 group-hover:text-amber-500 transition-colors duration-200">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8">
                      <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs dark:text-gray-400 text-gray-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium dark:text-gray-200 text-gray-800">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Social links */}
              <div className="pt-4">
                <p className="text-xs dark:text-gray-400 text-gray-500 mb-3 font-mono tracking-widest uppercase">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-black/5 dark:hover:bg-amber-500/10 hover:bg-amber-500/10 dark:text-gray-400 text-gray-600 hover:text-amber-500 transition-all duration-200 text-sm font-medium border dark:border-white/5 border-black/5 dark:hover:border-amber-500/20 hover:border-amber-500/20"
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — CTA Card */}
            <div className="rounded-2xl p-8 dark:bg-white/5 bg-white/80 border dark:border-white/10 border-black/8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full" />

              <div className="relative space-y-6">
                <div className="w-14 h-14 rounded-2xl dark:bg-amber-500/10 bg-amber-500/15 flex items-center justify-center text-amber-500">
                  <FiSend size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900 font-mono mb-2">
                    Available for hire
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">
                    I&apos;m a Junior Frontend Developer actively looking for my first professional
                    role. I bring dedication, clean code, and a passion for great UI to every
                    project.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "React & Next.js specialist",
                    "Responsive, accessible UI",
                    "Fast learner & team player",
                    "Clean, well-documented code",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span className="text-sm dark:text-gray-400 text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="mailto:khalidhasanmeskat@gmail.com">
                  <button className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 mt-2">
                    <FiMail size={16} />
                    Send me an email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
