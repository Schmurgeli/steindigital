import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "steindigital",
  description: "Digital solutions for modern businesses",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicons/favicon-196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    other: [
      { url: "/favicons/mstile-70x70.png", sizes: "70x70", type: "image/png" },
      { url: "/favicons/mstile-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/mstile-150x150.png", sizes: "150x150", type: "image/png" },
      { url: "/favicons/mstile-310x150.png", sizes: "310x150", type: "image/png" },
      { url: "/favicons/mstile-310x310.png", sizes: "310x310", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
