import Link from "next/link";
import { siteConfig } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-teal/10 bg-white/95 p-3 shadow-soft md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={siteConfig.phoneHref}
          className="btn-primary flex-1 px-4 py-3 text-center"
        >
          {siteConfig.ctas.secondary}
        </a>
        <Link
          href="/contact"
          className="btn-secondary flex-1 border-gold/40 bg-gold/10 px-4 py-3 text-center"
        >
          {siteConfig.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
