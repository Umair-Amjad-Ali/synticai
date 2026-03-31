"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface ResourceHeroProps {
  search: string;
  onSearch: (v: string) => void;
}

export default function ResourceHero({ search, onSearch }: ResourceHeroProps) {
  return (
    <section className="relative w-full pt-16 pb-12 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-light" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">Knowledge Hub</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-4"
        >
          Built by Engineers.<br />
          <span className="text-transparent bg-clip-text brand-gradient-text">
            Shared with the World.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Deep dives, case studies, and engineering blueprints from the teams behind 110+ shipped products.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-lg relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search articles, guides, case studies..."
            className="w-full pl-11 pr-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
}
