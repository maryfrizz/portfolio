import Image from "next/image";

const heroImage = "/assets/projects/24b98fd052db573f669a3f56ebbc19c2116be7f9.png";

export function CaseHeroSection() {
  return (
    <section aria-label="California Closets website screens" className="relative aspect-[32/17]">
      <Image
        alt="California Closets website screens"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[66.397%] from-transparent to-white"
      />
    </section>
  );
}
