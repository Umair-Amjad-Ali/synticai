"use client";

import AboutHero from "@/components/company/about/AboutHero";
import AboutMission from "@/components/company/about/AboutMission";
import AboutWhyChoose from "@/components/company/about/AboutWhyChoose";
import AboutCoreValues from "@/components/company/about/AboutCoreValues";
import AboutStory from "@/components/company/about/AboutStory";
import AboutTeam from "@/components/company/about/AboutTeam";

export default function AboutUsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />
      <AboutMission />
      <AboutStory />
      <AboutWhyChoose />
      <AboutCoreValues /> 
      <AboutTeam />
    </main>
  );
}
