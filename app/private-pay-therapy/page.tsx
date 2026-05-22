import { ContentPage } from "@/components/content-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Pay and Out-of-Pocket Therapy",
  description:
    "HGPTOT offers private pay and out-of-pocket physical therapy and occupational therapy for seniors across Queens NY and Nassau County NY.",
  path: "/private-pay-therapy"
});

export default function PrivatePayTherapyPage() {
  return (
    <ContentPage
      eyebrow="Private Pay Therapy"
      title="Private Pay / Out-of-Pocket Therapy for Seniors"
      description="A premium therapy model for patients and families who value flexibility, direct attention, and a more personalized care experience."
      localNote="Private pay therapy is an important local search theme for Queens NY and Nassau County families who want direct access to high-touch senior rehabilitation support."
      slug="/private-pay-therapy"
      overview={[
        "HGPTOT is positioned to serve private pay and out-of-pocket patients who want individualized therapy care without relying on a more restrictive or slower process. This supports a more flexible treatment experience and clearer communication around goals and scheduling.",
        "Families often choose private pay care when they want more direct coordination, a calmer and more premium experience, or a therapy relationship built around the patient’s priorities rather than a generic template."
      ]}
      benefits={[
        "Flexible, direct access to senior-focused care",
        "A more personalized and attentive experience",
        "Clear positioning for out-of-pocket patients",
        "Strong fit for families seeking premium service"
      ]}
    />
  );
}
