import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { selectedWorkProjects } from "@/src/entities/project/model";
import { ProjectTagList } from "@/src/entities/project/ui";
import { PageContainer } from "@/src/shared/ui/page-container";
import { HeaderSection } from "@/src/widgets/header-section";
import { HomeFooterSection } from "@/src/widgets/home-footer-section";

const caseStudies = {
  "california-closets": {
    challenge:
      "Bring the warmth and craft of a made-to-measure storage brand into a digital experience that makes a major purchase feel clear, personal, and inspiring.",
    outcome:
      "A more considered browsing journey that helps customers move from a room idea to a confident consultation request.",
    overview:
      "California Closets is North America's leading custom storage company. The redesign turns a broad product catalogue into a calm, editorial experience built around the spaces people want to transform.",
    roles: ["UX/UI Research", "UX/UI Design"],
  },
} as const;

type CaseStudySlug = keyof typeof caseStudies;

function getCaseStudy(slug: string) {
  if (!(slug in caseStudies)) return null;

  const project = selectedWorkProjects.find((item) => item.slug === slug);
  return project ? { project, study: caseStudies[slug as CaseStudySlug] } : null;
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) return {};

  return {
    description: item.project.description,
    title: `${item.project.title} — Case Study`,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) notFound();

  const { project, study } = item;
  const [hero, ...screens] = project.media;

  return (
    <main className="min-h-screen bg-white text-[#120a1d]">
      <HeaderSection backHref="/" />

      <article>
        <PageContainer
          className="px-[15px] pb-16 pt-8 md:px-10 md:pb-24 md:pt-12 xl:px-14 xl:pb-32"
          style={{ maxWidth: "none" }}
        >
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.02em] text-[#120a1d] transition-colors hover:text-[#dd6b99] focus-visible:text-[#dd6b99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dd6b99]"
            href="/"
          >
            <span aria-hidden="true">←</span>
            All selected work
          </Link>

          <header className="grid gap-8 pb-10 pt-14 md:grid-cols-12 md:items-end md:gap-6 md:pb-14 md:pt-20 xl:pb-16">
            <div className="md:col-span-7">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#dd6b99]">
                Case study
              </p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl xl:text-[88px]">
                {project.title}
              </h1>
            </div>
            <div className="grid gap-6 md:col-span-4 md:col-start-9">
              <p className="text-lg leading-7 tracking-[-0.015em] md:text-xl md:leading-8">
                {project.description}
              </p>
              <ProjectTagList tags={project.tags} />
            </div>
          </header>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#f3f0f0] md:aspect-[16/9] md:rounded-[24px]">
            <Image
              alt={hero.alt}
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={hero.src}
            />
          </div>

          <section className="grid gap-10 py-16 md:grid-cols-12 md:gap-6 md:py-24 xl:py-32">
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#dd6b99]">
                Overview
              </p>
            </div>
            <div className="grid gap-10 md:col-span-8 md:col-start-5 xl:max-w-[760px]">
              <p className="text-3xl leading-[1.12] tracking-[-0.04em] md:text-5xl">
                {study.overview}
              </p>
              <dl className="grid gap-7 border-t border-[#120a1d]/15 pt-7 sm:grid-cols-2">
                <div>
                  <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#120a1d]/55">
                    Role
                  </dt>
                  <dd className="text-lg leading-7">{study.roles.join(", ")}</dd>
                </div>
                <div>
                  <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#120a1d]/55">
                    Platform
                  </dt>
                  <dd className="text-lg leading-7">Website</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="grid gap-10 border-t border-[#120a1d]/15 py-16 md:grid-cols-12 md:gap-6 md:py-24 xl:py-32">
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#dd6b99]">
                The approach
              </p>
            </div>
            <div className="grid gap-12 md:col-span-8 md:col-start-5">
              <div className="grid gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#120a1d]/55">
                  01 — Challenge
                </p>
                <p className="text-2xl leading-[1.2] tracking-[-0.03em] md:text-4xl">
                  {study.challenge}
                </p>
              </div>
              <div className="grid gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#120a1d]/55">
                  02 — Outcome
                </p>
                <p className="text-2xl leading-[1.2] tracking-[-0.03em] md:text-4xl">
                  {study.outcome}
                </p>
              </div>
            </div>
          </section>

          <section aria-label="Selected screens" className="grid gap-4 md:grid-cols-2">
            {screens.map((screen) => (
              <figure
                className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#f3f0f0] md:rounded-[24px]"
                key={screen.src}
              >
                <Image
                  alt={screen.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={screen.src}
                />
              </figure>
            ))}
          </section>
        </PageContainer>
      </article>

      <HomeFooterSection />
    </main>
  );
}
