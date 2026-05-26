export type InsuranceCarrier = {
  id: string;
  name: string;
  logo: string;
  physicalTherapy: boolean;
  occupationalTherapy: boolean;
  /** Boost visual size for wordmarks or logos with extra padding in the asset. */
  logoScale?: "lg";
};

/** Accepted insurance carriers — PT and OT lists from practice credentialing.
 *  Official logos live in /public/insurance/ (sourced from Private Insurance Images/).
 *  Medicare, Partners Direct Health, and Railroad use placeholder wordmarks until assets are added. */
export const insuranceCarriers: InsuranceCarrier[] = [
  {
    id: "1199seiu",
    name: "1199SEIU",
    logo: "/insurance/1199seiu.png",
    physicalTherapy: false,
    occupationalTherapy: true
  },
  {
    id: "aetna",
    name: "Aetna",
    logo: "/insurance/aetna.svg",
    physicalTherapy: true,
    occupationalTherapy: true
  },
  {
    id: "cigna",
    name: "Cigna / Ashlink",
    logo: "/insurance/cigna.svg",
    physicalTherapy: true,
    occupationalTherapy: true
  },
  {
    id: "fidelis",
    name: "Fidelis",
    logo: "/insurance/fidelis.png",
    physicalTherapy: true,
    occupationalTherapy: false,
    logoScale: "lg"
  },
  {
    id: "ghi",
    name: "GHI / HIP (EmblemHealth)",
    logo: "/insurance/ghi.svg",
    physicalTherapy: true,
    occupationalTherapy: true,
    logoScale: "lg"
  },
  {
    id: "humana",
    name: "Humana",
    logo: "/insurance/humana.svg",
    physicalTherapy: true,
    occupationalTherapy: false
  },
  {
    id: "medicare",
    name: "Medicare",
    logo: "/insurance/medicare.svg",
    physicalTherapy: true,
    occupationalTherapy: true,
    logoScale: "lg"
  },
  {
    id: "magnacare",
    name: "Magnacare",
    logo: "/insurance/magnacare.jpeg",
    physicalTherapy: false,
    occupationalTherapy: true
  },
  {
    id: "multiplan",
    name: "Multiplan — PHCS",
    logo: "/insurance/multiplan.jpeg",
    physicalTherapy: true,
    occupationalTherapy: true,
    logoScale: "lg"
  },
  {
    id: "partners",
    name: "Partners Direct Health",
    logo: "/insurance/partners.svg",
    physicalTherapy: true,
    occupationalTherapy: true,
    logoScale: "lg"
  },
  {
    id: "railroad",
    name: "Railroad Medicare",
    logo: "/insurance/railroad.svg",
    physicalTherapy: true,
    occupationalTherapy: true,
    logoScale: "lg"
  }
];

export const insuranceCarrierNames = insuranceCarriers.map((carrier) => carrier.name);

export const physicalTherapyInsurance = insuranceCarriers.filter((c) => c.physicalTherapy);
export const occupationalTherapyInsurance = insuranceCarriers.filter((c) => c.occupationalTherapy);
