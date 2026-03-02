import PageHero from "@/components/PageHero";

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
