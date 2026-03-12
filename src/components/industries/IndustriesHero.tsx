"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { industriesData } from "@/data/industriesData";

export default function IndustriesHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-dark-bg pt-28 pb-20 text-center">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-light/25 bg-brand-light/8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-light" />
          <span className="text-brand-light text-[11px] font-bold uppercase tracking-widest">
            6 Verticals. 1 Engineering Partner.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.04] mb-6"
        >
          We Don&apos;t Just Build.
          <br />
          <span className="text-transparent bg-clip-text brand-gradient-text">
            We Transform Industries.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Enterprise‑grade AI and software architectures engineered for the specific operational realities of each vertical we serve.
        </motion.p>

        {/* Quick-jump chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {industriesData.map((ind) => {
            const Icon = ind.icon;
            return (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/8 bg-white/4 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-[11px] font-semibold text-gray-400 hover:text-white"
              >
                <Icon className="w-3 h-3" style={{ color: ind.color }} />
                {ind.name}
              </a>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
