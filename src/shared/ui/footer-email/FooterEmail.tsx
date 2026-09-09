import { ExternalTextLink } from "@/src/shared/ui/external-text-link";

type FooterEmailProps = {
  email: string;
};

export function FooterEmail({ email }: FooterEmailProps) {
  return (
    <ExternalTextLink
      className="block w-fit max-w-full break-words text-[40px] font-medium leading-[1.05] tracking-normal text-[#120a1d] md:text-[64px] xl:text-[96px]"
      href={`mailto:${email}`}
      rel={undefined}
      target={undefined}
    >
      {email}
    </ExternalTextLink>
  );
}
