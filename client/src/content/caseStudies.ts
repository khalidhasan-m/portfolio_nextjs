export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  eyebrow: string;
  summary: string;
  context: string;
  role: string;
  stack: string[];
  evidence: string;
  evidenceAlt: string;
  live: string;
  code: string;
  challenge: string;
  decisions: Array<{ label: string; detail: string }>;
  evidencePoints: string[];
  buildSignals: Array<{ value: string; label: string; detail: string }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "route-form",
    index: "01",
    name: "RouteForm",
    eyebrow: "Interactive project estimator",
    summary: "A progressive estimator that helps turn an early project conversation into a practical delivery shape.",
    context: "RouteForm gives a prospective client a clear way to choose a project format, identify what matters most, and set an appropriate pace before a brief becomes vague.",
    role: "Interaction design and front-end implementation",
    stack: ["HTML", "CSS", "JavaScript"],
    evidence: "/assets/portfolio/route-form-evidence.webp",
    evidenceAlt: "RouteForm’s progressive estimator interface",
    live: "https://khalidhasan-m.github.io/route-form/",
    code: "https://github.com/khalidhasan-m/route-form",
    challenge: "Make an early-stage project conversation feel structured without making the visitor complete a heavy form or read a long document first.",
    decisions: [
      { label: "Progressive choices", detail: "The interaction breaks a broad conversation into a small sequence of format, priority, and pace decisions." },
      { label: "Live delivery shape", detail: "Selections update a concise summary in real time so the visitor can see the practical implication of each choice." },
      { label: "Useful handoff", detail: "The finished summary can be copied, giving the visitor a compact starting point for a follow-up conversation." },
    ],
    evidencePoints: ["Multi-step interaction", "Real-time configuration", "Accessible selectable controls", "Responsive editorial UI", "Copy-to-clipboard feedback"],
    buildSignals: [
      { value: "3", label: "brief-shaping decisions", detail: "Format, priority, and pace are the three decision axes in the progressive flow." },
      { value: "1", label: "copyable delivery route", detail: "The completed configuration produces one compact summary for follow-up." },
      { value: "LIVE", label: "public deployment", detail: "The static build is available as a public GitHub Pages deployment." },
    ],
  },
  {
    slug: "signal-desk",
    index: "02",
    name: "SignalDesk",
    eyebrow: "Interactive project health dashboard",
    summary: "A responsive dashboard that makes delivery signals, workstreams, and the next best decision easier to see in one place.",
    context: "SignalDesk explores how a dense delivery update can become a clearer operational surface: current health, active workstreams, activity signals, and a focused next move.",
    role: "Product interface design and front-end implementation",
    stack: ["HTML", "CSS", "JavaScript"],
    evidence: "/assets/portfolio/signal-desk-evidence.webp",
    evidenceAlt: "SignalDesk project health dashboard",
    live: "https://khalidhasan-m.github.io/signal-desk/",
    code: "https://github.com/khalidhasan-m/signal-desk",
    challenge: "Keep several delivery signals visible without asking a busy project team to scan a crowded, static status report.",
    decisions: [
      { label: "State-led overview", detail: "Health modes make the current condition legible before the visitor moves into lower-level detail." },
      { label: "Focused filtering", detail: "Workstreams and activity signals can be filtered without losing the surrounding project context." },
      { label: "Readable variation", detail: "A contrast toggle and responsive dashboard behavior keep the surface usable across viewing conditions and screen sizes." },
    ],
    evidencePoints: ["Live health states", "Dynamic workstreams", "Filtered activity signals", "Snapshot feedback loop", "Contrast toggle"],
    buildSignals: [
      { value: "3", label: "health states", detail: "Moving, Watch, and Risk make the current delivery condition explicit." },
      { value: "4", label: "activity filters", detail: "All, Product, Design, and Engineering retain context while narrowing the signal stream." },
      { value: "1", label: "contrast control", detail: "A dedicated contrast toggle supports different viewing conditions." },
    ],
  },
  {
    slug: "pawfect-match",
    index: "04",
    name: "PawfectMatch",
    eyebrow: "Full-stack adoption platform",
    summary: "A full-stack adoption experience with public discovery, protected owner tools, and an application state model that keeps decisions consistent.",
    context: "PawfectMatch combines searchable pet discovery with authentication, user-owned listings, dashboard workflows, and adoption-request handling in a single product flow.",
    role: "Full-stack product implementation",
    stack: ["Next.js", "Better Auth", "Tailwind CSS", "Framer Motion"],
    evidence: "/assets/portfolio/pawfectmatch-evidence.webp",
    evidenceAlt: "PawfectMatch adoption platform interface",
    live: "https://pet-adoption-client-gamma.vercel.app/",
    code: "https://github.com/khalidhasan-m/pet-adoption-client",
    challenge: "Connect a friendly public adoption experience with the protected ownership controls and application states required to prevent conflicting decisions.",
    decisions: [
      { label: "Clear public discovery", detail: "Visitors can search by name and filter pet listings by species before entering a protected path." },
      { label: "Persistent authentication", detail: "Better Auth supports email/password and Google sign-in with HTTPOnly cookie sessions that persist across reloads." },
      { label: "Controlled adoption state", detail: "The workflow prevents owners from self-adopting and, after approval, marks a pet adopted while rejecting competing requests." },
    ],
    evidencePoints: ["Search and multi-select filtering", "Email and Google authentication", "Protected owner dashboard", "Ownership-aware adoption logic", "Dark and light theme support"],
    buildSignals: [
      { value: "2", label: "sign-in methods", detail: "The documented client supports email/password and Google OAuth authentication." },
      { value: "3", label: "listing status views", detail: "The owner dashboard surfaces total, available, and adopted listing states." },
      { value: "1", label: "conflict-safe approval path", detail: "Approving one request marks the pet adopted and rejects competing requests." },
    ],
  },
];
