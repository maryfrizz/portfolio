const projects = [
  "Product interfaces",
  "Interactive systems",
  "Frontend architecture",
  "Design engineering",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Portfolio
        </p>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Build sharp digital products with thoughtful engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              A clean starter for a personal portfolio, ready for real work: Next.js, Bun, Tailwind
              CSS, TypeScript, and Biome.
            </p>
          </div>
          <div className="grid gap-3">
            {projects.map((project) => (
              <div
                className="border-l-4 border-teal-600 bg-white px-5 py-4 shadow-sm"
                key={project}
              >
                <p className="text-base font-medium text-slate-900">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
