import Link from "next/link";
import type { ComponentProps } from "react";

type TextLinkProps = ComponentProps<typeof Link>;

export function TextLink({ className = "", ...props }: TextLinkProps) {
  return (
    <Link
      className={`transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`.trim()}
      {...props}
    />
  );
}
