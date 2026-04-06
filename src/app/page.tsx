import PageHero from "@/components/common/PageHero";
import InfoSection from "@/components/common/InfoSection";
import ServicesTabs from "@/components/home/ServicesTabs";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import MethodologySection from "@/components/home/MethodologySection";
import ClientSolutionsSection from "@/components/home/ClientSolutionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import { servicesTabs } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Your Trusted AI Development Company"
        subtitle="We build meaningful AI Solutions to shape the future of your business"
      />

      <InfoSection />

      <ServicesTabs
        sectionTitle="Services We Offer"
        tabs={servicesTabs}
        showButton={true}
        buttonText="Read More"
      />

      <StatsSection
        title="Why Choose SynticAI?"
        subtitle="This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence."
        stats={[
          {
            value: 10, suffix: "+", label: "Years of Experience",
            icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
          },
          {
            value: 100, suffix: "+", label: "Happy Clients",
            icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
          },
          {
            value: 110, suffix: "+", label: "Projects Delivered",
            icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
          },
          {
            value: 4, prefix: "0", label: "Global Connections",
            icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
          },
        ]}
      />
      <IndustriesSection
        title="Industries We Transformed with Innovative Software Solutions"
        subtitle="We are committed to innovating across industries with our custom AI solutions, empowering businesses to thrive in the digital era."
        industries={industriesData.map(({ icon, ...rest }) => rest)}
      />
      <ClientSolutionsSection />
      <MethodologySection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}