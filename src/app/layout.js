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
    "Portfolio of Nishit Sharma — full-stack engineer building CRM, e-commerce, operations tooling, and technical education programs for real users.",
  keywords: [
    "Nishit Sharma",
    "software engineer",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Motion",
    "Sanity CMS",
    "Convex",
    "BetterAuth",
    "Prisma",
    "Stripe",
    "Razorpay",
    "travel tech",
    "e-commerce",
    "CRM",
    "operations tooling",
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
