type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

type TestimonialGridProps = {
  items: Testimonial[];
};

export function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.name}-${item.context}`} className="card-surface p-8">
          <div className="font-serif text-4xl leading-none text-gold">“</div>
          <p className="mt-4 text-lg leading-8 text-charcoal/80">{item.quote}</p>
          <div className="mt-6 border-t border-teal/10 pt-5">
            <p className="font-semibold text-charcoal">{item.name}</p>
            <p className="text-sm text-charcoal/60">{item.context}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
