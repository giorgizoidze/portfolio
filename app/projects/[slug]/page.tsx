import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import DetailGallery from "@/components/DetailGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <section id="case-study">
      <div className="sheet-head">
        <span className="tag">{project.sheet}</span>
        <h2>Case study</h2>
        <span className="fill" />
      </div>

      <div className="case-head">
        <h1 className="case-title">{project.name}</h1>
      </div>

      <div className="titleblock case-titleblock" style={{ marginTop: 24 }}>
        <div className="cell">
          <div className="label">Role</div>
          <div className="v">{project.role}</div>
        </div>
        <div className="cell">
          <div className="label">Timeline</div>
          <div className="v mono">{project.timeline}</div>
        </div>
        <div className="cell">
          <div className="label">Stack</div>
          <div className="v">{project.stack.join(" · ")}</div>
        </div>
        <div className="cell">
          <div className="label">Live</div>
          <div className="v accent">
            <a href={project.liveUrl} target="_blank" rel="noopener">
              {project.liveUrl.replace(/^https?:\/\//, "")} ↗
            </a>
          </div>
        </div>
      </div>

      <div className="case-gallery">
        {(() => {
          const img = project.images[0];
          return (
            <figure key={img.src}>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
              <figcaption>{img.alt}</figcaption>
            </figure>
          );
        })()}
      </div>

      <div className="case-body">
        {project.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <a href={project.liveUrl} target="_blank" rel="noopener" className="case-cta">
          Visit {project.name} ↗
        </a>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <DetailGallery sheet={project.sheet} items={project.gallery} />
      ) : null}
    </section>
  );
}
