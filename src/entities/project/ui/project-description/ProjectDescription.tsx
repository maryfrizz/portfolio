type ProjectDescriptionProps = {
  children: string;
};

export function ProjectDescription({ children }: ProjectDescriptionProps) {
  return (
    <p className="max-w-[345px] text-sm font-normal leading-5 tracking-[0.02em] text-[#4a5565] md:max-w-[430px] xl:max-w-[500px] xl:text-base xl:leading-6">
      {children}
    </p>
  );
}
