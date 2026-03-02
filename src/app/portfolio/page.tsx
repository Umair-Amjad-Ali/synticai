import PageHero from "@/components/PageHero";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PageHero 
        title="Our Portfolio" 
        subtitle="Explore our successful AI implementations and case studies" 
      />
      <div className="py-20 text-center text-gray-500">
        Page content will go here mapping to the Services layout pattern.
      </div>
    </main>
  );
}
