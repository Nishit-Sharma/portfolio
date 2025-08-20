import { client } from "@/sanity/client";

export default async function sitemap() {
  const baseUrl = "https://nishitsharma.vercel.app";

  // Fetch blog slugs for inclusion
  let slugs = [];
  try {
    slugs = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) }`
    );
  } catch {}

  const staticRoutes = [
    "",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const blogRoutes = slugs.map((item) => ({
    url: `${baseUrl}/blog/${item.slug}`,
    lastModified: item.updated ? new Date(item.updated) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}


