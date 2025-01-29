"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { SmoothAppear, fadeInVariants } from "./utils/animation-utils";
import { NavLink, headerBlur } from "./utils/page-utils";

import "./globals.css";

import GithubIcon from "./static/Github.png";
import InstagramIcon from "./static/instagram.png";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-auto">
      <SmoothAppear direction="down" delay={4}>
        <motion.header
          style={{
            backdropFilter: `blur(${headerBlur}px)`,
          }}
          className="relative shadow-md bg-black-500/80"
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
      </SmoothAppear>
    </div>
  );
}

function Footer() {
  return (
    <SmoothAppear delay={2.5}>
      <footer className="bg-white-500">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <NavLink href="/">
              <span className="text-black-500">Nishit Sharma</span>
            </NavLink>
            <nav className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Nishit-Sharma"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={GithubIcon} alt="Github" width={24} height={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/nishit.sharma13/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </motion.a>
            </nav>
          </div>
        </div>
      </footer>
    </SmoothAppear>
  );
}

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={fadeInVariants}>
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
