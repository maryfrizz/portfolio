import Image from "next/image";
import type { ProjectImage as ProjectImageData } from "../../model";

type ProjectImageProps = {
  image: ProjectImageData;
  priority?: boolean;
};

export function ProjectImage({ image, priority = false }: ProjectImageProps) {
  return (
    <div className="relative aspect-[0.74] w-[calc((100vw-42px)/2)] shrink-0 overflow-hidden rounded-lg bg-[#f4f1f6] md:w-[400px] xl:aspect-[1.08] xl:w-auto">
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
