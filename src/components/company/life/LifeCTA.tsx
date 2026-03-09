"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LifeCTA() {
  return (
    <section className="w-full relative z-20 py-32 bg-[#060B18] overflow-hidden border-t border-t-white/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-bl from-[#1C75BC]/10 to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#45d1f5]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#45d1f5] text-sm font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Join Our Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to build <br/>
            the <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1C75BC] to-[#45d1f5]">future</span>?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            We are always looking for visionary engineers, designers, and thinkers to help us democratize enterprise AI. Add your spark to SynticAI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/careers"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-[#1C75BC] to-[#45d1f5] text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(28,117,188,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View Open Roles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-4/3 rounded-[40px] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 group">
             <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
                alt="Working at SynticAI"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060B18] to-transparent pointer-events-none" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#060B18] overflow-hidden relative">
                   <Image 
                     src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop`} 
                     alt="Team" 
                     fill 
                     className="object-cover"
                   />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-bold">100+ Innovators</p>
              <p className="text-[#45d1f5] text-sm font-semibold tracking-widest uppercase">Global Team</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
