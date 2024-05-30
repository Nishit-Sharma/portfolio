import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nishit Sharma's Portfolio",
  description: "Nishit Sharma's Portfolio",
};

export function Header() {
  return (
    <header className="relative top-0 left-0 right-0 z-10 bg-jet shadow-md">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <h1 className="text-lg font-semibold" href="/page.js">Nishit Sharma</h1>
        <nav className="flex space-x-4">
          <a href="/about" className="text-sm">
            About
          </a>
          <a href="/projects" className="text-sm">
            Projects
          </a>
          <a href="/contact" className="text-sm">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
