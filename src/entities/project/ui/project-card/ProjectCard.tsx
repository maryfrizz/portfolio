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

function renderProjectAction(action: Project["actions"][number]) {
  if (action.kind === "text") {
    return <ProjectComingSoon key={action.label}>{action.label}</ProjectComingSoon>;
  }

  return <ProjectActionLink action={action} key={`${action.label}-${action.href}`} />;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="grid gap-3 md:gap-4 xl:gap-4">
      <ProjectMediaGroup media={project.media} priority={priority} />
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-x-8 md:gap-y-5 xl:gap-y-3">
        <div className="grid gap-2">
          <ProjectTitle title={project.title} year={project.titleYear} />
          <ProjectTagList tags={project.tags} />
        </div>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-8">
          <ProjectDescription>{project.description}</ProjectDescription>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.actions.map(renderProjectAction)}
          </div>
        </div>
      </div>
    </article>
  );
}
