import "./globals.css";
import React from "react";
import { Toaster } from "sonner";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title:
    "Learn Online Free | Beginner to Advanced Programming Tutorials",
  description:
    "Learning Tutorial is a free platform to master Python step by step — from basics to advanced. Practice coding in the built-in Python playground and prepare for web development with upcoming HTML, CSS, JavaScript, and PHP lessons.",
  keywords: [
    "learn python",
    "python tutorial for beginners",
    "python coding practice",
    "interactive python compiler",
    "learn programming online free",
    "web development basics",
    "learn html css javascript",
    "php tutorial for beginners",
    "python course online",
    "Learning Tutorial platform",
  ],
  authors: [{ name: "Learning Tutorial" }],
  openGraph: {
    title: "Learning Tutorial | Learn Python Online Free",
    description:
      "Start your coding journey with Python! Interactive tutorials, code playground, and beginner-friendly lessons. Future updates will include HTML, CSS, JavaScript, and PHP guides.",
    url: "https://your-website-domain.com",
    siteName: "Learning Tutorial",
    images: [
      {
        url: "https://your-website-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learning Tutorial - Learn Python Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Tutorial | Python Programming Made Easy",
    description:
      "Free Python tutorials for beginners and future web developers. Practice live coding and build your programming foundation.",
    images: ["https://your-website-domain.com/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  metadataBase: new URL("https://your-website-domain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
