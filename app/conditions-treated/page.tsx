import { buildMetadata } from "@/lib/seo";
import { ConditionsGrid } from "@/components/conditions-grid";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, stockImages } from "@/data/site";

export const metadata = buildMetadata({
  title: "Conditions Treated",
  description:
    "HGPTOT helps seniors and families across Queens NY, Nassau County NY, and Long Island with balance decline, falls, post-surgical recovery, weakness, and functional mobility concerns.",
  path: "/conditions-treated"
});

export default function ConditionsTreatedPage() {
  return (
    <>
      <PageHero
        eyebrow="Conditions Treated"
        title="In-home therapy support for the conditions that most often impact confidence, mobility, and independence"
        description="This page strengthens local SEO while clearly showing families the types of recovery needs HGPTOT is equipped to support."
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Common Focus Areas"
            title="Recovery goals shaped around real home-life challenges"
            description="HGPTOT is designed for patients who need more than a generic therapy checklist. Treatment is structured around daily movement, transfers, home safety, and quality of life."
            centered
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <PhotoPanel
              image={stockImages.inHomeTherapy}
              label="Fall risk reduction"
              heightClassName="min-h-[300px]"
            />
            <PhotoPanel
              image={stockImages.geriatricTherapy}
              label="Mobility confidence"
              heightClassName="min-h-[300px]"
              imageClassName="object-[48%_center]"
            />
            <PhotoPanel
              image={stockImages.occupationalTherapy}
              label="Daily routines"
              heightClassName="min-h-[300px]"
              imageClassName="object-[45%_center]"
            />
          </div>
          <div className="mt-12">
            <ConditionsGrid conditions={siteConfig.conditions} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Mobility and balance decline",
              copy: "Support for walking confidence, transfer safety, stair navigation, endurance, and fall-risk reduction."
            },
            {
              title: "Post-surgical and medical recovery",
              copy: "Calm, one-on-one recovery support after hospitalization, joint replacement, illness, or deconditioning."
            },
            {
              title: "Daily living independence",
              copy: "Occupational Therapy strategies for dressing, bathing, meal preparation, and safer routines at home."
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
