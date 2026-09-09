import type { ComponentProps } from "react";

type ExternalTextLinkProps = ComponentProps<"a"> & {
  href: string;
};

export function ExternalTextLink({
  className = "",
  rel = "noreferrer",
  target = "_blank",
  ...props
}: ExternalTextLinkProps) {
  return (
    <a
      className={`text-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`.trim()}
      rel={rel}
      target={target}
      {...props}
    />
  );
}
