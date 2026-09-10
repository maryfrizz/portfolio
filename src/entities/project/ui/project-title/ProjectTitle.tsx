type ProjectTitleProps = {
  className?: string;
  title: string;
  year?: string;
};

export function ProjectTitle({ className = "", title, year }: ProjectTitleProps) {
  return (
    <h3
      className={`text-[26px] font-medium leading-6 tracking-[0.02em] text-[#120a1d] xl:text-[28px] ${className}`}
    >
      <span>{title}</span>
      {year ? <span className="xl:hidden"> / {year}</span> : null}
    </h3>
  );
}
