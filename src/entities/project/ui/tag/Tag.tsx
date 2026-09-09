type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex h-7 items-center whitespace-nowrap rounded-full border border-[#d5d0dc] px-[15px] text-sm font-normal leading-none tracking-[0.01em] text-[#120a1d]">
      {children}
    </span>
  );
}
