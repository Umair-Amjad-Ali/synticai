"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  const newLocal = "text-brand text-[8px] sm:text-[11px] font-bold uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-2";
  return (
    <div className="relative w-full min-h-screen flex items-center bg-dark-bg overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full xl:pr-10"
          >
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 mb-8 max-w-full">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
              <span className="text-brand font-semibold uppercase tracking-[0.15em] text-[11px]">
                The Intelligence Architects
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
              Forging Intelligent
              <br />
              Engines.
            </h1>

            <div className="flex gap-5 mb-10">
              <div className="w-[4px] bg-brand rounded-full shrink-0" />
              <p className="text-lg text-gray-400 leading-relaxed">
                We are a premier engineering collective democratizing highly advanced,
                enterprise-grade AI and custom software development across the globe.
              </p>
            </div>

            <div className="grid grid-cols-3 w-full border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-2 sm:px-6 py-3 sm:py-5 bg-white/5">
                <h4 className="text-xl sm:text-3xl font-black text-white leading-none">2019</h4>
                <p className="text-brand text-[8px] sm:text-[11px] font-bold uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-2">Established</p>
              </div>
              <div className="px-2 sm:px-6 py-3 sm:py-5 bg-white/5 border-x border-white/10">
                <h4 className="text-xl sm:text-3xl font-black text-white leading-none">50+</h4>
                <p className={newLocal}>Products</p>
              </div>
              <div className="px-2 sm:px-6 py-3 sm:py-5 bg-white/5">
                <h4 className="text-xl sm:text-3xl font-black text-white leading-none">100%</h4>
                <p className="text-brand text-[8px] sm:text-[11px] font-bold uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-2">In-House</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex flex-col mt-8 lg:mt-0"
          >
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="SynticAI Team Collaboration"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-dark-bg/20" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full mt-4 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand/20 flex items-center justify-center text-brand">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Relentless Innovation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-0.5">
                    Every product we ship is designed to disrupt the status quo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
