import { LegalDocumentView } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

const document = legalDocuments["cookie-notice"];

export const metadata = buildMetadata({
  title: document.title,
  description: document.metaDescription,
  path: "/cookie-notice"
});

export default function CookieNoticePage() {
  return <LegalDocumentView document={document} />;
}
