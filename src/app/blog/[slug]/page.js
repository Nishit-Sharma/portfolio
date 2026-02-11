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
  try {
    const post = await client.fetch(POST_QUERY, { ...params });
    if (!post) return {};

    const canonicalUrl = `https://nishitsharma.vercel.app/blog/${post.slug?.current || ""}`;
    const description = post.summary || post.title;
    const keywords = post.categories?.map(cat => cat.title).join(", ") || "blog, article, Nishit Sharma";

    return {
      title: post.title,
      description: description,
      keywords: [keywords, "Nishit Sharma", "blog", "article", "technical writing"].join(", "),
      alternates: {
        canonical: canonicalUrl,
      },
      authors: [{ name: post.author?.name || "Nishit Sharma" }],
      openGraph: {
        type: "article",
        title: post.title,
        description: description,
        url: canonicalUrl,
        siteName: "Nishit Sharma's Portfolio",
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt,
        authors: [post.author?.name || "Nishit Sharma"],
        images: post.mainImage && projectId && dataset
          ? [
              {
                url: imageUrlBuilder({ projectId, dataset })
                  .image(post.mainImage)
                  .fit("max")
                  .width(1200)
                  .height(630)
                  .url(),
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ]
          : [
              {
                url: "/NishitSharma.webp",
                width: 1200,
                height: 630,
                alt: "Nishit Sharma - Software Engineer and Full-Stack Developer",
              },
            ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: description,
        images: post.mainImage && projectId && dataset
          ? [imageUrlBuilder({ projectId, dataset })
              .image(post.mainImage)
              .fit("max")
              .width(1200)
              .height(630)
              .url()]
          : ["/NishitSharma.webp"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          maxVideoPreview: -1,
          maxImagePreview: "large",
          maxSnippet: -1,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching post metadata:", error);
    return {
      title: "Post Not Found",
      description: "The requested post could not be loaded.",
    };
  }
}

export default async function PostPage({ params }) {
  let post = null;
  try {
    post = await client.fetch(POST_QUERY, { ...params }, options);
  } catch (error) {
    console.error("Error fetching post:", error);
    post = null;
  }

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
