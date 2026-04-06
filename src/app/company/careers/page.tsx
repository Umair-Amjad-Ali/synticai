import { Metadata } from "next";
import CareersHero from "@/components/company/careers/CareersHero";
import JobPostings from "@/components/company/careers/JobPostings";
// import ApplicationForm from "@/components/company/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the SynticAI team and help shape the future of artificial intelligence. Explore open positions in AI development, engineering, and design.",
  alternates: { canonical: "https://synticai.com/company/careers" },
  openGraph: {
    title: "Careers at SynticAI – Join Our AI Team",
    description:
      "Join the SynticAI team and help shape the future of artificial intelligence. Explore open positions in AI development, engineering, and design.",
    url: "https://synticai.com/company/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-dark-bg font-sans selection:bg-brand-light/20 pt-17.5">
      <CareersHero />
      <JobPostings />
      {/* <ApplicationForm /> */}
    </main>
  );
}
