"use client";

import LifeHero from "@/components/company/life/LifeHero";
import LifeTicker from "@/components/company/life/LifeTicker";
import LifeCultureGrid from "@/components/company/life/LifeCultureGrid";
import LifePhotoGrid from "@/components/company/life/LifePhotoGrid";
import LifeVoices from "@/components/company/life/LifeVoices";
import LifePerks from "@/components/company/life/LifePerks";
import LifeCTA from "@/components/company/life/LifeCTA";

export default function LifeAtSynticAIPage() {
  return (
    <main className="min-h-screen bg-dark-bg overflow-x-hidden relative">
      <div className="bg-white">
        <LifeHero />
        <LifeTicker />
      </div>

      <div className="w-full relative z-20 bg-white">
        <LifeCultureGrid />
        <LifePhotoGrid />
        <LifeVoices />
        <LifePerks />
        <LifeCTA />
      </div>
    </main>
  );
}
