type CaseTextSectionProps = {
  sections: Array<{
    body: string[];
    title: string;
  }>;
};

export function CaseTextSection({ sections }: CaseTextSectionProps) {
  return (
    <section
      aria-label="Case study details"
      className="bg-white px-[15px] py-10 md:px-10 lg:px-14 lg:py-[60px]"
    >
      <div className="flex max-w-[600px] flex-col gap-10 lg:max-w-none lg:gap-[60px]">
        {sections.map(({ body, title }) => (
          <article className="flex flex-col gap-3 lg:flex-row" key={title}>
            <h2 className="text-[26px] font-medium leading-6 tracking-[0.02em] text-[#120a1d] lg:w-[400px] lg:text-[28px]">
              {title}
            </h2>
            <div className="text-base leading-[1.5] text-[#4a5565] lg:w-[590px] lg:text-lg">
              {body.map((paragraph) => (
                <p className="not-last:mb-1.5" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
