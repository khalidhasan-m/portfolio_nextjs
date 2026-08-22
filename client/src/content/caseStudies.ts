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
    evidence: "/manus-storage/route-form-evidence_8c9ee2c8.png",
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
    evidence: "/manus-storage/signal-desk-evidence_a5a55295.png",
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
    evidence: "/manus-storage/pawfectmatch-evidence_276086d8.png",
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
  },
];
