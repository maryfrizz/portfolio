type CaseTextSectionProps = {
  sections: Array<{
    body: string[];
    statistics?: Array<{
      label: string;
      value: string;
    }>;
    title: string;
    titleClassName?: string;
    widthClassName?: string;
    hasParagraphSpacer?: boolean;
    sectionClassName?: string;
  }>;
  theme?: "light" | "dark";
};

export function CaseTextSection({ sections, theme = "light" }: CaseTextSectionProps) {
  const isDark = theme === "dark";

  return (
    <section
      aria-label="Case study details"
      className={
        isDark
          ? "bg-black px-[15px] pb-5 pt-10 md:px-10 md:pb-10 md:pt-[60px] lg:px-14 lg:pb-[60px] lg:pt-20"
          : "bg-white px-[15px] py-10 md:px-10 lg:px-14 lg:py-[60px]"
      }
    >
      <div className="flex max-w-[600px] flex-col gap-10 lg:max-w-none lg:gap-[60px]">
        {sections.map(
          ({
            body,
            statistics,
            title,
            titleClassName = "",
            widthClassName = "",
            hasParagraphSpacer = false,
            sectionClassName = "",
          }) => (
            <article
              className={`flex flex-col gap-3 lg:flex-row ${widthClassName} ${sectionClassName}`}
              key={title}
            >
              <h2
                className={`text-[26px] font-medium leading-6 tracking-[0.02em] lg:w-[400px] lg:text-[28px] ${titleClassName} ${
                  isDark ? "text-white" : "text-[#120a1d]"
                }`}
              >
                {title}
              </h2>
              <div
                className={`text-base leading-[1.5] lg:w-[590px] lg:text-lg ${
                  statistics ? "flex flex-col gap-[30px]" : ""
                } ${isDark ? "text-[#c5c5c5]" : "text-[#4a5565]"}`}
              >
                <div>
                  {body.map((paragraph, index) => (
                    <p
                      className={
                        hasParagraphSpacer && index === 0
                          ? "mb-6 lg:mb-[39px]"
                          : "lg:not-last:mb-1.5"
                      }
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {statistics ? (
                  <dl className="flex gap-[30px]">
                    {statistics.map(({ label, value }) => (
                      <div className="flex w-[60px] flex-col" key={label}>
                        <dt className="order-2 text-sm leading-[1.5]">{label}</dt>
                        <dd
                          className={`order-1 -mb-1 text-[28px] font-medium tracking-[0.02em] ${
                            isDark ? "text-white" : "text-[#120a1d]"
                          }`}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
