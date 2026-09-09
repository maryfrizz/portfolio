"use client";

import { motion, useAnimationControls, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
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

type HeroWordProps = {
  children: ReactNode;
  delay: number;
  reduceMotion: boolean | null;
};

function HeroWord({ children, delay, reduceMotion }: HeroWordProps) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        animate={{ opacity: 1, y: 0 }}
        className="inline-block"
        initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
        transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HomeHeroSection() {
  const firstPhoto = useAnimationControls();
  const secondPhoto = useAnimationControls();
  const [frontPhoto, setFrontPhoto] = useState(0);
  const isSwapping = useRef(false);
  const activePhoto = useRef(0);
  const interaction = useRef({ hover: false, focus: false });
  const reduceMotion = useReducedMotion();
  const entranceTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] } as const;
  const heroEntranceDelays = { outline: 0.94, photo: 1 } as const;
  const wordDelay = (index: number) => 0.22 + index * 0.06;

  async function swapPhotos(source: "hover" | "focus", active: boolean) {
    interaction.current[source] = active;
    const targetPhoto = () => Number(interaction.current.hover || interaction.current.focus);
    if (isSwapping.current) return;
    isSwapping.current = true;
    const photos = [firstPhoto, secondPhoto];
    try {
      while (activePhoto.current !== targetPhoto()) {
        if (!reduceMotion) {
          await Promise.all(
            photos.map((photo, index) =>
              photo.start({
                x: index === activePhoto.current ? -74 : 74,
                transition: { duration: 0.3, ease: "easeInOut" },
              }),
            ),
          );
        }
        // Read the latest hover state so quick exits also restore the original.
        activePhoto.current = targetPhoto();
        setFrontPhoto(activePhoto.current);
        if (!reduceMotion) {
          await Promise.all(
            photos.map((photo) =>
              photo.start({
                x: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }),
            ),
          );
        }
      }
    } finally {
      isSwapping.current = false;
    }
  }

  return (
    <section aria-labelledby="home-hero-heading" className="overflow-hidden bg-white">
      <PageContainer
        className="relative px-[15px] py-10 md:px-10 md:pb-[60px] md:pt-20 xl:px-14 xl:pb-20 xl:pt-[100px]"
        style={{ maxWidth: "none" }}
      >
        <motion.div
          aria-hidden="true"
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-none absolute left-[2px] top-[73px] h-[73px] w-[310px] bg-[url('/assets/home/hero-outline-mobile.svg')] bg-[length:100%_100%] bg-no-repeat md:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
          transition={{ ...entranceTransition, delay: heroEntranceDelays.outline }}
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-none absolute left-[369px] top-[47px] hidden h-[120px] w-[411px] bg-[url('/assets/home/hero-outline-tablet.svg')] bg-[length:100%_100%] bg-no-repeat md:block xl:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
          transition={{ ...entranceTransition, delay: heroEntranceDelays.outline }}
        />
        <motion.span
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute left-[200px] top-[26px] size-[72px] md:hidden"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: "100%" }}
          transition={{ ...entranceTransition, delay: heroEntranceDelays.photo }}
        >
          <PortraitInline
            alt="portrait of designer"
            className="!size-full"
            priority
            src="/assets/home/maria-portrait-mobile.png"
          />
        </motion.span>
        <motion.span
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute left-[265px] top-[69px] hidden size-[88px] md:inline-block xl:hidden"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: "100%" }}
          transition={{ ...entranceTransition, delay: heroEntranceDelays.photo }}
        >
          <PortraitInline
            alt="portrait of designer"
            className="!size-full"
            priority
            src="/assets/home/maria-portrait-inline.png"
          />
        </motion.span>
        <h1
          className="text-[44px] font-medium leading-[1.1] tracking-[-1.32px] text-[#120a1d] md:whitespace-nowrap md:text-[56px] md:tracking-[-1.68px] xl:text-[77px] xl:tracking-[-2.31px]"
          id="home-hero-heading"
        >
          <HeroWord delay={wordDelay(0)} reduceMotion={reduceMotion}>
            I’m
          </HeroWord>{" "}
          <HeroWord delay={wordDelay(1)} reduceMotion={reduceMotion}>
            Maria
          </HeroWord>
          <span aria-hidden="true" className="inline-block w-[118px] md:w-[144px] xl:w-[197px]" />
          <motion.a
            animate="rest"
            className="relative inline-block font-medium transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            href={linkedInUrl}
            initial="rest"
            onBlur={() => swapPhotos("focus", false)}
            onFocus={() => swapPhotos("focus", true)}
            onHoverEnd={() => swapPhotos("hover", false)}
            onHoverStart={() => swapPhotos("hover", true)}
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
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="pointer-events-none !absolute left-[-158px] top-[-18px] z-20 !hidden size-[130px] xl:!inline-block"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: "100%" }}
              transition={{ ...entranceTransition, delay: heroEntranceDelays.photo }}
            >
              <motion.span
                animate={firstPhoto}
                className="absolute inset-0 overflow-hidden rounded-full"
                initial={{ x: 0 }}
                style={{ zIndex: frontPhoto === 0 ? 2 : 1 }}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  priority
                  sizes="130px"
                  src="/assets/home/maria-portrait-desktop.png"
                />
              </motion.span>
              <motion.span
                animate={secondPhoto}
                className="absolute inset-0 overflow-hidden rounded-full"
                initial={{ x: 0 }}
                style={{ zIndex: frontPhoto === 1 ? 2 : 1 }}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  priority
                  sizes="130px"
                  src="/assets/home/maria-portrait-desktop-hover.png"
                />
              </motion.span>
            </motion.span>
            <span className="relative z-10">
              <HeroWord delay={wordDelay(2)} reduceMotion={reduceMotion}>
                UX/UI
              </HeroWord>{" "}
              <HeroWord delay={wordDelay(3)} reduceMotion={reduceMotion}>
                designer
              </HeroWord>
            </span>
          </motion.a>
          <span className="md:hidden">
            {" "}
            <HeroWord delay={wordDelay(4)} reduceMotion={reduceMotion}>
              with
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(5)} reduceMotion={reduceMotion}>
              a
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(6)} reduceMotion={reduceMotion}>
              focus
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(7)} reduceMotion={reduceMotion}>
              on
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(8)} reduceMotion={reduceMotion}>
              interaction
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(9)} reduceMotion={reduceMotion}>
              and
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(10)} reduceMotion={reduceMotion}>
              accessible
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(11)} reduceMotion={reduceMotion}>
              design
            </HeroWord>
          </span>
          <span className="hidden md:inline">
            <br aria-hidden="true" />
            <HeroWord delay={wordDelay(4)} reduceMotion={reduceMotion}>
              with
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(5)} reduceMotion={reduceMotion}>
              a
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(6)} reduceMotion={reduceMotion}>
              focus
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(7)} reduceMotion={reduceMotion}>
              on
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(8)} reduceMotion={reduceMotion}>
              interaction
            </HeroWord>{" "}
            <br aria-hidden="true" />
            <HeroWord delay={wordDelay(9)} reduceMotion={reduceMotion}>
              and
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(10)} reduceMotion={reduceMotion}>
              accessible
            </HeroWord>{" "}
            <HeroWord delay={wordDelay(11)} reduceMotion={reduceMotion}>
              design
            </HeroWord>
          </span>
        </h1>
      </PageContainer>
    </section>
  );
}
