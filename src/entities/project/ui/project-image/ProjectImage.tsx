import Image from "next/image";
import type { ProjectMedia as ProjectMediaData } from "../../model";

type ProjectImageProps = {
  media: ProjectMediaData;
  priority?: boolean;
};

export function ProjectImage({ media, priority = false }: ProjectImageProps) {
  const className =
    media.variant === "wide-overlap"
      ? "relative aspect-[0.91] w-screen shrink-0 overflow-hidden rounded-lg bg-[#f4f1f6] md:w-[calc((100vw-16px)/2)] xl:-ml-[92px] xl:aspect-[1.333] xl:w-[550px]"
      : `relative aspect-[0.91] w-screen shrink-0 overflow-hidden rounded-lg bg-[#f4f1f6] md:w-[calc((100vw-16px)/2)] xl:aspect-[0.904] xl:w-[calc((100vw-162px)/3)] ${
          media.variant === "after-wide-overlap" ? "xl:-ml-[85px]" : ""
        }`;

  return (
    <div className={className}>
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
