import { Inter } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicPageClient = dynamic(() => import("./page.client"), {
  loading: () => <p>Loading...</p>,
});

export const metadata = {
  title: "Nishit Sharma's - Portfolio",
  description:
    "Explore the portfolio of Nishit Sharma, a skilled student and robotics enthusiast. View projects in React, Next.js, Python, and FRC robotics.",
  author: "Nishit Sharma",
  siteUrl: "nishitsharma.vercel.app",
  language: "en-US",
  keywords: [
    "Nishit Sharma",
    "web development",
    "robotics",
    "portfolio",
    "React",
    "Next.js",
    "Python",
    "FRC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishitsharma.vercel.app",
    title: "Nishit Sharma - Student & Robotics Enthusiast",
    description:
      "Personal portfolio of Nishit Sharma showcasing web development and robotics projects.",
    images: [
      {
        url: "/static/NishitSharma.png",
        width: 1200,
        height: 630,
        alt: "Nishit Sharma's Portfolio",
      },
    ],
  },
  social: {
    github: "https://github.com/nishit-sharma",
    instagram: "https://www.instagram.com/nishit.sharma13",
    linkedin: "https://www.linkedin.com/in/nishit-sharma13/",
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
          jobTitle: "Student & Robotics Enthusiast",
          description: metadata.description,
        })}
      </Script>
      <main className={inter.className}>
        <DynamicPageClient />
      </main>
    </>
  );
}
