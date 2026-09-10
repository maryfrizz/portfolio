import Image from "next/image";
import { ScrollReveal } from "@/src/shared/ui/scroll-reveal";

type CaseFullwidthImageProps = {
  alt: string;
  image: string;
};

export function CaseFullwidthImage({ alt, image }: CaseFullwidthImageProps) {
  return (
    <section aria-label={alt} className="relative aspect-[32/17] overflow-hidden bg-white">
      <ScrollReveal className="aspect-[32/17] w-full">
        <Image alt={alt} className="object-cover" fill sizes="100vw" src={image} />
      </ScrollReveal>
    </section>
  );
}
