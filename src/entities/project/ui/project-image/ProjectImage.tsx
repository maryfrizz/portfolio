import Image from "next/image";
import type { ProjectMedia as ProjectMediaData } from "../../model";

type ProjectImageProps = {
  media: ProjectMediaData;
  priority?: boolean;
};

export function ProjectImage({ media, priority = false }: ProjectImageProps) {
  return (
    <div className="relative h-[412.5px] w-[391px] shrink-0 overflow-hidden rounded-[16px] bg-[#f3f4f6] xl:w-auto xl:min-w-0">
      {media.type === "video" ? (
        <video
          aria-label={media.alt}
          autoPlay
          className="size-full object-cover"
          loop
          muted
          playsInline
          preload={priority ? "auto" : "metadata"}
          src={media.src}
        />
      ) : (
        <Image
          alt={media.alt}
          className="object-cover"
          fill
          priority={priority}
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 41vw, 100vw"
          src={media.src}
        />
      )}
    </div>
  );
}
