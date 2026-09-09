import Link from "next/link";
import { ArrowIcon } from "@/src/shared/ui/arrow-icon";
import type { ProjectAction } from "../../model";

type ProjectActionLinkProps = {
  action: Extract<ProjectAction, { kind: "link" }>;
};

export function ProjectActionLink({ action }: ProjectActionLinkProps) {
  const isCaseStudy = action.label === "Case Study";
  const className = isCaseStudy
    ? "group inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#120a1d] bg-[#120a1d] px-6 text-sm font-semibold leading-none tracking-[0.02em] text-[#ffffff] transition-colors hover:border-[#dd6b99] hover:bg-[#dd6b99] focus-visible:border-[#dd6b99] focus-visible:bg-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    : "group inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#120a1d] bg-white px-6 text-sm font-semibold leading-none tracking-[0.02em] text-[#120a1d] transition-colors hover:border-[#dd6b99] hover:text-[#dd6b99] focus-visible:border-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";
  const foregroundClassName = isCaseStudy
    ? "text-[#ffffff]"
    : "text-[#120a1d] transition-colors group-hover:text-[#dd6b99] group-focus-visible:text-[#dd6b99]";

  const content = (
    <>
      <span className={foregroundClassName}>{action.label}</span>
      <ArrowIcon
        className={`${foregroundClassName} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5`}
      />
    </>
  );

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
