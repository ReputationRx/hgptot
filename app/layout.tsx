import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { CookieConsentBanner, CookiePreferencesButton } from "@/components/cookie-consent-banner";
import { ConsentScripts } from "@/components/consent-scripts";
import { buildMedicalBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HGPTOT | Physical & Occupational Therapy for Seniors in Queens and Nassau County",
    template: `%s | ${siteConfig.name}`
  },
  description:
    "HGPTOT provides private pay physical therapy and occupational therapy for seniors in Queens NY, Nassau County NY, and surrounding communities with compassionate, one-on-one care.",
  keywords: [
    "Physical Therapy Queens NY",
    "Occupational Therapy Nassau County",
    "Geriatric Therapy",
    "In-Home Therapy",
    "Private Pay Therapy",
    "Long Island rehabilitation",
    "Mobile occupational therapy",
    "Seniors rehabilitation Queens",
    "Fall prevention Nassau County",
    "in-home therapy blog",
    "geriatric physical therapy Queens",
    "occupational therapy Nassau County guides"
  ],
  category: "healthcare",
  icons: {
    icon: "/brand/hgptot-logo-mark.png",
    shortcut: "/brand/hgptot-logo-mark.png",
    apple: "/brand/hgptot-logo-mark.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = buildMedicalBusinessSchema();

  return (
    <html lang="en" className="theme-dark">
      <body className="font-sans">
        <Script
          id="medical-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileCallBar />
        <CookieConsentBanner />
        <CookiePreferencesButton />
        <ConsentScripts />
      </body>
    </html>
  );
}
