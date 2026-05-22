import Link from "next/link";
import { siteConfig } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, align = "left" }: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="overflow-hidden bg-hero-glow luxury-grid">
      <div className={`container-shell section-space ${centered ? "text-center" : ""}`}>
        <div className={`mx-auto ${centered ? "max-w-4xl" : "max-w-5xl"}`}>
          <p className={`eyebrow mb-4 ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
          <h1 className={`heading-display ${centered ? "mx-auto max-w-4xl" : "max-w-4xl"}`}>{title}</h1>
          <div className={`gold-divider mt-6 ${centered ? "mx-auto" : ""}`} />
          <p className={`mt-8 lede ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>{description}</p>
        </div>
        <div className={`mt-10 flex flex-col gap-4 sm:flex-row ${centered ? "justify-center" : ""}`}>
          <Link
            href="/contact"
            className="rounded-full bg-teal px-6 py-4 text-center font-semibold text-white hover:bg-teal/90"
          >
            {siteConfig.ctas.primary}
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-gold/50 bg-white px-6 py-4 text-center font-semibold text-charcoal hover:border-gold"
          >
            {siteConfig.ctas.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
