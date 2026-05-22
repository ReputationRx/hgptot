import { ContentPage } from "@/components/content-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Geriatric Therapy in Queens and Nassau County",
  description:
    "HGPTOT offers geriatric therapy in Queens NY and Nassau County NY to support senior mobility, daily function, balance, and long-term independence.",
  path: "/geriatric-therapy"
});

export default function GeriatricTherapyPage() {
  return (
    <ContentPage
      eyebrow="Geriatric Therapy"
      title="Geriatric Therapy in Queens and Nassau County"
      description="Integrated therapy support for older adults facing age-related weakness, fall risk, reduced endurance, or loss of independence."
      localNote="Geriatric therapy is especially relevant for families in Jamaica, Fresh Meadows, Mineola, and surrounding communities seeking care that respects the realities of aging."
      slug="/geriatric-therapy"
      overview={[
        "HGPTOT’s geriatric therapy approach blends Physical Therapy and Occupational Therapy principles to support whole-person function. Treatment focuses on mobility, home safety, endurance, confidence, and activities of daily living that matter most to the patient.",
        "This service is designed for seniors who may not fit neatly into a single condition category but still need focused support to stay safe, active, and engaged in daily life."
      ]}
      benefits={[
        "Address weakness, balance loss, and low endurance",
        "Support aging in place with safer movement strategies",
        "Help families plan realistic functional goals",
        "Build confidence with structured, compassionate care"
      ]}
    />
  );
}
