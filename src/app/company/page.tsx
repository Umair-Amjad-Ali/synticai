import PageHero from "@/components/PageHero";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PageHero 
        title="About SynticAI" 
        subtitle="Meet the team driving unstoppable business success through AI" 
      />
      <div className="py-20 text-center text-gray-500">
        Page content will go here mapping to the Services layout pattern.
      </div>
    </main>
  );
}
