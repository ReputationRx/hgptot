import { LegalDocumentView } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

const document = legalDocuments.accessibility;

export const metadata = buildMetadata({
  title: document.title,
  description: document.metaDescription,
  path: "/accessibility"
});

export default function AccessibilityPage() {
  return <LegalDocumentView document={document} />;
}
