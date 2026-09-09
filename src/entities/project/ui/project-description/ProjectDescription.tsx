type ProjectDescriptionProps = {
  children: string;
};

export function ProjectDescription({ children }: ProjectDescriptionProps) {
  return (
    <p className="max-w-[345px] text-base font-normal leading-6 tracking-[0.02em] text-[#4a5565] md:max-w-[410px] xl:max-w-[440px] xl:text-xl xl:leading-[30px]">
      {children}
    </p>
  );
}
