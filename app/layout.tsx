import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import SpaceCursor from "@/components/SpaceCursor";

const author = localFont({
  src: [
    {
      path: "../public/fonts/Author_Complete/Author-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Author_Complete/Author-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Author_Complete/Author-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Author_Complete/Author-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nightbyte",
  description: "Turning your vision into a reality.",
  keywords: [
    "nightbyte",
    "dev",
    "marketing",
    "agency",
    "design",
    "video editing",
  ],
  icons: {
    icon: [{ url: "/assets/static/nl.jpg", type: "image/jpg" }],
  },

  openGraph: {
    title: "Nightbyte",
    description: "Turning your vision into a reality.",
    url: "https://nightbyte.space",
    siteName: "Nightbyte",
    images: [
      {
        url: "/assets/static/nl-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nightbyte",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${author.className} antialiased`}>
        <SpaceCursor />
        {children}
        <div className="max-w-7xl mx-auto px-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
