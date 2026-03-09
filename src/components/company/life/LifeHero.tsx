"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifeHero() {
  return (
    <section className="relative w-full bg-[#0A051E] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-bl from-[#1C75BC]/10 to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#45d1f5]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#45d1f5] animate-pulse" />
            <span className="text-white text-sm font-bold tracking-widest uppercase">The SynticAI Experience</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Work where your <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1C75BC] to-[#101254]">
              best ideas 
            </span> happen.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            We believe that the best products are built by happy, healthy, and inspired teams. Discover a culture built on relentless innovation and genuine human connection.
          </p>
        </motion.div>

        {/* Floating Avatars / Team preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex -space-x-4 mb-4">
            {[
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#0A051E] overflow-hidden relative shadow-lg">
                <Image src={src} alt="Team member" fill className="object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#0A051E] overflow-hidden relative shadow-lg bg-[#1C75BC] flex items-center justify-center">
              <span className="text-white font-bold text-sm">+50</span>
            </div>
          </div>
          <p className="text-[#45d1f5] font-semibold text-sm tracking-widest uppercase">
            Join 50+ Global Innovators
          </p>
        </motion.div>

      </div>
    </section>
  );
}
