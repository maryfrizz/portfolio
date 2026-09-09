"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { PageContainer } from "@/src/shared/ui/page-container";
import { PortraitInline } from "@/src/shared/ui/portrait-inline";

const linkedInUrl = "https://www.linkedin.com/in/mariakozikova/";

const outlineVariants = {
  rest: { opacity: 0, pathLength: 0 },
  hover: {
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: { duration: 0.08 },
      pathLength: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  },
} satisfies Variants;

const portraitVariants = {
  rest: { opacity: 0, rotate: -4, scale: 0.92, x: 20 },
  hover: {
    opacity: 1,
    rotate: -2,
    scale: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.1 },
      rotate: { damping: 22, stiffness: 300, type: "spring" },
      scale: { damping: 22, stiffness: 300, type: "spring" },
      x: { damping: 22, stiffness: 300, type: "spring" },
    },
  },
} satisfies Variants;

const originalPortraitVariants = {
  rest: { opacity: 1, rotate: 0, scale: 1, x: 0, y: 0, zIndex: 2 },
  hover: {
    opacity: [1, 1, 1, 0],
    rotate: [0, -10, -6, 0],
    scale: [1, 0.96, 0.98, 1],
    x: [0, -44, -28, 0],
    y: [0, 18, -10, 0],
    zIndex: [2, 2, 1, 1],
    transition: {
      duration: 0.82,
      ease: [0.34, 1.56, 0.64, 1],
      times: [0, 0.38, 0.7, 1],
    },
  },
} satisfies Variants;

const hoverPortraitVariants = {
  rest: { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0, zIndex: 1 },
  hover: {
    opacity: [0, 1, 1, 1],
    rotate: [0, 8, 4, 0],
    scale: [1, 0.96, 1.02, 1],
    x: [0, 34, 22, 0],
    y: [0, -24, 12, 0],
    zIndex: [1, 1, 3, 3],
    transition: {
      duration: 0.82,
      ease: [0.34, 1.56, 0.64, 1],
      times: [0, 0.38, 0.7, 1],
    },
  },
} satisfies Variants;

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
          <motion.a
            animate="rest"
            className="relative inline-block font-medium transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            href={linkedInUrl}
            initial="rest"
            rel="noreferrer"
            target="_blank"
            whileFocus="hover"
            whileHover="hover"
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute left-[-22px] top-[-30px] hidden h-[143px] w-[560px] xl:block"
            >
              <svg
                aria-hidden="true"
                className="size-full overflow-visible"
                fill="none"
                focusable="false"
                preserveAspectRatio="none"
                viewBox="0 0 560.179 142.927"
              >
                <motion.path
                  d="M460.569 10.3809C520.142 14.4737 546.065 38.7148 554.307 55.7771C566.139 80.2717 540.766 112.233 488.922 125.871C425.495 142.557 338.009 141.209 253.677 137.757C193.847 135.308 133.031 131.499 75.409 122.862C35.1782 116.833 -35.021 82.452 28.5605 47.1446C61.8496 28.6589 103.814 16.4746 165.595 9.10769C217.867 2.87463 276.562 1.01527 335.475 5.38951C417.085 11.449 480.303 27.3147 527.829 51.278"
                  stroke="#DD6B99"
                  strokeLinecap="round"
                  strokeWidth="6"
                  variants={outlineVariants}
                />
              </svg>
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="!absolute left-[-147px] top-[-18px] !hidden size-[130px] origin-center xl:!inline-block"
              variants={portraitVariants}
            >
              <motion.span
                className="absolute inset-0 overflow-hidden rounded-full shadow-[0_8px_18px_rgba(18,10,29,0.08)]"
                variants={originalPortraitVariants}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="130px"
                  src="/assets/home/maria-portrait-desktop.png"
                />
              </motion.span>
              <motion.span
                className="absolute inset-0 overflow-hidden rounded-full shadow-[0_8px_18px_rgba(18,10,29,0.08)]"
                variants={hoverPortraitVariants}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="130px"
                  src="/assets/home/maria-portrait-desktop-hover.png"
                />
              </motion.span>
            </motion.span>
            <span className="relative z-10">UX/UI designer</span>
          </motion.a>
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
