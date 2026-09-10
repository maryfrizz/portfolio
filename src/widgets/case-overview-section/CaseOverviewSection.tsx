import Image from "next/image";
import { ProjectTagList } from "@/src/entities/project/ui";
import { ExternalTextLink } from "@/src/shared/ui/external-text-link";

type CaseOverviewSectionProps = {
  duration: string;
  heading: string;
  role: string[];
  tags: string[];
  websiteHref: string;
  websiteLabel: string;
};

export function CaseOverviewSection({
  duration,
  heading,
  role,
  tags,
  websiteHref,
  websiteLabel,
}: CaseOverviewSectionProps) {
  return (
    <section
      aria-label="Case overview"
      className="flex flex-col gap-10 bg-white px-[15px] pb-5 pt-10 md:px-10 lg:px-14 lg:pb-[60px]"
    >
      <header className="flex w-full max-w-[320px] flex-col gap-6 md:max-w-[680px] md:gap-8 lg:max-w-[1135px] lg:gap-10">
        <div className="flex w-full flex-col gap-8 md:max-w-[688px] lg:w-[800px]">
          <Image
            alt="California Closets"
            className="h-[15px] w-[189px] md:h-[26px] md:w-[331px]"
            height={26}
            priority
            src="/assets/california-closets-logo.svg"
            width={331}
          />
          <h1 className="text-[28px] font-medium leading-[1.1] tracking-[-0.84px] text-[#120a1d] md:text-[36px] md:tracking-[-1.08px] lg:w-[812px] lg:text-[48px] lg:tracking-[-1.44px]">
            {heading}
          </h1>
        </div>
        <ExternalTextLink
          className="inline-flex w-fit items-center gap-0.5 px-0.5 text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d]"
          href={websiteHref}
        >
          {websiteLabel}
          <Image
            alt=""
            className="size-4"
            height={16}
            src="/assets/external-link-arrow.svg"
            width={16}
          />
        </ExternalTextLink>
      </header>

      <div className="flex w-full flex-col gap-10 border-[#d9dadb] border-b pb-5 md:max-w-[590px] lg:max-w-none lg:flex-row lg:gap-3 lg:pb-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between lg:w-[400px] lg:flex-col lg:items-start lg:justify-between lg:self-stretch">
          <div className="flex flex-col gap-2 md:gap-2.5">
            <h2 className="text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d]">
              Duration
            </h2>
            <p className="text-sm leading-[1.5] text-[#4a5565]">{duration}</p>
          </div>
          <ProjectTagList tags={tags} />
        </div>

        <div className="flex w-full flex-col gap-2 md:gap-2.5 lg:w-[590px]">
          <h2 className="text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d]">
            My Role
          </h2>
          <div className="text-sm leading-[1.5] text-[#4a5565]">
            {role.map((paragraph) => (
              <p className="not-last:mb-1.5" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
