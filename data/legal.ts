export const agencyCredit = {
  name: "Slide in Digital Marketing",
  url: "https://slideindm.com"
};

export const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/accessibility", label: "Accessibility Statement" },
  { href: "/cookie-notice", label: "Cookie Notice" }
];

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocuments: Record<string, LegalDocument> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaDescription:
      "HGPTOT Privacy Policy explains how we collect, use, and protect personal information for website visitors and prospective therapy patients in Queens and Nassau County.",
    lastUpdated: "May 25, 2026",
    intro:
      "HGPTOT (“we,” “us,” or “our”) respects your privacy. This Privacy Policy describes how we handle information when you visit hgptot.com, contact us, or request information about in-home Physical Therapy and Occupational Therapy services.",
    sections: [
      {
        heading: "Information we may collect",
        paragraphs: [
          "We may collect information you voluntarily provide through contact forms, phone calls, email, or scheduling requests. This may include your name, phone number, email address, city or neighborhood, service interest, insurance or private pay preference, and messages about care needs.",
          "We may also collect limited technical data when you use our website, such as browser type, device type, pages viewed, and approximate location derived from IP address for security and analytics."
        ],
        list: [
          "Contact and inquiry details you submit",
          "Communications with our team",
          "Website usage and performance data",
          "Cookies or similar technologies as described in our Cookie Notice"
        ]
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use personal information to respond to inquiries, coordinate evaluations, improve our website, maintain security, and communicate about HGPTOT services. We do not sell your personal information.",
          "If you are an existing or prospective patient, information may also be used consistent with applicable healthcare privacy laws and our clinical intake processes once a formal care relationship is established."
        ]
      },
      {
        heading: "Sharing and disclosure",
        paragraphs: [
          "We may share information with trusted service providers who help us operate our website, email systems, scheduling tools, or hosting infrastructure, subject to confidentiality obligations.",
          "We may disclose information when required by law, to protect rights and safety, or in connection with a business transition such as a merger or acquisition, with appropriate notice where required."
        ]
      },
      {
        heading: "Health information",
        paragraphs: [
          "Information submitted through this website for general inquiries is not a substitute for a completed clinical intake. Protected health information (PHI) is handled under separate policies and authorizations once you become a patient, including applicable HIPAA requirements where they apply.",
          "Please do not submit highly sensitive medical records through unsecured website forms unless we have directed you to a secure channel."
        ]
      },
      {
        heading: "Data retention and security",
        paragraphs: [
          "We retain information only as long as needed for the purposes described in this policy, unless a longer retention period is required by law or professional standards.",
          "We use reasonable administrative, technical, and organizational safeguards designed to protect information. No method of transmission over the internet is completely secure."
        ]
      },
      {
        heading: "Your choices and rights",
        paragraphs: [
          "You may request access, correction, or deletion of certain information we hold, subject to legal and clinical recordkeeping requirements. You may opt out of non-essential marketing communications at any time.",
          "Residents of certain states may have additional privacy rights. Contact us to exercise applicable rights."
        ]
      },
      {
        heading: "Children’s privacy",
        paragraphs: [
          "Our website and services are directed primarily to adults, caregivers, and families seeking therapy for seniors. We do not knowingly collect personal information from children under 13 without appropriate parental involvement."
        ]
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update this Privacy Policy periodically. The “Last updated” date at the top of this page will reflect revisions.",
          "Questions about this Privacy Policy may be directed to HGPTOT using the contact information on our website."
        ]
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    metaDescription:
      "HGPTOT Terms of Service govern use of our website and communications related to in-home physical therapy and occupational therapy in Queens and Nassau County.",
    lastUpdated: "May 25, 2026",
    intro:
      "These Terms of Service (“Terms”) govern your access to and use of the HGPTOT website and related online materials. By using this site, you agree to these Terms. If you do not agree, please do not use the website.",
    sections: [
      {
        heading: "Website purpose",
        paragraphs: [
          "This website provides general information about HGPTOT’s in-home Physical Therapy, Occupational Therapy, geriatric rehabilitation, and related services for seniors and caregivers in Queens, Nassau County, and Long Island.",
          "Content is provided for educational and informational purposes. It does not create a provider-patient relationship by itself."
        ]
      },
      {
        heading: "No medical advice",
        paragraphs: [
          "Website articles, blog posts, and descriptions are not medical advice, diagnosis, or treatment recommendations for any individual. Always seek professional evaluation for health concerns.",
          "See our Medical Disclaimer for additional limitations."
        ]
      },
      {
        heading: "Appointments and services",
        paragraphs: [
          "Submitting a contact form or calling HGPTOT does not guarantee availability, insurance acceptance, or clinical eligibility. Services are subject to professional assessment, geographic coverage, scheduling, and applicable policies.",
          "Fees, insurance participation, and private pay terms are confirmed during intake and may change with notice where permitted."
        ]
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "You agree not to misuse the website, attempt unauthorized access, scrape content for competing commercial use without permission, transmit malware, or use the site in any unlawful manner.",
          "We may suspend or restrict access if we believe these Terms have been violated."
        ]
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Text, branding, logos, photography, layout, and other materials on this site are owned by HGPTOT or used under license. You may not copy, reproduce, or distribute site content for commercial purposes without written permission, except for personal, non-commercial reference."
        ]
      },
      {
        heading: "Third-party links",
        paragraphs: [
          "Our website may link to third-party sites or tools. We are not responsible for the content, privacy practices, or availability of external websites."
        ]
      },
      {
        heading: "Disclaimer of warranties",
        paragraphs: [
          "The website is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law."
        ]
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, HGPTOT and its affiliates, officers, employees, and agents shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website.",
          "Some jurisdictions do not allow certain limitations, so portions of this section may not apply to you."
        ]
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles, except where federal law applies.",
          "Disputes relating to these Terms or website use shall be brought in courts located in New York, unless otherwise required by law."
        ]
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may modify these Terms at any time by posting an updated version on this page. Continued use of the website after changes constitutes acceptance of the revised Terms."
        ]
      }
    ]
  },
  "medical-disclaimer": {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    metaDescription:
      "HGPTOT Medical Disclaimer clarifies that website content is educational only and not a substitute for professional physical or occupational therapy evaluation.",
    lastUpdated: "May 25, 2026",
    intro:
      "The information on hgptot.com is provided for general educational purposes related to senior rehabilitation, mobility, and in-home therapy. It is not intended to replace professional medical judgment.",
    sections: [
      {
        heading: "Not emergency care",
        paragraphs: [
          "This website is not for medical emergencies. If you or someone else may be experiencing a medical emergency, call 911 or go to the nearest emergency department immediately."
        ]
      },
      {
        heading: "Individual assessment required",
        paragraphs: [
          "Every patient has unique medical history, medications, home environment, and goals. Therapy recommendations must be based on an in-person or appropriate telehealth evaluation by a licensed clinician.",
          "Do not start, stop, or change exercises or activities based solely on website content without professional guidance."
        ]
      },
      {
        heading: "No guarantees",
        paragraphs: [
          "Outcomes described on this site—such as improved balance, reduced fall risk, or faster post-surgical recovery—are examples of goals we work toward. Results vary and depend on many factors outside our control."
        ]
      },
      {
        heading: "Insurance and coverage",
        paragraphs: [
          "Insurance acceptance, benefits, authorizations, and out-of-pocket costs vary by plan. Information on this website is general and not a guarantee of coverage for any specific service or patient."
        ]
      },
      {
        heading: "Contact a professional",
        paragraphs: [
          "For questions about whether Physical Therapy or Occupational Therapy is appropriate, contact HGPTOT to schedule a private evaluation or speak with your physician."
        ]
      }
    ]
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility Statement",
    metaDescription:
      "HGPTOT Accessibility Statement describes our commitment to accessible web content and how to request assistance.",
    lastUpdated: "May 25, 2026",
    intro:
      "HGPTOT is committed to making our website reasonably accessible to users with disabilities, including seniors, caregivers, and family members who rely on assistive technologies.",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "We aim to follow widely recognized accessibility practices, including considerations aligned with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where feasible.",
          "Accessibility is an ongoing effort. We review contrast, readability, keyboard navigation, and form usability as the site evolves."
        ]
      },
      {
        heading: "Measures we take",
        paragraphs: ["We work to improve accessibility through:"],
        list: [
          "Readable typography and sufficient color contrast in brand layouts",
          "Descriptive link text and meaningful headings",
          "Alternative text for meaningful images where applicable",
          "Responsive layouts for mobile and desktop users",
          "Clear labels on contact and inquiry forms"
        ]
      },
      {
        heading: "Known limitations",
        paragraphs: [
          "Some third-party embeds, PDFs, or legacy assets may not meet every accessibility standard. We welcome feedback to prioritize improvements.",
          "If you need information in an alternative format, contact us by phone or email and we will try to assist you promptly."
        ]
      },
      {
        heading: "Feedback",
        paragraphs: [
          "If you encounter a barrier on our website, please contact HGPTOT with the page URL and a description of the issue. We will make reasonable efforts to address it."
        ]
      }
    ]
  },
  "cookie-notice": {
    slug: "cookie-notice",
    title: "Cookie Notice",
    metaDescription:
      "HGPTOT Cookie Notice explains how cookies and similar technologies may be used on our website.",
    lastUpdated: "May 25, 2026",
    intro:
      "This Cookie Notice explains how HGPTOT may use cookies and similar technologies when you visit our website.",
    sections: [
      {
        heading: "What are cookies",
        paragraphs: [
          "Cookies are small text files stored on your device by your browser. They help websites remember preferences, maintain security, and understand how pages are used."
        ]
      },
      {
        heading: "How we may use cookies",
        paragraphs: [
          "With your consent, HGPTOT may use cookies and similar technologies from the providers below. You can accept, reject, or customize categories through our cookie banner at any time."
        ],
        list: [
          "Essential: site security, consent storage, and core functionality",
          "Analytics: Google Analytics, Google Tag Manager, and Microsoft Bing UET",
          "Marketing & social: Meta (Facebook/Instagram), LinkedIn, and related advertising pixels",
          "CRM: LeadSpider CRM for inquiries, lead capture, and follow-up"
        ]
      },
      {
        heading: "Your choices",
        paragraphs: [
          "Most browsers let you block or delete cookies through settings. Blocking essential cookies may affect site functionality.",
          "Where required by law, we will provide additional consent options for non-essential cookies."
        ]
      },
      {
        heading: "Updates",
        paragraphs: [
          "We may update this Cookie Notice from time to time. Please review this page periodically for changes.",
          "For more information about how we handle personal data, see our Privacy Policy."
        ]
      }
    ]
  }
};
