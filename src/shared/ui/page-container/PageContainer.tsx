import type { ComponentProps } from "react";

type PageContainerProps = ComponentProps<"div">;

export function PageContainer({ className = "", ...props }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 ${className}`.trim()}
      {...props}
    />
  );
}
