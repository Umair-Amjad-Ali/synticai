"use client";

import { motion } from "framer-motion";
import ActionButton from "./ActionButton";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#0A051E] pt-20" style={{ height: 'calc(100vh - 0rem)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A051E]/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title.split('Company')[0]}
          {title.includes('Company') && <><br />Company</>}
          {!title.includes('Company') && title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        
        <ActionButton>
          Got Questions? Ask SynticAI
        </ActionButton>
      </div>
    </div>
  );
}
