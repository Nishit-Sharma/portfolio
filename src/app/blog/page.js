import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import BlogClient from "./page.client";

const POSTS_QUERY = `*[
   _type == "post"
   && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage}`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Blog",
  description: "Read technical write-ups and articles by Nishit Sharma on web development, robotics, and more.",
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  const postsWithImages = posts.map(post => ({
    ...post,
    imageUrl: post.mainImage ? urlFor(post.mainImage).url() : null,
  }));

  return <BlogClient posts={postsWithImages} />;
}
