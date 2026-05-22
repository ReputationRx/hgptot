type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal">{eyebrow}</p>
      ) : null}
      <h2 className="heading-section">{title}</h2>
      <div className={`gold-divider mt-5 ${centered ? "mx-auto" : ""}`} />
      {description ? <p className="mt-6 text-lg leading-8 text-charcoal/75">{description}</p> : null}
    </div>
  );
}
