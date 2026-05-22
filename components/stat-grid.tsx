type Stat = {
  value: string;
  label: string;
};

type StatGridProps = {
  stats: Stat[];
};

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.value} className="card-surface p-6">
          <div className="font-serif text-3xl text-teal">{stat.value}</div>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
