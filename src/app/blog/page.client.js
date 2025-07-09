"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { SmoothAppear, fadeInVariants, hoverVariants } from "../utils/animation-utils";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../utils/page-utils";

export default function BlogClient({ posts }) {
  return (
    <SmoothAppear direction="up">
      <main className="container mx-auto min-h-screen max-w-6xl pt-20 p-8">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <h1 className={`text-5xl md:text-6xl font-bold text-brand-dark mb-4 ${scholarRegular.className}`}>
            Latest Posts
          </h1>
          <p className={`text-xl text-brand-muted max-w-2xl mx-auto ${manropeRegular.className}`}>
            Discover our latest thoughts, insights, and stories from our blog
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {posts.map((post, index) => {
              return (
                <motion.article
                  key={post._id}
                  variants={{...hoverVariants, ...fadeInVariants}}
                  whileHover="hover"
                  whileTap="tap"
                  className="group bg-white rounded-2xl border border-brand-border hover:border-citius-blue/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="block h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-t-2xl relative bg-gray-100 w-full">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title || "Post image"}
                          fill
                          className="w-auto h-auto rounded-t-2xl object-contain"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-citius-blue/10 to-citius-orange/10">
                          <svg
                            className="w-12 h-12 text-brand-muted"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="No image available"
                          >
                            <title>No image available</title>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm text-citius-orange text-sm font-bold rounded-full border border-citius-orange/20 shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <time
                          dateTime={post.publishedAt}
                          className={`text-sm text-brand-muted font-medium ${manropeRegular.className}`}
                        >
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>

                      <h2 className={`text-xl font-bold text-brand-dark group-hover:text-citius-blue transition-colors duration-300 leading-tight flex-grow mb-6 ${manropeSemiBold.className}`}>
                        {post.title}
                      </h2>

                      <div className="pt-4 border-t border-brand-border">
                        <span className={`inline-flex items-center gap-2 text-citius-blue font-medium group-hover:gap-3 transition-all duration-300 ${manropeSemiBold.className}`}>
                          Read more
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Arrow right"
                          >
                            <title>Arrow right</title>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div className="bg-brand-light rounded-2xl border border-brand-border p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-citius-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-citius-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Document icon"
                >
                  <title>Document icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold text-brand-dark mb-2 ${manropeSemiBold.className}`}>
                No posts yet
              </h2>
              <p className={`text-brand-muted ${manropeRegular.className}`}>
                Check back soon for our latest content and insights.
              </p>
            </div>
          </motion.div>
        )}
      </main>
    </SmoothAppear>
  );
} 