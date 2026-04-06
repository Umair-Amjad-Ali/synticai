import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SynticAI. Tell us about your project and we'll respond within 1 business day. Free consultation, no commitment required.",
  alternates: { canonical: "https://synticai.com/contact" },
  openGraph: {
    title: "Contact SynticAI – Let's Build Something Together",
    description:
      "Get in touch with SynticAI. Tell us about your project and we'll respond within 1 business day.",
    url: "https://synticai.com/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
