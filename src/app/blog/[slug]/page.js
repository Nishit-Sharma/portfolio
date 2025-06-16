import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/app/static/data/blogData";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "@/app/utils/page-utils";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 text-white-500">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className={`inline-block mb-8 text-lg ${manropeSemiBold.className} hover:text-white-600 transition-colors`}
        >
          &larr; Back to Blog
        </Link>

        <article className="bg-black-600 p-8 md:p-12 rounded-2xl shadow-2xl">
          <header className="mb-8 border-b border-white-800 pb-6">
            <h1
              className={`text-5xl tracking-tight mb-3 ${scholarRegular.className}`}
            >
              {post.title}
            </h1>
            <p className={`text-lg text-white-700 ${manropeRegular.className}`}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <span className="mx-2">&bull;</span>
              <span>{post.category}</span>
            </p>
          </header>

          <div
            className={`prose prose-invert prose-lg max-w-none prose-h3:font-bold prose-h3:text-2xl ${manropeRegular.className}`}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Don't need this rule because the content is set by me so its safe
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
