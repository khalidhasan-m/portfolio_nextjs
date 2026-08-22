import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { trpc } from "@/lib/trpc";
import "./contact-form.css";
import "./contact-success.css";
import "./contact-refinements.css";
import "./contact-field-interactions.css";

const EMAIL = "khalidhasanmeskat@gmail.com";
type ContactValues = { name: string; email: string; company: string; projectType: string; budget: string; message: string; website: string };
type ContactValidationField = "name" | "email" | "message";
const emptyContactValues: ContactValues = { name: "", email: "", company: "", projectType: "", budget: "", message: "", website: "" };

function getContactFieldError(field: ContactValidationField, values: ContactValues): string {
  const value = values[field].trim();
  if (field === "name") return value.length >= 2 ? "" : "Please enter at least two characters.";
  if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.";
  return value.length >= 20 ? "" : "Share at least 20 characters so Khalid has useful context.";
}

function ContactBrandMark() {
  return <span className="brand-prism" aria-hidden="true"><img src="/manus-storage/khalid-masterwork-prism-logo_f05fd20b.png" alt="" /><i /><b /></span>;
}

export default function ContactForm() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactValues, setContactValues] = useState<ContactValues>(emptyContactValues);
  const [contactTouched, setContactTouched] = useState<Record<ContactValidationField, boolean>>({ name: false, email: false, message: false });
  const [contactFeedback, setContactFeedback] = useState<{ tone: "idle" | "success" | "error"; message: string }>({ tone: "idle", message: "" });
  const contactErrors = { name: getContactFieldError("name", contactValues), email: getContactFieldError("email", contactValues), message: getContactFieldError("message", contactValues) };
  const submitInquiry = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setContactFeedback({ tone: "success", message: "Message received. Khalid will respond as soon as possible." });
      setContactValues(emptyContactValues);
    },
    onError: (error) => setContactFeedback({ tone: "error", message: error.message || "Unable to send your message right now. Please use the email link instead." }),
  });
  const updateContact = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setContactValues((current) => ({ ...current, [name]: value }));
    if (contactFeedback.tone === "error") setContactFeedback({ tone: "idle", message: "" });
  };
  const touchContact = (field: ContactValidationField) => setContactTouched((current) => ({ ...current, [field]: true }));
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactTouched({ name: true, email: true, message: true });
    if (Object.values(contactErrors).some(Boolean)) return;
    setContactFeedback({ tone: "idle", message: "" });
    submitInquiry.mutate(contactValues);
  };
  const resetContactSuccess = () => {
    setContactValues(emptyContactValues);
    setContactTouched({ name: false, email: false, message: false });
    setContactFeedback({ tone: "idle", message: "" });
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setEmailCopied(true); window.setTimeout(() => setEmailCopied(false), 2400); }
    catch { setEmailCopied(false); }
  };

  return <section className="contact-section" id="contact"><div className="contact-grid" aria-hidden="true" /><ContactBrandMark /><div className="contact-content"><div><p className="eyebrow inverse"><span className="signal-dot" /> Direct channel</p><h2>Bring the difficult<br /><em>brief.</em></h2></div><div className="contact-aside"><p>If the project needs a thoughtful partner who can make strong decisions and then build them, I’d like to hear what you’re working on.</p><aside className="contact-expectations" aria-label="What happens after you send an inquiry"><span>WHAT HAPPENS NEXT</span><ol><li><b>01 / REVIEW</b><span>I read the context and constraints you share.</span></li><li><b>02 / REPLY</b><span>You receive a focused response, not an automated pitch.</span></li><li><b>03 / NEXT STEP</b><span>We decide whether a short conversation is the right move.</span></li></ol></aside>{contactFeedback.tone === "success" ? <div className="contact-success" role="status" aria-live="polite"><div className="success-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /><path d="m15 24 6 6 12-13" /></svg></div><p className="success-kicker">BRIEF RECEIVED</p><h3>Thank you—your message is on its way.</h3><p>{contactFeedback.message}</p><button className="success-reset" type="button" onClick={resetContactSuccess}>Send another inquiry <ArrowUpRight size={16} /></button></div> : <form className="contact-form" noValidate onSubmit={submitContact}><div className="contact-form-grid"><label className={`contact-field ${contactTouched.name ? (contactErrors.name ? "is-invalid" : "is-valid") : ""}`}>YOUR NAME<input name="name" value={contactValues.name} onChange={updateContact} onBlur={() => touchContact("name")} autoComplete="name" maxLength={120} aria-invalid={contactTouched.name && Boolean(contactErrors.name)} aria-describedby={contactTouched.name && contactErrors.name ? "contact-name-error" : undefined} required />{contactTouched.name && contactErrors.name && <span className="field-error" id="contact-name-error" role="alert">{contactErrors.name}</span>}</label><label className={`contact-field ${contactTouched.email ? (contactErrors.email ? "is-invalid" : "is-valid") : ""}`}>EMAIL ADDRESS<input name="email" type="email" value={contactValues.email} onChange={updateContact} onBlur={() => touchContact("email")} autoComplete="email" maxLength={320} aria-invalid={contactTouched.email && Boolean(contactErrors.email)} aria-describedby={contactTouched.email && contactErrors.email ? "contact-email-error" : undefined} required />{contactTouched.email && contactErrors.email && <span className="field-error" id="contact-email-error" role="alert">{contactErrors.email}</span>}</label><label>COMPANY <span>OPTIONAL</span><input name="company" value={contactValues.company} onChange={updateContact} autoComplete="organization" maxLength={160} /></label><label>PROJECT TYPE<select name="projectType" value={contactValues.projectType} onChange={updateContact}><option value="">Choose one</option><option>Portfolio or marketing site</option><option>Product interface</option><option>Full-stack web build</option><option>Refinement of an existing build</option><option>Other</option></select></label><label>WORKING BUDGET <span>OPTIONAL</span><select name="budget" value={contactValues.budget} onChange={updateContact}><option value="">Choose a range</option><option>Under $1k</option><option>$1k–$3k</option><option>$3k–$7k</option><option>$7k+</option><option>Let’s discuss</option></select></label><label className={`contact-message contact-field ${contactTouched.message ? (contactErrors.message ? "is-invalid" : "is-valid") : ""}`}>WHAT NEEDS TO HAPPEN?<textarea name="message" value={contactValues.message} onChange={updateContact} onBlur={() => touchContact("message")} maxLength={5000} aria-invalid={contactTouched.message && Boolean(contactErrors.message)} aria-describedby={contactTouched.message && contactErrors.message ? "contact-message-error" : undefined} required placeholder="A short note about the goal, the current state, and any deadline or constraints." /><output className="contact-char-count" aria-live="polite">{contactValues.message.length.toLocaleString()} / 5,000 characters</output>{contactTouched.message && contactErrors.message && <span className="field-error" id="contact-message-error" role="alert">{contactErrors.message}</span>}</label><input className="contact-trap" name="website" value={contactValues.website} onChange={updateContact} tabIndex={-1} autoComplete="off" aria-hidden="true" /></div><button className={`contact-submit ${submitInquiry.isPending ? "is-loading" : ""}`} type="submit" disabled={submitInquiry.isPending} aria-busy={submitInquiry.isPending}>{submitInquiry.isPending ? <><span className="submit-spinner" aria-hidden="true" /> Sending your brief</> : <>Send the brief <ArrowUpRight size={17} /></>}</button><p className="contact-privacy"><span aria-hidden="true">◒</span>Your details stay private and are used only to respond to this inquiry.</p>{contactFeedback.tone === "error" && <p className="contact-feedback is-error" role="status"><Mail size={15} />{contactFeedback.message}</p>}</form>}<div className="contact-alternate"><a href={`mailto:${EMAIL}`}>Prefer email? {EMAIL} <ArrowUpRight size={15} /></a><button className="email-copy" onClick={copyEmail} type="button">{emailCopied ? <><Check size={14} /> Email copied</> : <><Copy size={14} /> Copy email address</>}</button></div></div></div></section>;
}
