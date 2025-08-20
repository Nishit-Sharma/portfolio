export default function robots() {
  const baseUrl = "https://nishitsharma.vercel.app";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


