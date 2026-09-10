type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full bg-[#f3f4f6] px-3 py-1 text-sm font-normal leading-5 text-[#364153]">
      {children}
    </span>
  );
}
