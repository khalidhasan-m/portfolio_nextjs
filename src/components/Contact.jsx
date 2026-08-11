"use client";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const EMAIL = "khalidhasanmeskat@gmail.com";
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

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

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl text-sm dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/10 dark:text-gray-100 text-gray-900 placeholder:dark:text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/40 transition-colors min-h-[44px]";

export default function Contact() {
  const ref = useInView();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

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

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error" || status === "fail") setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    if (FORMSPREE_ID) {
      setStatus("sending");
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: `Portfolio contact from ${form.name.trim()}`,
          }),
        });
        if (!res.ok) throw new Error("submit failed");
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("fail");
      }
      return;
    }

    // Default: open the user's mail client with the message pre-filled
    const subject = encodeURIComponent(`Portfolio contact from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
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

          <div className="cq-split">
            {/* Left: direct contact */}
            <div className="space-y-3 sm:space-y-4 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold dark:text-white text-gray-900 mb-4 sm:mb-6 font-mono">
                Reach me directly
              </h3>

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

              <div className="pt-4">
                <p className="text-xs dark:text-gray-400 text-gray-500 mb-3 font-mono tracking-widest uppercase">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-3">
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

            {/* Right: form */}
            <div className="rounded-2xl p-5 sm:p-8 dark:bg-white/5 bg-white border dark:border-white/10 border-black/10 relative overflow-hidden shadow-sm">
              <div
                className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-amber-500/5 rounded-bl-full"
                aria-hidden="true"
              />

              <div className="relative space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 font-mono mb-1">
                    Send a message
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">
                    {FORMSPREE_ID
                      ? "Your message is sent to my inbox — no email app required."
                      : "Fill this out and your email client will open with the message ready to send."}
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-3.5" noValidate>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium dark:text-gray-400 text-gray-600 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium dark:text-gray-400 text-gray-600 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium dark:text-gray-400 text-gray-600 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={onChange}
                      className={`${inputClass} min-h-[100px] resize-y`}
                      placeholder="Tell me about the role or project…"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-600 dark:text-red-400" role="alert">
                      Please fill in all fields.
                    </p>
                  )}
                  {status === "fail" && (
                    <p className="text-xs text-red-600 dark:text-red-400" role="alert">
                      Something went wrong. Email me at {EMAIL} instead.
                    </p>
                  )}
                  {status === "sent" && (
                    <p className="text-xs text-green-700 dark:text-green-400" role="status">
                      {FORMSPREE_ID ? "Message sent — thanks!" : "Opening your email client…"}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <FiSend size={16} aria-hidden="true" />
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
