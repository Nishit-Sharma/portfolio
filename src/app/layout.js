import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "./layout.client";
import "./globals.css";
import { manrope, scholar } from "./fonts";

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
