import Link from "next/link";
import { ArrowIcon } from "@/src/shared/ui/arrow-icon";
import type { ProjectAction } from "../../model";

type ProjectActionLinkProps = {
  action: Extract<ProjectAction, { kind: "link" }>;
};

export function ProjectActionLink({ action }: ProjectActionLinkProps) {
  const className =
    "group inline-flex h-7 items-center gap-1.5 text-base font-medium leading-none tracking-[0.02em] text-[#120a1d] transition-colors hover:text-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

  const content = (
    <>
      <span>{action.label}</span>
      <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
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
