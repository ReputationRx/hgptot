import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { siteConfig, stockImages } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact HGPTOT",
  description:
    "Contact HGPTOT for private pay physical therapy and occupational therapy for seniors in Queens NY and Nassau County NY.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with HGPTOT about senior therapy care"
        description="Reach out to discuss availability, location, therapy goals, and private pay or out-of-pocket options for your loved one with a calm, concierge-style first conversation."
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <PhotoPanel
              image={stockImages.consult}
              label="Start with a private evaluation"
              heightClassName="min-h-[340px]"
            />

            <div className="card-surface p-8">
              <h2 className="font-serif text-2xl text-charcoal">Get in touch</h2>
              <div className="mt-6 space-y-4 text-lg text-charcoal/75">
                <p>
                  <span className="font-semibold text-charcoal">Phone:</span> {siteConfig.phoneDisplay}
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Email:</span> {siteConfig.email}
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Service area:</span> Queens, NY and Nassau County, NY
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Payment:</span> Private pay and out-of-pocket patients accepted
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Visit style:</span> Mobile, in-home-first therapy experience
                </p>
              </div>
            </div>

            <div className="card-surface p-8">
              <h2 className="font-serif text-2xl text-charcoal">What to share when you contact us</h2>
              <div className="mt-6 space-y-3 text-charcoal/75">
                <p>Patient age and main mobility or safety concern</p>
                <p>Recent surgery, hospitalization, or diagnosis</p>
                <p>Preferred city or whether in-home care is needed</p>
                <p>Interest in private pay or out-of-pocket therapy</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
