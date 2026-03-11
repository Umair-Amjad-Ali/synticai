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
    <section id={id} ref={containerRef} className={`relative w-full py-16 lg:py-24 overflow-hidden ${isLight ? "bg-white" : "bg-[#0A051E]"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative items-center">
          
          {/* Left Side: Unique Image Display */}
          <div className="lg:col-span-5 relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className={`absolute w-[80%] h-[80%] rounded-full blur-[100px] opacity-30 pointer-events-none z-0 ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />

            {/* Main Image Frame (Padded & Tilted) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative z-10 w-[85%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border ${isLight ? "border-gray-200 bg-white" : "border-white/10 bg-[#110B29]"}`}
            >
              <div 
                className={`absolute inset-2 md:inset-3 rounded-[2.5rem] bg-cover bg-center overflow-hidden transition-transform duration-1000 group-hover:scale-105 ${isLight ? "" : "opacity-90 grayscale-20"}`}
                style={{ backgroundImage: `url(${imageSrc})` }} 
              />
              {/* Inner Overlay Gradient */}
              <div className={`absolute inset-2 md:inset-3 rounded-[2.5rem] z-10 opacity-60 ${isLight ? "bg-linear-to-t from-black/30 via-transparent to-transparent" : "bg-linear-to-t from-[#0A051E] via-[#0A051E]/10 to-transparent"}`} />
            </motion.div>

            {/* Floating Glass Widget 1 (Top Right) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-[5%] right-0 lg:-right-[5%] z-20 backdrop-blur-xl px-5 py-3.5 rounded-2xl border flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${isLight ? "bg-white/90 border-gray-200 text-[#0A051E]" : "bg-[#110B29]/90 border-white/10 text-white"}`}
            >
               <div className={`w-2 h-2 rounded-full animate-pulse ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
               <span className="text-[10px] font-bold tracking-widest uppercase truncate max-w-[120px]">
                 {service.name}
               </span>
            </motion.div>

            {/* Floating Glass Widget 2 (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-[5%] left-0 lg:-left-[5%] z-20 backdrop-blur-xl p-4 md:p-5 rounded-3xl border shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-4 md:gap-5 ${isLight ? "bg-white/90 border-gray-200 text-[#0A051E]" : "bg-[#060B18]/90 border-white/10 text-white"}`}
            >
               <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border shadow-inner ${isLight ? "bg-[#1C75BC]/10 border-[#1C75BC]/20" : "bg-[#45d1f5]/10 border-[#45d1f5]/20"}`}>
                 <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] border-dashed animate-[spin_4s_linear_infinite]" style={{ borderColor: isLight ? "#1C75BC" : "#45d1f5" }} />
               </div>
               <div>
                 <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1 ${isLight ? "text-gray-500" : "text-gray-400"}`}>System Status</p>
                 <p className="text-sm md:text-base font-extrabold tracking-tight whitespace-nowrap">Optimal Performance</p>
               </div>
            </motion.div>

          </div>

          {/* Right Side: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2 lg:pt-0">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className={`w-8 h-[2px] ${isLight ? "bg-[#1C75BC]" : "bg-[#1C75BC]"}`} />
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] ${isLight ? "text-[#1C75BC]" : "text-[#1C75BC]"}`}>
                Core Competency
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] mb-6 ${isLight ? "text-[#0A051E]" : "text-white"}`}
            >
              {service.heading}
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-base md:text-lg leading-relaxed mb-12 font-medium max-w-2xl ${isLight ? "text-gray-600" : "text-[#8b92a5]"}`}
            >
              {service.description}
            </motion.p>

            {/* Editorial Numbered Benefits List */}
            <div className="space-y-0">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`text-xs sm:text-sm font-bold uppercase tracking-widest mb-8 pb-3 border-b ${isLight ? "text-[#0A051E] border-gray-200" : "text-white/50 border-white/10"}`}
              >
                {service.benefitsTitle || "Key Advantages"}
              </motion.h3>

              <div className="flex flex-col gap-8">
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
                    <div className={`shrink-0 text-4xl md:text-5xl font-light leading-none transition-colors duration-500 font-serif
                      ${isLight ? "text-gray-200 group-hover:text-[#1C75BC]" : "text-white/10 group-hover:text-[#45d1f5]"}`}>
                      0{i + 1}
                    </div>
                    
                    <div className="pt-1.5">
                      <h4 className={`text-lg md:text-xl font-bold mb-2 tracking-tight transition-colors duration-300
                        ${isLight ? "text-[#0A051E] group-hover:text-[#1C75BC]" : "text-white group-hover:text-[#45d1f5]"}`}>
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
              className={`mt-12 pt-6 border-t ${isLight ? "border-gray-200" : "border-white/5"}`}
            >
              <Link 
                href="/portfolio"
                className={`group/btn inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors
                  ${isLight ? "text-[#0A051E] hover:text-[#1C75BC]" : "text-white hover:text-[#45d1f5]"}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover/btn:scale-110
                  ${isLight ? "border-gray-200 bg-gray-50 group-hover/btn:border-[#1C75BC]" : "border-white/10 bg-white/5 group-hover/btn:border-[#45d1f5]"}`}>
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
