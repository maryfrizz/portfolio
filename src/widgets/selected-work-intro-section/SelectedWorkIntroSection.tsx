"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "@/src/shared/ui/page-container";

export function SelectedWorkIntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="selected-work-heading" className="bg-white">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        transition={{ delay: 1.02, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <PageContainer
          className="grid gap-4 px-[15px] pt-10 md:grid-cols-[224px_1fr] md:gap-[78px] md:px-10 md:pt-[60px] xl:flex xl:items-start xl:justify-between xl:gap-12 xl:px-14 xl:pr-[72px] xl:pt-20"
          style={{ maxWidth: "none" }}
        >
          <h2
            className="h-[31px] w-max whitespace-nowrap text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#120a1d] [font-synthesis:none] md:h-10 md:text-[36px] xl:h-[53px] xl:text-[48px]"
            id="selected-work-heading"
          >
            Selected Work
          </h2>
          <div className="xl:h-[111px] xl:w-[761px]">
            <p className="max-w-[345px] text-base font-normal leading-6 tracking-[0.02em] text-[#4a5565] [font-synthesis:none] md:mt-[15px] md:max-w-[418px] xl:mt-[21px] xl:max-w-[701px] xl:text-xl xl:leading-[30px]">
              My favorite projects reflect my approach to design: a&nbsp;focus on details,
              a&nbsp;deep understanding of the task, and a desire to create clear, aesthetic
              interfaces.
            </p>
          </div>
        </PageContainer>
      </motion.div>
    </section>
  );
}
