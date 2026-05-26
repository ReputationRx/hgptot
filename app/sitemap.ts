import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blog";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/blog",
    "/physical-therapy",
    "/occupational-therapy",
    "/geriatric-therapy",
    "/in-home-therapy",
    "/private-pay-therapy",
    "/service-areas",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/medical-disclaimer",
    "/accessibility",
    "/cookie-notice"
  ];

  const blogRoutes = getAllBlogSlugs().map((slug) => `/blog/${slug}`);

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.7 : 0.8
  }));
}
