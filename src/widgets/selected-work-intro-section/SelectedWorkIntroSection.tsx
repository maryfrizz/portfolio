import * as motion from "motion/react-client";
import { PageContainer } from "@/src/shared/ui/page-container";

export function SelectedWorkIntroSection() {
  return (
    <section aria-labelledby="selected-work-heading" className="bg-white">
      <PageContainer
        className="grid gap-4 px-[15px] pt-[88px] md:grid-cols-[224px_1fr] md:gap-[78px] md:px-10 md:pt-[60px] xl:grid-cols-[299px_1fr] xl:gap-[92px] xl:px-14 xl:pt-20"
        style={{ maxWidth: "none" }}
      >
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="h-[31px] w-max whitespace-nowrap text-[28px] font-medium leading-[1.1] text-[#120a1d] md:h-10 md:text-[36px] xl:h-[53px] xl:text-[48px]"
          id="selected-work-heading"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Selected Work
        </motion.h2>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[345px] text-base font-normal leading-6 text-[#4a5565] md:mt-[15px] md:max-w-[418px] xl:mt-[21px] xl:max-w-[670px] xl:text-xl xl:leading-[30px]"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          My favorite projects reflect my approach to design: a&nbsp;focus on details, a&nbsp;deep
          understanding of the task, and a desire to create clear, aesthetic interfaces.
        </motion.p>
      </PageContainer>
    </section>
  );
}
