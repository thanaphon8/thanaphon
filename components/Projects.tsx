import { projects } from "@/data/projects";
import ProjectPreviewGrid from "./ProjectPreviewGrid";

export default function Projects() {
  return (
    <section id="projects" className="flex scroll-mt-20 flex-col gap-6 border-t border-black/[.08] py-16 dark:border-white/[.145]">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border border-black/[.08] p-6 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.04]"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3"
            >
              <h3 className="font-medium text-black dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/[.05] px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
            {project.previewImages && (
              <ProjectPreviewGrid images={project.previewImages} alt={project.title} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
