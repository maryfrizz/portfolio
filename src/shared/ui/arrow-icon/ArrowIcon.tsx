import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon({ className = "", ...props }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`size-[0.95em] shrink-0 ${className}`.trim()}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 14L14 6M7 7H14V14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
