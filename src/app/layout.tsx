import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import JsonLd from "@/components/common/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://synticai.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SynticAI – AI & Custom Software Development Company",
    template: "%s | SynticAI",
  },
  description:
    "SynticAI is a premier AI and custom software development company. We build enterprise-grade AI solutions, machine learning models, chatbots, and intelligent software for businesses worldwide.",
  keywords: [
    "SynticAI",
    "Syntic AI",
    "AI development company",
    "custom software development",
    "machine learning",
    "artificial intelligence",
    "AI chatbot development",
    "ChatGPT integration",
    "enterprise AI solutions",
    "natural language processing",
    "computer vision",
    "big data analytics",
    "DevOps",
  ],
  authors: [{ name: "SynticAI", url: BASE_URL }],
  creator: "SynticAI",
  publisher: "SynticAI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "SynticAI",
    title: "SynticAI – AI & Custom Software Development Company",
    description:
      "We build enterprise-grade AI solutions, machine learning models, chatbots, and intelligent software for businesses worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SynticAI – Forging Intelligent Engines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SynticAI – AI & Custom Software Development Company",
    description:
      "We build enterprise-grade AI solutions, machine learning models, chatbots, and intelligent software for businesses worldwide.",
    images: ["/og-image.png"],
  },
  verification: {
    // Paste your Google Search Console verification code here after you verify
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        {/* Canonical for synticai.agency pointing to synticai.com */}
        <link rel="canonical" href="https://synticai.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
