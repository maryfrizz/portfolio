import type { Project } from "../../model";
import { ProjectActionLink } from "../project-action-link";
import { ProjectDescription } from "../project-description";
import { ProjectMediaGroup } from "../project-media-group";
import { ProjectTagList } from "../project-tag-list";
import { ProjectTitle } from "../project-title";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  reverseMedia?: boolean;
};

function renderProjectAction(action: Project["actions"][number]) {
  return (
    <ProjectActionLink
      action={action}
      key={action.kind === "link" ? `${action.label}-${action.href}` : action.label}
    />
  );
}

export function ProjectCard({ project, priority = false, reverseMedia = false }: ProjectCardProps) {
  const isCaliforniaClosets = project.slug === "california-closets";
  const isSerenaAndLily = project.slug === "serena-lily";

  return (
    <article className="md:pb-2 md:pt-px">
      <ProjectMediaGroup media={project.media} priority={priority} reverse={reverseMedia} />
      <div className="flex flex-wrap items-end justify-between gap-y-6 pt-4 md:mr-10 md:gap-y-[26px] xl:mr-0 xl:gap-y-3">
        <div className="grid min-w-[325px] flex-1 gap-3 md:w-[520px] md:flex-none xl:max-w-[520px]">
          <div className="grid gap-4">
            <ProjectTitle
              className={isCaliforniaClosets ? "md:text-[28px]" : ""}
              title={project.title}
              year={project.titleYear}
            />
            <ProjectTagList className={isSerenaAndLily ? "md:gap-[9px]" : ""} tags={project.tags} />
          </div>
          <ProjectDescription
            className={isCaliforniaClosets ? "md:text-[18px] md:leading-[27px]" : ""}
          >
            {project.description}
          </ProjectDescription>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {project.actions.map(renderProjectAction)}
        </div>
      </div>
    </article>
  );
}
