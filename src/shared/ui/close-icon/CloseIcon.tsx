import type { SVGProps } from "react";

type CloseIconProps = SVGProps<SVGSVGElement>;

export function CloseIcon({ className = "", ...props }: CloseIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`size-[1em] shrink-0 ${className}`.trim()}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.25 3.25L12.75 12.75M12.75 3.25L3.25 12.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}
