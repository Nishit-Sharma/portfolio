import Script from "next/script";
import dynamic from "next/dynamic";
import { projectsData } from "./static/data/projectsData";

const DynamicPageClient = dynamic(() => import("./page.client"), {
  loading: () => <p>Loading...</p>,
});

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
    "Pehnava Vibe",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishitsharma.vercel.app",
    title: "Nishit Sharma | Software Engineer & Full-Stack Developer",
    description:
      "Freelance full-stack developer and SWE intern building production web experiences for travel and retail with Next.js, TypeScript, Tailwind, modern auth/payments, and CMS-driven content.",
    siteName: "Nishit Sharma's Portfolio",
    images: [
      {
        url: "/NishitSharma.png",
        width: 1200,
        height: 630,
        alt: "Nishit Sharma - Software Engineer and Full-Stack Developer",
      },
    ],
  },
  social: {
    github: "https://github.com/nishit-sharma",
    instagram: "https://www.instagram.com/nishit.sharma13",
    linkedin: "https://www.linkedin.com/in/nishit-sharma13/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishit Sharma | Software Engineer & Full-Stack Developer",
    description:
      "Freelance full-stack developer and SWE intern shipping production-grade web experiences for travel and retail.",
    images: ["/NishitSharma.png"],
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

export default function Page() {
  return (
    <>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nishit Sharma",
          url: "https://nishitsharma.vercel.app",
          sameAs: [
            metadata.social.github,
            metadata.social.instagram,
            metadata.social.linkedin,
          ],
          jobTitle: "Software Engineer & Full-Stack Developer",
          description: metadata.description,
        })}
      </Script>
      <main>
        <DynamicPageClient projectsData={projectsData} />
      </main>
    </>
  );
}
