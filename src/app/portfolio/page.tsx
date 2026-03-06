import PortfolioSection from "@/components/portfolio/PortfolioSection";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* Normalized Hero Header */}
      <section className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#0A051E] mb-6">
            <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
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
