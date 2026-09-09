import { ExternalTextLink } from "@/src/shared/ui/external-text-link";
import { PageContainer } from "@/src/shared/ui/page-container";
import { PortraitInline } from "@/src/shared/ui/portrait-inline";

const linkedInUrl = "https://www.linkedin.com/in/mariakozikova/";

export function HomeHeroSection() {
  return (
    <section aria-labelledby="home-hero-heading" className="overflow-hidden bg-white">
      <PageContainer
        className="relative px-[15px] py-10 md:px-10 md:pb-[60px] md:pt-20 xl:px-14 xl:pb-20 xl:pt-[100px]"
        style={{ maxWidth: "none" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[2px] top-[73px] h-[73px] w-[310px] bg-[url('/assets/home/hero-outline-mobile.svg')] bg-[length:100%_100%] bg-no-repeat md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[369px] top-[47px] hidden h-[120px] w-[411px] bg-[url('/assets/home/hero-outline-tablet.svg')] bg-[length:100%_100%] bg-no-repeat md:block xl:hidden"
        />
        <PortraitInline
          alt="portrait of designer"
          className="!absolute left-[200px] top-[26px] size-[72px] md:!hidden"
          priority
          src="/assets/home/maria-portrait-mobile.png"
        />
        <PortraitInline
          alt="portrait of designer"
          className="!absolute left-[265px] top-[69px] !hidden size-[88px] md:!inline-block xl:!hidden"
          priority
          src="/assets/home/maria-portrait-inline.png"
        />
        <PortraitInline
          alt="portrait of designer"
          className="!absolute left-[386px] top-[78px] !hidden size-[130px] xl:!inline-block"
          priority
          src="/assets/home/maria-portrait-desktop.png"
        />
        <h1
          className="text-[44px] font-medium leading-[1.1] tracking-[-1.32px] text-[#120a1d] md:whitespace-nowrap md:text-[56px] md:tracking-[-1.68px] xl:text-[77px] xl:tracking-[-2.31px]"
          id="home-hero-heading"
        >
          <span>I’m Maria</span>
          <span aria-hidden="true" className="inline-block w-[118px] md:w-[144px] xl:w-[197px]" />
          <ExternalTextLink
            className="group/profession relative inline-block font-medium hover:opacity-100 focus-visible:opacity-100"
            href={linkedInUrl}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[-22px] top-[-30px] hidden h-[143px] w-[560px] bg-[url('/assets/home/hero-outline-desktop-hover.svg')] bg-[length:100%_100%] bg-no-repeat opacity-0 transition-opacity duration-150 group-hover/profession:opacity-100 group-focus-visible/profession:opacity-100 xl:block"
            />
            <PortraitInline
              alt=""
              className="!absolute left-[-158px] top-[-18px] !hidden size-[130px] opacity-0 transition-opacity duration-150 group-hover/profession:opacity-100 group-focus-visible/profession:opacity-100 xl:!inline-block"
              src="/assets/home/maria-portrait-desktop-hover.png"
            />
            <span className="relative z-10">UX/UI designer</span>
          </ExternalTextLink>
          <span className="md:hidden"> with a focus on interaction and accessible design</span>
          <span className="hidden md:inline">
            <br aria-hidden="true" />
            with a focus on interaction <br aria-hidden="true" />
            and accessible design
          </span>
        </h1>
      </PageContainer>
    </section>
  );
}
