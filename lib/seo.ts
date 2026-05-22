import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetaOptions = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: MetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function buildMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: siteConfig.name,
    description:
      "HGPTOT provides private pay, in-home physical therapy and occupational therapy for seniors and caregivers across Queens, Nassau County, and Long Island.",
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: siteConfig.serviceAreas,
    priceRange: "$$$",
    paymentAccepted: ["Private Pay", "Out-of-Pocket"],
    medicalSpecialty: [
      "Physical Therapy",
      "Occupational Therapy",
      "Geriatric Medicine",
      "Home Health"
    ],
    availableService: siteConfig.services.map((service) => ({
      "@type": "MedicalTherapy",
      name: service
    }))
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
