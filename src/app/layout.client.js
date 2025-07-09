"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SmoothAppear, fadeInVariants } from "./utils/animation-utils";
import { NavLink } from "./utils/page-utils";
import { useState, useEffect } from "react";

import "./globals.css";

import GithubIcon from "./static/Github.png";
import InstagramIcon from "./static/instagram.png";
import LinkedInIcon from "./static/linkedin.png";

function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        header ? "bg-black-500/80 backdrop-blur-2xl" : ""
      }`}
    >
      <div
        className={`container flex items-center justify-between px-4 mx-auto transition-all duration-300 ${
          header ? "py-4" : "py-6"
        }`}
      >
        <SmoothAppear direction="down" delay={1.85}>
          <div className="flex items-baseline space-x-2">
            <NavLink href="/">Nishit Sharma</NavLink>
          </div>
        </SmoothAppear>
        <SmoothAppear direction="down" delay={1.85}>
          <nav className="flex space-x-6">
            {/* <NavLink href="/blog">Blog</NavLink> */}
            {/* <NavLink href="/#projects">Projects</NavLink> */}
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </SmoothAppear>
      </div>
    </motion.header>
  );
}

function Footer() {
  return (
    <SmoothAppear direction="up">
      <footer className="bg-white-500 text-black-500">
        <div className="container px-4 mx-auto ">
          <div className="flex items-center justify-between h-20">
            <NavLink href="/">
              <span className="text-black-500">Nishit Sharma</span>
            </NavLink>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/nishit-sharma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={GithubIcon} alt="Github" width={28} height={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/nishit.sharma13/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/nishit-sharma13/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SmoothAppear>
  );
}

export default function ClientLayout({ children }) {
  return (
    <main>
      <Header />
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </main>
  );
}
