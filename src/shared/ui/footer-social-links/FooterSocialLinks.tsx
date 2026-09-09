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
    <nav aria-label="Footer links">
      <ul className="flex flex-wrap items-center gap-x-7 gap-y-4 text-base font-semibold leading-6 tracking-[0.02em] text-[#120a1d]">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <ExternalTextLink href={link.href}>{link.label}</ExternalTextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
