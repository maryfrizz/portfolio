import Image from "next/image";
import type { ProjectImage as ProjectImageData } from "../../model";

type ProjectImageProps = {
  image: ProjectImageData;
  priority?: boolean;
};

export function ProjectImage({ image, priority = false }: ProjectImageProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f1f6]">
      <Image
        alt={image.alt}
        className="object-cover"
        fill
        priority={priority}
        sizes="(min-width: 1280px) 31vw, (min-width: 768px) 41vw, 100vw"
        src={image.src}
      />
    </div>
  );
}
