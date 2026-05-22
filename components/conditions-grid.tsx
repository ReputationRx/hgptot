type ConditionsGridProps = {
  conditions: string[];
};

export function ConditionsGrid({ conditions }: ConditionsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {conditions.map((condition) => (
        <div key={condition} className="rounded-[1.75rem] border border-teal/10 bg-white px-5 py-5 shadow-soft">
          <p className="text-base font-medium text-charcoal">{condition}</p>
        </div>
      ))}
    </div>
  );
}
