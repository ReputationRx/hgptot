import Link from "next/link";
import type { LegalDocument } from "@/data/legal";
import { siteConfig } from "@/data/site";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <article className="section-space">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-display mt-4">{document.title}</h1>
        <div className="gold-divider mt-6" />
        <p className="mt-4 text-sm text-charcoal/60">Last updated: {document.lastUpdated}</p>
        <p className="mt-8 text-lg leading-8 text-charcoal/75">{document.intro}</p>

        <div className="mt-12 space-y-10">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl text-charcoal">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-charcoal/75">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              {section.list ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 text-charcoal/75">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-teal/15 bg-white/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Questions</p>
          <p className="mt-3 text-charcoal/75">
            For questions about this page, contact HGPTOT at{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-teal hover:text-gold">
              {siteConfig.phoneDisplay}
            </a>{" "}
            or{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-teal hover:text-gold">
              {siteConfig.email}
            </a>
            .
          </p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex px-5 py-3 text-sm">
            Contact HGPTOT
          </Link>
        </div>
      </div>
    </article>
  );
}
