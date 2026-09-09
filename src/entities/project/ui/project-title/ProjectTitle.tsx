type ProjectTitleProps = {
  title: string;
  year?: string;
};

export function ProjectTitle({ title, year }: ProjectTitleProps) {
  return (
    <h3 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-[#120a1d] md:text-[38px] xl:text-[48px]">
      <span>{title}</span>
      {year ? <span className="xl:hidden"> / {year}</span> : null}
    </h3>
  );
}
