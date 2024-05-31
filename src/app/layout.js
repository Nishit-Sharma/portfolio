import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

import GithubIcon from "./static/Github.png";
import InstagramIcon from "./static/instagram.png";
import TwitterIcon from "./static/twitter.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nishit Sharma's Portfolio",
  description: "Nishit Sharma's Portfolio",
};

const styles = {
  header: {
    backgroundColor: "#333333",
  },
};

export function Header() {
  return (
    <header className="static mx-auto shadow-md bg-jet">
      <div className="container flex items-center justify-between w-auto h-16 px-4 mx-auto">
        <div className="object-center rounded-lg hover:bg-jet-dark">
          <Link href="/">
            <h1 className="text-lg font-semibold px-1.5">Nishit Sharma</h1>
          </Link>
        </div>
        <nav className="flex justify-end space-x-4">
          <div className="object-center mx-auto rounded-lg hover:bg-jet-dark">
            <a href="/about" className="text-base px-1.5">
              About
            </a>
          </div>
          <div className="object-center mx-auto rounded-lg hover:bg-jet-dark">
            <a href="/projects" className="text-base px-1.5">
              Projects
            </a>
          </div>
          <div className="object-center mx-auto rounded-lg hover:bg-jet-dark">
            <a href="/Contact" className="text-base px-1.5">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

// DO THE SAME FOR THIS
export function Footer() {
  return (
    <footer className="relative top-0 left-0 right-0 z-10 shadow-md bg-cream">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto text-jet-default">
        <Link href="/">
          <h1 className="text-lg font-semibold px-1.5">Nishit Sharma</h1>
        </Link>
        <nav className="flex space-x-4">
          <Image src={GithubIcon} alt="Github" width={24} height={24} />
          <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
          <Image src={TwitterIcon} alt="Twitter" width={24} height={24} />
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
