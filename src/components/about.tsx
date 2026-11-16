import { site } from "@/lib/site";
import { achievements, education, experience } from "@/data/portfolio";
import { SectionHeading, ResumeLink } from "./ui";

export function About() {
  return (
    <section id="about" className="about-section"><div className="shell section">
      <SectionHeading number="02" label="ABOUT ME" title={<>From mobile.<br />To systems.<br /><span className="serif-word">To delivery.</span></>}>
        <p>I’m Shehroz, a Lead Software Engineer based in {site.location}, with six years of professional experience. I started in mobile development and grew into full-stack engineering, system architecture, and technical leadership.</p>
        <p>I translate complex business requirements into practical software, staying hands-on with implementation while taking ownership of planning, technical decisions, and delivery. My international work includes government institutions in Jordan and enterprise stakeholders in South Africa.</p>
        <p>Working with teams and stakeholders on site has shaped how I gather requirements, explain technical decisions, and support users. I’m continuing to grow professionally, with a developing interest in Applied AI Engineering.</p>
        <ResumeLink />
      </SectionHeading>
      <section className="about-facts" aria-label="Professional achievements">{achievements.map(item => <div key={item.value}><strong>{item.value}</strong><span className="fact-label">{item.label}</span><p>{item.detail}</p></div>)}</section>
      <div className="experience-grid">
        <div><p className="eyebrow">EXPERIENCE</p>{experience.map(job => <article className="timeline-entry" key={job.company}><span className="timeline-year">{job.period}</span><div><h3>{job.role}</h3><p>{job.company}</p><p className="timeline-detail">{job.detail}</p></div></article>)}</div>
        <div className="education"><p className="eyebrow">EDUCATION & TRAINING</p>{education.map(item => <div key={item.title}><span>{item.period}</span><h3>{item.title}</h3><p>{item.institution}</p></div>)}<div className="professional-interest"><span>CONTINUING TO LEARN</span><h3>Applied AI Engineering</h3><p>A growing professional interest and learning direction.</p></div></div>
      </div>
    </div></section>
  );
}
