import { LegalDocumentView } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

const document = legalDocuments["medical-disclaimer"];

export const metadata = buildMetadata({
  title: document.title,
  description: document.metaDescription,
  path: "/medical-disclaimer"
});

export default function MedicalDisclaimerPage() {
  return <LegalDocumentView document={document} />;
}
