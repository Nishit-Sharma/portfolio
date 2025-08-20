"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { motion } from "motion/react";
import { PortableText } from "next-sanity";
import {
  SmoothAppear,
  fadeInVariants,
  hoverVariants,
} from "@/app/utils/animation-utils";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "@/app/fonts";

const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className={`text-4xl font-bold my-4 ${scholarRegular.className}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`text-3xl font-semibold my-3 ${manropeSemiBold.className}`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`text-2xl font-semibold my-2 ${manropeSemiBold.className}`}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className={`text-xl font-semibold my-2 ${manropeSemiBold.className}`}>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`border-l-4 border-citius-orange pl-4 my-4 ${manropeRegular.className}`}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className={`my-3 ${manropeRegular.className}`}>{children}</p>
    ),
  },
};

export default function PostClient({ post }) {
  if (!post) {
    return (
      <SmoothAppear direction="up">
        <main className="container mx-auto min-h-screen max-w-4xl pt-16 p-8 flex flex-col gap-4">
          <Link
            href="/blog"
            className={`hover:underline text-citius-blue ${manropeSemiBold.className}`}
          >
            ← Back to posts
          </Link>
          <motion.div
            className="text-center py-12"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1
              className={`text-2xl font-bold mb-4 text-brand-dark ${scholarRegular.className}`}
            >
              Post not found
            </h1>
            <p className={`text-brand-muted ${manropeRegular.className}`}>
              The post you&apos;re looking for doesn&apos;t exist.
            </p>
          </motion.div>
        </main>
      </SmoothAppear>
    );
  }

  return (
    <SmoothAppear direction="up">
      <Script id="post-json-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post._updatedAt || post.publishedAt,
          author: post.author?.name
            ? { "@type": "Person", name: post.author.name }
            : undefined,
          image: post.imageUrl || undefined,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://nishitsharma.vercel.app/blog/${post.slug?.current || ""}`,
          },
        })}
      </Script>
      <Script id="breadcrumbs-json-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Blog",
              item: "https://nishitsharma.vercel.app/blog",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: post.title,
              item: `https://nishitsharma.vercel.app/blog/${post.slug?.current || ""}`,
            },
          ],
        })}
      </Script>
      <main className="container mx-auto min-h-screen max-w-4xl pt-22 p-8">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 hover:underline text-citius-blue font-medium transition-colors ${manropeSemiBold.className}`}
          >
            ← Back to posts
          </Link>
        </motion.div>

        <motion.article
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <motion.header className="space-y-6" variants={fadeInVariants}>
            <h1
              className={`text-5xl md:text-6xl font-bold text-brand-dark leading-tight ${scholarRegular.className}`}
            >
              {post.title}
            </h1>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <motion.span
                    key={category._id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 bg-citius-orange/10 text-citius-orange text-sm font-medium rounded-full border border-citius-orange/20 hover:bg-citius-orange/20 transition-colors cursor-pointer ${manropeSemiBold.className}`}
                  >
                    {category.title}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.header>

          <motion.div
            className="bg-brand-light rounded-xl p-6 border border-brand-border hover:scale-102 transition-transform duration-300"
            variants={fadeInVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.authorImageUrl && (
                    <Image
                      src={post.authorImageUrl || "/placeholder.svg"}
                      alt={post.author.name || "Author"}
                      className="w-12 h-12 rounded-full object-cover border-2 border-citius-blue shadow-sm"
                      width="48"
                      height="48"
                    />
                  )}
                  <div>
                    <p
                      className={`font-semibold text-brand-dark ${manropeSemiBold.className}`}
                    >
                      {post.author.name || "Unknown Author"}
                    </p>
                    <p
                      className={`text-sm text-brand-muted ${manropeRegular.className}`}
                    >
                      Author
                    </p>
                  </div>
                </div>
              )}

              <div
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-brand-muted sm:ml-auto ${manropeRegular.className}`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">Published:</span>
                  <time dateTime={post.publishedAt} className="text-brand-dark">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                {post._updatedAt && post._updatedAt !== post._createdAt && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Updated:</span>
                    <time
                      dateTime={post._updatedAt}
                      className="text-brand-dark"
                    >
                      {new Date(post._updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                )}
              </div>
            </div>

            {post.author?.bio && (
              <div className="mt-4 pt-4 border-t border-brand-border">
                <div
                  className={`text-sm text-brand-muted ${manropeRegular.className}`}
                >
                  <PortableText value={post.author.bio} />
                </div>
              </div>
            )}
          </motion.div>

          {post.imageUrl && (
            <motion.div
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-brand-border shadow-xl hover:scale-102 transition-transform duration-300"
              variants={fadeInVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={post.imageUrl}
                alt={post.title || "Post image"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </motion.div>
          )}

          <motion.div
            className={`prose prose-xl text-brand-dark max-w-none prose-headings:text-brand-dark prose-p:text-brand-dark prose-p:leading-relaxed prose-strong:text-brand-dark prose-a:text-citius-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-citius-orange prose-blockquote:bg-brand-light prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-code:bg-brand-light prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-brand-dark prose-pre:bg-brand-dark prose-pre:border prose-pre:border-brand-border ${manropeRegular.className}`}
            variants={fadeInVariants}
          >
            {Array.isArray(post.body) && post.body.length > 0 ? (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            ) : (
              <div className="text-center py-12 bg-brand-light rounded-xl border border-brand-border">
                <p
                  className={`text-brand-muted italic text-lg ${manropeRegular.className}`}
                >
                  No content available.
                </p>
              </div>
            )}
          </motion.div>

          <motion.footer
            className="pt-8 mt-12 border-t border-brand-border"
            variants={fadeInVariants}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div
                className={`text-sm text-brand-muted ${manropeRegular.className}`}
              >
                <p>
                  Published on{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/blog"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-citius-blue text-white rounded-lg hover:bg-citius-blue/90 transition-colors font-medium ${manropeSemiBold.className}`}
                >
                  ← Back to all posts
                </Link>
              </motion.div>
            </div>
          </motion.footer>
        </motion.article>
      </main>
    </SmoothAppear>
  );
}
