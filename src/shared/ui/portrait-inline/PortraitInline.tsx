import Image from "next/image";

type PortraitInlineProps = {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
};

export function PortraitInline({
  alt,
  className = "",
  priority = false,
  src,
}: PortraitInlineProps) {
  return (
    <span
      className={`relative inline-block size-[0.95em] overflow-hidden rounded-full align-[-0.12em] ${className}`.trim()}
    >
      <Image
        alt={alt}
        className="object-cover"
        fill
        priority={priority}
        sizes="(max-width: 768px) 54px, 86px"
        src={src}
      />
    </span>
  );
}
