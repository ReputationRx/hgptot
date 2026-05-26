import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/section-heading";

type BlogSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function BlogSection({ limit = 3, showViewAll = true }: BlogSectionProps) {
  const featured = blogPosts.slice(0, limit);

  return (
    <section className="section-space border-t border-teal/10">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Resources"
            title="Therapy insights for families in Queens and Nassau County"
            description="Practical guides on in-home Physical Therapy, Occupational Therapy, geriatric care, and aging in place—written for seniors and caregivers."
          />
          {showViewAll ? (
            <Link href="/blog" className="btn-outline shrink-0 px-6 py-3 text-center">
              View all articles
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
