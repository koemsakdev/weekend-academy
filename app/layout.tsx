import "./globals.css";
import React from "react";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Academy",
  description: "Weekend Academy is a platform that helps you to learn the basic web technology with the feature inside it that you can run the code inside it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
