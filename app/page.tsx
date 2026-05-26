import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { serviceHighlights, siteConfig, stockImages, testimonials } from "@/data/site";
import { BlogSection } from "@/components/blog-section";
import { InsuranceLogos } from "@/components/insurance-logos";
import { PhotoCarousel, type PhotoCarouselSlide } from "@/components/photo-carousel";
import { PhotoPanel } from "@/components/photo-panel";

export const metadata = buildMetadata({
  title: "Luxury In-Home Physical & Occupational Therapy in Queens and Nassau County",
  description:
    "HGPTOT provides private pay, one-on-one Physical Therapy and Occupational Therapy for seniors and caregivers across Queens NY, Nassau County NY, and Long Island with a calm, premium in-home care experience."
});

const outcomes = [
  "Fall prevention and balance",
  "Post-surgery recovery",
  "Strength and mobility",
  "Daily living independence"
];

const processSteps = [
  {
    title: "Private evaluation",
    copy: "A focused first visit to understand mobility, safety, goals, and the home environment."
  },
  {
    title: "Personal care plan",
    copy: "A therapy plan shaped around real daily routines, caregiver needs, and recovery pace."
  },
  {
    title: "In-home visits",
    copy: "One-on-one PT and OT delivered where movement, confidence, and safety matter most."
  }
];

function IconBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-sm font-semibold text-teal">
        {label.slice(0, 1)}
      </span>
      <span className="text-base font-medium text-charcoal/80">{label}</span>
    </div>
  );
}

const homeShowcaseSlides: PhotoCarouselSlide[] = [
  { ...stockImages.physicalTherapy, caption: "Guided mobility" },
  { ...stockImages.inHomeTherapy, caption: "In-home safety" },
  { ...stockImages.occupationalTherapy, caption: "Daily independence" },
  { ...stockImages.geriatricTherapy, caption: "Senior-focused care" },
  { ...stockImages.privatePayTherapy, caption: "Private evaluation planning" }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-charcoal text-white">
        <Image
          src={stockImages.hero.src}
          alt={stockImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,63,61,0.97)_0%,rgba(8,63,61,0.9)_38%,rgba(8,63,61,0.55)_62%,rgba(8,63,61,0.12)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-charcoal/15" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-warm via-warm/40 to-transparent sm:h-56" />
        </div>

        <div className="container-shell relative flex min-h-[calc(100vh-5rem)] items-end pb-16 pt-24 sm:pb-20">
          <div className="max-w-3xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Queens, Nassau County, and Long Island</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Physical and Occupational Therapy at Home.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/86">
              Premium, one-on-one rehabilitation for seniors and caregivers who want recovery to feel calm,
              personal, and clinically grounded.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row lg:justify-center">
              <Link href="/contact" className="btn-primary px-7 py-4 text-center text-base">
                Book Evaluation
              </Link>
              <a href={siteConfig.phoneHref} className="btn-ghost-on-dark px-7 py-4 text-center text-base">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-teal/10 bg-white">
        <div className="container-shell grid gap-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <IconBadge key={outcome} label={outcome} />
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Concierge-level therapy</p>
            <h2 className="heading-section mt-4">Quietly premium care for safer movement and stronger independence.</h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/75">
              HGPTOT is designed for families who want therapy to feel more personal than a crowded clinic visit.
              We bring Physical Therapy and Occupational Therapy into the home with a clear plan, patient pace, and
              caregiver-aware communication.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceHighlights.slice(0, 6).map((service) => (
              <article key={service.title} className="rounded-lg border border-teal/10 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InsuranceLogos />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <PhotoPanel
              image={stockImages.physicalTherapy}
              label="Guided mobility"
              heightClassName="min-h-[320px]"
              imageClassName="object-[55%_center]"
            />
            <PhotoPanel
              image={stockImages.inHomeTherapy}
              label="In-home safety"
              heightClassName="min-h-[320px]"
              imageClassName="object-center"
            />
            <PhotoPanel
              image={stockImages.occupationalTherapy}
              label="Daily independence"
              heightClassName="min-h-[320px]"
              imageClassName="object-[45%_center]"
            />
          </div>
        </div>
      </section>

      <section className="section-space border-y border-teal/10 bg-charcoal/5">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">In-home care</p>
            <h2 className="heading-section mt-4">Therapy where life actually happens</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/75">
              A calm look at one-on-one visits—without heavy overlays so faces and spaces stay clear on every device.
            </p>
          </div>
          <PhotoCarousel slides={homeShowcaseSlides} className="mx-auto mt-10 max-w-5xl" />
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="heading-section mt-4">A simple recovery path, without the cold clinical feeling.</h2>
          <div className="mt-8 space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
                  <p className="mt-2 leading-7 text-charcoal/70">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Caregiver confidence</p>
            <h2 className="heading-section mt-4">Professional care that still feels human.</h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/75">
              The brand should feel polished, but the experience should feel personal. Every page now leads with
              dignity, home safety, mobility, and family trust.
            </p>
            <div className="mt-8">
              <Link href="/conditions-treated" className="btn-primary px-7 py-4">
                Explore Conditions Treated
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((item) => (
              <figure key={`${item.name}-${item.context}`} className="rounded-lg border border-teal/10 bg-white p-6 shadow-soft">
                <blockquote className="text-lg leading-8 text-charcoal/78">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.name} | {item.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BlogSection limit={3} />

      <section className="bg-charcoal py-16 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Private pay accepted</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              Recovery should feel clear, calm, and personal from the first call.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link href="/contact" className="btn-on-dark px-7 py-4 text-center">
              Book Evaluation
            </Link>
            <a href={siteConfig.phoneHref} className="btn-outline-on-dark px-7 py-4 text-center">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
