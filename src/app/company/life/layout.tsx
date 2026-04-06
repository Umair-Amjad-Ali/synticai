import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Life at SynticAI",
  description:
    "Discover what it's like to work at SynticAI. Explore our culture, team perks, and the people behind our AI-first engineering collective.",
  alternates: { canonical: "https://synticai.com/company/life" },
  openGraph: {
    title: "Life at SynticAI – Culture & Team",
    description:
      "Discover what it's like to work at SynticAI. Explore our culture, team perks, and the people behind our AI-first engineering collective.",
    url: "https://synticai.com/company/life",
  },
};

export default function LifeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
