/**
 * Design: The Masterwork Index — post-digital editorial portfolio.
 * Graphite + mineral palette, signal vermilion, asymmetric editorial spine,
 * and restrained 3D depth used as evidence of craft rather than ornament.
 */
import { useState, type CSSProperties, type MouseEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/masterwork-hero-prism_8be4df2b.png";
const ORBIT_IMAGE = "/manus-storage/masterwork-expertise-orbit_2f4cf6e6.png";
const CASE_STUDY_IMAGE = "/manus-storage/masterwork-case-study-plane_b0d573e2.png";
const LOGO_IMAGE = "/manus-storage/km-folded-prism-mark_4ff0c913.png";

const projects = [
  {
    index: "01",
    name: "PawfectMatch",
    type: "Full-stack adoption platform",
    detail: "Search, adoption workflows, owner tools, and a shared status model that keeps public and dashboard views in step.",
    stack: ["React", "Express", "MongoDB"],
    evidence: "/manus-storage/pawfectmatch-evidence_276086d8.png",
    evidenceLabel: "ADOPTION FLOW · DASHBOARD",
    live: "https://pet-adoption-client-gamma.vercel.app/",
    code: "https://github.com/khalidhasan-m/pet-adoption-client",
  },
  {
    index: "02",
    name: "Wanderlust",
    type: "Authenticated travel platform",
    detail: "A content-rich product with protected authoring flows, ownership-aware CRUD, and intentional App Router boundaries.",
    stack: ["Next.js", "Better Auth", "MongoDB"],
    evidence: "/manus-storage/wanderlust-evidence_2517ab74.png",
    evidenceLabel: "AUTH · OWNERSHIP CONTROLS",
    live: "https://wanderlust-seven-gules.vercel.app/",
    code: "https://github.com/khalidhasan-m/wanderlust",
  },
  {
    index: "03",
    name: "SunCart",
    type: "Commerce experience",
    detail: "A polished shopping journey that combines OAuth, product discovery, and guarded post-login order flows.",
    stack: ["Next.js", "HeroUI", "Embla"],
    evidence: "/manus-storage/suncart-evidence_3265f133.png",
    evidenceLabel: "CATALOGUE · PROTECTED ORDERS",
    live: "https://assignment8-kappa.vercel.app/",
    code: "https://github.com/khalidhasan-m/assignment8",
  },
];

const capabilities = [
  ["01", "Experience architecture", "Interfaces shaped around what a person needs to decide, understand, and do next."],
  ["02", "Front-end systems", "Responsive, accessible component work with the performance discipline to keep it quick."],
  ["03", "Product delivery", "Authentication, data flows, content structure, and the practical details that make a build dependable."],
];

const skillGroups = [
  { label: "Interface", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Systems", items: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"] },
  { label: "Practice", items: ["Accessibility", "Responsive UX", "Performance", "Git", "Vercel"] },
];

type TiltStyle = CSSProperties & { "--tilt-x"?: string; "--tilt-y"?: string; "--glow-x"?: string; "--glow-y"?: string };

function BrandMark({ className = "" }: { className?: string }) {
  return <span className={`brand-prism ${className}`} aria-hidden="true"><img src={LOGO_IMAGE} alt="" /><i /><b /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tilt, setTilt] = useState<TiltStyle>({ "--tilt-x": "0deg", "--tilt-y": "0deg", "--glow-x": "50%", "--glow-y": "46%" });

  const movePrism = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      "--tilt-x": `${-y * 8}deg`,
      "--tilt-y": `${x * 10}deg`,
      "--glow-x": `${(x + 0.5) * 100}%`,
      "--glow-y": `${(y + 0.5) * 100}%`,
    });
  };

  const resetPrism = () => setTilt({ "--tilt-x": "0deg", "--tilt-y": "0deg", "--glow-x": "50%", "--glow-y": "46%" });

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Khalid Hasan Meskat home">
          <BrandMark className="brand-mark" />
          <span className="brand-copy">Khalid<br />Hasan Meskat</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Bring the difficult brief <ArrowUpRight size={15} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="#work">Selected work</a>
        <a onClick={() => setMenuOpen(false)} href="#capabilities">Capabilities</a>
        <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
      </div>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="signal-dot" /> Independent web specialist · Bangladesh ↗ Worldwide</p>
              <h1>Digital work<br />with enough craft<br />to earn attention.</h1>
              <p className="hero-summary">I design and build clear, expressive web experiences for clients who need more than a template—and less than a complicated process.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Start a conversation <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#work">See selected work <MoveUpRight size={16} /></a>
              </div>
              <div className="hero-footnotes">
                <span>01 / CLIENT-READY SYSTEMS</span>
                <span>02 / FROM IDEA TO DEPLOYMENT</span>
              </div>
            </div>

            <div className="prism-column">
              <div className="prism-stage" style={tilt} onMouseMove={movePrism} onMouseLeave={resetPrism}>
                <div className="stage-glow" />
                <div className="stage-corner stage-corner-a" />
                <div className="stage-corner stage-corner-b" />
                <div className="prism-frame">
                  <img src={HERO_IMAGE} alt="Sculptural folded prism in graphite, stone, and vermilion." />
                  <div className="prism-plane prism-plane-one" />
                  <div className="prism-plane prism-plane-two" />
                  <div className="prism-scanline" />
                </div>
                <div className="stage-caption stage-caption-top">CRAFT<br />IN MOTION</div>
                <div className="stage-caption stage-caption-bottom"><span>ROTATE</span><span>WITH CURSOR</span></div>
              </div>
              <div className="availability-strip"><span className="availability-pulse" /> Select collaborations · Available for considered projects</div>
            </div>
          </div>
        </section>

        <section className="capabilities-section section-spine" id="capabilities">
          <div className="spine-label"><span>01</span><span>THE PRACTICE</span></div>
          <div className="capabilities-content">
            <div className="section-intro">
              <p className="eyebrow">More than surface treatment</p>
              <h2>Complexity,<br />rendered as clarity.</h2>
              <p>A strong portfolio should show how someone thinks. Mine is built around creating legible, useful digital products—not simply styling screens.</p>
            </div>
            <div className="capability-layout">
              <div className="capability-list">
                {capabilities.map(([index, title, body]) => (
                  <article className="capability-item" key={index}>
                    <span className="capability-index">{index}</span>
                    <div><h3>{title}</h3><p>{body}</p></div>
                    <ArrowUpRight className="capability-arrow" size={20} />
                  </article>
                ))}
              </div>
              <div className="orbit-card">
                <div className="orbit-card-label">MULTIDISCIPLINARY<br />BY DESIGN</div>
                <img src={ORBIT_IMAGE} alt="Interlocking sculptural rings representing connected digital disciplines." />
                <div className="orbit-card-foot">FRONT-END · SYSTEMS · PRODUCT</div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section section-spine" id="work">
          <div className="spine-label"><span>02</span><span>SELECTED WORK</span></div>
          <div className="work-content">
            <div className="work-heading">
              <div><p className="eyebrow">A few focused builds</p><h2>Work that knows<br />where it’s going.</h2></div>
              <p>Each project is an exercise in aligning visual momentum with practical product logic—from discovery through delivery.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card project-${project.index}`} key={project.name}>
                  <div className="project-art"><img className="project-material" src={CASE_STUDY_IMAGE} alt="" /><img className="project-evidence" src={project.evidence} alt={`${project.name} live project screen`} /><span>{project.index}</span><div className="evidence-tag">{project.evidenceLabel}</div><div className="project-art-square" /></div>
                  <div className="project-main">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-detail">{project.detail}</p>
                    <div className="project-footer"><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={14} /></a><a href={project.code} target="_blank" rel="noreferrer">Code <Github size={14} /></a></div></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-spine">
          <div className="spine-label"><span>03</span><span>WORKING SET</span></div>
          <div className="skills-content">
            <p className="eyebrow">The calibrated toolkit</p>
            <div className="skills-headline"><h2>Built with a point<br />of view.</h2><p>Tools matter when they make the right thing possible. This is the practical set I use to keep both the experience and the implementation sharp.</p></div>
            <div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.label}><p>{group.label}</p><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
            <div className="skills-annotation"><span>METHOD / 04</span><p>Discover → clarify → build → refine</p><span>DESIGNED FOR REAL HANDOFFS</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-content">
            <div><p className="eyebrow inverse"><span className="signal-dot" /> Direct channel</p><h2>Bring the difficult<br /><em>brief.</em></h2></div>
            <div className="contact-aside"><p>If the project needs a thoughtful partner who can make strong decisions and then build them, I’d like to hear what you’re working on.</p><a className="button button-light" href="mailto:khalidhasanmeskat@gmail.com">khalidhasanmeskat@gmail.com <ArrowUpRight size={18} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-identity"><BrandMark /><span>Khalid Hasan Meskat</span></div>
        <p>Independent web specialist<br />Available worldwide.</p>
        <div className="footer-links"><a href="https://github.com/khalidhasan-m" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://linkedin.com/in/khalidhasanmeskat" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="mailto:khalidhasanmeskat@gmail.com"><Mail size={16} /> Email</a><a href="/resume.pdf" onClick={(event) => event.preventDefault()} title="Resume file is available in the original portfolio repository"><Download size={16} /> Resume</a></div>
        <div className="footer-rule"><span>© 2026</span><span>DESIGNED TO MAKE THE WORK MATTER</span><Code2 size={16} /></div>
      </footer>
    </div>
  );
}
