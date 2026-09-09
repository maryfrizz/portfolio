import { ExternalTextLink } from "@/src/shared/ui/external-text-link";
import { PageContainer } from "@/src/shared/ui/page-container";

const headerLinks = [
  {
    href: "https://www.linkedin.com/in/mariakozikova",
    label: "Linked in",
  },
  {
    href: "/cv.pdf",
    label: "CV",
  },
];

export function HeaderSection() {
  return (
    <header className="py-5 text-[15px] leading-none text-neutral-950 sm:py-8">
      <PageContainer className="flex items-center justify-between gap-6">
        <p className="font-normal">Maria Kozikova</p>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 sm:gap-7">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <ExternalTextLink href={link.href}>{link.label}</ExternalTextLink>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
