import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { SectionHeading } from "@/components/section-heading";
import { stockImages } from "@/data/site";

export const metadata = buildMetadata({
  title: "About HGPTOT",
  description:
    "Learn about HGPTOT’s warm, premium approach to physical therapy and occupational therapy for seniors in Queens NY and Nassau County NY.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HGPTOT"
        title="A premium in-home therapy brand built on dignity, warmth, and real clinical trust"
        description="HGPTOT was created to deliver a more personal rehabilitation experience for older adults, caregivers, and families who want one-on-one support that feels calm, capable, and human."
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-charcoal/75">
            <SectionHeading
              eyebrow="Our Approach"
              title="Where recovery feels personal"
              description="Luxury healthcare does not need to feel distant. HGPTOT combines clinical clarity with warmth, calm communication, and treatment plans that respect each patient’s pace, environment, and dignity."
            />
            <p>
              Older adults often need therapy that is both medically precise and easy to understand. HGPTOT focuses on
              restoring mobility, improving balance, supporting safe movement at home, and helping patients maintain as
              much independence as possible while aging in place.
            </p>
            <p>
              Families and caregivers are treated as part of the care process. Clear updates, practical guidance, and
              realistic functional goals are part of the experience from the first conversation onward. The brand is
              intentionally mobile and in-home first, but built with enough polish to support future clinic growth.
            </p>
          </div>

          <div className="space-y-6">
            <PhotoPanel
              image={stockImages.physicalTherapy}
              label="Calm, personal rehabilitation"
              heightClassName="min-h-[420px]"
              imageClassName="object-[58%_center]"
            />

            <div className="card-surface bg-gradient-to-b from-white to-warm p-8">
              <span className="section-kicker">What sets us apart</span>
              <h2 className="mt-4 font-serif text-2xl text-charcoal">A boutique rehabilitation experience with medical credibility</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Private pay positioning for a more direct and tailored therapy relationship",
                  "Physical Therapy and Occupational Therapy in one cohesive, senior-centered brand",
                  "Compassionate communication for patients, adult children, and caregivers",
                  "Local service emphasis across Queens, Nassau County, and Long Island"
                ].map((point) => (
                  <div key={point} className="rounded-2xl bg-warm px-4 py-4 text-charcoal/80">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
