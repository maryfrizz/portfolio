import type { ProjectImage as ProjectImageData } from "../../model";
import { ProjectImage } from "../project-image";

type ProjectMediaGroupProps = {
  images: ProjectImageData[];
  priority?: boolean;
};

export function ProjectMediaGroup({ images, priority = false }: ProjectMediaGroupProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3 md:gap-4 xl:gap-5">
      {images.map((image, index) => (
        <ProjectImage image={image} key={image.src} priority={priority && index === 0} />
      ))}
    </div>
  );
}
