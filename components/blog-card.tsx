import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="section-kicker text-gold">{post.service}</span>
        <span className="text-sm text-charcoal/55">{post.readTime}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-charcoal">
        <Link href={`/blog/${post.slug}`} className="hover:text-teal">
          {post.title}
        </Link>
      </h3>
      <p className="mt-4 flex-1 leading-7 text-charcoal/72">{post.excerpt}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-teal hover:text-gold">
          Read article →
        </Link>
        <Link href={post.serviceHref} className="text-sm text-charcoal/60 hover:text-teal">
          {post.service} services
        </Link>
      </div>
    </article>
  );
}
