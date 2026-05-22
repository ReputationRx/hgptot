import { ContentPage } from "@/components/content-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Occupational Therapy for Seniors in Queens and Nassau County",
  description:
    "HGPTOT provides occupational therapy for seniors in Queens NY and Nassau County NY to support daily routines, home safety, and independence.",
  path: "/occupational-therapy"
});

export default function OccupationalTherapyPage() {
  return (
    <ContentPage
      eyebrow="Occupational Therapy"
      title="Occupational Therapy for Seniors in Queens and Nassau County"
      description="Practical occupational therapy that helps older adults stay independent with dressing, bathing, meal prep, and daily routines."
      localNote="Occupational therapy searches in Flushing, Bayside, Forest Hills, and New Hyde Park often come from families looking for safer, more manageable daily living at home."
      slug="/occupational-therapy"
      overview={[
        "Occupational Therapy at HGPTOT helps seniors maintain daily function and conserve energy while staying as independent as possible. Care is centered on real routines inside the home and the physical demands those routines create.",
        "Treatment can address upper-extremity strength, coordination, fine motor skills, adaptive strategies, home safety recommendations, and task modification to reduce strain, frustration, or injury risk."
      ]}
      benefits={[
        "Make bathing, dressing, and grooming safer",
        "Improve hand function and coordination",
        "Support adaptive equipment and energy conservation",
        "Increase independence with everyday tasks"
      ]}
    />
  );
}
