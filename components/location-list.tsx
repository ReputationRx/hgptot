type LocationListProps = {
  locations: string[];
};

export function LocationList({ locations }: LocationListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <div key={location} className="rounded-2xl border border-teal/10 bg-white px-5 py-4 text-lg text-charcoal shadow-soft">
          {location}
        </div>
      ))}
    </div>
  );
}
