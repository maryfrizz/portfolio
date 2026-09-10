import { FooterEmail } from "@/src/shared/ui/footer-email";
import { FooterSocialLinks } from "@/src/shared/ui/footer-social-links";
import { PageContainer } from "@/src/shared/ui/page-container";

const footerEmail = "mariiavish@gmail.com";

export function HomeFooterSection() {
  return (
    <footer className="bg-white">
      <PageContainer
        className="flex flex-col items-start gap-6 px-[15px] py-6 md:min-h-[123px] md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-x-8 md:gap-y-6 md:px-10 md:py-8 lg:px-14 lg:py-20"
        style={{ maxWidth: "none" }}
      >
        <FooterEmail email={footerEmail} />
        <div className="md:translate-y-[9px] lg:translate-y-0 lg:pb-0.5">
          <FooterSocialLinks />
        </div>
      </PageContainer>
    </footer>
  );
}
