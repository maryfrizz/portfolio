import type { Project } from "../../model";
import { ProjectActionLink } from "../project-action-link";
import { ProjectComingSoon } from "../project-coming-soon";
import { ProjectDescription } from "../project-description";
import { ProjectMediaGroup } from "../project-media-group";
import { ProjectTagList } from "../project-tag-list";
import { ProjectTitle } from "../project-title";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="grid gap-5 md:gap-7 xl:grid-cols-[minmax(0,1fr)_440px] xl:items-start xl:gap-10">
      <ProjectMediaGroup images={project.images} priority={priority} />
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-x-8 md:gap-y-6 xl:grid-cols-1 xl:gap-6">
        <div className="grid gap-4 md:gap-5">
          <ProjectTitle title={project.title} year={project.titleYear} />
          <ProjectTagList tags={project.tags} />
        </div>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-8 xl:col-span-1 xl:grid-cols-1 xl:items-start">
          <ProjectDescription>{project.description}</ProjectDescription>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.actions.map((action) =>
              action.kind === "link" ? (
                <ProjectActionLink action={action} key={`${action.label}-${action.href}`} />
              ) : (
                <ProjectComingSoon key={action.label}>{action.label}</ProjectComingSoon>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
