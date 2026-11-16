"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import { site } from "@/lib/site";
import { ExternalLink } from "./ui";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="project-preview-details">
      <h3>{project.responsibilities.length ? "Responsibilities & project details" : "Project details"}</h3>
      {project.responsibilities.length > 0 && (
        <div className="case-study-block">
          <h4>My responsibilities</h4>
          <ul>{project.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      )}
      <div className="case-study-block">
        <h4>{project.id === "stir" ? "Observable website capabilities" : "Implemented solutions"}</h4>
        <ul>{project.solution.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      {project.outcome && (
        <div className="case-study-block">
          <h4>Documented outcome</h4>
          <p>{project.outcome}</p>
        </div>
      )}
    </div>
  );
}

export function ProjectPreview({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const { images } = project.media;
  const image = images[index];
  const tags = project.stack.length ? project.stack : [project.category, project.kind];

  useEffect(() => {
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
  }, []);

  return (
    <dialog ref={dialog} className="project-preview" aria-labelledby="project-preview-title" onClose={onClose}>
      <button className="project-preview-close" type="button" aria-label="Close project preview" onClick={() => dialog.current?.close()}>
        <span aria-hidden="true">×</span>
      </button>
      <button className="project-preview-backdrop" type="button" aria-label="Dismiss project preview" tabIndex={-1} onClick={() => dialog.current?.close()} />
      <div className="project-preview-panel">
        <div className="project-preview-images">
          <Image src={`${site.basePath}${image.src}`} alt={image.alt} width={image.width} height={image.height} loading="eager" />
          {images.length > 1 && (
            <fieldset className="project-preview-thumbnails">
              <legend className="sr-only">Project screenshots</legend>
              {images.map((thumbnail, position) => (
                <button type="button" key={thumbnail.src} aria-label={`Show screenshot ${position + 1}`} aria-pressed={position === index} onClick={() => setIndex(position)}>
                  <Image src={`${site.basePath}${thumbnail.src}`} alt="" width={thumbnail.width} height={thumbnail.height} />
                </button>
              ))}
            </fieldset>
          )}
        </div>
        <div className="project-preview-copy">
          <p className="project-preview-kind">{project.kind}</p>
          <h2 id="project-preview-title">{project.title}</h2>
          <p className="project-preview-context">{project.context}{project.period && <> · {project.period}</>}</p>
          <p>{project.description}</p>
          {project.role && <p className="project-preview-context">{project.role}</p>}
          <ul className="project-tile-tags" aria-label="Project tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <ProjectDetails project={project} />
          <ExternalLink href={project.link.href}>{project.link.label}</ExternalLink>
        </div>
      </div>
    </dialog>
  );
}
