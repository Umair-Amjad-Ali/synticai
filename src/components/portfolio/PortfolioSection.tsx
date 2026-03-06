"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/data/PortfolioData";

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="pb-20  bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        {/* Premium 3D Overlapping Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 items-start mt-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col transition-all duration-500 will-change-transform"
            >
              {/* Top: 3D Lifted Image Container */}
              <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_rgba(28,117,188,0.25)] transition-all duration-500 transform group-hover:-translate-y-4 z-10 bg-gray-100 border border-gray-100/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Floating Category Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#1C75BC] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Bottom: 3D Overlapping Content Card */}
              <div className="relative z-20 mx-auto w-[92%] -mt-12 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,10,0.06)] group-hover:shadow-[0_20px_40px_rgba(28,117,188,0.15)] flex flex-col p-5 md:p-6 transition-all duration-500 border border-[#F0F2F5] group-hover:border-[#1C75BC]/30 transform group-hover:-translate-y-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[17px] md:text-[19px] font-bold text-[#0A051E] group-hover:text-[#1C75BC] transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-[13px] leading-snug line-clamp-2">
                  {project.description}
                </p>
                
                {/* Action Link & Year aligned after text */}
                <div className="mt-2 pt-1 border-t border-gray-100 flex items-center justify-between relative group/link">
                  <Link href={project.link} className="text-[#1C75BC] text-[13px] font-bold flex items-center gap-1.5 group-hover/link:gap-2.5 transition-all duration-300">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <span className="text-gray-500 font-mono text-[11px] font-semibold bg-[#F0F2F5] group-hover:bg-[#1C75BC]/10 group-hover:text-[#1C75BC] px-2.5 py-1.5 rounded-md transition-colors duration-300">
                    {project.year}
                  </span>
                </div>
                
                {/* Bottom Blue Glow expanding under the overlapping card on hover */}
                {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#1C75BC] to-[#45d1f5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" /> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
