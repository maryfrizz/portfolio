type ProjectDescriptionProps = {
  className?: string;
  children: string;
};

export function ProjectDescription({ children, className = "" }: ProjectDescriptionProps) {
  return (
    <p
      className={`max-w-[345px] text-base font-normal leading-6 text-[#4a5565] md:max-w-[397px] xl:max-w-[520px] xl:text-[18px] xl:leading-[27px] ${className}`}
    >
      {children}
    </p>
  );
}
