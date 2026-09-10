import { selectedWorkProjects } from "@/src/entities/project/model";
import { ProjectCard } from "@/src/entities/project/ui";
import { PageContainer } from "@/src/shared/ui/page-container";

export function SelectedWorkProjectsSection() {
  return (
    <section aria-label="Selected work projects" className="bg-white">
      <PageContainer
        className="grid gap-14 px-[15px] pb-10 pt-8 md:gap-16 md:px-10 md:pb-[60px] md:pt-8 xl:gap-20 xl:px-14 xl:pb-20 xl:pt-10"
        style={{ maxWidth: "none" }}
      >
        {selectedWorkProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            priority={index === 0}
            project={project}
            reverseMedia={(index + 1) % 2 === 0}
          />
        ))}
      </PageContainer>
    </section>
  );
}
