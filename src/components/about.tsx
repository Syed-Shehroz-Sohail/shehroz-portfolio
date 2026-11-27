import { site } from "@/lib/site";
import { achievementsSummary, education, experience } from "@/data/portfolio";
import { Skills } from "./skills";
import { SectionHeading, ResumeLink } from "./ui";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="shell section">
        <div className="about-header">
          <SectionHeading label="About Me" title={<>What <span className="accent-text">I do</span></>} />
          <ResumeLink className="button button-dark" />
        </div>
        <div className="section-intro">
          <p>I’m Shehroz, a <strong>Lead Software Engineer</strong> based in {site.location}, with six years of professional experience. I started in mobile development and grew into full-stack engineering, system architecture, and technical leadership.</p>
          <p>I translate complex business requirements into practical software, staying hands-on with implementation while taking ownership of planning, technical decisions, and delivery. My international work includes government institutions in <strong>Jordan</strong> and enterprise stakeholders in <strong>South Africa</strong>.</p>
          <p>Working with teams and stakeholders on site has shaped how I gather requirements, explain technical decisions, and support users. I’m continuing to grow professionally, with a developing interest in <strong>Applied AI Engineering</strong>.</p>
          <p>{achievementsSummary}</p>
        </div>
        <div className="experience-grid">
          <section aria-labelledby="experience-heading">
            <h3 id="experience-heading">Experience</h3>
            {experience.map(job => (
              <article className="timeline-entry" key={job.company}>
                <span className="timeline-year">{job.period}</span>
                <div>
                  <h4>{job.role}</h4>
                  <p>{job.company}</p>
                  <p className="timeline-detail">{job.detail}</p>
                </div>
              </article>
            ))}
          </section>
          <section className="education" aria-labelledby="education-heading">
            <h3 id="education-heading">Education &amp; Training</h3>
            {education.map(item => (
              <div key={item.title}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.institution}</p>
              </div>
            ))}
            <div className="professional-interest">
              <span>CONTINUING TO LEARN</span>
              <h4>Applied AI Engineering</h4>
              <p>A growing professional interest and learning direction.</p>
            </div>
          </section>
        </div>
        <Skills />
      </div>
    </section>
  );
}
