import Link from "next/link";
import { blogData } from "../static/data/blogData";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../utils/page-utils";

export const metadata = {
  title: "Blog",
  description:
    "Read technical write-ups and articles by Nishit Sharma on web development, robotics, and more.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white-500">
      <header className="mb-12 text-center">
        <h1 className={`text-6xl ${scholarRegular.className}`}>Blog</h1>
        <p
          className={`text-xl mt-2 text-white-700 ${manropeRegular.className}`}
        >
          Technical write-ups, project deep dives, and thoughts.
        </p>
      </header>

      <div className="space-y-8">
        {blogData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <div className="block p-8 rounded-2xl bg-black-600 hover:bg-black-500 transition-colors shadow-lg">
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className={`text-3xl ${manropeSemiBold.className}`}>
                    {post.title}
                  </h2>
                  <p
                    className={`text-white-700 flex-shrink-0 ml-4 ${manropeRegular.className}`}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p
                  className={`text-white-800 text-lg mb-2 ${manropeRegular.className}`}
                >
                  {post.summary}
                </p>
                <span
                  className={`text-blue-400 font-semibold ${manropeSemiBold.className}`}
                >
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
