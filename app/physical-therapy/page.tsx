import { ContentPage } from "@/components/content-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Physical Therapy for Seniors in Queens and Nassau County",
  description:
    "HGPTOT offers senior-focused physical therapy in Queens NY and Nassau County NY for strength, balance, mobility, recovery, and fall prevention.",
  path: "/physical-therapy"
});

export default function PhysicalTherapyPage() {
  return (
    <ContentPage
      eyebrow="Physical Therapy"
      title="Physical Therapy for Seniors in Queens and Nassau County"
      description="Gentle, goal-oriented physical therapy to improve strength, mobility, pain control, and confidence with movement."
      localNote="Families searching for physical therapy in Queens NY, Valley Stream, Great Neck, or Garden City need care that is practical, patient, and tailored to older adults."
      slug="/physical-therapy"
      overview={[
        "HGPTOT provides Physical Therapy for seniors recovering from surgery, illness, deconditioning, balance changes, and mobility decline. Treatment focuses on improving how the patient moves through daily life, not just how they perform in a clinic-style setting.",
        "Sessions are structured around safe walking, transfers, endurance, strengthening, posture, stair navigation, and fall-risk reduction. The goal is steady progress that supports everyday independence and reduces fear around movement."
      ]}
      benefits={[
        "Improve walking stability and endurance",
        "Support post-surgery recovery with a senior-safe plan",
        "Reduce fall risk through balance and gait training",
        "Increase confidence with transfers and home mobility"
      ]}
    />
  );
}
