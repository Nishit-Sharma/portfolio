import Script from "next/script";
import dynamic from "next/dynamic";

const DynamicPageClient = dynamic(() => import("./page.client"), {
  loading: () => <p>Loading...</p>,
});

export const metadata = {
  metadataBase: new URL("https://nishitsharma.vercel.app"),
  title: {
    default: "Nishit Sharma's Portfolio",
    template: "%s | Nishit Sharma",
  },
  description:
    "Explore the portfolio of Nishit Sharma, a skilled student and robotics enthusiast. View projects in React, Next.js, Python, and FRC robotics.",
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
  authors: [{ name: "Nishit Sharma" }],
  creator: "Nishit Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishitsharma.vercel.app",
    title: "Nishit Sharma - Student & Robotics Enthusiast",
    description:
      "Personal portfolio of Nishit Sharma showcasing web development and robotics projects.",
    siteName: "Nishit Sharma's Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Nishit Sharma - Student & Robotics Enthusiast",
    description:
      "Personal portfolio of Nishit Sharma showcasing web development and robotics projects.",
    images: ["/static/NishitSharma.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: "https://nishitsharma.vercel.app",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <main>
        <DynamicPageClient />
      </main>
    </>
  );
}
