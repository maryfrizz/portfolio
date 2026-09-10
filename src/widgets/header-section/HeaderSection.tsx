"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ExternalTextLink } from "@/src/shared/ui/external-text-link";
import { PageContainer } from "@/src/shared/ui/page-container";

const headerLinks = [
  {
    href: "https://www.linkedin.com/in/mariakozikova/",
    label: "Linked in",
  },
  {
    href: "https://drive.google.com/file/d/19ZOWk1pziAGM2Cd1H4an36CIVhsiqO47/view?usp=sharing",
    label: "CV",
  },
];

type HeaderSectionProps = {
  backHref?: string;
  backLabel?: string;
};

export function HeaderSection({ backHref, backLabel = "Back" }: HeaderSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      animate={{ opacity: 1 }}
      className="sticky top-0 z-50 h-[68px] bg-white/80 text-base leading-6 tracking-[0.02em] text-[#120a1d] backdrop-blur-[4px]"
      initial={reduceMotion ? false : { opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageContainer
        className="flex h-full items-center justify-between gap-6 px-[15px] md:px-10 xl:px-14"
        style={{ maxWidth: "none" }}
      >
        <div className="flex items-center gap-5 md:gap-7">
          <p className="font-medium">Maria Kozikova</p>
          {backHref ? (
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]"
              href={backHref}
            >
              <span aria-hidden="true">←</span>
              {backLabel}
            </Link>
          ) : null}
        </div>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-7">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <ExternalTextLink className="font-semibold" href={link.href}>
                  {link.label}
                </ExternalTextLink>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </motion.header>
  );
}
