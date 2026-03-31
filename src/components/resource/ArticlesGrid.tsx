"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { Article, categories } from "@/data/resourceData";

interface ArticlesGridProps {
  articles: Article[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  search: string;
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const Icon = article.icon;
  return (
    <Link href={`/resource/${article.id}`} className="block h-full">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full flex flex-col rounded-3xl border border-white/5 bg-dark-card hover:bg-[#110B2D] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Uniform top bar */}
      <div
        className="h-[2px] w-full shrink-0 bg-linear-to-r from-brand-light/30 to-transparent"
      />

      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Tag + read time */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-light/15 bg-brand-light/5 text-brand-light/60">
            {article.tag}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-brand-light/10 bg-brand-light/5 mt-0.5">
            <Icon className="w-5 h-5 text-brand-light/60" />
          </div>
          <h3 className="text-sm md:text-base font-bold text-white leading-snug group-hover:text-brand-light transition-colors duration-300">
            {article.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed flex-1 pt-1">{article.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-gray-300">{article.author}</span>
            <span className="text-[10px] text-gray-600">{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-light/80">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export default function ArticlesGrid({
  articles,
  activeCategory,
  onCategoryChange,
  search,
}: ArticlesGridProps) {
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-brand/20 border-brand/50 text-brand-light"
                : "bg-white/3 border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-600 self-center">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <BookOpen className="w-5 h-5 text-brand-light" />
        <h2 className="text-xl md:text-2xl font-extrabold text-white">Latest Articles</h2>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500 text-sm">
          No articles found for &quot;{search}&quot; in &quot;{activeCategory}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
