import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
  ];

  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const { getAllSlugs } = await import("@/lib/actions/product.actions");
    const slugs = await getAllSlugs();
    productRoutes = slugs.map((s: { slug: string }) => ({
      url: `${baseUrl}/product/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // DB not available during build
  }

  return [...staticRoutes, ...productRoutes];
}
