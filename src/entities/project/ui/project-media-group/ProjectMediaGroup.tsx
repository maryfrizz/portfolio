import type { ProjectImage as ProjectImageData } from "../../model";
import { ProjectImage } from "../project-image";

type ProjectMediaGroupProps = {
  images: ProjectImageData[];
  priority?: boolean;
};

export function ProjectMediaGroup({ images, priority = false }: ProjectMediaGroupProps) {
  return (
    <div className="-mx-[15px] flex gap-3 overflow-x-auto px-[15px] pb-1 md:-mx-10 md:gap-4 md:px-10 xl:mx-0 xl:grid xl:grid-cols-3 xl:gap-5 xl:overflow-visible xl:px-0 xl:pb-0">
      {images.map((image, index) => (
        <ProjectImage image={image} key={image.src} priority={priority && index === 0} />
      ))}
    </div>
  );
}
