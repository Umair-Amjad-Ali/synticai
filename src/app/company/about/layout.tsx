import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SynticAI's mission, story, core values, and the expert team behind our enterprise-grade AI and software development solutions.",
  alternates: { canonical: "https://synticai.com/company/about" },
  openGraph: {
    title: "About SynticAI – Our Mission & Team",
    description:
      "Learn about SynticAI's mission, story, core values, and the expert team behind our enterprise-grade AI and software development solutions.",
    url: "https://synticai.com/company/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
