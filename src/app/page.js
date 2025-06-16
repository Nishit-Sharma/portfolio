import Script from "next/script";
import dynamic from "next/dynamic";

const DynamicPageClient = dynamic(() => import("./page.client"), {
  loading: () => <p>Loading...</p>,
});

export const metadata = {
  metadataBase: new URL("https://nishitsharma.vercel.app"),
  title: {
    default: "Nishit Sharma | Student, Developer & Robotics Enthusiast",
    template: "%s | Nishit Sharma",
  },
  description:
    "Portfolio of Nishit Sharma - A top-performing student at Morris County School of Technology, skilled in Java, Python, C++, and robotics. View projects in React, Next.js, game design, and FRC robotics.",
  keywords: [
    "Nishit Sharma",
    "web development",
    "robotics",
    "portfolio",
    "React",
    "Next.js",
    "Python",
    "Java",
    "C++",
    "FRC",
    "game design",
    "Morris County School of Technology",
    "Tech Devils",
    "student developer",
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
    title: "Nishit Sharma | Student, Developer & Robotics Enthusiast",
    description:
      "Portfolio of Nishit Sharma - A top-performing student at Morris County School of Technology, skilled in Java, Python, C++, and robotics.",
    siteName: "Nishit Sharma's Portfolio",
    images: [
      {
        url: "/static/NishitSharma.png",
        width: 1200,
        height: 630,
        alt: "Nishit Sharma - Student Developer and Robotics Enthusiast",
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nishitsharma.vercel.app",
    languages: {
      "en-US": "https://nishitsharma.vercel.app",
    },
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
