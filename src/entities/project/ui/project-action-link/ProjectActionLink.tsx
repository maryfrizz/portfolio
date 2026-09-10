import Link from "next/link";
import { ArrowIcon } from "@/src/shared/ui/arrow-icon";
import type { ProjectAction } from "../../model";

type ProjectActionLinkProps = {
  action: ProjectAction;
};

export function ProjectActionLink({ action }: ProjectActionLinkProps) {
  const isDisabled = action.kind === "disabled";
  const isCaseStudy = action.kind === "link" && action.label === "Case Study";
  const className = isDisabled
    ? "inline-flex h-12 cursor-not-allowed items-center justify-center gap-[5px] rounded-full bg-[rgba(18,10,29,0.1)] pl-6 pr-[18px] text-base font-semibold leading-6 tracking-[0.02em] text-[rgba(18,10,29,0.2)]"
    : isCaseStudy
      ? "group inline-flex h-12 items-center justify-center gap-[5px] rounded-full bg-[#120a1d] pl-6 pr-[18px] text-base font-semibold leading-6 tracking-[0.02em] text-white transition-colors hover:bg-[#dd6b99] focus-visible:bg-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]"
      : "group inline-flex h-12 items-center justify-center gap-[5px] rounded-full border-2 border-[#120a1d] bg-white pl-6 pr-[18px] text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d] transition-colors hover:border-[#dd6b99] hover:text-[#dd6b99] focus-visible:border-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]";
  const foregroundClassName = isDisabled
    ? "text-[rgba(18,10,29,0.2)]"
    : isCaseStudy
      ? "text-[#ffffff]"
      : "text-[#120a1d] transition-colors group-hover:text-[#dd6b99] group-focus-visible:text-[#dd6b99]";

  const content = (
    <>
      <span className={foregroundClassName}>{action.label}</span>
      <ArrowIcon
        className={`${foregroundClassName} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5`}
        style={{ height: 20, width: 20 }}
      />
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
