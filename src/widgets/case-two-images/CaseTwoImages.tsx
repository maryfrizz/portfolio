import Image from "next/image";

const mainNavigationImage = "/assets/case-two-images/main-navigation-full.png";
const navigationDiagramImage = "/assets/case-two-images/navigation-linking-diagram-full.png";

type CaseImage = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

type CaseTwoImagesProps = {
  firstImage?: CaseImage;
  secondImage?: CaseImage;
};

const defaultFirstImage: CaseImage = {
  alt: "Navigation and linking diagram",
  height: 196,
  src: navigationDiagramImage,
  width: 295,
};

const defaultSecondImage: CaseImage = {
  alt: "California Closets main navigation and page structure",
  height: 223,
  src: mainNavigationImage,
  width: 345,
};

export function CaseTwoImages({
  firstImage = defaultFirstImage,
  secondImage = defaultSecondImage,
}: CaseTwoImagesProps) {
  return (
    <section
      aria-label="Navigation research artifacts"
      className="bg-white px-[15px] pb-10 md:px-10 md:pb-[60px] lg:px-14 lg:pb-20"
    >
      <div className="flex flex-col items-start gap-5 lg:flex-row">
        <Image
          alt={firstImage.alt}
          className="order-2 h-auto w-[295px] rounded-[5px] md:w-[476px] md:rounded-lg lg:order-1 lg:w-[476px]"
          height={firstImage.height}
          sizes="(min-width: 768px) 476px, 295px"
          src={firstImage.src}
          width={firstImage.width}
        />
        <Image
          alt={secondImage.alt}
          className="order-1 h-auto w-full rounded-lg lg:order-2 lg:min-w-0 lg:flex-1"
          height={secondImage.height}
          sizes="(min-width: 1024px) 55vw, 100vw"
          src={secondImage.src}
          width={secondImage.width}
        />
      </div>
    </section>
  );
}
