import PageHero from "@/components/common/PageHero";

export default function ResourcePage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PageHero 
        title="Resources & Insights" 
        subtitle="Latest articles, guides, and research from our AI experts" 
      />
      <div className="py-20 text-center text-gray-500">
        Page content will go here mapping to the Services layout pattern.
      </div>
    </main>
  );
}
