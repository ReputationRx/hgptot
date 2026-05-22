import { ContentPage } from "@/components/content-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "In-Home Therapy in Queens and Nassau County",
  description:
    "HGPTOT provides in-home physical therapy and occupational therapy for seniors in Queens NY and Nassau County NY with private pay options.",
  path: "/in-home-therapy"
});

export default function InHomeTherapyPage() {
  return (
    <ContentPage
      eyebrow="In-Home Therapy"
      title="In-Home Therapy in Queens and Nassau County"
      description="A concierge-style, in-home therapy experience that delivers premium rehabilitation care where comfort, safety, and daily function matter most."
      localNote="Many local families search for in-home therapy in Queens NY, Nassau County NY, and Long Island when transportation, fatigue, safety, or caregiver logistics make travel difficult."
      slug="/in-home-therapy"
      overview={[
        "In-home therapy allows HGPTOT to work directly within the environment where the patient lives, walks, transfers, cooks, dresses, and rests. That makes therapy more specific, practical, and immediately useful.",
        "For seniors, home-based care can reduce stress and make it easier to evaluate fall risks, furniture layout, bathroom access, stair challenges, and the daily routines that shape independence. It also reinforces the brand promise of highly personal, one-on-one recovery support."
      ]}
      benefits={[
        "Receive care in a familiar and comfortable setting",
        "Target real fall risks inside the home",
        "Reduce transportation burden for families",
        "Apply therapy strategies directly to everyday routines"
      ]}
    />
  );
}
