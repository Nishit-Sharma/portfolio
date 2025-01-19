"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { SmoothReveal, fadeInVariants } from "./utils/animation-utils";
import { useMemo, memo } from "react";

import "./globals.css";

import GithubIcon from "./static/Github.png";
import InstagramIcon from "./static/instagram.png";

const inter = Inter({ subsets: ["latin"] });

const navLinkHover = { scale: 1.05 };
const navLinkTap = { scale: 0.95 };

const NavLink = memo(({ href, children }) => (
  <motion.div
    whileHover={navLinkHover}
    whileTap={navLinkTap}
    className="rounded-lg"
  >
    <Link href={href}>
      <span className="text-lg font-semibold px-1.5">{children}</span>
    </Link>
  </motion.div>
));

function Header() {
  const { scrollY } = useScroll();
  // const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  // const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const headerBlur = 8;

  return (
    <SmoothReveal delay={4}>
      <motion.header
        style={{
          // opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className="sticky top-0 z-50 bg-black-500/80"
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <NavLink href="/">Nishit Sharma</NavLink>
            <nav className="flex space-x-6">
              {/* <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink> */}
            </nav>
          </div>
        </div>
      </motion.header>
    </SmoothReveal>
  );
}

function Footer() {
  const githubHover = useMemo(() => ({ scale: 1.1, rotate: 5 }), []);
  const githubTap = useMemo(() => ({ scale: 0.9 }), []);
  const instagramHover = useMemo(() => ({ scale: 1.1, rotate: -5 }), []);
  const instagramTap = useMemo(() => ({ scale: 0.9 }), []);

  const githubImage = useMemo(() => (
    <Image src={GithubIcon} alt="Github" width={24} height={24} />
  ), []);

  const instagramImage = useMemo(() => (
    <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
  ), []);

  return (
    <SmoothReveal delay={4}>
      <footer className="bg-white-500">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <NavLink href="/">
              <span className="text-black-500">Nishit Sharma</span>
            </NavLink>
            <nav className="flex space-x-4">
              <motion.a
                whileHover={githubHover}
                whileTap={githubTap}
                href="https://github.com/Nishit-Sharma"
                target="_blank"
                rel="noreferrer"
              >
                {githubImage}
              </motion.a>
              <motion.a
                whileHover={instagramHover}
                whileTap={instagramTap}
                href="https://www.instagram.com/nishit.sharma13/"
                target="_blank"
                rel="noreferrer"
              >
                {instagramImage}
              </motion.a>
            </nav>
          </div>
        </div>
      </footer>
    </SmoothReveal>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <motion.main
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  );
}
