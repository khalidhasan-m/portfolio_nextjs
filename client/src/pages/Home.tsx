/**
 * Design: The Masterwork Index — post-digital editorial portfolio.
 * Graphite + mineral palette, signal vermilion, asymmetric editorial spine,
 * and restrained 3D depth used as evidence of craft rather than ornament.
 */
import { useEffect, useState, type ChangeEvent, type CSSProperties, type FormEvent, type MouseEvent, type PointerEvent } from "react";
import { trpc } from "@/lib/trpc";
import "./premium-expansion.css";
import "./portfolio-polish.css";
import "./premium-logo.css";
import "./dark-mode.css";
import "./evidence-polish.css";
import "./contact-form.css";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Command,
  Copy,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MonitorUp,
  MoveUpRight,
  Moon,
  PanelTop,
  Rocket,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/masterwork-hero-prism_8be4df2b.png";
const ORBIT_IMAGE = "/manus-storage/masterwork-expertise-orbit_2f4cf6e6.png";
const CASE_STUDY_IMAGE = "/manus-storage/masterwork-case-study-plane_b0d573e2.png";
const LOGO_IMAGE = "/manus-storage/khalid-masterwork-prism-logo_f05fd20b.png";
const PROFILE_IMAGE = "/manus-storage/khalid-profile_3634e3c4.jpg";
const RESUME_URL = "/manus-storage/khalid-hasan-meskat-resume_e12a210c.pdf";
const EMAIL = "khalidhasanmeskat@gmail.com";

const projects = [
  {
    index: "06", name: "RouteForm", category: "Interactive", type: "Progressive project estimator",
    detail: "A step-by-step browser tool that helps a client frame the format, priorities, and pace of a project before scope begins to drift.",
    stack: ["HTML", "CSS", "JavaScript"], evidence: "/manus-storage/route-form-evidence_8c9ee2c8.png", evidenceLabel: "ESTIMATOR · PROJECT SHAPE", proof: "Every choice updates a shareable delivery route in real time.", live: "https://khalidhasan-m.github.io/route-form/", code: "https://github.com/khalidhasan-m/route-form",
  },
  {
    index: "05", name: "SignalDesk", category: "Interactive", type: "Interactive project health dashboard",
    detail: "A compact product dashboard that turns workstream status, team updates, and the next best decision into a clear delivery signal.",
    stack: ["HTML", "CSS", "JavaScript"], evidence: "/manus-storage/signal-desk-evidence_a5a55295.png", evidenceLabel: "DASHBOARD · DELIVERY SIGNAL", proof: "Health modes, workstreams, and activity filters update without losing context.", live: "https://khalidhasan-m.github.io/signal-desk/", code: "https://github.com/khalidhasan-m/signal-desk",
  },
  {
    index: "04", name: "ScopeSprint", category: "Interactive", type: "Interactive project brief builder",
    detail: "A compact browser experience that turns a loose project idea into a focused direction through live configuration, priority signals, and a shareable summary.",
    stack: ["HTML", "CSS", "JavaScript"], evidence: "/manus-storage/scopesprint-evidence_0bce8fb4.png", evidenceLabel: "INTERACTIVE BRIEF · LIVE SIGNAL", proof: "Live inputs refresh the client brief in real time.", live: null, code: "https://github.com/khalidhasan-m/scope-sprint",
  },
  {
    index: "01", name: "PawfectMatch", category: "Full stack", type: "Full-stack adoption platform",
    detail: "Search, adoption workflows, owner tools, and a shared status model that keeps public and dashboard views in step.",
    stack: ["React", "Express", "MongoDB"], evidence: "/manus-storage/pawfectmatch-evidence_276086d8.png", evidenceLabel: "ADOPTION FLOW · DASHBOARD", proof: "One shared adoption status keeps owner and public views in step.", live: "https://pet-adoption-client-gamma.vercel.app/", code: "https://github.com/khalidhasan-m/pet-adoption-client",
  },
  {
    index: "02", name: "Wanderlust", category: "Full stack", type: "Authenticated travel platform",
    detail: "A content-rich product with protected authoring flows, ownership-aware CRUD, and intentional App Router boundaries.",
    stack: ["Next.js", "Better Auth", "MongoDB"], evidence: "/manus-storage/wanderlust-evidence_2517ab74.png", evidenceLabel: "AUTH · OWNERSHIP CONTROLS", proof: "Ownership-aware routes keep private editing separate from browsing.", live: "https://wanderlust-seven-gules.vercel.app/", code: "https://github.com/khalidhasan-m/wanderlust",
  },
  {
    index: "03", name: "SunCart", category: "Commerce", type: "Commerce experience",
    detail: "A polished shopping journey that combines OAuth, product discovery, and guarded post-login order flows.",
    stack: ["Next.js", "HeroUI", "Embla"], evidence: "/manus-storage/suncart-evidence_3265f133.png", evidenceLabel: "CATALOGUE · PROTECTED ORDERS", proof: "OAuth and protected routes keep the order journey secure.", live: "https://assignment8-kappa.vercel.app/", code: "https://github.com/khalidhasan-m/assignment8",
  },
];

const services = [
  {
    key: "interface", number: "01", icon: PanelTop, title: "Interface systems", short: "Front-end experiences that look intentional at every breakpoint.",
    copy: "From a landing page to a more involved product surface, I turn a brand, an objective, and a user journey into a responsive visual system.",
    outputs: ["Responsive page architecture", "Accessible components", "Tailwind or component-library systems"],
  },
  {
    key: "product", number: "02", icon: Layers3, title: "Product workflows", short: "Useful paths through the hard parts of a digital product.",
    copy: "I shape the states around a real task: discovery, onboarding, protected areas, data changes, and the useful in-between moments.",
    outputs: ["Route and state planning", "Protected user flows", "Clear empty, loading, and error states"],
  },
  {
    key: "motion", number: "03", icon: Sparkles, title: "Motion & polish", short: "Micro-interactions that create confidence instead of distraction.",
    copy: "The useful kind of motion explains hierarchy, gives feedback, and helps a product feel crafted without consuming attention or performance.",
    outputs: ["Pointer-aware detail", "Purposeful transition systems", "Reduced-motion support"],
  },
  {
    key: "ship", number: "04", icon: Rocket, title: "Ship & iterate", short: "Clean builds, sensible handoff, and a foundation to improve.",
    copy: "A finished interface needs more than an attractive surface. I build with readable structure, pragmatic integrations, and deployment in mind.",
    outputs: ["Next.js and Vercel workflows", "GitHub-ready source", "Refinement after feedback"],
  },
];

const processSteps = [
  { number: "01", label: "Frame", title: "Find the real ask", text: "Align the requested feature with the outcome it needs to create for the business and the person using it." },
  { number: "02", label: "Shape", title: "Make the path visible", text: "Turn the objective into a hierarchy, a small set of deliberate choices, and a clear route through the experience." },
  { number: "03", label: "Build", title: "Give the system form", text: "Build the responsive interface, meaningful states, and interactions with performance and accessibility in the same conversation." },
  { number: "04", label: "Refine", title: "Make it earn attention", text: "Test the details that create confidence: hierarchy, feedback, awkward edge cases, and the quality of the final handoff." },
];

const facts = [
  ["Based in", "Bangladesh · worldwide"], ["Focus", "Frontend · React · Next.js"], ["Open to", "Remote · freelance · full-time"], ["Working style", "Clear, practical, collaborative"],
];

const faqs = [
  ["What kind of projects do you take on?", "I’m most useful when a project needs a polished frontend, a clearer product flow, or an end-to-end web build with authentication, APIs, and thoughtful responsive behavior."],
  ["Can you work with an existing design or codebase?", "Yes. I can implement an existing visual direction, refine an interface that has already shipped, or work inside an existing React or Next.js project with care for its current structure."],
  ["How do we start a project?", "Send a short outline of the outcome, the current state, and any deadline or constraints. I’ll use that to clarify the right next conversation and a focused first milestone."],
  ["Are you open to ongoing collaboration?", "Yes. I’m open to independent product work, freelance delivery, and full-time or remote opportunities where consistent craft and collaboration matter."],
];

type TiltStyle = CSSProperties & { "--tilt-x"?: string; "--tilt-y"?: string; "--glow-x"?: string; "--glow-y"?: string };
type ProjectTiltStyle = CSSProperties & { "--card-tilt-x"?: string; "--card-tilt-y"?: string; "--card-light-x"?: string; "--card-light-y"?: string; "--card-shadow-x"?: string; "--card-shadow-y"?: string };
type Project = (typeof projects)[number];
type ContactValues = { name: string; email: string; company: string; projectType: string; budget: string; message: string; website: string };
const emptyContactValues: ContactValues = { name: "", email: "", company: "", projectType: "", budget: "", message: "", website: "" };

function BrandMark({ className = "" }: { className?: string }) {
  return <span className={`brand-prism ${className}`} aria-hidden="true"><img src={LOGO_IMAGE} alt="" /><i /><b /></span>;
}

function ProjectCard({ project }: { project: Project }) {
  const resetStyle: ProjectTiltStyle = { "--card-tilt-x": "0deg", "--card-tilt-y": "0deg", "--card-light-x": "50%", "--card-light-y": "50%", "--card-shadow-x": "0px", "--card-shadow-y": "0px" };
  const [tilt, setTilt] = useState<ProjectTiltStyle>(resetStyle);
  const moveCard = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ "--card-tilt-x": `${-y * 5.5}deg`, "--card-tilt-y": `${x * 5.5}deg`, "--card-light-x": `${(x + 0.5) * 100}%`, "--card-light-y": `${(y + 0.5) * 100}%`, "--card-shadow-x": `${x * -9}px`, "--card-shadow-y": `${y * 9}px` });
  };
  return <article className={`project-card project-${project.index} ${project.index === "06" || project.index === "05" ? "project-featured" : ""}`} style={tilt} onPointerMove={moveCard} onPointerLeave={() => setTilt(resetStyle)}>
    <div className="project-card-depth" aria-hidden="true" />
    <div className="project-art"><img className="project-material" src={CASE_STUDY_IMAGE} alt="" /><img className="project-evidence" src={project.evidence} alt={`${project.name} project screen`} /><span>{project.index}</span><div className="evidence-tag">{project.evidenceLabel}</div><div className="project-art-square" /></div>
    <div className="project-main"><div className="project-coordinate"><span>CASE / {project.index}</span><span>{project.category.toUpperCase()}</span></div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-detail">{project.detail}</p><p className="project-proof"><span>PROOF</span>{project.proof}</p>{project.live && <a className="project-live-url" href={project.live} target="_blank" rel="noreferrer"><span>LIVE DEPLOYMENT</span><strong>{project.live.replace("https://", "").replace(/\/$/, "")}</strong><ArrowUpRight size={15} /></a>}<div className="project-footer"><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links">{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Open live <ArrowUpRight size={14} /></a> : <span className="project-pending">Live link soon</span>}<a href={project.code} target="_blank" rel="noreferrer">Code <Github size={14} /></a></div></div></div>
  </article>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = window.localStorage.getItem("khalid-portfolio-theme");
    return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeService, setActiveService] = useState("interface");
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactValues, setContactValues] = useState<ContactValues>(emptyContactValues);
  const [contactFeedback, setContactFeedback] = useState<{ tone: "idle" | "success" | "error"; message: string }>({ tone: "idle", message: "" });
  const [tilt, setTilt] = useState<TiltStyle>({ "--tilt-x": "0deg", "--tilt-y": "0deg", "--glow-x": "50%", "--glow-y": "46%" });
  const currentService = services.find((service) => service.key === activeService) ?? services[0];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
  const submitInquiry = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setContactFeedback({ tone: "success", message: "Message received. Khalid will respond as soon as possible." });
      setContactValues(emptyContactValues);
    },
    onError: (error) => setContactFeedback({ tone: "error", message: error.message || "Unable to send your message right now. Please use the email link instead." }),
  });

  useEffect(() => {
    const updateProgress = () => setScrollProgress(Math.round((window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)) * 100));
    const shortcuts = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen((open) => !open); }
      if (event.key === "Escape") { setCommandOpen(false); setMenuOpen(false); }
    };
    updateProgress(); window.addEventListener("scroll", updateProgress, { passive: true }); window.addEventListener("keydown", shortcuts);
    return () => { window.removeEventListener("scroll", updateProgress); window.removeEventListener("keydown", shortcuts); };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("khalid-portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const movePrism = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ "--tilt-x": `${-y * 8}deg`, "--tilt-y": `${x * 10}deg`, "--glow-x": `${(x + 0.5) * 100}%`, "--glow-y": `${(y + 0.5) * 100}%` });
  };
  const resetPrism = () => setTilt({ "--tilt-x": "0deg", "--tilt-y": "0deg", "--glow-x": "50%", "--glow-y": "46%" });
  const goTo = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); setCommandOpen(false); setMenuOpen(false); };
  const copyEmail = async () => { try { await navigator.clipboard.writeText(EMAIL); setEmailCopied(true); window.setTimeout(() => setEmailCopied(false), 2400); } catch { setEmailCopied(false); } };
  const updateContact = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setContactValues((current) => ({ ...current, [name]: value }));
  };
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactFeedback({ tone: "idle", message: "" });
    submitInquiry.mutate(contactValues);
  };

  return <div className={`site-shell ${isDark ? "is-dark" : ""}`}>
    <div className="scroll-indicator" aria-hidden="true"><i style={{ width: `${scrollProgress}%` }} /></div>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Khalid Hasan Meskat home"><BrandMark className="brand-mark" /><span className="brand-copy">Khalid<br />Hasan Meskat</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Method</a><a href="#contact">Contact</a></nav>
      <div className="header-actions"><button className="theme-toggle" type="button" aria-pressed={isDark} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setIsDark((value) => !value)}>{isDark ? <Sun size={14} /> : <Moon size={14} />}<span>{isDark ? "Light" : "Dark"}</span></button><button className="nav-command" onClick={() => setCommandOpen(true)} type="button"><Command size={13} /> Explore <kbd>⌘K</kbd></button><a className="header-cta" href="#contact">Bring the difficult brief <ArrowUpRight size={15} /></a><button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </header>
    <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}><button onClick={() => goTo("#about")}>About</button><button onClick={() => goTo("#services")}>Services</button><button onClick={() => goTo("#work")}>Selected work</button><button onClick={() => goTo("#process")}>Method</button><button onClick={() => goTo("#contact")}>Contact</button></div>
    {commandOpen && <div className="command-overlay" role="dialog" aria-modal="true" aria-label="Quick portfolio navigation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCommandOpen(false); }}><div className="command-panel"><div className="command-title"><span>QUICK NAVIGATION</span><button onClick={() => setCommandOpen(false)} aria-label="Close quick navigation"><X size={17} /></button></div><p>Choose a section or use <kbd>Esc</kbd> to close.</p><div className="command-list">{[["ABOUT", "#about"], ["SERVICES", "#services"], ["SELECTED WORK", "#work"], ["METHOD", "#process"], ["CONTACT", "#contact"]].map(([label, id], index) => <button key={id} onClick={() => goTo(id)}><span>0{index + 1}</span>{label}<ArrowUpRight size={15} /></button>)}</div></div></div>}

    <main id="main-content">
      <section className="hero" id="top"><div className="hero-grid" aria-hidden="true" /><div className="hero-content"><div className="hero-copy"><p className="eyebrow"><span className="signal-dot" /> Independent web specialist · Bangladesh ↗ Worldwide</p><h1>Digital work<br />with enough craft<br />to earn attention.</h1><p className="hero-summary">I design and build clear, expressive web experiences for clients who need more than a template—and less than a complicated process.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <ArrowDownRight size={17} /></a><a className="text-link" href="#work">See selected work <MoveUpRight size={16} /></a></div><div className="hero-footnotes"><span>01 / CLIENT-READY SYSTEMS</span><span>02 / FROM IDEA TO DEPLOYMENT</span></div></div><div className="prism-column"><div className="prism-stage" style={tilt} onMouseMove={movePrism} onMouseLeave={resetPrism}><div className="stage-glow" /><div className="stage-corner stage-corner-a" /><div className="stage-corner stage-corner-b" /><div className="prism-frame"><img src={HERO_IMAGE} alt="Sculptural folded prism in graphite, stone, and vermilion." /><div className="prism-plane prism-plane-one" /><div className="prism-plane prism-plane-two" /><div className="prism-scanline" /></div><div className="portrait-specimen"><div className="portrait-photo"><img src={PROFILE_IMAGE} alt="Khalid Hasan Meskat" /></div><div className="portrait-caption"><span>YOUR PARTNER</span><strong>KHALID H.<br />MESKAT</strong></div></div><BrandMark className="hero-signature" /><div className="stage-caption stage-caption-top">CRAFT<br />IN MOTION</div><div className="stage-caption stage-caption-bottom"><span>ROTATE</span><span>WITH CURSOR</span></div></div><div className="availability-strip"><span className="availability-pulse" /> Select collaborations · Available for considered projects</div></div></div></section>

      <section className="about-section section-spine" id="about"><div className="spine-label"><span>01</span><span>ABOUT</span></div><div className="about-content"><div className="about-heading"><div><p className="eyebrow">The point of view</p><h2>A builder with language, structure, and a bias for clarity.</h2></div><p>My background in English literature shapes how I approach the web: a strong digital experience has an intentional voice, a clear sequence, and the discipline to leave out what does not help.</p></div><div className="about-detail"><div className="about-statement"><p>I’m Khalid Hasan Meskat, a frontend developer from Bangladesh. I work with React and Next.js to bring visual identity, product logic, and responsive implementation into one thoughtful build.</p><p>Beyond the surface, I care about accessible interaction, readable components, secure auth patterns, APIs, and the small pieces of polish that make a product feel dependable.</p><div className="about-link-row"><a href={RESUME_URL} target="_blank" rel="noreferrer">Download résumé <Download size={15} /></a><a href="https://github.com/khalidhasan-m" target="_blank" rel="noreferrer">Browse GitHub <Github size={15} /></a></div></div><div className="fact-grid">{facts.map(([label, value]) => <div className="fact-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>

      <section className="services-section section-spine" id="services"><div className="spine-label"><span>02</span><span>SERVICES</span></div><div className="services-content"><div className="services-heading"><div><p className="eyebrow">A practical range</p><h2>What I can take from brief to browser.</h2></div><p>Choose an area to see the work I focus on and the kind of outcomes it is built to create.</p></div><div className="service-explorer"><div className="service-tabs" role="tablist" aria-label="Services">{services.map((service) => { const Icon = service.icon; return <button key={service.key} role="tab" aria-selected={activeService === service.key} className={activeService === service.key ? "is-active" : ""} onClick={() => setActiveService(service.key)}><span>{service.number}</span><Icon size={18} /><strong>{service.title}</strong><ArrowUpRight size={15} /></button>; })}</div><div className="service-preview" role="tabpanel"><div className="service-preview-top"><span>SELECTED AREA / {currentService.number}</span><currentService.icon size={24} /></div><h3>{currentService.title}</h3><p>{currentService.copy}</p><div className="service-output-list">{currentService.outputs.map((output) => <span key={output}><Check size={13} /> {output}</span>)}</div><a href="#contact" className="service-preview-cta">Discuss this kind of work <ArrowUpRight size={16} /></a></div></div></div></section>

      <section className="work-section section-spine" id="work"><div className="spine-label"><span>03</span><span>SELECTED WORK</span></div><div className="work-content"><div className="work-heading"><div><BrandMark className="work-signature" /><p className="eyebrow">A few focused builds</p><h2>Work that knows<br />where it’s going.</h2></div><p>Each project is an exercise in aligning visual momentum with practical product logic—from discovery through delivery.</p></div><div className="work-tools"><span>VIEW BY TYPE</span><div>{["All", "Interactive", "Full stack", "Commerce"].map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "is-active" : ""}>{filter}</button>)}</div></div><div className="project-list">{filteredProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></div></section>

      <section className="process-section section-spine" id="process"><div className="spine-label"><span>04</span><span>METHOD</span></div><div className="process-content"><div className="process-heading"><p className="eyebrow">A clear working rhythm</p><h2>Good work comes from a visible path.</h2><p>Interaction is not an excuse for uncertainty. This is the simple, flexible structure I use to keep a project moving toward the right outcome.</p></div><div className="process-layout"><div className="process-rail" role="tablist" aria-label="Project process">{processSteps.map((step, index) => <button key={step.number} role="tab" aria-selected={activeProcess === index} className={activeProcess === index ? "is-active" : ""} onClick={() => setActiveProcess(index)}><span>{step.number}</span><strong>{step.label}</strong><i /></button>)}</div><article className="process-feature"><span>{processSteps[activeProcess].number} / {processSteps[activeProcess].label}</span><h3>{processSteps[activeProcess].title}</h3><p>{processSteps[activeProcess].text}</p><div className="process-orbit" aria-hidden="true"><i /><b /><em /></div></article></div></div></section>

      <section className="skills-section section-spine"><div className="spine-label"><span>05</span><span>WORKING SET</span></div><div className="skills-content"><p className="eyebrow">The calibrated toolkit</p><div className="skills-headline"><h2>Built with a point<br />of view.</h2><p>Tools matter when they make the right thing possible. This is the practical set I use to keep both the experience and the implementation sharp.</p></div><div className="skill-groups"><div className="skill-group"><p>Interface</p><div>{["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="skill-group"><p>Systems</p><div>{["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"].map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="skill-group"><p>Practice</p><div>{["Accessibility", "Responsive UX", "Performance", "Git", "Vercel"].map((skill) => <span key={skill}>{skill}</span>)}</div></div></div><div className="skills-annotation"><span>METHOD / 04</span><p>Discover → clarify → build → refine</p><span>DESIGNED FOR REAL HANDOFFS</span></div></div></section>

      <section className="faq-section section-spine" id="faq"><div className="spine-label"><span>06</span><span>FAQ</span></div><div className="faq-content"><div className="faq-heading"><p className="eyebrow">A few useful answers</p><h2>Before we start the conversation.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "is-open" : ""} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={20} /></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-grid" aria-hidden="true" /><div className="contact-content"><div><p className="eyebrow inverse"><span className="signal-dot" /> Direct channel</p><h2>Bring the difficult<br /><em>brief.</em></h2></div><div className="contact-aside"><p>If the project needs a thoughtful partner who can make strong decisions and then build them, I’d like to hear what you’re working on.</p><form className="contact-form" onSubmit={submitContact}><div className="contact-form-grid"><label>YOUR NAME<input name="name" value={contactValues.name} onChange={updateContact} autoComplete="name" minLength={2} maxLength={120} required /></label><label>EMAIL ADDRESS<input name="email" type="email" value={contactValues.email} onChange={updateContact} autoComplete="email" maxLength={320} required /></label><label>COMPANY <span>OPTIONAL</span><input name="company" value={contactValues.company} onChange={updateContact} autoComplete="organization" maxLength={160} /></label><label>PROJECT TYPE<select name="projectType" value={contactValues.projectType} onChange={updateContact}><option value="">Choose one</option><option>Portfolio or marketing site</option><option>Product interface</option><option>Full-stack web build</option><option>Refinement of an existing build</option><option>Other</option></select></label><label>WORKING BUDGET <span>OPTIONAL</span><select name="budget" value={contactValues.budget} onChange={updateContact}><option value="">Choose a range</option><option>Under $1k</option><option>$1k–$3k</option><option>$3k–$7k</option><option>$7k+</option><option>Let’s discuss</option></select></label><label className="contact-message">WHAT NEEDS TO HAPPEN?<textarea name="message" value={contactValues.message} onChange={updateContact} minLength={20} maxLength={5000} required placeholder="A short note about the goal, the current state, and any deadline or constraints." /></label><input className="contact-trap" name="website" value={contactValues.website} onChange={updateContact} tabIndex={-1} autoComplete="off" aria-hidden="true" /></div><button className="contact-submit" type="submit" disabled={submitInquiry.isPending}>{submitInquiry.isPending ? "Sending message…" : "Send the brief"} <ArrowUpRight size={17} /></button>{contactFeedback.tone !== "idle" && <p className={`contact-feedback is-${contactFeedback.tone}`} role="status">{contactFeedback.tone === "success" ? <Check size={15} /> : <Mail size={15} />}{contactFeedback.message}</p>}</form><div className="contact-alternate"><a href={`mailto:${EMAIL}`}>Prefer email? {EMAIL} <ArrowUpRight size={15} /></a><button className="email-copy" onClick={copyEmail} type="button">{emailCopied ? <><Check size={14} /> Email copied</> : <><Copy size={14} /> Copy email address</>}</button></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-identity"><BrandMark /><span>Khalid Hasan Meskat</span></div><p>Independent web specialist<br />Available worldwide.</p><div className="footer-links"><a href="https://github.com/khalidhasan-m" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://linkedin.com/in/khalidhasanmeskat" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={`mailto:${EMAIL}`}><Mail size={16} /> Email</a><a href={RESUME_URL} target="_blank" rel="noreferrer"><Download size={16} /> Résumé</a></div><div className="footer-rule"><span>© 2026</span><span>DESIGNED TO MAKE THE WORK MATTER</span><Code2 size={16} /></div></footer>
  </div>;
}
