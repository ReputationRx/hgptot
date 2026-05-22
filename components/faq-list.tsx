type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="card-surface group p-6">
          <summary className="cursor-pointer list-none text-lg font-semibold text-charcoal">
            {item.question}
          </summary>
          <p className="mt-4 text-charcoal/72">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
