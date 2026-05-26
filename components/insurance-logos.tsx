import Image from "next/image";
import {
  insuranceCarriers,
  occupationalTherapyInsurance,
  physicalTherapyInsurance,
  type InsuranceCarrier
} from "@/data/insurance";

function LogoCard({ carrier }: { carrier: InsuranceCarrier }) {
  const enlarged = carrier.logoScale === "lg";

  return (
    <div
      className={`insurance-logo-card flex flex-col items-center justify-center ${
        enlarged
          ? "insurance-logo-card-lg min-h-[11rem] py-5 sm:min-h-[12rem] sm:py-6 lg:min-h-[22rem] lg:py-8"
          : "min-h-[5.5rem] lg:min-h-[6.5rem]"
      }`}
    >
      <div
        className={`relative flex w-full items-center justify-center px-1 ${
          enlarged
            ? "h-36 max-w-[14rem] sm:h-40 sm:max-w-[16rem] lg:h-80 lg:max-w-full lg:px-2"
            : "h-16 max-w-[11rem] lg:h-20 lg:max-w-[12rem]"
        }`}
      >
        <Image
          src={carrier.logo}
          alt={`${carrier.name} insurance logo`}
          width={enlarged ? 704 : 176}
          height={enlarged ? 256 : 64}
          className={`w-full object-contain object-center ${
            enlarged
              ? "max-h-36 min-h-[6.5rem] sm:max-h-40 sm:min-h-36 lg:max-h-80 lg:min-h-[18rem] lg:w-full"
              : "max-h-16 lg:max-h-20"
          }`}
          unoptimized={carrier.logo.endsWith(".svg")}
        />
      </div>
    </div>
  );
}

function LogoGrid({ carriers }: { carriers: InsuranceCarrier[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {carriers.map((carrier) => (
        <LogoCard key={carrier.id} carrier={carrier} />
      ))}
    </div>
  );
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

        <div className="mt-14 space-y-12">
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="section-kicker">Physical Therapy</span>
              <span className="text-sm text-charcoal/60">{physicalTherapyInsurance.length} plans</span>
            </div>
            <LogoGrid carriers={physicalTherapyInsurance} />
          </div>

          <div>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="section-kicker">Occupational Therapy</span>
              <span className="text-sm text-charcoal/60">{occupationalTherapyInsurance.length} plans</span>
            </div>
            <LogoGrid carriers={occupationalTherapyInsurance} />
          </div>
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
