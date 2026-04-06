"use client";

import { industriesData } from "@/data/industriesData";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustrySection from "@/components/industries/IndustrySection";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden w-full">
      <IndustriesHero />

      {industriesData.map((ind, idx) => (
        <IndustrySection key={ind.id} ind={ind} idx={idx} />
      ))}

      <IndustriesCTA />
    </main>
  );
}
