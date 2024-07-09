"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

import GithubIcon from "./static/Github.png";
import InstagramIcon from "./static/instagram.png";

const inter = Inter({ subsets: ["latin"] });

const styles = {
  header: {
    backgroundColor: "#333333",
  },
};

export function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [800, 950], [0, 1]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1025);
  }, []);

  return isMobile ? (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 2.5 }}
      whileInView={{ opacity: 1 }}
      className="sticky top-0 z-50 flex items-center justify-between w-auto h-16 px-4 mx-auto shadow-md bg-black-500"
    >
      <div className="object-center rounded-lg hover:bg-black-600">
        <h1 className="text-lg font-semibold px-1.5">Nishit Sharma</h1>
      </div>
      {/* <nav className="flex justify-end space-x-4">
          <div className="object-center mx-auto rounded-lg hover:bg-black-600">
              <a className="text-base px-1.5">
                About
              </a>
            </div>
          <div className="object-center mx-auto rounded-lg hover:bg-black-600">
            <Link href="">
              <h1 className="text-base px-1.5">Projects</h1>
            </Link>
          </div>
          <div className="object-center mx-auto rounded-lg hover:bg-black-600">
              <a className="text-base px-1.5">
                Contact
              </a>
            </div>
        </nav> */}
    </motion.div>
  ) : (
    <motion.div
      style={{ opacity }}
      className="sticky top-0 z-50 flex items-center justify-between w-auto h-16 px-4 mx-auto shadow-md bg-black-500"
    >
      <div className="object-center rounded-lg hover:bg-black-600">
        {/* <Link href="/"> */}
        <h1 className="text-lg font-semibold px-1.5">Nishit Sharma</h1>
        {/* </Link> */}
      </div>
      {/* <nav className="flex justify-end space-x-4">
        <div className="object-center mx-auto rounded-lg hover:bg-black-600">
            <a className="text-base px-1.5">
              About
            </a>
          </div>
        <div className="object-center mx-auto rounded-lg hover:bg-black-600">
          <Link href="">
            <h1 className="text-base px-1.5">Projects</h1>
          </Link>
        </div>
        <div className="object-center mx-auto rounded-lg hover:bg-black-600">
            <a className="text-base px-1.5">
              Contact
            </a>
          </div>
      </nav> */}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative top-0 left-0 right-0 z-10 shadow-md bg-white-500">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto text-black-500">
        <Link href="/">
          <h1 className="text-lg font-semibold px-1.5 text-black-500">
            Nishit Sharma
          </h1>
        </Link>
        <nav className="flex space-x-4">
          <Link href={"https://github.com/Nishit-Sharma"}>
            <Image src={GithubIcon} alt="Github" width={24} height={24} />
          </Link>
          <Link href={"https://www.instagram.com/nishit.sharma13/"}>
            <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
