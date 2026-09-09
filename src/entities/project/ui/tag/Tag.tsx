type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex h-6 items-center whitespace-nowrap rounded-full bg-[#f3f1f4] px-3 text-xs font-normal leading-none tracking-[0.01em] text-[#4a5565]">
      {children}
    </span>
  );
}
