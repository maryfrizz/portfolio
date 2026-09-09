import type { ProjectMedia as ProjectMediaData } from "../../model";
import { ProjectImage } from "../project-image";

type ProjectMediaGroupProps = {
  media: ProjectMediaData[];
  priority?: boolean;
};

export function ProjectMediaGroup({ media, priority = false }: ProjectMediaGroupProps) {
  return (
    <div className="-ml-[15px] flex w-screen gap-3 overflow-x-auto pb-1 md:-ml-10 md:gap-4 xl:ml-0 xl:w-auto xl:gap-4 xl:overflow-visible xl:pb-0">
      {media.map((item, index) => (
        <ProjectImage key={item.src} media={item} priority={priority && index === 0} />
      ))}
    </div>
  );
}
