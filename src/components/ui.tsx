import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}</svg>;
}

export function ExternalLink({ href, children, className = "text-link" }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export function ResumeLink({ children = "Download my CV" }: { children?: ReactNode }) {
  return <a href={site.resume} className="text-link" download="Syed-Shehroz-Sohail-CV.pdf">{children}<Arrow diagonal /><span className="sr-only"> (PDF)</span></a>;
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: ReactNode; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children && <div className="section-intro">{children}</div>}</div>;
}

export function ServiceIcon({ name }: { name: "web" | "mobile" | "api" | "team" | "transform" }) {
  return <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "web" && <><rect x="4" y="7" width="32" height="25" rx="3" /><path d="M4 14h32M10 10.5h.1m4 0h.1M16 20l-5 4 5 4m8-8 5 4-5 4" /></>}
    {name === "mobile" && <><rect x="11" y="3" width="18" height="34" rx="4" /><path d="M17 7h6m-5 25h4M6 14H3v12h3m28-12h3v12h-3" /></>}
    {name === "api" && <><rect x="3" y="14" width="11" height="12" rx="2" /><rect x="26" y="3" width="11" height="12" rx="2" /><rect x="26" y="25" width="11" height="12" rx="2" /><path d="M14 20h6m6-11h-6v22h6" /></>}
    {name === "team" && <><circle cx="20" cy="11" r="5" /><path d="M10 34v-5a10 10 0 0 1 20 0v5M7 9a4 4 0 0 0 0 8m26-8a4 4 0 0 1 0 8M3 29v-3a7 7 0 0 1 5-7m29 10v-3a7 7 0 0 0-5-7" /></>}
    {name === "transform" && <><path d="M5 13h27m-6-6 6 6-6 6M35 28H8m6-6-6 6 6 6" /><circle cx="6" cy="13" r="3" /><circle cx="34" cy="28" r="3" /></>}
  </svg>;
}
