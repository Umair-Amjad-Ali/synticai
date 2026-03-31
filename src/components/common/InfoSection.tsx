"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { infoSlides } from "@/data/InfoSectionData";

const textVariants = {
  enter: { opacity: 0, x: -30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
};

const imageVariants = {
  enter: { opacity: 0, scale: 0.94, y: 20 },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.04, y: -20 },
};

export default function InfoSection() {
  const [current, setCurrent] = useState(0);
  const slide = infoSlides[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % infoSlides.length);
  };

  return (
    <section className="pt-20 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {/* Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-bg mb-8 leading-tight">
                <span className="inline-block border-l-4 border-brand pl-4">
                  {slide.title}
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5 mb-10">
                {slide.paragraphs.map((para, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {para}
                    </p>
                  </div>
                ))}
              </div>

              {/* Step Dots */}
              <div className="flex items-center gap-2 mb-8">
                {infoSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-6 h-2 bg-brand"
                        : "w-2 h-2 bg-gray-200 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Button */}
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: "linear-gradient(to right, #1C75BC, #000000)" }}
                className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-[0_10px_30px_rgba(28,117,188,0.3)] hover:shadow-[0_15px_40px_rgba(28,117,188,0.45)] transition-shadow cursor-pointer flex items-center gap-3"
              >
                Get A Quote
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: Image Composition ── */}
        <div className="flex-1 flex justify-center relative w-full lg:max-w-[600px] mt-10 md:mt-0">
          {/* Ambient Glows */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-10 w-64 h-64 bg-brand rounded-full blur-[80px] -z-20"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 w-72 h-72 bg-brand-light rounded-full blur-[90px] -z-20"
          />

          {/* Rotating wireframe ring */}
          <div className="absolute -inset-4 md:-inset-10 border border-gray-200/50 rounded-full border-dashed animate-[spin_60s_linear_infinite] -z-10 opacity-30" />

          {/* Dot grid */}
          <div className="absolute top-10 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(28,117,188,0.2)_2px,transparent_2px)] bg-size-[12px_12px] opacity-70 -z-10" />

          {/* Main image stack */}
          <div className="relative w-full max-w-[480px] aspect-4/5 sm:aspect-square md:aspect-4/3 group perspective-1000">

            {/* Offset animated back frame */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-4 inset-y-[-20px] rounded-4xl border-2 border-brand/20 bg-brand/5 backdrop-blur-sm -z-10"
            />

            {/* Animated image container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full rounded-4xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50 bg-white"
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover scale-105 transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-bl from-brand/20 via-transparent to-dark-bg/60 opacity-60 mix-blend-multiply" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-linear-to-t from-dark-bg to-transparent rounded-full blur-3xl opacity-50" />
              </motion.div>
            </AnimatePresence>

            {/* Floating stat card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${current}`}
                initial={{ opacity: 0, y: 16, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -bottom-4 -left-4 md:-left-8 lg:-bottom-6 z-20 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(28,117,188,0.15)] flex flex-col gap-2 min-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-linear-to-br from-brand to-brand-light flex items-center justify-center p-0.5 shadow-inner shrink-0">
                    <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-dark-bg font-black text-xl tracking-tighter leading-none mb-0.5">
                      {slide.stat.value}
                    </p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                      {slide.stat.label}
                    </p>
                  </div>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mt-1">
                  <motion.div
                    key={`bar-${current}`}
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-brand to-brand-light rounded-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating badge - top right */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: 0.25 }}
                className="absolute top-6 -right-6 md:-right-8 z-20 bg-dark-bg text-white border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-brand-light animate-ping" />
                <p className="text-xs font-bold tracking-widest uppercase">{slide.badge}</p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
