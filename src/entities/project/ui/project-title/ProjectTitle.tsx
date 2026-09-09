type ProjectTitleProps = {
  title: string;
  year?: string;
};

export function ProjectTitle({ title, year }: ProjectTitleProps) {
  return (
    <h3 className="text-[24px] font-medium leading-[1.08] tracking-[-0.03em] text-[#120a1d] md:text-[28px] xl:text-[32px]">
      <span>{title}</span>
      {year ? <span className="xl:hidden"> / {year}</span> : null}
    </h3>
  );
}
