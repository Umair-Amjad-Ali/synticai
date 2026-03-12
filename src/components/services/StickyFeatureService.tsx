"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServiceTab } from "@/data/servicesData";

interface StickyFeatureServiceProps {
  id: string;
  service: ServiceTab;
  imageSrc: string;
  theme?: "light" | "dark";
}

export default function StickyFeatureService({ id, service, imageSrc, theme = "dark" }: StickyFeatureServiceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extremely subtle parallax for the image inside its container
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const isLight = theme === "light";

  return (
    <section id={id} ref={containerRef} className={`relative w-full py-8 lg:py-12 overflow-hidden ${isLight ? "bg-white" : "bg-dark-bg"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-center">
          
          {/* Left Side: Unique Image Display */}
          <div className="lg:col-span-5 relative w-full h-[360px] lg:h-[440px] flex items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className={`absolute w-[80%] h-[80%] rounded-full blur-[100px] opacity-30 pointer-events-none z-0 ${isLight ? "bg-brand" : "bg-brand-light"}`} />

            {/* Main Image Frame (Padded & Tilted) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative z-10 w-[85%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border ${isLight ? "border-gray-200 bg-white" : "border-white/10 bg-dark-card-2"}`}
            >
              <div 
                className={`absolute inset-2 md:inset-3 rounded-[2.5rem] bg-cover bg-center overflow-hidden transition-transform duration-1000 group-hover:scale-105 ${isLight ? "" : "opacity-90 grayscale-20"}`}
                style={{ backgroundImage: `url(${imageSrc})` }} 
              />
              {/* Inner Overlay Gradient */}
              <div className={`absolute inset-2 md:inset-3 rounded-[2.5rem] z-10 opacity-60 ${isLight ? "bg-linear-to-t from-black/30 via-transparent to-transparent" : "bg-linear-to-t from-dark-bg via-dark-bg/10 to-transparent"}`} />
            </motion.div>

            {/* Floating Glass Widget 1 (Top Right) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-[5%] right-0 lg:-right-[5%] z-20 backdrop-blur-xl px-5 py-3.5 rounded-2xl border flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${isLight ? "bg-white/90 border-gray-200 text-dark-bg" : "bg-dark-card-2/90 border-white/10 text-white"}`}
            >
               <div className={`w-2 h-2 rounded-full animate-pulse ${isLight ? "bg-brand" : "bg-brand"}`} />
               <span className="text-[10px] font-bold tracking-widest uppercase truncate max-w-[120px]">
                 {service.name}
               </span>
            </motion.div>

            {/* Floating Glass Widget 2 (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-[5%] left-0 lg:-left-[5%] z-20 backdrop-blur-xl p-3 md:p-4 rounded-2xl border shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-3 ${isLight ? "bg-white/90 border-gray-200 text-dark-bg" : "bg-dark-card-2/90 border-white/10 text-white"}`}
            >
               <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center border shadow-inner ${isLight ? "bg-brand/10 border-brand/20" : "bg-brand-light/10 border-brand-light/20"}`}>
                 <div className="w-4 h-4 rounded-full border-2 border-dashed animate-[spin_4s_linear_infinite]" style={{ borderColor: isLight ? "#1C75BC" : "#45d1f5" }} />
               </div>
               <div>
                 <p className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest mb-0.5 ${isLight ? "text-gray-500" : "text-gray-400"}`}>System Status</p>
                 <p className="text-xs md:text-sm font-extrabold tracking-tight whitespace-nowrap">Optimal Performance</p>
               </div>
            </motion.div>

          </div>

          {/* Right Side: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2 lg:pt-0">
            
            {/* Eyebrow */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isLight ? "bg-brand" : "bg-brand-light"}`} />
                  <div className={`w-8 h-[2px] ${isLight ? "bg-linear-to-r from-brand to-transparent" : "bg-linear-to-r from-brand-light to-transparent"}`} />
                </div>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand  `}>
                  Core Compitency
                </span>
              </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-4 ${isLight ? "text-dark-bg" : "text-white"}`}
            >
              {service.heading}
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-sm md:text-base leading-relaxed mb-8 font-medium max-w-2xl ${isLight ? "text-gray-600" : "text-[#8b92a5]"}`}
            >
              {service.description}
            </motion.p>

            {/* Editorial Numbered Benefits List */}
            <div className="space-y-0">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`text-xs sm:text-sm font-bold uppercase tracking-widest mb-8 pb-3 border-b ${isLight ? "text-dark-bg border-gray-200" : "text-white/50 border-white/10"}`}
              >
                {service.benefitsTitle || "Key Advantages"}
              </motion.h3>

              <div className="flex flex-col gap-5">
                {service.benefits?.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group flex gap-5 md:gap-6 items-start"
                  >
                    {/* Oversized Number */}
                    <div className={`shrink-0 text-3xl md:text-4xl font-light leading-none transition-colors duration-500 font-serif
                      ${isLight ? "text-gray-200 group-hover:text-brand" : "text-white/10 group-hover:text-brand"}`}>
                      0{i + 1}
                    </div>
                    
                    <div className="pt-1.5">
                      <h4 className={`text-base md:text-lg font-bold mb-1 tracking-tight transition-colors duration-300
                        ${isLight ? "text-dark-bg group-hover:text-brand" : "text-white group-hover:text-brand"}`}>
                        {benefit.title}
                      </h4>
                      <p className={`text-sm leading-relaxed transition-colors duration-300
                        ${isLight ? "text-gray-500 group-hover:text-gray-900" : "text-[#8b92a5] group-hover:text-gray-300"}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`mt-8 pt-5 border-t ${isLight ? "border-gray-200" : "border-white/5"}`}
            >
              <Link 
                href="/portfolio"
                className={`group/btn inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors
                  ${isLight ? "text-dark-bg hover:text-brand" : "text-white hover:text-brand-light"}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover/btn:scale-110
                  ${isLight ? "border-gray-200 bg-gray-50 group-hover/btn:border-brand" : "border-white/10 bg-white/5 group-hover/btn:border-brand-light"}`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <span>Discover Projects</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
