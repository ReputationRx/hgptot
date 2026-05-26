import Image from "next/image";
import { insuranceCarriers, type InsuranceCarrier } from "@/data/insurance";
import { PhotoCarousel, type PhotoCarouselSlide } from "@/components/photo-carousel";

function carriersToSlides(carriers: InsuranceCarrier[]): PhotoCarouselSlide[] {
  return carriers.map((carrier) => ({
    src: carrier.logo,
    alt: `${carrier.name} insurance logo`,
    caption: carrier.name,
    unoptimized: carrier.logo.endsWith(".svg")
  }));
}

export function InsuranceLogos() {
  return (
    <section className="insurance-section section-space border-y border-teal/10 bg-warm/95">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Insurance</p>
          <h2 className="heading-section insurance-section-title mt-4">Accepted insurance plans</h2>
          <div className="gold-divider mx-auto mt-5" />
          <p className="insurance-section-copy mt-6 text-lg leading-8 text-charcoal/75">
            HGPTOT accepts a range of in-network plans for Physical Therapy and Occupational Therapy. Private pay
            and out-of-pocket options are also available.
          </p>
        </div>

        <div className="insurance-grid-panel mt-14 rounded-[2rem] border border-teal/15 p-5 sm:p-7 md:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="insurance-carousel-kicker section-kicker">Private Insurance Accepted</span>
            <span className="insurance-carousel-meta text-sm text-charcoal/60">
              {insuranceCarriers.length} plans
            </span>
          </div>
          <PhotoCarousel
            slides={carriersToSlides(insuranceCarriers)}
            variant="logo"
            ariaLabel="Accepted private insurance plans"
            className="mx-auto max-w-4xl lg:max-w-5xl"
            autoplayMs={5000}
          />
        </div>

        <p className="insurance-section-footnote mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-charcoal/60">
          Coverage varies by plan and benefit design. Contact us to verify benefits for Physical Therapy,
          Occupational Therapy, or private pay care before your first visit.
        </p>
      </div>
    </section>
  );
}

/** Compact row for optional reuse (e.g. footer). */
export function InsuranceLogosCompact() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 grayscale">
      {insuranceCarriers.map((carrier) => (
        <Image
          key={carrier.id}
          src={carrier.logo}
          alt={carrier.name}
          width={100}
          height={32}
          className="h-8 w-auto object-contain"
        />
      ))}
    </div>
  );
}
