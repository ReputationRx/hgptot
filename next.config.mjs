/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  /**
   * After each deploy, chunk/CSS filenames change. If HTML is cached (browser/CDN)
   * while /_next/static is replaced, users see 404 on JS/CSS. Keep HTML revalidating;
   * hashed assets under /_next/static stay long-cached.
   */
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
      },
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
      },
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }]
      }
    ];
  }
};

export default nextConfig;
