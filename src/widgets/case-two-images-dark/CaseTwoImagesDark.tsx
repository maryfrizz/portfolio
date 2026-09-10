import Image from "next/image";
import { ScrollReveal } from "@/src/shared/ui/scroll-reveal";

const uiScreenImage = "/assets/case-two-images-dark/ui-screen.png";
const navigationScreenImage = "/assets/case-two-images-dark/navigation-screen.png";

export function CaseTwoImagesDark() {
  return (
    <section
      aria-label="California Closets UI design examples"
      className="bg-black px-[15px] pt-5 pb-10 md:px-10 md:pb-[60px] lg:px-14 lg:pt-10 lg:pb-20"
    >
      <div className="flex flex-col items-start gap-[30px] lg:flex-row lg:gap-5">
        <ScrollReveal className="order-2 aspect-[662/535] w-full overflow-hidden rounded-lg lg:order-1 lg:min-w-0 lg:flex-1">
          <Image
            alt="California Closets interface design"
            className="h-full w-full object-cover object-center"
            height={991}
            sizes="(min-width: 1024px) calc(100vw - 588px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 30px)"
            src={uiScreenImage}
            width={1549}
          />
        </ScrollReveal>
        <ScrollReveal
          className="order-1 aspect-[476/298] w-full overflow-hidden rounded-lg lg:order-2 lg:w-[476px] lg:shrink-0"
          delay={0.12}
        >
          <Image
            alt="California Closets navigation design"
            className="h-full w-full object-cover"
            height={648}
            sizes="(min-width: 1024px) 476px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 30px)"
            src={navigationScreenImage}
            width={1024}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
