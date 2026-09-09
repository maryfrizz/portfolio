import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type IconLinkProps = ComponentProps<typeof Link> & {
  label: string;
  icon: ReactNode;
};

export function IconLink({ className = "", icon, label, ...props }: IconLinkProps) {
  return (
    <Link
      aria-label={label}
      className={`inline-flex size-11 items-center justify-center rounded-full transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`.trim()}
      {...props}
    >
      {icon}
    </Link>
  );
}
