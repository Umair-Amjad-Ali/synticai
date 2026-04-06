import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import StickyFeatureService from "@/components/services/StickyFeatureService";
import ServicesBentoGrid from "@/components/services/ServicesBentoGrid";
import CustomSoftwareSection from "@/components/services/CustomSoftwareSection";
import { servicesTabs } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore SynticAI's full range of services: AI development, custom software, machine learning, NLP, computer vision, chatbots, ChatGPT integration, big data analytics, and DevOps.",
  alternates: { canonical: "https://synticai.com/services" },
  openGraph: {
    title: "AI & Software Development Services – SynticAI",
    description:
      "Explore SynticAI's full range of services: AI development, custom software, machine learning, NLP, computer vision, chatbots, ChatGPT integration, big data analytics, and DevOps.",
    url: "https://synticai.com/services",
  },
};

export default function ServicesPage() {
  // Section 1: Custom Software Development (featured)
  const featuredSoftware = servicesTabs.find(s => s.name === "Custom Software Development");

  // Section 2: AI & Machine Learning
  const featuredAI = servicesTabs.find(s => s.name === "AI Development");
  const featuredML = servicesTabs.find(s => s.name === "Machine & Deep Learning");
  const remainingAIML = servicesTabs.filter(s =>
    ["Natural Language Processing", "Computer Vision"].includes(s.name)
  );

  // Section 3: GenAI & Bots
  const genAIBots = servicesTabs.filter(s =>
    ["AI Chatbot Development", "ChatGPT Integration"].includes(s.name)
  );

  // Section 4: Digital Strategy + Data & Engineering (combined)
  const digitalAndData = servicesTabs.filter(s =>
    ["Digital Marketing", "UI/UX", "Big Data Analytics", "Predictive Modeling", "DevOps"].includes(s.name)
  );

  return (
    <main className="min-h-screen bg-white">

      <div className="bg-dark-bg">
        <ServicesHero />
      </div>

      {/* Section 1: Custom Software Development */}
      <CustomSoftwareSection />

      {/* Section 2: AI & Machine Learning (Dark) */}
      <div id="ai-ml">
        {featuredAI && (
          <StickyFeatureService
            id="ai-development"
            service={featuredAI}
            theme="dark"
            imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
          />
        )}
        {featuredML && (
          <StickyFeatureService
            id="machine-deep-learning"
            service={featuredML}
            theme="light"
            imageSrc="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
          />
        )}
        <ServicesBentoGrid
          id="ai-ml-grid"
          categoryTitle="Core AI & Vision"
          categoryDescription="Unleashing the power of computer vision and natural language processing to automate tasks and extract meaningful insights."
          services={remainingAIML}
          theme="dark"
        />
      </div>

      {/* Section 3: GenAI & Bots (Light) */}
      <ServicesBentoGrid
        id="genai-bots"
        categoryTitle="Generative AI & Chatbots"
        categoryDescription="Transform your customer interactions and operational efficiency with conversational AI and ChatGPT integrations."
        services={genAIBots}
        theme="light"
      />

      {/* Section 4: Digital Strategy (Dark) */}
      <ServicesBentoGrid
        id="digital"
        categoryTitle="Digital Strategy, Data & Design"
        categoryDescription="Crafting visually stunning UI/UX and data-driven marketing campaigns while powering your infrastructure with big data and DevOps."
        services={digitalAndData}
        theme="dark"
      />

    </main>
  );
}
