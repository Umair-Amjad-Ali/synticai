import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SynticAI delivers intelligent AI solutions across healthcare, finance, retail, manufacturing, and more. Discover how we're transforming industries worldwide with custom software.",
  alternates: { canonical: "https://synticai.com/industries" },
  openGraph: {
    title: "Industries Transformed by SynticAI",
    description:
      "SynticAI delivers intelligent AI solutions across healthcare, finance, retail, manufacturing, and more.",
    url: "https://synticai.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
