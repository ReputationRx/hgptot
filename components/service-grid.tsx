type ServiceGridProps = {
  items: Array<string | { title: string; description: string }>;
};

export function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={typeof item === "string" ? item : item.title}
          className="card-surface bg-gradient-to-b from-white to-warm p-6"
        >
          <div className="mb-4 h-10 w-10 rounded-2xl bg-gold/15" />
          <h3 className="text-xl font-semibold text-charcoal">
            {typeof item === "string" ? item : item.title}
          </h3>
          <p className="mt-3 text-charcoal/70">
            {typeof item === "string"
              ? "Personalized senior-focused care tailored to improve comfort, safety, confidence, and day-to-day function."
              : item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
