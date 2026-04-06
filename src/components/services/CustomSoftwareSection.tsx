"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, X, CheckCircle2 } from "lucide-react";
import { capabilities, row1Tech, row2Tech, techIcons, stats } from "@/data/CustomSoftwareData";


function MarqueeRow({ items, direction = 1 }: { items: string[]; direction?: 1 | -1 }) {
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        className="flex gap-4 px-2 w-max shrink-0"
      >
        {looped.map((name, i) => (
          <div
            key={i}
            className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-dark-card-2/80 backdrop-blur-md border border-white/5 text-sm font-bold text-gray-300 transition-all duration-500 whitespace-nowrap cursor-pointer hover:text-white hover:bg-[#1A1140]/90 overflow-hidden"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.2)" }}
          >
            {/* Multi-layered Glowing Hover Border */}
            <div className="absolute inset-0 rounded-2xl border border-brand-light/0 group-hover:border-brand-light/60 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-px rounded-[15px] border border-transparent group-hover:border-brand/30 transition-colors duration-500 pointer-events-none" />
            
            {/* Dynamic Sweeping Reflection (Glass Effect) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
              <div className="w-[150%] h-[150%] absolute -top-[25%] -left-[25%] bg-linear-to-r from-transparent via-white/5 to-transparent rotate-45 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out]" />
            </div>

            {/* Soft Ambient Icon Glow (Expands on hover) */}
            <div className="absolute left-6 w-6 h-6 bg-white/10 blur-xl rounded-full group-hover:bg-brand/60 group-hover:w-10 group-hover:h-10 transition-all duration-500" />
            
            <span className="text-xl leading-none relative z-10 drop-shadow-sm group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500 ease-out">{techIcons[name]}</span>
            <span className="tracking-wide relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-brand-light">{name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export default function CustomSoftwareSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="custom-software" className="w-full bg-dark-bg relative">

      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-14 pb-8 text-left flex flex-col items-start gap-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-brand" />
            <div className="w-12 h-[2px] bg-linear-to-r from-brand to-transparent" />
          </div>
          <span className="text-brand text-[11px] font-extrabold uppercase tracking-[0.3em]">
            Custom Development
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.1]"
        >
          We Build.{" "}
          <span className="text-transparent bg-clip-text brand-gradient-text">
            End to End.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8b92a5] text-sm md:text-base max-w-2xl leading-relaxed mt-1 font-medium"
        >
          Full-spectrum software engineering across web, mobile, backend, and cloud — from raw idea to beautifully shipped product. Click on any capability below to explore our process.
        </motion.p>
      </div>

      {/* ── B. Unique Capability Directory (Interactive Accordion Rows) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pb-14">
        <div className="flex flex-col border-t border-white/5 relative z-10 w-full">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isExpanded = expandedId === cap.id;

            return (
              <motion.div
                key={cap.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : cap.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col py-5 md:py-6 border-b border-white/5 cursor-pointer transition-colors duration-500 overflow-hidden ${
                  isExpanded ? "bg-white/3" : "hover:bg-white/2"
                }`}
              >
                {/* Subtle Hover & Expanded Gradient Background */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${cap.color}05 40%, transparent 100%)` }}
                />

                {/* Vertical Divider / Accent Line on Hover or Expanded */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${isExpanded ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100"}`}
                  style={{ background: cap.color }}
                />

                {/* --- ALWAYS VISIBLE ROW HEADER --- */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-6 w-full lg:w-[32%] relative z-10 mb-6 lg:mb-0 pl-4 md:pl-8">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex shrink-0 items-center justify-center border transition-all duration-500 shadow-lg ${isExpanded ? "scale-110" : "bg-[#0C0A1D] group-hover:scale-110"}`}
                      style={{ 
                        borderColor: isExpanded ? `${cap.color}80` : `${cap.color}25`,
                        background: isExpanded ? `${cap.color}20` : undefined,
                        boxShadow: isExpanded ? `0 0 30px ${cap.color}30` : undefined
                      }}
                    >
                      <Icon className="w-6 h-6 transition-colors duration-500" style={{ color: cap.color }} strokeWidth={isExpanded ? 2 : 1.5} />
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 transition-opacity duration-500 ${isExpanded ? "opacity-100 text-white" : "opacity-50 text-[#8b92a5] group-hover:opacity-100"}`}>
                        Capability 0{idx + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight transition-colors duration-500">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  {/* Center: Description (Fades out seamlessly if expanded on mobile, stays on desktop) */}
                  <div className={`w-full lg:w-[33%] relative z-10 pr-4 md:pr-8 mb-6 lg:mb-0 pl-4 md:pl-0 transition-opacity duration-300 ${isExpanded ? "opacity-50 lg:opacity-100 hidden lg:block" : "opacity-100"}`}>
                    <p className="text-[#8b92a5] text-[13px] leading-relaxed font-medium transition-colors duration-500 group-hover:text-gray-300">
                      {cap.description}
                    </p>
                  </div>

                  {/* Right: Tech Stack & Arrow */}
                  <div className="flex items-center justify-between w-full lg:w-[35%] relative z-10 pr-4 md:pr-8 pl-4 md:pl-0">
                    <div className="flex flex-wrap gap-2 transition-opacity duration-300">
                      {cap.techStack.slice(0, 3).map((tech, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all duration-500 ${isExpanded ? "bg-dark-card-2 border-white/10 text-white shadow-sm" : "bg-dark-bg border-white/5 text-gray-400 group-hover:border-white/10 group-hover:bg-dark-card-2 group-hover:shadow-sm"}`}
                        >
                          <span className={`text-[12px] transition-opacity ${isExpanded ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}>{tech.icon}</span> 
                          <span className={`transition-colors ${isExpanded ? "text-white" : "group-hover:text-white"}`}>{tech.name}</span>
                        </div>
                      ))}
                      {cap.techStack.length > 3 && (
                        <div 
                          className={`flex items-center justify-center min-w-[32px] px-2 py-1.5 rounded-lg border text-[11px] font-bold transition-all duration-500 ${isExpanded ? "bg-dark-card-2 border-white/10" : "bg-dark-bg border-white/5 group-hover:border-white/10 group-hover:bg-dark-card-2"}`}
                          style={{ color: cap.color }}
                        >
                          +{cap.techStack.length - 3}
                        </div>
                      )}
                    </div>

                    {/* Explore Arrow */}
                    <div 
                      className={`w-10 h-10 rounded-full border flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${isExpanded ? "bg-white/10 border-white/30 rotate-90 scale-110" : "bg-[#0C0A1D] border-white/5 group-hover:scale-110 group-hover:bg-white/5 group-hover:border-white/20"}`}
                    >
                      <ArrowRight 
                        className={`w-4 h-4 transition-all duration-500 text-gray-600 ${isExpanded ? "translate-x-0" : "group-hover:translate-x-0.5"}`} 
                        style={{ color: cap.color }} 
                      />
                    </div>
                  </div>
                </div>

                {/* --- INLINE EXPANDED CONTENT --- */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full relative z-10"
                    >
                      <div className="pt-10 pb-6 pl-4 md:pl-[120px] pr-4 md:pr-8 flex flex-col gap-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                          
                          {/* Col 1: Core Offerings */}
                          <div className="lg:col-span-1">
                            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#8b92a5] mb-5 flex items-center gap-3">
                              <span className="w-6 h-px bg-white/10" />
                              Core Offerings
                            </h4>
                            <div className="flex flex-col gap-4">
                              {cap.whatWeBuild.map((item, i) => (
                                <motion.div 
                                  initial={{ opacity: 0, x: -10 }} 
                                  animate={{ opacity: 1, x: 0 }} 
                                  transition={{ delay: 0.2 + (i * 0.05) }} 
                                  key={i} 
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: cap.color }} />
                                  <span className="text-gray-200 text-sm font-medium leading-snug">{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Col 2 & 3: Methodology & Deployment */}
                          <div className="lg:col-span-2">
                            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#8b92a5] mb-5 flex items-center gap-3">
                              <span className="w-6 h-px bg-white/10" />
                              Methodology & Deployment
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {cap.features.map((f, i) => (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + (i * 0.05) }}
                                  key={i}
                                  className="p-5 rounded-2xl border bg-white/2 hover:bg-white/5 transition-colors"
                                  style={{ borderColor: `${cap.color}15` }}
                                >
                                  <h5 className="text-sm font-bold text-white mb-2" style={{ color: cap.color }}>{f.title}</h5>
                                  <p className="text-[13px] text-gray-400 leading-relaxed">{f.description}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Full Width Row: Tech Stack */}
                        <div className="pt-6 border-t border-white/5">
                          <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#8b92a5] mb-5 flex items-center gap-3">
                            <span className="w-6 h-px bg-white/10" />
                            Full Technology Stack
                          </h4>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-2.5"
                          >
                            {cap.techStack.map((tech, i) => (
                              <div 
                                key={i} 
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/5 shadow-inner"
                                style={{ borderColor: `${cap.color}30` }}
                              >
                                <span className="text-base leading-none">{tech.icon}</span>
                                <span className="text-xs font-bold text-white tracking-wide">{tech.name}</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── C. Tech Stack Carousel ── */}
      <div className="w-full py-14 relative bg-dark-bg border-y border-white/5 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-light/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center mb-14 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-px bg-linear-to-r from-transparent to-brand-light/50" />
            <span className="text-brand text-[10px] font-extrabold uppercase tracking-[0.3em]">
              Technologies We Excel In
            </span>
             <div className="w-12 h-px bg-linear-to-l from-transparent to-brand-light/50" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          >
            Our Complete Tech Stack
          </motion.h3>
        </div>

        <div
          className="relative flex flex-col gap-6 overflow-hidden z-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <MarqueeRow items={row1Tech} direction={1} />
          <MarqueeRow items={row2Tech} direction={-1} />
        </div>
      </div>

      {/* ── D. Stats Strip (Premium Dark Dashboard) ── */}
      <div className="w-full relative overflow-hidden bg-dark-bg py-14 border-b border-white/5">
        
        {/* Subtle Animated Grid Background */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex flex-col items-center justify-center py-6 px-5 rounded-2xl border bg-dark-card-2/40 backdrop-blur-md cursor-default transition-all duration-500 hover:bg-dark-card-2/80 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.4)] overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {/* Glowing Top Border Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] w-full bg-linear-to-r from-transparent via-brand-light/0 to-transparent group-hover:via-brand transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                {/* Ambient Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tighter relative z-10 transition-transform duration-500 group-hover:scale-110">
                  <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 group-hover:from-white group-hover:to-brand transition-all duration-500">
                    {s.value}
                  </span>
                </div>
                
                <div className="text-[10px] md:text-xs text-[#8b92a5] font-bold uppercase tracking-[0.2em] relative z-10 group-hover:text-gray-300 transition-colors duration-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>    

    </section>
  );
}
