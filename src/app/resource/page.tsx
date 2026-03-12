"use client";

import { useState } from "react";
import { articles, caseStudies } from "@/data/resourceData";
import ResourceHero from "@/components/resource/ResourceHero";
import ArticlesGrid from "@/components/resource/ArticlesGrid";
import CaseStudiesSection from "@/components/resource/CaseStudiesSection";
import NewsletterCTA from "@/components/resource/NewsletterCTA";

export default function ResourcePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="min-h-screen bg-[#0A051E] font-sans pt-[70px] selection:bg-[#45d1f5]/20">
      <ResourceHero search={search} onSearch={setSearch} />
      <ArticlesGrid
        articles={articles}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={search}
      />
      <CaseStudiesSection caseStudies={caseStudies} />
      <NewsletterCTA />
    </main>
  );
}
