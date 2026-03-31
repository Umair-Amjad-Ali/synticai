"use client";

import { useState, useRef } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import type { Industry } from "@/data/industriesData";

interface IndustriesSectionProps {
  title: string;
  subtitle?: string;
  industries: Omit<Industry, "icon">[];
}

// Simple inline SVG icons for each industry type
const industryIcons: Record<string, React.ReactElement> = {
  "Health Tech & Medical": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "EdTech & Learning": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  "Retail & eCommerce": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  "Industrial IoT": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>
    </svg>
  ),
  "FinTech & Banking": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  "Enterprise ERP": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  ),
  "App Development": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  "AI & Automation": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
       <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  "Cybersecurity": (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
};

export default function IndustriesSection({
  title,
  subtitle,
  industries,
}: IndustriesSectionProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const featured = industries[0];
  const rest = industries.slice(1);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-bg mb-2">
            <span className="inline-block border-l-4 border-brand pl-4">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed pl-5">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid: Featured card (2-col) + 3 cards in row 1, then 4 cards row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl row-span-2 col-span-1 md:col-span-2 cursor-pointer"
            style={{ minHeight: 320 }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => router.push(`/industries#${featured.id}`)}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered === 0 ? "scale(1.06)" : "scale(1)" }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: "linear-gradient(160deg, rgba(4,1,21,0.2) 0%, rgba(4,1,21,0.82) 100%)",
              }}
            />
            {/* Blue sweep bottom bar */}
            <div
              className="absolute bottom-0 left-0 h-[3px] transition-all duration-500"
              style={{
                width: hovered === 0 ? "100%" : "40%",
                background: "linear-gradient(90deg, #1C75BC, #45d1f5)",
              }}
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              {/* Top: number + icon */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-brand tracking-[0.2em]">01</span>
                <span className="text-white/70">{industryIcons[featured.name]}</span>
              </div>
              {/* Bottom: name + description */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{featured.name}</h3>
                <p className="text-gray-300 text-[13px] leading-relaxed truncate mb-3">{featured.description || featured.solution}</p>
              </div>
            </div>
          </motion.div>

          {/* Regular cards (rest) */}
          {rest.map((industry, idx) => {
            const i = idx + 1; // actual index in industries[]
            const isHov = hovered === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ minHeight: 150 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/industries#${industry.id}`)}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: isHov ? "scale(1.08)" : "scale(1)" }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-400"
                  style={{
                    background: isHov
                      ? "linear-gradient(180deg, rgba(4,1,21,0.3) 0%, rgba(4,1,21,0.9) 100%)"
                      : "linear-gradient(180deg, rgba(4,1,21,0.15) 0%, rgba(4,1,21,0.7) 100%)",
                  }}
                />
                {/* Blue bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-[2.5px] transition-all duration-500"
                  style={{
                    width: isHov ? "100%" : "0%",
                    background: "linear-gradient(90deg, #1C75BC, #45d1f5)",
                  }}
                />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Top: number */}
                  <span className="text-[10px] font-bold text-brand tracking-[0.2em]">{num}</span>

                  {/* Bottom content */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className="text-white font-semibold text-[14px] leading-snug transition-transform duration-300"
                        style={{ transform: isHov ? "translateY(-3px)" : "translateY(0)" }}
                      >
                        {industry.name}
                      </h3>
                      <span
                        className="text-white/50 transition-all duration-300"
                        style={{ opacity: isHov ? 0 : 1, transform: isHov ? "scale(0.8)" : "scale(1)" }}
                      >
                        {industryIcons[industry.name]}
                      </span>
                    </div>

                    {/* Description & Read More — reveal on hover */}
                    <div
                      className="overflow-hidden transition-all duration-400 flex flex-col justify-end"
                      style={{ maxHeight: isHov ? "80px" : "0px", opacity: isHov ? 1 : 0 }}
                    >
                      <p className="text-gray-300 text-[11px] leading-relaxed mb-2 truncate" title={industry.description || industry.solution}>
                        {industry.description || industry.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
