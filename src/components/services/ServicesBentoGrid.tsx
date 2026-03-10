"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { ServiceTab } from "@/data/servicesData";

interface ServicesBentoGridProps {
  id: string;
  categoryTitle: string;
  categoryDescription: string;
  services: ServiceTab[];
  theme?: "light" | "dark";
}

export default function ServicesBentoGrid({ id, categoryTitle, categoryDescription, services, theme = "dark" }: ServicesBentoGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isLight = theme === "light";

  return (
    <section id={id} className={`w-full py-24 relative z-10 ${isLight ? "bg-white" : "bg-[#0A051E]"}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Category Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isLight ? "text-[#0A051E]" : "text-white"}`}
          >
            {categoryTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-lg md:text-xl leading-relaxed ${isLight ? "text-gray-600" : "text-gray-400"}`}
          >
            {categoryDescription}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            const isWide = false; 

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                layout
                onClick={() => toggleExpand(idx)}
                className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 cursor-pointer
                  ${isExpanded 
                    ? isLight 
                      ? "bg-white border-[#1C75BC]/30 shadow-[0_20px_60px_rgba(28,117,188,0.1)] col-span-1 md:col-span-2 lg:col-span-3"
                      : "bg-[#0A051E] border-[#45d1f5]/50 shadow-[0_20px_60px_rgba(69,209,245,0.15)] col-span-1 md:col-span-2 lg:col-span-3" 
                    : isLight
                      ? "bg-white border-gray-200 hover:border-[#1C75BC]/30 hover:shadow-xl hover:-translate-y-2 shadow-sm"
                      : "bg-white/5 border-white/10 hover:border-[#1C75BC]/50 hover:bg-white/10 hover:-translate-y-2"}
                  ${isWide ? "md:col-span-2 lg:col-span-2" : ""}
                `}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100
                  ${isLight ? "bg-linear-to-br from-[#1C75BC]/5 to-transparent" : "bg-linear-to-br from-[#1C75BC]/10 to-transparent"}`} />

                <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`font-bold transition-colors duration-300 
                      ${isExpanded 
                        ? (isLight ? "text-3xl text-[#0A051E]" : "text-3xl text-white") 
                        : (isLight ? "text-2xl text-[#0A051E] group-hover:text-[#1C75BC]" : "text-2xl text-white group-hover:text-[#45d1f5]")}`}>
                      {service.heading}
                    </h3>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                      ${isExpanded 
                        ? (isLight ? "bg-[#1C75BC] text-white" : "bg-[#45d1f5] text-[#0A051E]") 
                        : (isLight ? "bg-blue-50 text-[#1C75BC] group-hover:bg-[#1C75BC] group-hover:text-white" : "bg-white/10 text-white group-hover:bg-[#1C75BC]")}`}>
                      {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>

                  <p className={`leading-relaxed transition-all duration-300 
                    ${isExpanded 
                      ? (isLight ? "text-lg text-gray-700 max-w-4xl" : "text-lg text-gray-300 max-w-4xl") 
                      : (isLight ? "text-base text-gray-600 line-clamp-3" : "text-base text-gray-400 line-clamp-3")}`}>
                    {service.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && service.benefits && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`w-full h-px mb-8 ${isLight ? "bg-gray-200" : "bg-white/10"}`} />
                        <h4 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isLight ? "text-[#0A051E]" : "text-white"}`}>
                          <SparklesIcon className={`w-5 h-5 ${isLight ? "text-[#1C75BC]" : "text-[#45d1f5]"}`} />
                          {service.benefitsTitle || "Key Benefits"}
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-4">
                              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 
                                ${isLight ? "bg-blue-50" : "bg-[#1C75BC]/20"}`}>
                                <ArrowRight className={`w-4 h-4 ${isLight ? "text-[#1C75BC]" : "text-[#45d1f5]"}`} />
                              </div>
                              <div>
                                <h5 className={`text-lg font-bold mb-2 ${isLight ? "text-[#0A051E]" : "text-white"}`}>
                                  {benefit.title}
                                </h5>
                                <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                                  {benefit.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
