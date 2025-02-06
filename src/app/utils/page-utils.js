// biome-ignore lint/suspicious/noRedundantUseStrict: It says that it is redundant even though use strict is in the code once
"use strict";

import localFont from "next/font/local";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./loading-spinner";
import { SmoothAppear, hoverVariants, fadeInVariants } from "./animation-utils";

export const scholarRegular = localFont({ 
  src: "./fonts/scholar-regular.otf",
  display: 'swap',
  preload: true,
  variable: '--font-scholar'
});

export const scholarItalic = localFont({ 
  src: "./fonts/scholar-italic.otf",
  display: 'swap',
  preload: true,
  variable: '--font-scholar-italic'
});

export const manropeRegular = localFont({ 
  src: "./fonts/manrope-regular.otf",
  display: 'swap',
  preload: true,
  variable: '--font-manrope'
});

export const manropeSemiBold = localFont({ 
  src: "./fonts/manrope-semibold.otf",
  display: 'swap',
  preload: true,
  variable: '--font-manrope-bold'
});

export const headerBlur = 8;

function checkMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1025;
  }
}

export const nameDirection = checkMobile() ? "right" : "up";
export const footerDelay = checkMobile() ? 2.5 : 0;

export const NavLink = ({ href, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="rounded-lg"
  >
    <Link href={href}>
      <span
        className={`text-lg font-semibold px-1.5 ${manropeSemiBold.className}`}
      >
        {children}
      </span>
    </Link>
  </motion.div>
);

export const LazyLoadWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSpinner key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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

export const IconButton = ({ src, alt, onClick, 'aria-label': ariaLabel, 'aria-pressed': ariaPressed }) => (
  <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={hoverVariants}
    onClick={onClick}
    className="container w-auto px-5 py-6 mx-10 text-center shadow-md cursor-pointer bg-white-500 rounded-3xl"
    role="button"
    tabIndex={0}
    aria-label={ariaLabel}
    aria-pressed={ariaPressed}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
  >
    <Image src={src} alt={alt} width={24} height={24} />
  </motion.div>
);

export const ProjectCard = ({ title, description, onClick }) => (
  <motion.div
    variants={{ ...hoverVariants, ...fadeInVariants }}
    whileHover="hover"
    whileTap="tap"
    className="container px-10 py-8 mx-5 text-left shadow-md rounded-3xl bg-black-600 max-w-md"
    onClick={onClick}
  >
    <h2 className={`text-2xl mb-4 tracking-tight ${manropeSemiBold.className}`}>{title}</h2>
    <p className={`leading-relaxed ${manropeRegular.className}`}>{description}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 mt-6 font-bold text-white rounded-lg bg-white-500/10 hover:bg-white-500/20 ${manropeSemiBold.className}`}
    >
      View Details
    </motion.button>
  </motion.div>
);

export const ProjectModal = ({ isOpen, project, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-black-500"
        onClick={onClose}
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-auto p-10 mx-4 text-center lg:w-6/12 bg-white-500 text-black-500 rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {project}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
