"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/AboutStoryData";
import Image from "next/image";


export default function AboutStory() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full bg-[#f8fafc] pb-20 pt-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">Our Journey</span>
            <div className="w-8 h-px bg-brand" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-bg tracking-tight max-w-lg border-l-4 border-brand pl-4">
            Discover Our Story
          </h2>
          <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed pt-6">
            From a bold idea to a global AI powerhouse. Watch how we&apos;ve evolved, scaled, and consistently delivered excellence over the years.
          </p>
        </motion.div>

        {/* Interactive Accordion Timeline */}
        <div className="flex flex-col lg:flex-row w-full h-[640px] lg:h-[480px] gap-3">
          {timeline.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={item.year}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? "lg:grow-3 grow-3" : "lg:grow grow"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-1000 origin-center ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                
                {/* Dark overlay to ensure text readability */}
                <div 
                  className={`absolute inset-0 bg-linear-to-t transition-opacity duration-700 ${
                    isActive 
                      ? "from-dark-bg/95 via-dark-bg/40 to-transparent opacity-100" 
                      : "from-dark-bg/90 via-dark-bg/30 to-dark-bg/10 opacity-80 group-hover:opacity-70"
                  }`} 
                />

                {/* Vertical Year Text (Visible when NOT active on desktop) */}
                <div 
                  className={`hidden lg:flex absolute inset-0 items-center justify-center transition-all duration-500 delay-150 ${
                    isActive ? "opacity-0 invisible blur-sm scale-90" : "opacity-100 visible blur-0 scale-100"
                  }`}
                >
                  <h3 className="text-white font-black text-4xl -rotate-90 tracking-[0.2em] whitespace-nowrap opacity-50">
                    {item.year}
                  </h3>
                </div>

                {/* Header for collapsed mobile views */}
                <div className={`lg:hidden absolute top-4 left-6 right-6 flex items-center justify-between transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}>
                   <h3 className="text-white font-bold text-xl drop-shadow-md">{item.title}</h3>
                   <span className="text-brand font-black">{item.year}</span>
                </div>

                {/* Content Panel (Bottom aligned) */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end min-h-full pointer-events-none">
                  <div 
                    className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 hidden lg:flex"
                    }`}
                  >
                    
                    {/* Header: Icon + Year */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white shrink-0 shadow-[0_4px_20px_rgba(28,117,188,0.4)]">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-brand font-black text-2xl tracking-widest drop-shadow-md">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-2xl md:text-3xl mb-3 whitespace-nowrap truncate drop-shadow-lg">
                      {item.title}
                    </h3>
                    
                    {/* Description wrapper for smooth height transition */}
                    <div 
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-300 text-[15px] leading-relaxed max-w-md pr-4 pb-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom active state indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-brand transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`} />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
