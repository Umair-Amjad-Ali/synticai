"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LifeCTA() {
  return (
    <section className="w-full relative z-20 py-20 bg-dark-bg overflow-hidden border-t border-t-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[200px] bg-brand/10 blur-[80px] pointer-events-none" />

      {/* Infinite Animated Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden flex whitespace-nowrap opacity-5 pointer-events-none select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 text-[120px] sm:text-[180px] md:text-[240px] font-black uppercase italic tracking-tighter"
        >
          <span className="text-white">Build the future.</span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>Democratize AI.</span>
          <span className="text-white">Build the future.</span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>Democratize AI.</span>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex justify-center">
        
        {/* Compact Glassmorphism Capsule */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-4xl rounded-[32px] md:rounded-[48px] bg-dark-bg/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8"
        >
          {/* Subtle inner animated ring */}
          <div className="absolute -inset-px rounded-[32px] md:rounded-[48px] border border-transparent bg-linear-to-r from-transparent via-brand-light/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mask-[linear-gradient(black,black)] mask-exclude" />

          {/* Left Text */}
          <div className="text-center md:text-left flex-1 max-w-lg">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-brand text-[11px] font-bold tracking-[0.2em] uppercase">Careers at SynticAI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Ready to leave your mark?
            </h2>
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
              We're assembling a global team of visionaries. Bring your passion, and let's engineer the future of enterprise AI together.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <Link 
              href="/company/careers"
              className="group/btn relative inline-flex items-center justify-center"
            >
              {/* Button Shadow */}
              <div className="absolute inset-0 brand-gradient rounded-2xl blur-md opacity-40 group-hover/btn:opacity-80 transition-opacity duration-300" />
              
              <div className="relative flex items-center justify-between gap-6 px-8 py-5 bg-dark-bg border border-white/10 group-hover/btn:border-brand/50 transition-colors duration-300 text-white font-bold text-base rounded-2xl overflow-hidden shadow-2xl">
                 <span className="relative z-10 group-hover/btn:text-brand transition-colors">View Open Roles</span>
                 
                 <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand to-brand-dark flex items-center justify-center relative z-10 group-hover/btn:scale-110 transition-transform duration-300 shadow-inner">
                    <ArrowRight className="w-5 h-5 text-white" />
                 </div>
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
