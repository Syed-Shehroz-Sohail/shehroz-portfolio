import { Arrow } from "./ui";
import { site } from "@/lib/site";

function StackSculpture() {
  return <div className="sculpture" aria-hidden="true">
    <svg viewBox="0 0 520 550" fill="none" className="sculpture-svg" aria-hidden="true">
      <defs>
        <linearGradient id="clay" x1="140" y1="70" x2="400" y2="450" gradientUnits="userSpaceOnUse"><stop stopColor="#d8ac8c" /><stop offset=".5" stopColor="#bd7756" /><stop offset="1" stopColor="#884b36" /></linearGradient>
        <linearGradient id="cream" x1="120" y1="190" x2="390" y2="350" gradientUnits="userSpaceOnUse"><stop stopColor="#fff9ec" /><stop offset="1" stopColor="#cfbea4" /></linearGradient>
        <linearGradient id="ink" x1="90" y1="340" x2="410" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#55594f" /><stop offset="1" stopColor="#252c27" /></linearGradient>
        <filter id="shadow"><feGaussianBlur stdDeviation="13" /></filter>
      </defs>
      <ellipse cx="260" cy="473" rx="151" ry="22" fill="#5c4635" opacity=".17" filter="url(#shadow)" />
      <g stroke="#c8bdae" strokeWidth=".7" opacity=".65"><ellipse cx="260" cy="310" rx="225" ry="113" transform="rotate(-32 260 310)" /><path d="m52 408 416-235M260 34v472" strokeDasharray="3 8" /></g>
      <g className="sculpture-stack">
        <path d="m93 354 167-94 167 94v33l-167 95-167-95z" fill="url(#ink)" /><path d="m93 354 167-94 167 94-167 95z" fill="#5d6659" /><path d="m143 354 117-66 117 66-117 66z" stroke="#8b9583" /><path d="m260 449 0 33" stroke="#17251e" />
        <path d="m93 253 167-94 167 94v33l-167 95-167-95z" fill="url(#cream)" /><path d="m93 253 167-94 167 94-167 95z" fill="#f1e6d2" /><path d="m143 253 117-66 117 66-117 66z" stroke="#c6b99e" /><path d="m260 348 0 33" stroke="#c2af91" />
        <path d="m93 152 167-94 167 94v33l-167 95-167-95z" fill="url(#clay)" /><path d="m93 152 167-94 167 94-167 95z" fill="#c98b66" /><path d="m143 152 117-66 117 66-117 66z" stroke="#e5b38b" /><path d="m260 247 0 33" stroke="#ac6748" />
        <path d="m221 151 25-14m-25 14 25 14m53-28 25 14-25 14m-23-37-15 46" stroke="#f9e2c5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="66" cy="328" r="5" fill="#a75f42" /><circle cx="451" cy="223" r="4" fill="#5d6659" />
    </svg>
    <div className="art-label art-label-top"><span className="tiny-cross">+</span> Built with intention</div>
    <div className="art-label art-label-bottom"><span className="status-dot" /> FROM INTERFACE TO INFRASTRUCTURE</div>
  </div>;
}

export function Hero() {
  return <section id="home" className="hero shell">
    <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="tiny-cross">✳</span> SYED SHEHROZ SOHAIL <span className="hero-role">/ LEAD SOFTWARE ENGINEER</span></p>
      <h1>Building systems.<br />Leading <span className="serif-word">delivery.</span></h1>
      <p className="professional-headline">{site.headline}</p>
      <p className="hero-description">Six years building web, mobile, and enterprise systems. Hands-on with architecture and code, with ownership of technical leadership and end-to-end delivery.</p>
      <div className="flex flex-wrap items-center gap-7"><a className="button button-dark" href="#work">Explore my work <Arrow diagonal /></a><a className="text-link" href="#about">A little about me <Arrow /></a></div>
    </div>
    <StackSculpture />
    <div className="hero-bottom"><p>BASED IN LAHORE · EXPERIENCE ACROSS JORDAN & SOUTH AFRICA</p><a href="#work">SCROLL TO EXPLORE <span>↓</span></a></div>
  </section>;
}
