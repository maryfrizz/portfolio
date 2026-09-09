import { selectedWorkProjects } from "@/src/entities/project/model";
import { ProjectCard } from "@/src/entities/project/ui";
import { PageContainer } from "@/src/shared/ui/page-container";

export function SelectedWorkProjectsSection() {
  return (
    <section aria-label="Selected work projects" className="bg-white">
      <PageContainer
        className="grid gap-16 px-[15px] pb-[88px] pt-10 md:gap-20 md:px-10 md:pb-[104px] md:pt-12 xl:gap-[120px] xl:px-14 xl:pb-[132px] xl:pt-16"
        style={{ maxWidth: "none" }}
      >
        {selectedWorkProjects.map((project, index) => (
          <ProjectCard key={project.slug} priority={index === 0} project={project} />
        ))}
      </PageContainer>
    </section>
  );
}
