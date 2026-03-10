"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  const isLight = theme === "light";

  return (
    <section id={id} ref={containerRef} className={`relative w-full pt-32 pb-48 lg:pb-64 ${isLight ? "bg-white" : "bg-[#0A051E]"}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        
        {/* Left Side: Sticky 3D Graphic */}
        <div className="relative h-[400px] lg:h-screen lg:sticky top-0 lg:top-32 flex items-start lg:items-center justify-center">
          <motion.div 
            style={{ scale, opacity }}
            className={`w-full h-full lg:h-auto lg:aspect-square max-w-lg rounded-[40px] overflow-hidden relative
              ${isLight ? "border border-gray-200 shadow-[0_20px_80px_rgba(28,117,188,0.15)] bg-gray-50/50 backdrop-blur-3xl" 
                        : "border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(28,117,188,0.2)]"}`}
          >
            <div className={`absolute inset-0 z-10 ${isLight ? "bg-linear-to-bl from-[#1C75BC]/10 to-transparent" : "bg-linear-to-bl from-[#1C75BC]/30 to-transparent"}`} />
            
            {/* Image Placeholder */}
            <div 
              className={`absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 ${isLight ? "opacity-90 grayscale-0 mix-blend-normal" : "opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 grayscale"}`}
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-8 z-20">
              <div className={`inline-flex px-4 py-2 backdrop-blur-md rounded-xl border text-xs font-bold tracking-widest uppercase shadow-xl transition-all duration-300
                ${isLight ? "bg-white/80 border-white/50 text-[#1C75BC]" : "bg-[#060B18]/80 border-white/10 text-[#45d1f5]"}`}>
                Featured Innovation
              </div>
            </div>
            
            {/* Light ray effect in dark mode */}
            {!isLight && (
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-linear-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
            )}
          </motion.div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="flex flex-col justify-start lg:pt-32 pb-16 lg:pb-32">
          
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8 ${isLight ? "text-[#0A051E]" : "text-white"}`}
          >
            {service.heading}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-xl leading-relaxed mb-16 ${isLight ? "text-gray-600" : "text-gray-300"}`}
          >
            {service.description}
          </motion.p>

          <div className="space-y-12">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isLight ? "text-[#0A051E]" : "text-white"}`}
              >
                <div className={`w-8 h-px ${isLight ? "bg-[#1C75BC]" : "bg-[#45d1f5]"}`} />
                {service.benefitsTitle || "Business Benefits"}
              </motion.h3>

              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {service.benefits?.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group flex gap-5 p-6 md:p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border
                      ${isLight 
                        ? "bg-white hover:bg-gray-50 border-gray-100 hover:border-[#1C75BC]/20 shadow-sm" 
                        : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#1C75BC]/30 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"}`}
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-inner
                      ${isLight ? "bg-blue-50 group-hover:bg-[#1C75BC]" : "bg-[#1C75BC]/20 group-hover:bg-[#1C75BC]"}`}>
                      <CheckCircle2 className={`w-6 h-6 transition-colors ${isLight ? "text-[#1C75BC] group-hover:text-white" : "text-[#45d1f5] group-hover:text-white"}`} />
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 transition-colors ${isLight ? "text-[#0A051E] group-hover:text-[#1C75BC]" : "text-white group-hover:text-[#45d1f5]"}`}>
                        {benefit.title}
                      </h4>
                      <p className={`leading-relaxed transition-colors ${isLight ? "text-gray-600 group-hover:text-gray-800" : "text-gray-400 group-hover:text-gray-300"}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Link 
                href="/portfolio"
                className={`group/btn inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl
                  ${isLight 
                    ? "bg-[#0A051E] text-white hover:bg-[#1C75BC] shadow-[0_10px_30px_rgba(10,5,30,0.15)] hover:shadow-[0_10px_40px_rgba(28,117,188,0.3)]" 
                    : "bg-white text-[#0A051E] hover:bg-[#45d1f5] shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(69,209,245,0.4)]"}`}
              >
                <span>Explore Related Projects</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
