type ProcessStepsProps = {
  steps: { title: string; description: string }[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.title} className="card-surface p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-lg font-semibold text-white">
            {index + 1}
          </div>
          <h3 className="mt-5 text-xl font-semibold text-charcoal">{step.title}</h3>
          <p className="mt-3 text-charcoal/72">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
