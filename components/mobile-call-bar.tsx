import Link from "next/link";
import { siteConfig } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-teal/10 bg-white/95 p-3 shadow-soft md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 rounded-full bg-teal px-4 py-3 text-center font-semibold text-white"
        >
          {siteConfig.ctas.secondary}
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-gold/40 bg-gold/10 px-4 py-3 text-center font-semibold text-charcoal"
        >
          {siteConfig.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
