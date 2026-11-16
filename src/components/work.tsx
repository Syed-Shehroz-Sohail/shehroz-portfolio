"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading, ExternalLink } from "./ui";
import { ProjectGallery, ProjectMedia } from "./project-media";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="project-details">
      <summary>{project.responsibilities.length ? "Responsibilities & project details" : "Explore the website"}<span aria-hidden="true">+</span></summary>
      <div className="project-details-body">
        {project.responsibilities.length > 0 && <div className="case-study-block"><h4>My responsibilities</h4><ul>{project.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div>}
        <div className="case-study-block"><h4>{project.id === "stir" ? "Observable website capabilities" : "Implemented solutions"}</h4><ul>{project.solution.map(item => <li key={item}>{item}</li>)}</ul></div>
        {project.outcome && <div className="case-study-block"><h4>Documented outcome</h4><p>{project.outcome}</p></div>}
        <ProjectGallery project={project} />
        <p className="project-link-check">Link checked {project.link.checkedOn}. {project.link.note || "Public destination accessible."}</p>
      </div>
    </details>
  );
}

export function Work() {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(project => filter === "All work" || project.category === filter);
  return (
    <section id="work" className="section shell">
      <SectionHeading number="01" label="SELECTED WORK" title={<>Engineering for<br /><span className="serif-word">real-world work.</span></>}>
        <p>Six projects across government systems, enterprise workflows, business websites, and mobile applications. NMISW and SDM bring my architecture, engineering, and international delivery work together.</p>
      </SectionHeading>
      <div className="work-toolbar">
        <fieldset className="project-filters"><legend className="sr-only">Filter projects</legend>{["All work", "Web", "Mobile"].map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}{item === "All work" && <sup>{String(projects.length).padStart(2, "0")}</sup>}</button>)}</fieldset>
        <span className="work-count" aria-live="polite">{visible.length} PROJECTS</span>
      </div>
      <div className="project-grid">
        {visible.map(project => (
          <article className={`project-card project-${project.id}${project.flagship ? " is-flagship" : ""}`} key={project.id} data-project-id={project.id}>
            <div className="project-card-label"><span>{project.flagship ? "FLAGSHIP PROJECT" : project.category.toUpperCase()}</span><span>{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div>
            <ProjectMedia project={project} />
            <div className="project-info"><div><p className="project-kind">{project.kind}</p><h3>{project.title}</h3><p className="project-context">{project.context}{project.period && <> · {project.period}</>}</p><p className="project-description">{project.description}</p></div></div>
            {project.role && <p className="project-role">{project.role}</p>}
            {project.stack.length > 0 && <ul className="tags project-stack" aria-label="Confirmed project technologies">{project.stack.map(tool => <li key={tool}>{tool}</li>)}</ul>}
            <ProjectDetails project={project} />
            <ExternalLink href={project.link.href}>{project.link.label}</ExternalLink>
            {project.link.status === "unreachable" && <p className="link-status">Website unavailable during verification · original link retained</p>}
          </article>
        ))}
      </div>
      <p className="work-footnote">Public website and store screenshots are shown as captured. They represent the current public presentation, while the responsibilities above describe my documented contributions.</p>
    </section>
  );
}
