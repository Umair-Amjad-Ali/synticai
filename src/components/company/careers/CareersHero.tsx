"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center 40%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 hover:bg-white/10 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_10px_rgba(28,117,188,1)]" />
          <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
            Join Our Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Build the future of AI
          <br />
          <span className="text-transparent bg-clip-text brand-gradient-text drop-shadow-sm">
            with us.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          We are always looking for passionate people to join our mission. Explore our open roles and find where you fit in.
        </motion.p>
      </div>
    </section>
  );
}
