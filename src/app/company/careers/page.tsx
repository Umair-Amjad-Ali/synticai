import { Metadata } from "next";
import CareersHero from "@/components/company/careers/CareersHero";
import JobPostings from "@/components/company/careers/JobPostings";
// import ApplicationForm from "@/components/company/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | SynticAI",
  description: "Join us at SynticAI and help build the future of artificial intelligence. Explore our open positions.",
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
