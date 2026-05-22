import { buildMetadata } from "@/lib/seo";
import { LocationList } from "@/components/location-list";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, stockImages } from "@/data/site";

export const metadata = buildMetadata({
  title: "Service Areas",
  description:
    "HGPTOT serves seniors and families throughout Queens NY, Nassau County NY, Valley Stream, Great Neck, Flushing, Bayside, Forest Hills, and nearby communities.",
  path: "/service-areas"
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Therapy services for seniors across Queens and Nassau County"
        description="HGPTOT is locally positioned to support older adults and caregivers across Queens, Nassau County, and Long Island communities where families are actively searching for trusted in-home therapy support."
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PhotoPanel
            image={stockImages.inHomeTherapy}
            label="Mobile therapy coverage"
            heightClassName="min-h-[460px]"
          />
          <div>
            <SectionHeading
              eyebrow="Coverage"
              title="Primary local SEO targets and service communities"
              description="This page supports geographic relevance for search visibility while making it easy for families to confirm coverage."
            />
            <div className="mt-10">
              <LocationList locations={siteConfig.serviceAreas} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Queens, NY",
              copy: "Physical Therapy and Occupational Therapy for seniors in Flushing, Bayside, Forest Hills, Jamaica, and Fresh Meadows."
            },
            {
              title: "Nassau County, NY",
              copy: "Senior-focused therapy support in Valley Stream, New Hyde Park, Great Neck, Garden City, Mineola, and nearby communities."
            },
            {
              title: "In-home and private pay fit",
              copy: "Local families looking for in-home therapy and out-of-pocket senior rehab care can use this page as a direct service-area guide, with future room for broader rehabilitation expansion."
            }
          ].map((item) => (
            <div key={item.title} className="card-surface p-8">
              <h2 className="font-serif text-2xl text-charcoal">{item.title}</h2>
              <p className="mt-4 text-lg leading-8 text-charcoal/75">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
