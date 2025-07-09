import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import PostClient from "./page.client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  author->{
    _id,
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    _id,
    title,
    description
  }
}`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await client.fetch(POST_QUERY, await params);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary || post.title,
  };
}

export default async function PostPage({ params }) {
  const post = await client.fetch(POST_QUERY, await params, options);

  if (!post) {
    return <PostClient post={null} />;
  }

  const postWithImages = {
    ...post,
    imageUrl: post.mainImage ? urlFor(post.mainImage).url() : null,
    authorImageUrl: post.author?.image ? urlFor(post.author.image).url() : null,
  };

  return <PostClient post={postWithImages} />;
}
