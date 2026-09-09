type ProjectComingSoonProps = {
  children?: "Coming soon";
};

export function ProjectComingSoon({ children = "Coming soon" }: ProjectComingSoonProps) {
  return (
    <span className="inline-flex h-10 items-center justify-center rounded-full bg-[#f0eef2] px-6 text-base font-semibold leading-none tracking-[0.02em] text-[#c5becb]">
      {children}
    </span>
  );
}
