import PageClient from "./page.client";

export const metadata = {
  title: 'Nishit Sharma\'s - Portfolio',
  description: 'Explore the portfolio of Nishit Sharma, a skilled student and robotics enthusiast. View projects in React, Next.js, Python, and FRC robotics.',
  author: 'Nishit Sharma',
  siteUrl: 'nishitsharma.vercel.app',
  language: 'en-US',
  keywords: ['Nishit Sharma', 'web development', 'robotics', 'portfolio', 'React', 'Next.js', 'Python', 'FRC'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishitsharma.vercel.app',
    title: 'Nishit Sharma - Student & Robotics Enthusiast',
    description: 'Personal portfolio of Nishit Sharma showcasing web development and robotics projects.',
    images: [
      {
        url: '/static/NishitSharma.png',
        width: 1200,
        height: 630,
        alt: 'Nishit Sharma\'s Portfolio',
      },
    ],
  },
  social: {
    github: 'https://github.com/nishit-sharma',
    instagram: 'https://www.instagram.com/nishit.sharma13',
    linkedin: 'https://www.linkedin.com/in/nishit-sharma13/',
  }
};

export default function Page() {
  return <PageClient />;
}