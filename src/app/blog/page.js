import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import BlogClient from "./page.client";

const POSTS_QUERY = `*[
   _type == "post"
   && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, publishedAt, mainImage}`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Blog",
  description: "Read technical write-ups and articles by Nishit Sharma on Web and AI development, Electron apps, real-time multimodal systems, and more.",
  keywords: ["AI development", "Electron apps", "real-time AI", "multimodal", "contextual AI", "Nishit Sharma"],
  alternates: {
    canonical: "https://nishitsharma.vercel.app/blog",
  },
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  const postsWithImages = posts.map((post) => ({
    ...post,
    imageUrl: post.mainImage ? urlFor(post.mainImage).url() : null,
  }));

  return <BlogClient posts={postsWithImages} />;
}
