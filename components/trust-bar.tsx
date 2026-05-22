type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-y border-teal/10 bg-white/80">
      <div className="container-shell py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-medium text-charcoal/68">
          {items.map((item) => (
            <span key={item} className="inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
