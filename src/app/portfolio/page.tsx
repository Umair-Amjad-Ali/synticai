import type { Metadata } from "next";
import PortfolioSection from "@/components/portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore SynticAI's portfolio of successful AI and software development projects. See how we've transformed businesses across healthcare, finance, retail, and more.",
  alternates: { canonical: "https://synticai.com/portfolio" },
  openGraph: {
    title: "SynticAI Portfolio – AI Projects & Case Studies",
    description:
      "Explore SynticAI's portfolio of successful AI and software development projects across diverse industries worldwide.",
    url: "https://synticai.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* Normalized Hero Header */}
      <section className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-dark-bg mb-6">
            <span className="inline-block border-l-4 border-brand pl-4">
              Our Portfolio & Case Studies
            </span>
          </h1>
          <p className="text-gray-500 text-[13px] md:text-[14px] max-w-3xl leading-relaxed">
            Witness the impact derived from the successful implementation of our AI projects. Explore our extensive portfolio to see how we tackle complex business challenges across diverse industries globally.
          </p>
        </div>
      </section>

      <PortfolioSection />
    </main>
  );
}
