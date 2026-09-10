import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { selectedWorkProjects } from "@/src/entities/project/model";
import { CaseFullwidthImage } from "@/src/widgets/case-fullwidth-image";
import { CaseHeroSection } from "@/src/widgets/case-hero-section";
import { CaseOverviewSection } from "@/src/widgets/case-overview-section";
import { CaseTextSection } from "@/src/widgets/case-text-section";
import { CaseTwoImages } from "@/src/widgets/case-two-images";
import { HeaderSection } from "@/src/widgets/header-section";
import { HomeFooterSection } from "@/src/widgets/home-footer-section";

const caseStudySlugs = ["california-closets"] as const;

function getCaseStudy(slug: string) {
  if (!caseStudySlugs.includes(slug as (typeof caseStudySlugs)[number])) return null;

  return selectedWorkProjects.find((project) => project.slug === slug) ?? null;
}

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) return {};

  return {
    description: project.description,
    title: `${project.title} — Case Study`,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!getCaseStudy(slug)) notFound();

  return (
    <main className="min-h-screen bg-white text-[#120a1d]">
      <HeaderSection backHref="/" />
      <CaseHeroSection />
      <CaseOverviewSection
        duration="8 months"
        heading="A awebsite redesign for the largest custom storage brand in North America"
        role={[
          "As the senior designer on the project, I was directly involved in all design steps, from the discovery phase to the final handoff file.",
          "I was responsible for the visual design of key pages (Home, Design page, Inspiration) and served as the liaison between the client's development team and the internal design team.",
        ]}
        tags={["Website", "UX/UI Research", "UX/UI Design"]}
        websiteHref="https://www.californiaclosets.com/"
        websiteLabel="California Closets.com"
      />
      <CaseTextSection
        sections={[
          {
            body: [
              "California Closets is a pioneer in custom storage solutions, designing made-to-order closets, home offices, and other furniture for customers since 1978.",
              "The main business goal was to get users to book a showroom consultation but website didn't guide users toward that action.",
            ],
            title: "Context",
          },
          {
            body: [
              "During research and user interview, we found that many users thought the company sold ready-made furniture, while the main service was actually custom-made solutions.",
            ],
            title: "Problem",
          },
          {
            body: [
              "The first step was understanding the problem by communicating with the client, a competitors research and an audit of the current website.",
              "Based on takeaways from research and stakeholder interviews, we created a new site architecture, navigation, and page structure before moving on to design.",
            ],
            title: "Discovery",
          },
        ]}
      />
      <CaseTwoImages />
      <CaseTextSection
        sections={[
          {
            body: [
              "We designed the website to be easy to maintain and scale. To achieve this, each section was prepared as a customizable component with use cases.",
              "In addition to the components and design libraries, specifications for all the rules were prepared so that developers could begin implementation without requiring extensive additional information from designers.",
            ],
            title: "Design Library and Component System",
          },
        ]}
      />
      <CaseFullwidthImage
        alt="California Closets UX website screens"
        image="/assets/case-fullwidth-image/ux-screens.png"
      />
      <CaseFullwidthImage
        alt="California Closets mobile website screens"
        image="/assets/case-fullwidth-image/mobile-screens.png"
      />
      <CaseTwoImages
        firstImage={{
          alt: "California Closets design library component details",
          height: 1442,
          src: "/assets/case-two-images/design-library-primary.png",
          width: 2186,
        }}
        secondImage={{
          alt: "California Closets design library overview",
          height: 1302,
          src: "/assets/case-two-images/design-library-secondary.png",
          width: 2174,
        }}
      />
      <HomeFooterSection />
    </main>
  );
}
