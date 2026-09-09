import { ExternalTextLink } from "@/src/shared/ui/external-text-link";
import { PageContainer } from "@/src/shared/ui/page-container";

const headerLinks = [
  {
    href: "https://www.linkedin.com/in/mariakozikova/",
    label: "Linked in",
  },
  {
    href: "https://drive.google.com/file/d/19ZOWk1pziAGM2Cd1H4an36CIVhsiqO47/view?usp=sharing",
    label: "CV",
  },
];

export function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 h-[68px] bg-white/80 text-base leading-6 tracking-[0.02em] text-[#120a1d] backdrop-blur-[4px]">
      <PageContainer
        className="flex h-full items-center justify-between gap-6 px-[15px] md:px-10 xl:px-14"
        style={{ maxWidth: "none" }}
      >
        <p className="font-medium">Maria Kozikova</p>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-7">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <ExternalTextLink className="font-semibold" href={link.href}>
                  {link.label}
                </ExternalTextLink>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
