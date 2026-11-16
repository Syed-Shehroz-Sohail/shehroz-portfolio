import type { Project, ProjectImage } from "@/data/portfolio";
import { site } from "@/lib/site";
import { ExternalLink } from "./ui";

function ProjectPicture({ image }: { image: ProjectImage }) {
  // Pre-compressed WebP sources work without a runtime image server on Pages.
  return (
    <picture>
      {image.smallSrc && <source type="image/webp" srcSet={`${site.basePath}${image.smallSrc} 640w, ${site.basePath}${image.src} 1280w`} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1440px) calc((100vw - 140px) / 2), 626px" />}
      <img src={`${site.basePath}${image.src}`} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </picture>
  );
}

export function ProjectMedia({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const tags = project.stack.length ? project.stack : [project.category, project.kind];

  return (
    <figure className={`project-media media-${project.media.kind}`}>
      <div className="project-visual">
        <div className="project-images">
          {project.media.images.map(image => <ProjectPicture key={image.src} image={image} />)}
        </div>
        <button
          type="button"
          className="project-preview-trigger"
          aria-label={`Preview ${project.title}`}
          aria-haspopup="dialog"
          onClick={event => {
            event.currentTarget.focus({ preventScroll: true });
            onOpen();
          }}
        />
      </div>
      <div className="project-tile-overlay">
        <div className="project-tile-content">
          <h3 className="project-tile-title">{project.title}</h3>
          <p className="project-context">{project.context}{project.period && <> · {project.period}</>}</p>
          <p className="project-description">{project.description}</p>
          {project.role && <p className="project-role">{project.role}</p>}
          <ul className="project-tile-tags" aria-label="Project tags">
            {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <ExternalLink href={project.link.href} className="project-tile-link">
          <span className="project-tile-tooltip">{project.link.label}</span>
          <span className="sr-only"> — {project.title}</span>
        </ExternalLink>
      </div>
    </figure>
  );
}
