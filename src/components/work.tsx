"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./ui";
import { ProjectMedia } from "./project-media";
import { ProjectPreview } from "./project-preview";

export function Work() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(project => filter === "All work" || project.category === filter);
  return (
    <section id="work" className="section shell">
      <SectionHeading label="Selected work" title="Portfolio">
        <p className="work-tagline accent-text">Turning ideas into real outcomes</p>
      </SectionHeading>
      <div className="work-toolbar">
        <fieldset className="project-filters"><legend className="sr-only">Filter projects</legend>{["All work", "Web", "Mobile"].map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}{item === "All work" && <sup>{String(projects.length).padStart(2, "0")}</sup>}</button>)}</fieldset>
        <span className="work-count" aria-live="polite">{visible.length} PROJECTS</span>
      </div>
      <div className="project-grid">
        {visible.map(project => (
          <article className={`project-card project-${project.id}${project.flagship ? " is-flagship" : ""}`} key={project.id} data-project-id={project.id}>
            <div className="project-card-label"><span>{project.kind}</span><span>{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div>
            <ProjectMedia project={project} onOpen={() => setSelected(project)} />
          </article>
        ))}
      </div>
      {selected && <ProjectPreview key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
