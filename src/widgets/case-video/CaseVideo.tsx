type CaseVideoProps = {
  alt: string;
  src: string;
};

export function CaseVideo({ alt, src }: CaseVideoProps) {
  return (
    <section aria-label={alt} className="bg-black px-[15px] pb-5 md:px-10 md:pb-10 lg:px-14">
      <video
        aria-label={alt}
        autoPlay
        className="block aspect-[8/5] w-full rounded-lg object-cover"
        loop
        muted
        playsInline
        src={src}
      />
    </section>
  );
}
