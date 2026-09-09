import { PageContainer } from "@/src/shared/ui/page-container";

export function SelectedWorkIntroSection() {
  return (
    <section aria-labelledby="selected-work-heading" className="bg-white">
      <PageContainer
        className="grid gap-4 px-[15px] pt-[88px] md:grid-cols-[224px_1fr] md:gap-[78px] md:px-10 md:pt-[60px] xl:grid-cols-[299px_1fr] xl:gap-[92px] xl:px-14 xl:pt-20"
        style={{ maxWidth: "none" }}
      >
        <h2
          className="h-[31px] w-max whitespace-nowrap text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#120a1d] md:h-10 md:text-[36px] xl:h-[53px] xl:text-[48px]"
          id="selected-work-heading"
        >
          Selected Work
        </h2>
        <p className="max-w-[345px] text-base font-normal leading-6 tracking-[0.02em] text-[#4a5565] md:mt-[15px] md:max-w-[418px] xl:mt-[21px] xl:max-w-[701px] xl:text-xl xl:leading-[30px]">
          My favorite projects reflect my approach to design: a&nbsp;focus on details, a&nbsp;deep
          understanding of the task, and a desire to create clear, aesthetic interfaces.
        </p>
      </PageContainer>
    </section>
  );
}
