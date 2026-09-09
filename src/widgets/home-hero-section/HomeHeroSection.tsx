import { ExternalTextLink } from "@/src/shared/ui/external-text-link";
import { PageContainer } from "@/src/shared/ui/page-container";
import { PortraitInline } from "@/src/shared/ui/portrait-inline";

const linkedInUrl = "https://www.linkedin.com/in/mariakozikova/";

export function HomeHeroSection() {
  return (
    <section aria-labelledby="home-hero-heading" className="overflow-hidden bg-white">
      <PageContainer
        className="px-[15px] py-10 md:px-10 md:pb-[60px] md:pt-20 xl:px-14"
        style={{ maxWidth: "none" }}
      >
        <h1
          className="max-w-[1168px] text-[44px] font-medium leading-[1.1] tracking-normal text-[#120a1d] md:text-[56px] xl:text-[80px]"
          id="home-hero-heading"
        >
          <span>I’m Maria </span>
          <PortraitInline
            alt="portrait of designer"
            className="mx-1 size-[72px] md:size-[88px]"
            priority
            src="/assets/home/maria-portrait-inline.png"
          />
          <span> </span>
          <ExternalTextLink
            className="relative inline-block font-medium after:absolute after:-inset-x-[0.18em] after:-inset-y-[0.04em] after:-z-0 after:rounded-[50%] after:border-[0.07em] after:border-[#dd6b99] after:content-[''] focus-visible:after:border-current"
            href={linkedInUrl}
          >
            <span className="relative z-10">UX/UI designer</span>
          </ExternalTextLink>
          <span> with a focus on interaction and accessible design</span>
        </h1>
      </PageContainer>
    </section>
  );
}
