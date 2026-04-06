import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources & Case Studies",
  description:
    "Explore SynticAI's library of AI industry articles, insights, and case studies. Stay up to date with the latest trends in artificial intelligence and enterprise software.",
  alternates: { canonical: "https://synticai.com/resource" },
  openGraph: {
    title: "SynticAI Resources – AI Articles & Case Studies",
    description:
      "Explore SynticAI's library of AI industry articles, insights, and case studies.",
    url: "https://synticai.com/resource",
  },
};

export default function ResourceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
