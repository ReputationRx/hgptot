import { LegalDocumentView } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

const document = legalDocuments["privacy-policy"];

export const metadata = buildMetadata({
  title: document.title,
  description: document.metaDescription,
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return <LegalDocumentView document={document} />;
}
