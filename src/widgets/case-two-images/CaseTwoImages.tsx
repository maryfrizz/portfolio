import Image from "next/image";

const mainNavigationImage = "/assets/case-two-images/main-navigation.png";
const navigationDiagramImage = "/assets/case-two-images/navigation-linking-diagram.png";

export function CaseTwoImages() {
  return (
    <section
      aria-label="Navigation research artifacts"
      className="bg-white px-[15px] pb-10 md:px-10 md:pb-[60px] lg:px-14 lg:pb-20"
    >
      <div className="flex flex-col items-start gap-5 lg:flex-row">
        <Image
          alt="Navigation and linking diagram"
          className="order-2 h-auto w-[295px] rounded-[5px] md:w-[476px] md:rounded-lg lg:order-1 lg:w-[476px]"
          height={196}
          src={navigationDiagramImage}
          width={295}
        />
        <Image
          alt="California Closets main navigation and page structure"
          className="order-1 h-auto w-full rounded-lg lg:order-2 lg:min-w-0 lg:flex-1"
          height={223}
          src={mainNavigationImage}
          width={345}
        />
      </div>
    </section>
  );
}
