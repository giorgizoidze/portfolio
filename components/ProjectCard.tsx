import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];
  return (
    <div className="card">
      <Link href={`/projects/${project.slug}`} className="shot" aria-label={`View case study: ${project.name}`}>
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <div className="corner tl" />
        <div className="corner tr" />
      </Link>
      <div className="body">
        <div className="row1">
          <h3>{project.name}</h3>
          <span className="role-tag">{project.roleTag}</span>
        </div>
        <p className="desc">{project.summary}</p>
        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="foot">
          <span className="meta">{project.timeline.toUpperCase()}</span>
          <div className="foot-links">
            <Link href={`/projects/${project.slug}`} className="case-link">
              Case study →
            </Link>
            <a href={project.liveUrl} target="_blank" rel="noopener" className="live">
              {project.liveUrl.replace(/^https?:\/\//, "")} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
