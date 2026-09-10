const statistics = [
  { label: "Iterations", value: "3" },
  { label: "Pages", value: "29" },
];

export function CaseInfographics() {
  return (
    <section
      aria-labelledby="case-infographics-title"
      className="bg-black px-[15px] pb-5 pt-10 md:px-10 md:pb-10 md:pt-[60px] lg:px-14 lg:pb-[60px] lg:pt-20"
    >
      <div className="max-w-[688px] lg:max-w-none">
        <div className="flex flex-col gap-3 lg:flex-row">
          <h2
            className="text-[26px] font-medium leading-6 tracking-[0.02em] text-white lg:h-12 lg:w-[400px] lg:text-[28px] lg:leading-9"
            id="case-infographics-title"
          >
            UX Part
          </h2>
          <div className="flex flex-col gap-[30px] text-[#c5c5c5]">
            <p className="text-base leading-[1.5] md:w-[590px] lg:text-lg">
              The first part of the design was preparing detailed wireframes of all pages and
              testing
            </p>
            <dl className="flex gap-[30px]">
              {statistics.map(({ label, value }) => (
                <div className="flex w-[60px] flex-col" key={label}>
                  <dt className="order-2 text-sm leading-[1.5]">{label}</dt>
                  <dd className="order-1 -mb-1 text-[28px] font-medium tracking-[0.02em] text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
