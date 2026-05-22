import Image from "next/image";

type PhotoPanelProps = {
  image: {
    src: string;
    alt: string;
  };
  label?: string;
  className?: string;
  imageClassName?: string;
  heightClassName?: string;
  priority?: boolean;
};

export function PhotoPanel({
  image,
  label,
  className = "",
  imageClassName = "object-center",
  heightClassName = "min-h-[360px]",
  priority = false
}: PhotoPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-teal/10 bg-charcoal shadow-soft ${heightClassName} ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`object-cover ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
      {label ? (
        <div className="absolute bottom-5 left-5 right-5">
          <p className="inline-flex rounded-full border border-white/25 bg-charcoal/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
