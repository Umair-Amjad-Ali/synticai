"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ActionButton from "@/components/common/ActionButton";
import Link from "next/link";
import { solutionsData, type SolutionTab } from '@/data/ClientSolutionData';


export default function ClientSolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const activeData = solutionsData[activeTab];

  const handleTabChange = (idx: number) => {
    if (idx !== activeTab && !isAnimating) {
      setActiveTab(idx);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-bg">
            <span className="inline-block border-l-4 border-brand pl-4">
              Our Client-Centric AI Solutions
            </span>
          </h2>
        </motion.div>

        {/* Ultra Modern Floating Card Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10">
          {solutionsData.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(idx)}
                className={`relative px-5 py-2.5 rounded-xl text-[13px] md:text-[14.5px] font-bold transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? "text-white shadow-[0_8px_20px_rgba(28,117,188,0.3)] transform -translate-y-0.5" 
                    : "text-dark-bg bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-px"
                }`}
              >
                {/* Active Background Gradient */}
                {isActive && (
                  <motion.div
                    layoutId="active-card"
                    className="absolute inset-0 brand-gradient"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {/* Small decorative dot for active state */}
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-brand-light shadow-[0_0_8px_#45d1f5]" : "bg-gray-300"}`} />
                  {tab.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content - Using Grid Stacking to prevent height jumps */}
          <div className="relative min-h-[300px]" style={{ display: "grid" }}>
            {solutionsData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <motion.div
                  key={`text-${tab.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onAnimationStart={() => setIsAnimating(true)}
                  onAnimationComplete={() => setIsAnimating(false)}
                  className="flex flex-col"
                  style={{
                    gridArea: "1 / 1",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <h3 className="text-2xl md:text-[24px] font-bold text-dark-bg mb-6 leading-snug">
                    {tab.heading}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                    {tab.description1}
                  </p>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                    {tab.description2}
                  </p>
                  <div>
                    <Link href={tab.link} scroll={true}>
                      <ActionButton className="rounded-md! px-8 shadow-lg shadow-brand/20">
                        Read More
                      </ActionButton>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Layout with floating glassmorphism card */}
          <div className="relative w-full aspect-square md:aspect-4/3 flex items-center justify-center lg:pl-10">
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-linear-to-tr from-brand/20 via-blue-200/20 to-[#e356e8]/20 blur-[60px] md:blur-[80px] rounded-full opacity-60 transform scale-90" />
            
            {solutionsData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <motion.div
                  key={`img-${tab.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
                  style={{
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 0
                  }}
                >
                  {/* Main Image Frame (Glassmorphism outline) */}
                  <div className="relative w-full aspect-4/3 rounded-4xl p-3 md:p-4 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_24px_50px_-12px_rgba(10,5,30,0.1)]">
                    <img 
                      src={tab.image} 
                      alt={tab.tabTitle} 
                      className="w-full h-full object-cover rounded-[1.4rem]"
                    />
                    
                    {/* Floating Tech Badge */}
                    <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-10 bg-white/90 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl p-4 md:p-5 flex items-center gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-brand to-brand-light flex items-center justify-center text-white shadow-inner">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <div className="pr-2">
                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-0.5">{tab.badgeTitle}</p>
                        <p className="text-[14px] md:text-lg font-black text-dark-bg whitespace-nowrap">{tab.badgeSubtitle}</p>
                      </div>
                    </div>
                    
                    {/* Decorative floating widget - Top Right (Bouncing) */}
                    <div className="absolute -top-5 -right-5 md:-top-7 md:-right-7 bg-white/90 backdrop-blur-xl border border-white p-3 md:p-4 rounded-full shadow-[0_8px_25px_rgba(28,117,188,0.15)] animate-bounce" style={{ animationDuration: '3.5s' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e356e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
