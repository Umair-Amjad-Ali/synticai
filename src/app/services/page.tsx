import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import ServicesTabs from "@/components/ServicesTabs";
import StatsSection from "@/components/StatsSection";
import IndustriesSection from "@/components/IndustriesSection";
import MethodologySection from "@/components/MethodologySection";
import ClientSolutionsSection from "@/components/ClientSolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import { servicesTabs } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Your Trusted AI Development Company"
        subtitle="We build meaningful AI Healthcare Solutions to shape the future of your business"
      />

      <InfoSection
        title="Drive Unstoppable Business Success Through AI!"
        paragraphs={[
          "Maximize your business potential with our exceptional AI Development Services. Our customer-centric and passionate team of engineers is committed to delivering tailored solutions that exceed your expectations.",
          "We leverage our expertise in machine learning, deep learning, and AI development to deliver exceptional solutions in NLP, computer vision, predictive analytics, generative AI, AI chatbot development, and more.",
          "Our AI-based solutions offer a clear pathway to success, helping businesses improve decision-making, automate operations, save time, and boost profits. Partner with SynticAI – AI Experts in Pakistan, to seamlessly integrate, scale, and access data-driven insights, leading to exceptional business outcomes.",
        ]}
        buttonText="Get A Free Quote"
        imageSrc="/assets/service-business.png"
        imageAlt="AI Development Services"
      />

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
            value: 170, suffix: "+", label: "Happy Clients",
            icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
          },
          {
            value: 200, suffix: "+", label: "Projects Delivered",
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
        industries={industriesData}
      />
      <ClientSolutionsSection />
      <MethodologySection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
