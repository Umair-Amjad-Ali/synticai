import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/PortfolioData";
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all 15 projects so they are pre-rendered at build time
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;

  // Find the matching project by ID
  const project = portfolioProjects.find((p) => p.id === id);

  // If the user navigates to an ID that doesn't exist, show Next.js 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudyLayout project={project} />
    </main>
  );
}
