"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/logo";

const topLevelNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" }
];

const serviceNav = [
  { href: "/physical-therapy", label: "Physical Therapy" },
  { href: "/occupational-therapy", label: "Occupational Therapy" },
  { href: "/geriatric-therapy", label: "Geriatric Therapy" },
  { href: "/in-home-therapy", label: "In-Home Therapy" },
  { href: "/conditions-treated", label: "Conditions Treated" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header-light sticky top-0 z-40 border-b border-teal/10 bg-warm/95 backdrop-blur">
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4 py-2 lg:min-h-24">
          <Link href="/" aria-label="HGPTOT home" className="shrink-0">
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {topLevelNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium ${
                    active ? "text-teal" : "text-charcoal/75 hover:text-teal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={siteConfig.phoneHref} className="btn-outline hidden px-4 py-2 text-sm lg:inline-flex">
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-primary hidden px-5 py-3 text-sm lg:inline-flex">
              {siteConfig.ctas.primary}
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="btn-icon h-11 w-11 lg:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <nav className="hidden border-t border-teal/10 py-2 lg:block" aria-label="Service navigation">
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            <span className="mr-2 shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Services
            </span>
            {serviceNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`btn-pill shrink-0 px-4 py-2 text-sm font-medium ${
                    active ? "bg-teal text-white" : "text-charcoal/72"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`${menuOpen ? "block" : "hidden"} border-t border-teal/10 py-4 lg:hidden`}
        >
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {[...topLevelNav, ...serviceNav].map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition duration-200 ease-out ${
                    active ? "bg-teal text-white" : "bg-white text-charcoal/80 hover:bg-gold hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href={siteConfig.phoneHref} className="btn-outline px-5 py-3 text-center">
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-primary px-5 py-3 text-center">
              {siteConfig.ctas.primary}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
