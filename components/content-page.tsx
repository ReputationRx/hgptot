import Script from "next/script";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { siteConfig, stockImages } from "@/data/site";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { SectionHeading } from "@/components/section-heading";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  overview: string[];
  benefits: string[];
  localNote: string;
  slug: string;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  overview,
  benefits,
  localNote,
  slug
}: ContentPageProps) {
  const pageImages: Record<string, { src: string; alt: string; label: string; imageClassName?: string }> = {
    "/physical-therapy": {
      ...stockImages.physicalTherapy,
      label: "Guided strength and mobility",
      imageClassName: "object-[58%_center]"
    },
    "/occupational-therapy": {
      ...stockImages.occupationalTherapy,
      label: "Daily living independence",
      imageClassName: "object-[45%_center]"
    },
    "/geriatric-therapy": {
      ...stockImages.geriatricTherapy,
      label: "Senior-focused care",
      imageClassName: "object-[48%_center]"
    },
    "/in-home-therapy": {
      ...stockImages.inHomeTherapy,
      label: "Care in the home",
      imageClassName: "object-center"
    },
    "/private-pay-therapy": {
      ...stockImages.privatePayTherapy,
      label: "Private evaluation planning",
      imageClassName: "object-center"
    }
  };
  const pageImage = pageImages[slug] ?? { ...stockImages.caregiver, label: "Personal therapy support" };

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: title, url: `${siteConfig.url}${slug}` }
  ]);

  return (
    <>
      <Script
        id={`breadcrumb-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="How We Help"
              title={`${title} designed around comfort, dignity, and real-life independence`}
              description={localNote}
            />
            <div className="space-y-5 text-lg leading-8 text-charcoal/75">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="card-surface bg-gradient-to-b from-white to-warm p-8">
              <span className="section-kicker text-gold">Care goals</span>
              <h2 className="mt-4 font-serif text-2xl text-charcoal">Common outcomes families are looking for</h2>
              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-2xl bg-white px-4 py-4 text-charcoal/80 shadow-soft">
                    {benefit}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.75rem] bg-teal p-6 text-white lg:hidden">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Next step</p>
                <p className="mt-3 text-lg leading-8 text-white/88">
                  Call to discuss the patient’s goals, location, and whether in-home Physical Therapy or Occupational
                  Therapy is the best fit.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="btn-outline-on-dark mt-6 inline-flex px-5 py-3"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <PhotoPanel
              image={pageImage}
              label={pageImage.label}
              heightClassName="min-h-[280px] lg:min-h-[320px]"
              imageClassName={pageImage.imageClassName}
            />

            <ContactForm defaultService={eyebrow} showIntro />

            <div className="hidden rounded-[1.75rem] bg-teal p-6 text-white lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Prefer to call?</p>
              <p className="mt-3 text-lg leading-8 text-white/88">
                Speak with our team about goals, location, and whether in-home care is the right fit.
              </p>
              <a href={siteConfig.phoneHref} className="btn-outline-on-dark mt-6 inline-flex px-5 py-3">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
