import { LegalDocumentView } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

const document = legalDocuments["terms-of-service"];

export const metadata = buildMetadata({
  title: document.title,
  description: document.metaDescription,
  path: "/terms-of-service"
});

export default function TermsOfServicePage() {
  return <LegalDocumentView document={document} />;
}
