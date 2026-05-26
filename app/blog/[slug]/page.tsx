import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { getAllBlogSlugs, getBlogPost, getBlogPostsByService } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type BlogArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested HGPTOT blog article could not be found.",
      path: "/blog"
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const related = getBlogPostsByService(post.service).filter((p) => p.slug !== post.slug);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` }
  ]);
  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    publishedAt: post.publishedAt,
    service: post.service
  });

  return (
    <>
      <Script
        id={`breadcrumb-blog-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id={`article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className="overflow-hidden bg-hero-glow luxury-grid">
          <div className="container-shell section-space">
            <nav className="mb-6 text-sm text-charcoal/65" aria-label="Breadcrumb">
              <Link href="/blog" className="hover:text-teal">
                Blog
              </Link>
              <span className="mx-2 text-charcoal/40">/</span>
              <span className="text-charcoal/80">{post.service}</span>
            </nav>
            <p className="eyebrow">{post.service}</p>
            <h1 className="heading-display mt-4 max-w-4xl">{post.title}</h1>
            <div className="gold-divider mt-6" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/75">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-charcoal/60">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-center">
              <Link href="/contact" className="btn-primary px-6 py-4 text-center">
                {siteConfig.ctas.primary}
              </Link>
              <Link href={post.serviceHref} className="btn-secondary px-6 py-4 text-center">
                Explore {post.service}
              </Link>
            </div>
          </div>
        </header>

        <div className="section-space">
          <div className="container-shell grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="max-w-3xl space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-lg leading-8 text-charcoal/75">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <aside className="rounded-[1.75rem] bg-teal p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Prefer to call?</p>
                <p className="mt-3 text-lg leading-8 text-white/88">
                  Speak with HGPTOT about {post.service.toLowerCase()} in Queens, Nassau County, or Long Island.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={siteConfig.phoneHref} className="btn-outline-on-dark px-5 py-3 text-center">
                    {siteConfig.phoneDisplay}
                  </a>
                  <Link href="/contact" className="btn-outline-on-dark px-5 py-3 text-center">
                    Request consultation
                  </Link>
                </div>
              </aside>

              {post.keywords.length > 0 ? (
                <div className="border-t border-teal/10 pt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Related topics</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="rounded-full border border-teal/15 bg-white px-3 py-1.5 text-sm text-charcoal/70"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Service</p>
                <h2 className="mt-3 font-serif text-xl text-charcoal">{post.service}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">
                  Learn how HGPTOT delivers personalized, in-home care for seniors and caregivers.
                </p>
                <Link href={post.serviceHref} className="btn-primary mt-5 inline-flex px-5 py-3 text-sm">
                  View service page
                </Link>
              </div>

              {related.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">More on {post.service}</p>
                  {related.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              ) : null}

              <div className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">All articles</p>
                <Link href="/blog" className="mt-4 inline-block font-semibold text-teal hover:text-gold">
                  Back to blog →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
