import { InfiniteSlider } from "@/src/shared/ui/infinite-slider";
import type { ProjectMedia as ProjectMediaData } from "../../model";
import { ProjectImage } from "../project-image";

type ProjectMediaGroupProps = {
  media: ProjectMediaData[];
  priority?: boolean;
  reverse?: boolean;
};

export function ProjectMediaGroup({
  media,
  priority = false,
  reverse = false,
}: ProjectMediaGroupProps) {
  const images = media.map((item, index) => (
    <ProjectImage key={item.src} media={item} priority={priority && index === 0} />
  ));

  return (
    <>
      <InfiniteSlider
        className="-ml-[15px] w-screen md:-ml-10 xl:hidden"
        gap={12}
        reverse={reverse}
        speed={100}
      >
        {images}
      </InfiniteSlider>
      <div className="hidden grid-cols-3 gap-4 xl:grid">{images}</div>
    </>
  );
}
