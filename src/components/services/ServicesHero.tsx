"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, BrainCircuit, LineChart, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  // Floating animation variants
  const floatAnimation1: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-15, 15, -15],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatAnimation2: Variants = {
    initial: { y: 0 },
    animate: {
      y: [15, -15, 15],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
    }
  };

  const floatAnimation3: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#0A051E] pt-20 ">
      {/* Advanced Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-linear-to-b from-[#1C75BC]/20 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-linear-to-tr from-[#45d1f5]/10 to-transparent rounded-full blur-[120px]" />
        
        {/* Premium Grid Pattern Masked */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
        
        {/* Left Content Area */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit mb-8 shadow-[0_0_20px_rgba(28,117,188,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-[#45d1f5]" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Next-Gen Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Empowering the <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#45d1f5] via-[#1C75BC] to-white drop-shadow-[0_0_30px_rgba(69,209,245,0.3)]">
              Digital Era.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
          >
            Comprehensive software development, AI solutions, and digital strategy to transform your vision into an industry-leading reality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link 
              href="#ai-ml"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-[#0A051E] font-bold rounded-full hover:bg-[#45d1f5] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(69,209,245,0.4)]"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Floating Elements Area - The "Innovation Hub" */}
        <div className="lg:col-span-6 relative h-[280px] md:h-[320px] lg:h-[420px] flex items-center justify-center lg:justify-end">
          
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            
            {/* Center Glowing Hub */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-[32px] border-4 border-white/5 bg-[#1C75BC]/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(28,117,188,0.3)] flex items-center justify-center z-20 rotate-12 hover:rotate-0 transition-transform duration-700"
            >
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-[24px] border border-white/20 bg-[#0A051E]/90 backdrop-blur-xl flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <span className="block text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 mb-1">12+</span>
                <span className="block text-[#45d1f5] text-[10px] sm:text-xs font-bold tracking-widest uppercase">Specialties</span>
              </div>
            </motion.div>

            {/* Orbiting / Floating Service Cards */}
            {/* AI Node */}
            <motion.div 
              variants={floatAnimation1}
              initial="initial"
              animate="animate"
              className="absolute top-[5%] left-[0%] md:-left-[5%] z-30 p-3 pr-5 rounded-2xl border border-white/10 bg-[#0A051E]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#1C75BC]/20 flex items-center justify-center shadow-inner">
                <BrainCircuit className="w-5 h-5 text-[#45d1f5]" />
              </div>
              <span className="text-white text-sm font-bold leading-tight">AI & Machine<br/>Learning</span>
            </motion.div>

            {/* Engineering Node */}
            <motion.div 
              variants={floatAnimation2}
              initial="initial"
              animate="animate"
              className="absolute bottom-[10%] left-[5%] md:left-[10%] z-30 p-3 pr-5 rounded-2xl border border-[#45d1f5]/30 bg-[#0A051E]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(69,209,245,0.15)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#45d1f5]/20 flex items-center justify-center shadow-inner">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-sm font-bold leading-tight">Custom<br/>Engineering</span>
            </motion.div>

            {/* Data Node */}
            <motion.div 
              variants={floatAnimation3}
              initial="initial"
              animate="animate"
              className="absolute top-[35%] right-[0%] md:-right-[5%] z-50 p-3 pl-5 rounded-2xl border border-white/10 bg-[#0A051E]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3"
            >
              <span className="text-white text-sm font-bold leading-tight text-right">Data &<br/>Analytics</span>
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#101254]/60 flex items-center justify-center shadow-inner">
                <LineChart className="w-5 h-5 text-[#45d1f5]" />
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>

      {/* Smooth gradient fade to the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-[#0A051E] to-transparent pointer-events-none z-10" />
    </section>
  );
}
