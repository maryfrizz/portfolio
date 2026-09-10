import Image from "next/image";

type CaseFullwidthImageProps = {
  alt: string;
  image: string;
};

export function CaseFullwidthImage({ alt, image }: CaseFullwidthImageProps) {
  return (
    <section aria-label={alt} className="relative aspect-[32/17] overflow-hidden bg-white">
      <Image alt={alt} className="object-cover" fill sizes="100vw" src={image} />
    </section>
  );
}
