import type { Project, ProjectImage } from "@/data/portfolio";
import { site } from "@/lib/site";

function ProjectPicture({ image }: { image: ProjectImage }) {
  // Pre-compressed WebP sources work without a runtime image server on Pages.
  return (
    <picture>
      {image.smallSrc && <source type="image/webp" srcSet={`${site.basePath}${image.smallSrc} 640w, ${site.basePath}${image.src} 1280w`} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1440px) calc((100vw - 140px) / 2), 626px" />}
      <img src={`${site.basePath}${image.src}`} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </picture>
  );
}

export function ProjectMedia({ project }: { project: Project }) {
  return (
    <figure className={`project-media media-${project.media.kind} media-${project.id}`}>
      <div className="project-visual">
        <div className="project-images">{project.media.images.map(image => <a key={image.src} href={`${site.basePath}${image.src}`} target="_blank" rel="noopener noreferrer" aria-label={`View full-size image: ${image.alt} (opens in a new tab)`}><ProjectPicture image={image} /></a>)}</div>
      </div>
      <figcaption>{project.media.caption} · <a href={project.media.source.startsWith("https:") ? project.media.source : site.resume} target="_blank" rel="noopener noreferrer">Source<span className="sr-only"> (opens in a new tab)</span></a></figcaption>
    </figure>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  if (!project.media.gallery?.length) return null;

  return <div className="case-study-block project-gallery">
    <h4>Additional public screenshot</h4>
    {project.media.gallery.map(image => <figure key={image.src}>
      <a href={`${site.basePath}${image.src}`} target="_blank" rel="noopener noreferrer" aria-label={`View full-size image: ${image.alt} (opens in a new tab)`}><ProjectPicture image={image} /></a>
      <figcaption>{image.alt}</figcaption>
    </figure>)}
  </div>;
}
