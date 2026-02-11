import ContactClient from "./page.client";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Nishit Sharma for freelance opportunities, collaborations, or any inquiries about web development and AI projects.",
  keywords: ["contact", "Nishit Sharma", "freelance", "collaboration", "web development", "AI projects", "hire developer"],
  alternates: {
    canonical: "https://nishitsharma.vercel.app/contact",
  },
  openGraph: {
    type: "website",
    url: "https://nishitsharma.vercel.app/contact",
    title: "Contact | Nishit Sharma",
    description: "Get in touch with Nishit Sharma for freelance opportunities, collaborations, or any inquiries about web development and AI projects.",
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
    title: "Contact | Nishit Sharma",
    description: "Get in touch with Nishit Sharma for freelance opportunities, collaborations, or web development inquiries.",
    images: ["/NishitSharma.webp"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
