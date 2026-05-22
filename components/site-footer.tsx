import Link from "next/link";
import { Logo } from "@/components/logo";
import { mainNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer-light border-t border-teal/10 bg-warm/95 text-charcoal">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <span className="section-kicker">Luxury mobile rehab</span>
          <Link href="/" aria-label="HGPTOT home" className="inline-block shrink-0">
            <Logo compact />
          </Link>
          <p className="max-w-xl text-charcoal/72">
            Personalized Physical Therapy and Occupational Therapy for seniors and caregivers across Queens, Nassau County, and Long Island.
          </p>
          <p className="text-sm text-charcoal/55">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Pages</h3>
          <div className="space-y-3">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="text-charcoal/72 hover:text-teal">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <div className="space-y-3 text-charcoal/72">
            <p>{siteConfig.phoneDisplay}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.coverageLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
