import Image from "next/image";
import Link from "next/link";
import type { ProjectAction } from "../../model";

type ProjectActionLinkProps = {
  action: ProjectAction;
};

export function ProjectActionLink({ action }: ProjectActionLinkProps) {
  const isDisabled = action.kind === "disabled";
  const isCaseStudy = action.kind === "link" && action.label === "Case Study";
  const hasArrow = action.kind === "link" && !action.href.startsWith("/");
  const className = isDisabled
    ? "inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full bg-[rgba(18,10,29,0.1)] px-6 text-base font-semibold leading-6 tracking-[0.02em] text-[rgba(18,10,29,0.2)]"
    : isCaseStudy
      ? "group inline-flex h-12 items-center justify-center gap-[5px] rounded-full bg-[#120a1d] px-6 text-base font-semibold leading-6 tracking-[0.02em] text-white transition-colors hover:bg-[#dd6b99] focus-visible:bg-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]"
      : "group inline-flex h-12 items-center justify-center gap-[5px] rounded-full border-2 border-[#120a1d] bg-white pl-6 pr-[18px] text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d] transition-colors hover:border-[#dd6b99] hover:text-[#dd6b99] focus-visible:border-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]";
  const foregroundClassName = isDisabled
    ? "text-[rgba(18,10,29,0.2)]"
    : isCaseStudy
      ? "text-[#ffffff]"
      : "text-[#120a1d] transition-colors group-hover:text-[#dd6b99] group-focus-visible:text-[#dd6b99]";
  const arrow = isCaseStudy ? (
    <Image
      alt=""
      aria-hidden="true"
      className="size-5 shrink-0"
      height={20}
      src="/assets/icons/button-arrow-primary.svg"
      width={20}
    />
  ) : (
    <span aria-hidden="true" className="relative size-5 shrink-0">
      <Image
        alt=""
        className="absolute inset-0 size-full group-hover:hidden group-focus-visible:hidden"
        height={20}
        src="/assets/icons/button-arrow-secondary.svg"
        width={20}
      />
      <Image
        alt=""
        className="absolute inset-0 hidden size-full group-hover:block group-focus-visible:block"
        height={20}
        src="/assets/icons/button-arrow-secondary-hover.svg"
        width={20}
      />
    </span>
  );

  const content = (
    <>
      <span className={foregroundClassName}>{action.label}</span>
      {hasArrow ? arrow : null}
    </>
  );

  if (isDisabled) {
    return (
      <button aria-disabled="true" className={className} disabled type="button">
        {content}
      </button>
    );
  }

  if (action.href.startsWith("/")) {
    return (
      <Link className={className} href={action.href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={action.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}
