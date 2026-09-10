import { ExternalTextLink } from "@/src/shared/ui/external-text-link";

type FooterEmailProps = {
  email: string;
};

export function FooterEmail({ email }: FooterEmailProps) {
  return (
    <ExternalTextLink
      className="block w-fit max-w-full break-words text-[36px] font-medium leading-[1.1] tracking-[-1.08px] text-[#120a1d] md:text-[44px] md:tracking-[-1.32px] lg:text-[77px] lg:tracking-[-2.31px]"
      href={`mailto:${email}`}
      rel={undefined}
      target={undefined}
    >
      {email}
    </ExternalTextLink>
  );
}
