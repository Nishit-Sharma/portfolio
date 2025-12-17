import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "./layout.client";
import "./globals.css";
import { manrope, scholar } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://nishitsharma.vercel.app"),
  title: {
    default: "Nishit Sharma | Software Engineer & Full-Stack Developer",
    template: "%s | Nishit Sharma",
  },
  description:
    "Portfolio of Nishit Sharma — freelance full-stack developer and SWE intern building production-grade web experiences for travel and retail with Next.js, TypeScript, Tailwind, modern auth/payments, and CMS-driven content.",
  keywords: [
    "Nishit Sharma",
    "software engineer",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Motion",
    "Sanity CMS",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "PayPal",
    "travel tech",
    "e-commerce",
    "Stevens Blueprint",
    "Citius Holidays",
  ],
  authors: [{ name: "Nishit Sharma", url: "https://nishitsharma.vercel.app" }],
  creator: "Nishit Sharma",
  publisher: "Nishit Sharma",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: "https://nishitsharma.vercel.app",
    languages: {
      "en-US": "https://nishitsharma.vercel.app",
    },
  },
  verification: {
    google: "meaEsdJTzch5FVrbbHVC9e4UxjYXhddevXhmF_XJypI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${scholar.variable}`}>
      <head>
        <link rel="preconnect" href="https://vercel.com" />
        <meta
          name="google-site-verification"
          content="meaEsdJTzch5FVrbbHVC9e4UxjYXhddevXhmF_XJypI"
        />
      </head>
      <body className="bg-black-500 text-white-500 flex flex-col min-h-screen">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
