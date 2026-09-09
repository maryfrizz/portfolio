type ProjectComingSoonProps = {
  children?: "Coming soon";
};

export function ProjectComingSoon({ children = "Coming soon" }: ProjectComingSoonProps) {
  return (
    <span className="inline-flex h-7 items-center text-base font-medium leading-none tracking-[0.02em] text-[#817a8c]">
      {children}
    </span>
  );
}
