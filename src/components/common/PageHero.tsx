"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ActionButton from "./ActionButton";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  // Format the title dynamically
  const titleParts = title.split(' ');
  const lastWord = titleParts.pop();
  const firstPart = titleParts.join(' ');

  const handleScroll = () => {
    // Scroll down by 80% of the viewport height smoothly
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-dark-bg pt-32 pb-20" style={{ height: 'calc(100vh - 0rem)' }}>
      {/* --- UNIQUE BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        
        {/* Soft radial glow on the right side */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        {/* Soft radial glow on the left side */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

        {/* Animated Architectural Lines / Circuits */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Top Left Line */}
            <motion.path 
              d="M-100,200 L200,200 L300,300 L600,300" 
              fill="none" 
              stroke="url(#gradient-line-1)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            {/* Bottom Right Line */}
            <motion.path 
              d="M1200,800 L800,800 L700,600 L300,600" 
              fill="none" 
              stroke="url(#gradient-line-2)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Vertical Accent Line */}
            <motion.path 
              d="M750,-100 L750,150 L850,250 L850,1000" 
              fill="none" 
              stroke="url(#gradient-line-1)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
            />

            <defs>
              <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="gradient-line-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dotted Grid Accent Frame (Left) */}
        <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-2/3 w-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[8px_8px]" 
             style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} />
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-8 px-6 lg:px-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 w-full text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px bg-primary" />
            <span className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">SynticAI Global</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight"
            >
              <span className="text-white">
                {firstPart}{' '}
              </span>
              <br className="hidden md:block" />
              {/* Dynamic Last Word rendering */}
              <span className="relative inline-block mt-2 md:mt-4">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400 font-bold">
                  {lastWord}
                </span>
                {/* Subtle animated underline */}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary/50 to-transparent origin-left rounded-full"
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light border-l border-white/10 pl-6 ml-1"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link href="/contact">
              <ActionButton>
                Let's Talk Business
              </ActionButton>
            </Link>
            
            {/* Secondary Action - Scrolls to next section */}
            <div 
              onClick={handleScroll}
              className="hidden sm:flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <svg className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Scroll to explore</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Abstract UI Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex flex-1 justify-end relative h-[420px]"
        >
          {/* Back Card - AI Stats */}
          <div className="absolute right-24 top-1/4 -translate-y-1/2 w-64 h-64 rounded-2xl bg-blue-500/2 border border-blue-400/20 backdrop-blur-md p-6 -rotate-6 z-10 flex flex-col justify-between shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center w-full">
              <span className="text-xs uppercase tracking-widest text-blue-300/80 font-medium">System Core</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
            
            {/* Fake Data Bars */}
            <div className="space-y-4">
              {[70, 45, 90].map((width, idx) => (
                <div key={idx} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + idx * 0.2, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-blue-600 to-primary rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/30 truncate" />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="text-left mt-4 border-t border-white/5 pt-4">
              <div className="text-xl font-bold text-white tracking-tight">99.9%</div>
              <div className="text-xs text-blue-200/60 uppercase tracking-wider">Uptime SLA</div>
            </div>
          </div>

          {/* Front Main Card - "Scanning" UI */}
          <div className="absolute right-8 top-[60%] -translate-y-1/2 w-72 h-[320px] rounded-2xl bg-dark-bg/80 border border-white/10 backdrop-blur-xl p-6 flex flex-col transform rotate-3 hover:translate-y-[-10px] hover:rotate-0 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-700 ease-out z-20 group">
            
            {/* macOS styled window dots */}
            <div className="w-full flex items-center justify-between opacity-50 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">Syntic_Engine</div>
            </div>

            {/* Glowing UI ring */}
            <div className="relative flex-1 w-full flex items-center justify-center my-4">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:bg-primary/40 transition-colors duration-500" />
              
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                <motion.circle 
                  cx="64" cy="64" r="50" 
                  fill="none" 
                  stroke="url(#gradient-ring)" 
                  strokeWidth="4"
                  strokeDasharray="314"
                  initial={{ strokeDashoffset: 314 }}
                  animate={{ strokeDashoffset: [314, 0, 314] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  strokeLinecap="round"
                />
                <defs>
                   <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#3B82F6" />
                     <stop offset="100%" stopColor="#8B5CF6" />
                   </linearGradient>
                </defs>
              </svg>
              
              {/* Center icon */}
              <div className="absolute flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </motion.svg>
              </div>
            </div>

            {/* Scanning line effect */}
            <div className="w-full h-1/3 bg-linear-to-t from-primary/10 to-transparent rounded-lg relative overflow-hidden mt-auto border border-white/5">
               <motion.div 
                 animate={{ y: [0, -40, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/20 to-transparent skew-x-12 translate-x-[-150%]"
               />
               <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end border-t border-white/10 mt-4 pt-2">
                 <div className="space-y-1">
                   <div className="h-1 w-12 bg-white/20 rounded-full" />
                   <div className="h-1 w-8 bg-white/10 rounded-full" />
                 </div>
                 <div className="text-[10px] text-primary/80 font-mono">ACTIVE</div>
               </div>
            </div>

          </div>

        </motion.div>

      </div>

      {/* --- BOTTOM FADE MASK --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-dark-bg to-transparent z-30 pointer-events-none" />
    </div>
  );
}
