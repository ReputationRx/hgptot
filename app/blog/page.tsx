import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { blogPosts, blogServices, getBlogPostsByService } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Therapy Blog for Seniors | Physical & Occupational Therapy Guides",
  description:
    "SEO-friendly articles on in-home physical therapy, occupational therapy, geriatric rehab, and fall prevention for families in Queens NY, Nassau County, and Long Island.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="HGPTOT Blog"
        title="Expert guides on in-home therapy for seniors and caregivers"
        description="Eight in-depth articles on Physical Therapy, Occupational Therapy, geriatric rehabilitation, and mobile care—optimized for families searching Queens, Nassau County, and Long Island."
        align="center"
      />

      <section className="section-space">
        <div className="container-shell space-y-16">
          {blogServices.map(({ service, href, description }) => {
            const posts = getBlogPostsByService(service);

            return (
              <div key={service}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="eyebrow">{service}</p>
                    <h2 className="heading-section mt-3">{service} articles</h2>
                    <p className="mt-4 text-lg leading-8 text-charcoal/75">{description}</p>
                  </div>
                  <Link href={href} className="btn-outline-on-dark shrink-0 px-5 py-3 text-center text-sm">
                    View {service}
                  </Link>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-charcoal py-14 text-white">
        <div className="container-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Ready to start?</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Talk with HGPTOT about in-home therapy in your neighborhood
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">{siteConfig.coverageLine}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-7 py-4 text-center">
              {siteConfig.ctas.primary}
            </Link>
            <a href={siteConfig.phoneHref} className="btn-outline-on-dark px-7 py-4 text-center">
              {siteConfig.ctas.secondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
