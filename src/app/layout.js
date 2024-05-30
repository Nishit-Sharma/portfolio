import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
    <header className="static bg-jet shadow-md w-auto mx-auto">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <div className="rounded-lg hover:bg-jet-dark object-center">
          <h1 className="text-lg font-semibold px-1.5" href="/page.js">
            Nishit Sharma
          </h1>
        </div>
        <nav className="flex space-x-4 justify-end">
          <div className="rounded-lg hover:bg-jet-dark mx-auto object-center">
            <a href="/about" className="text-base px-1.5">
              About
            </a>
          </div>
          <div className="rounded-lg hover:bg-jet-dark mx-auto object-center">
            <a href="/projects" className="text-base px-1.5">
              Projects
            </a>
          </div>
          <div className="rounded-lg hover:bg-jet-dark mx-auto object-center">
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
    <footer className="relative top-0 left-0 right-0 z-10 bg-cream shadow-md">
      <div className="container flex items-center justify-between h-16 mx-auto px-4 text-jet-default">
        <h1 className="text-lg font-semibold" href="/page.js">
          Nishit Sharma
        </h1>
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
