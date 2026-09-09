import { HeaderSection } from "@/src/widgets/header-section";
import { HomeHeroSection } from "@/src/widgets/home-hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#120a1d]">
      <HeaderSection />
      <HomeHeroSection />
    </main>
  );
}
