import { ExternalTextLink } from "@/src/shared/ui/external-text-link";

const footerLinks = [
  {
    href: "https://www.linkedin.com/in/mariakozikova/",
    label: "Linked in",
  },
  {
    href: "https://drive.google.com/file/d/19ZOWk1pziAGM2Cd1H4an36CIVhsiqO47/view?usp=sharing",
    label: "CV",
  },
  {
    href: "https://t.me/mary_frizz",
    label: "Telegram",
  },
];

export function FooterSocialLinks() {
  return (
    <nav aria-label="Footer links" className="h-[50px]">
      <ul className="flex h-12 w-full items-center justify-between text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d] md:w-auto md:justify-start md:gap-8">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <ExternalTextLink className="inline-flex h-12 items-center" href={link.href}>
              {link.label}
            </ExternalTextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
