import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Salesforce Solutions",
  description:
    "SynticAI provides end-to-end Salesforce consulting, implementation, customization, and AI integration services to supercharge your CRM and business processes.",
  alternates: { canonical: "https://synticai.com/salesforce" },
  openGraph: {
    title: "Salesforce Solutions – SynticAI",
    description:
      "End-to-end Salesforce consulting, implementation, customization, and AI integration services by SynticAI.",
    url: "https://synticai.com/salesforce",
  },
};

export default function GenericPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PageHero 
        title="Your Trusted AI Development Company" 
        subtitle="We build meaningful AI Healthcare Solutions to shape the future of your business" 
      />
      
      {/* Reuse same structural template visually */}
      <div className="py-20 text-center text-gray-500">
        Page content will go here mapping to the Services layout pattern.
      </div>
    </main>
  );
}
