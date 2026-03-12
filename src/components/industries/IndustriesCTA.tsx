"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="w-full py-20 bg-dark-bg relative overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand/15 rounded-full blur-[90px]" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Sparkles className="w-3 h-3 text-brand-light" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Let&apos;s Build Together
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Don&apos;t see your industry?
          </h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Our engineering methodology adapts to any domain. Let&apos;s discuss how we can solve your specific operational challenges and build your competitive moat.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-dark-bg font-bold rounded-full hover:shadow-[0_0_50px_rgba(69,209,245,0.4)] transition-all duration-300 hover:scale-105 text-sm"
          >
            <span>Let&apos;s Talk About Your Industry</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
