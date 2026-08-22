import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { useRoute } from "wouter";
import { caseStudies } from "@/content/caseStudies";
import "./case-study.css";
import "./case-study-signals.css";

export default function CaseStudy() {
  const [, params] = useRoute("/work/:slug");
  const caseStudy = caseStudies.find((item) => item.slug === params?.slug);

  if (!caseStudy) {
    return <main className="case-study-missing"><p>CASE STUDY / NOT FOUND</p><h1>That project entry is not available.</h1><a href="/#work">Return to selected work <ArrowLeft size={16} /></a></main>;
  }

  return <main className="case-study-page">
    <div className="case-study-grid" aria-hidden="true" />
    <header className="case-study-header"><a href="/#work" className="case-study-back"><ArrowLeft size={15} /> Back to the index</a><span>CASE / {caseStudy.index}</span></header>
    <article className="case-study-content">
      <section className="case-study-intro">
        <div><p className="case-study-kicker">{caseStudy.eyebrow}</p><h1>{caseStudy.name}<br /><em>under the lens.</em></h1></div>
        <p className="case-study-summary">{caseStudy.summary}</p>
      </section>
      <section className="case-study-hero"><div className="case-study-frame"><img src={caseStudy.evidence} alt={caseStudy.evidenceAlt} /><span>IMPLEMENTATION EVIDENCE</span></div><div className="case-study-coordinate"><span>ROLE</span><strong>{caseStudy.role}</strong><span>STACK</span><div>{caseStudy.stack.map((item) => <b key={item}>{item}</b>)}</div></div></section>
      <section className="case-study-brief"><div><span>CONTEXT</span><p>{caseStudy.context}</p></div><div><span>THE CHALLENGE</span><p>{caseStudy.challenge}</p></div></section>
      <section className="case-study-signals" aria-labelledby="build-signals-heading"><div className="case-study-signals-heading"><span>VERIFIED BUILD SIGNALS</span><h2 id="build-signals-heading">Implementation facts, not client-outcome claims.</h2></div><div className="case-study-signal-grid">{caseStudy.buildSignals.map((signal) => <article key={signal.label}><strong>{signal.value}</strong><h3>{signal.label}</h3><p>{signal.detail}</p></article>)}</div><p className="case-study-outcome-note"><span>OUTCOME METRICS</span>Pending verified project or client data. The figures above document the build scope only; real business, adoption, or performance results will be added only when a source is available.</p></section>
      <section className="case-study-decisions"><div className="case-study-section-heading"><span>THE BUILD</span><h2>Decisions that made the path clearer.</h2></div><div className="decision-list">{caseStudy.decisions.map((decision, index) => <article key={decision.label}><span>0{index + 1}</span><h3>{decision.label}</h3><p>{decision.detail}</p></article>)}</div></section>
      <section className="case-study-evidence"><div><span>VERIFIED IN THE BUILD</span><h2>Proof, not promises.</h2></div><ul>{caseStudy.evidencePoints.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul></section>
      <footer className="case-study-actions"><p>Explore the working project or review the source structure directly.</p><div><a className="case-study-live" href={caseStudy.live} target="_blank" rel="noreferrer">Open live build <ArrowUpRight size={17} /></a><a href={caseStudy.code} target="_blank" rel="noreferrer">Source on GitHub <Github size={16} /></a></div></footer>
    </article>
  </main>;
}
