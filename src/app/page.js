import Script from "next/script";
import dynamic from "next/dynamic";
import { projectsData } from "./static/data/projectsData";

const DynamicPageClient = dynamic(() => import("./page.client"), {
  loading: () => <p>Loading...</p>,
});

export const metadata = {
  title: "Home",
  description:
    "Portfolio of Nishit Sharma — full-stack engineer building CRM, e-commerce, operations tooling, and technical education programs for real users.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishitsharma.vercel.app",
    title: "Nishit Sharma | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack engineer building CRM, e-commerce, operations tooling, and tech-for-social-good education programs for real users.",
    siteName: "Nishit Sharma's Portfolio",
    images: [
      {
        url: "/NishitSharma.webp",
        width: 1200,
        height: 630,
        alt: "Nishit Sharma - Software Engineer and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishit Sharma | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack engineer building CRM, e-commerce, operations tooling, and technical education programs.",
    images: ["/NishitSharma.webp"],
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
            "https://github.com/nishit-sharma",
            "https://www.instagram.com/nishit.sharma13",
            "https://www.linkedin.com/in/nishit-sharma13/",
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
