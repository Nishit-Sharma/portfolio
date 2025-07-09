"use client";

import localFont from "next/font/local";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./loading-spinner";
import { SmoothAppear, hoverVariants, fadeInVariants } from "./animation-utils";

export const scholarRegular = localFont({
  src: "../static/fonts/scholar-regular.otf",
  display: "swap",
  preload: true,
  variable: "--font-scholar",
});

export const scholarItalic = localFont({
  src: "../static/fonts/scholar-italic.otf",
  display: "swap",
  preload: true,
  variable: "--font-scholar-italic",
});

export const manropeRegular = localFont({
  src: "../static/fonts/manrope-regular.otf",
  display: "swap",
  preload: true,
  variable: "--font-manrope",
});

export const manropeSemiBold = localFont({
  src: "../static/fonts/manrope-semibold.otf",
  display: "swap",
  preload: true,
  variable: "--font-manrope-bold",
});

function checkMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1025;
  }
}

export const nameDirection = checkMobile() ? "up" : "right";

export const NavLink = ({ href, children, scroll }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="rounded-lg"
  >
    <Link href={href} scroll={scroll}>
      <span
        className={`text-lg font-semibold px-1.5 ${manropeSemiBold.className}`}
      >
        {children}
      </span>
    </Link>
  </motion.div>
);

export const InfoCard = ({ children }) => (
  <SmoothAppear>
    <motion.div
      variants={{ ...hoverVariants, ...fadeInVariants }}
      whileHover="hover"
      whileTap="tap"
      className={`container px-10 py-8 mx-auto text-left leading-relaxed shadow-2xl rounded-3xl bg-black-600 w-auto max-w-sm  ${manropeRegular.className}`}
    >
      {children}
    </motion.div>
  </SmoothAppear>
);

export const DocumentViewer = memo(({ src, alt }) =>
  useMemo(
    () => (
      <motion.div className="container w-auto max-w-3xl px-10 py-6 mx-auto text-center shadow-2xl rounded-3xl bg-white-500">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={700}
          priority={true}
          className="mx-auto rounded-lg"
        />
      </motion.div>
    ),
    [src, alt]
  )
);

export const IconButton = ({
  src,
  alt,
  onClick,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
}) => (
  <motion.button
    whileHover="hover"
    whileTap="tap"
    variants={hoverVariants}
    onClick={onClick}
    className="container w-auto px-5 py-6 mx-10 text-center shadow-md cursor-pointer bg-white-500 rounded-3xl"
    tabIndex={0}
    aria-label={ariaLabel}
    aria-pressed={ariaPressed}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}
  >
    <Image src={src} alt={alt} width={24} height={24} />
  </motion.button>
);

export const ProjectCard = ({ title, description, category, onClick }) => (
  <motion.div
    variants={{ ...hoverVariants, ...fadeInVariants }}
    whileHover="hover"
    whileTap="tap"
    className="container h-full px-10 py-8 mx-auto text-left shadow-md rounded-3xl bg-black-600 flex flex-col cursor-pointer"
    onClick={onClick}
  >
    <div className="flex-grow">
      <p className={`text-sm mb-2 text-white-700 ${manropeRegular.className}`}>
        {category}
      </p>
      <h2
        className={`text-2xl mb-4 tracking-tight ${manropeSemiBold.className}`}
      >
        {title}
      </h2>
      <p
        className={`leading-relaxed text-white-800 line-clamp-4 ${manropeRegular.className}`}
      >
        {description}
      </p>
    </div>
    <motion.div
      className={`mt-6 font-bold text-white-500 group-hover:text-white-600 ${manropeSemiBold.className}`}
    >
      View Details &rarr;
    </motion.div>
  </motion.div>
);

export const ProjectModal = ({ isOpen, project, onClose }) => (
  <AnimatePresence>
    {isOpen && project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black-500/80"
        onClick={onClose}
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-full max-w-sm md:max-w-4xl p-8 md:p-8 text-left bg-black-600 text-white-500 rounded-3xl max-h-[80vh] md:max-h-[90vh] overflow-y-auto no-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            <span className="flex-shrink-0 ml-4 px-3 py-1 text-sm rounded-full">
              {project.status}
            </span>
          </div>

          <p className="text-lg text-white-700 mb-8 leading-relaxed">
            {project.overview}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-white-700">
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white-500/10 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Highlight</h2>
            <p className="text-white-700 bg-black-500/50 p-4 rounded-lg border border-white-500/20">
              {project.technicalHighlight}
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
