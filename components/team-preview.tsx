type TeamMember = {
  name: string;
  specialty: string;
  bio: string;
};

type TeamPreviewProps = {
  members: TeamMember[];
};

export function TeamPreview({ members }: TeamPreviewProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {members.map((member) => (
        <article key={member.name} className="card-surface overflow-hidden p-8">
          <div className="mb-6 h-64 rounded-[1.75rem] bg-gradient-to-br from-teal/15 via-white to-gold/15" />
          <p className="eyebrow">{member.specialty}</p>
          <h3 className="mt-4 font-serif text-2xl text-charcoal">{member.name}</h3>
          <p className="mt-4 text-charcoal/72">{member.bio}</p>
        </article>
      ))}
    </div>
  );
}
