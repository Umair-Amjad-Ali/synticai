"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cpu } from "lucide-react";
import Link from "next/link";
import { ServiceTab } from "@/data/servicesData";

interface ServicesBentoGridProps {
  id: string;
  categoryTitle: string;
  categoryDescription: string;
  services: ServiceTab[];
  theme?: "light" | "dark";
}

export default function ServicesBentoGrid({ id, categoryTitle, categoryDescription, services, theme = "dark" }: ServicesBentoGridProps) {
  const isLight = theme === "light";

  return (
    <section id={id} className={`w-full py-24 lg:py-32 relative z-10 ${isLight ? "bg-gray-50/50" : "bg-[#060B18]"}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Sticky Category Header */}
          <div className="w-full xl:w-[400px] shrink-0 xl:sticky xl:top-32 relative">

            <div className="relative z-10">
              
              {/* Sleek Minimalist Eyebrow (Replacing the Pill) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
                  <div className={`w-8 h-[2px] ${isLight ? "bg-linear-to-r from-[#1C75BC] to-transparent" : "bg-linear-to-r from-[#45d1f5] to-transparent"}`} />
                </div>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] ${isLight ? "text-[#1C75BC]" : "text-[#45d1f5]"}`}>
                  Capability Domain
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${isLight ? "text-[#0A051E]" : "text-white"}`}
              >
                {categoryTitle}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-base md:text-lg leading-relaxed font-medium mb-12 ${isLight ? "text-gray-600" : "text-[#8b92a5]"}`}
              >
                {categoryDescription}
              </motion.p>
              
              {/* Clean Apple-esque Status Widget from Screenshot */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden xl:flex mt-4"
              >
                <div className={`w-full max-w-[280px] p-6 rounded-4xl relative overflow-hidden
                  ${isLight ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-gray-900/5" : "bg-[#110B29] border border-white/10 shadow-2xl shadow-black/50"}`}
                >
                  {/* Faint blue gradient on the bottom right of the widget (matching screenshot) */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none ${isLight ? "bg-[#1C75BC]/10" : "opacity-0"}`} />

                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className={`w-[52px] h-[52px] rounded-[18px] flex items-center justify-center border ${isLight ? "bg-gray-50/50 border-gray-100/50 shadow-sm" : "bg-[#0A051E] border-white/5"}`}>
                      <Cpu className={`w-[26px] h-[26px] ${isLight ? "text-[#1C75BC]" : "text-[#45d1f5]"}`} strokeWidth={1.5} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-[10px] border ${isLight ? "bg-white border-gray-200 text-gray-500 shadow-sm" : "bg-white/5 border-white/10 text-gray-400"}`}>
                      Status
                    </span>
                  </div>
                  
                  <div className={`text-[19px] font-extrabold tracking-tight flex items-center gap-3 relative z-10 ${isLight ? "text-[#0A051E]" : "text-white"}`}>
                    <div className="relative flex items-center justify-center w-[18px] h-[18px]">
                      <div className={`absolute w-full h-full rounded-full opacity-20 ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
                      <div className={`w-[8px] h-[8px] rounded-full ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
                    </div>
                    Active & Optimized
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Interactive Hover-Card Stack */}
          <div className="w-full flex-1 flex flex-col gap-6 relative">
            
            {/* Ambient Background Line */}
            <div className={`absolute left-8 top-10 bottom-10 w-px hidden md:block ${isLight ? "bg-gray-300" : "bg-white/5"}`} />

            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-4xl border transition-all duration-700 w-full cursor-pointer
                  ${isLight
                    ? "bg-white border-gray-200 shadow-sm hover:border-[#1C75BC]/40 hover:shadow-[0_20px_60px_rgba(28,117,188,0.1)] hover:-translate-y-2"
                    : "bg-[#0A051E] border-white/5 shadow-none hover:border-[#45d1f5]/40 hover:shadow-[0_20px_60px_rgba(69,209,245,0.1)] hover:-translate-y-2"}
                `}
              >
                {/* Subtle gradient flash on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                  ${isLight ? "bg-linear-to-r from-[#1C75BC]/5 to-transparent" : "bg-linear-to-r from-[#45d1f5]/10 to-transparent"}`} />

                <div className="p-8 md:p-10 relative z-10">
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    
                    {/* Index Number Circle */}
                    <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 shadow-inner
                      ${isLight 
                        ? "bg-gray-50 border-gray-200 text-gray-500 shadow-gray-100 group-hover:border-[#1C75BC]/30 group-hover:bg-[#1C75BC]/5 group-hover:text-[#1C75BC]" 
                        : "bg-[#110B29] border-white/5 text-white/30 shadow-none group-hover:border-[#45d1f5]/30 group-hover:bg-[#45d1f5]/10 group-hover:text-[#45d1f5]"}`}>
                      <span className="font-serif text-2xl font-light">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-4 transition-colors duration-300 
                        ${isLight ? "text-[#0A051E] group-hover:text-[#1C75BC]" : "text-white group-hover:text-[#45d1f5]"}`}>
                        {service.heading}
                      </h3>
                      
                      <p className={`text-base leading-relaxed max-w-2xl transition-colors duration-300
                        ${isLight ? "text-gray-700 font-medium group-hover:text-gray-900" : "text-[#8b92a5] group-hover:text-gray-300"}`}>
                        {service.description}
                      </p>

                      {/* Expanding Content on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
                        <div className="overflow-hidden">
                          <div className={`mt-8 pt-8 border-t ${isLight ? "border-gray-100" : "border-white/5"}`}>
                            {service.benefits && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {service.benefits.slice(0, 4).map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
                                    <span className={`text-sm font-medium ${isLight ? "text-gray-700" : "text-gray-400"}`}>
                                      {benefit.title}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <Link 
                              href="/contact" 
                              className={`inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase transition-all duration-300
                                ${isLight ? "text-[#0A051E] hover:text-[#1C75BC]" : "text-white hover:text-[#45d1f5]"}`}
                            >
                              <span>Discuss This Capability</span>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:translate-x-2
                                ${isLight ? "border-gray-200 bg-gray-50" : "border-white/10 bg-[#110B29]"}`}>
                                <ArrowRight className="w-3 h-3" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
