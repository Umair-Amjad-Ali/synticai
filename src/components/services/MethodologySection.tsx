"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { stepsData} from "@/data/MethodologiesData";

export default function MethodologySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header (Aligned with rest of app design) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A051E] mb-4">
            <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
              Our Proven Approach to Achieve Your Objectives
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-3xl leading-relaxed">
            Achieve your business goals with our successful SynticAI Methodology, renowned for its structured planning and consistent results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stepsData.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={itemVariants}
              className={`relative flex flex-col group ${index % 2 !== 0 ? 'lg:mt-24' : ''}`}
            >
          {/* No Connecting Arrows - Replaced with Staggered Layout */}

              {/* Icon Container with Unique Premium Look */}
              <div className="relative z-10 w-[64px] h-[64px] md:w-[72px] md:h-[72px] mb-8 transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Soft diffused glow behind */}
                <div className="absolute inset-0 bg-[#1C75BC] blur-xl opacity-30 group-hover:opacity-50 group-hover:bg-[#1C75BC] transition-all duration-500 rounded-2xl" />
                
                {/* Backdrop shape (Solid white base for clarity) */}
                <div className="absolute inset-0 bg-white rounded-[1.25rem] shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(28,117,188,0.2)]" />
                
                {/* Inner Icon Container */}
                <div className="absolute inset-0 rounded-[1.25rem] bg-linear-to-br from-[#1C75BC] to-[#0A051E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 shadow-inner" />

                {/* Inner White Cutout */}
                <div className="absolute inset-[1.5px] bg-white rounded-[1.15rem] flex items-center justify-center z-20 group-hover:bg-transparent overflow-hidden transition-colors duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-white opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="relative z-30 text-[#1C75BC] group-hover:text-white transition-colors duration-500 scale-[0.75] md:scale-[0.8]">
                    {step.icon}
                  </div>
                </div>

                {/* Satellite floaters */}
                <div className="absolute -top-1.5 -right-2 w-3 h-3 rounded-full bg-linear-to-r from-[#45d1f5] to-[#1C75BC] shadow-[0_0_10px_#45d1f5] transform group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#1C75BC] opacity-70 animate-pulse shadow-[0_0_8px_#1C75BC]" />
              </div>

              {/* Content Box - Unique Data Presentation */}
              <div className="relative flex flex-col flex-1 mt-4 group">
                
                {/* Large Watermark Step Number */}
                <div className="absolute -top-12 left-0 w-full flex justify-center z-0 transition-all duration-500 group-hover:-translate-y-2">
                  <span className="text-[90px] font-black leading-none bg-linear-to-b from-gray-200 to-transparent bg-clip-text text-transparent opacity-80 group-hover:from-[#1C75BC] group-hover:opacity-100 select-none drop-shadow-sm">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col p-5 bg-linear-to-br from-gray-50/80 to-white/40 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(28,117,188,0.1)] group-hover:-translate-y-1 group-hover:bg-white/90">
                  
                  {/* Step Indicator Pill */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC] group-hover:bg-[#0A051E] transition-colors duration-300" />
                    <span className="text-[#1C75BC] group-hover:text-[#0A051E] font-bold text-[11px] tracking-[0.2em] uppercase transition-colors duration-300">
                      Phase {index + 1}
                    </span>
                  </div>

                  <h3 className="text-[#0A051E] font-extrabold text-[17px] leading-snug mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[13.5px] leading-relaxed relative pl-3 border-l-2 border-gray-200 group-hover:border-[#1C75BC]/30 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
