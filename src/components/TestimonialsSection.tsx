"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  project: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bill Kil Patrick",
    title: "CEO of Drive App Suit",
    project: "Automotive App Suite",
    quote: "This is a stellar team. I have assigned contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Kate Callahan",
    title: "President of Memore",
    project: "Website Memore",
    quote: "The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aram Saffarian",
    title: "President of Treaty Health",
    project: "Website Treaty Automation",
    quote: "SynticAI has highly improved our existing app. Their team manages projects to deliver comprehensive, user-friendly solutions with excellent documentation and continuous support.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    title: "Founder of EduSmart",
    project: "AI Learning Platform",
    quote: "The team's grasp of AI technologies is truly impressive. They transformed our rough concept into a fully functional, highly intuitive system that our users absolutely love.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "David Chen",
    title: "CTO of DataGrid Systems",
    project: "Predictive Analytics Engine",
    quote: "Incredible technical depth and problem-solving skills. The models they delivered outperformed our initial benchmarks by 40%, directly boosting our clients' bottom line within weeks.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    title: "Director of Operations",
    project: "Logistics Optimization",
    quote: "SynticAI entirely rebuilt our messy routing algorithm into an AI-driven masterpiece. We're saving thousands weekly just in operational efficiency. I highly recommend this incredible team.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-play interval for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  const getVisibleTestimonials = () => {
    // Array of 3 items: Prev, Current, Next (Wrap around loops)
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    
    return [
      { item: testimonials[prevIndex], position: "prev" },
      { item: testimonials[activeIndex], position: "active" },
      { item: testimonials[nextIndex], position: "next" }
    ];
  };

  return (
    <section className="py-2 bg-gray-50/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header (Aligned with rest of app design) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A051E] mb-4">
            <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
              Don't just take our words for it <span className="text-gray-400 font-medium">– Take theirs!</span>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-3xl leading-relaxed">
            Discover how SynticAI has transformed businesses through our innovative AI solutions and dedicated partnership.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[420px]">
          
          {/* Navigation Arrows (Positioned Outside) */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1C75BC] hover:text-white hover:bg-[#1C75BC] hover:border-[#1C75BC] transition-all duration-300 group"
            aria-label="Previous Testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1C75BC] hover:text-white hover:bg-[#1C75BC] hover:border-[#1C75BC] transition-all duration-300 group"
            aria-label="Next Testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-[380px] flex justify-center items-center perspective-1000 overflow-visible">
            <AnimatePresence initial={false} mode="popLayout">
              {getVisibleTestimonials().map(({ item, position }) => {
                
                // Styling variables based on position
                const isActive = position === "active";
                const isPrev = position === "prev";
                const isNext = position === "next";

                const zIndex = isActive ? 40 : 20;
                const scale = isActive ? 1 : 0.85;
                const opacity = isActive ? 1 : 0.6;
                const filter = isActive ? "blur(0px)" : "blur(2px)";
                
                // Position offsets
                let transformX = 0;
                if (isPrev) transformX = -200; // Shift left
                if (isNext) transformX = 200;  // Shift right

                return (
                  <motion.div
                    key={`${item.id}-${position}`}
                    initial={{ opacity: 0, scale: 0.8, x: isNext ? 300 : -300 }}
                    animate={{ opacity, scale, x: transformX, zIndex, filter }}
                    exit={{ opacity: 0, scale: 0.8, x: isPrev ? -300 : 300 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`absolute overflow-hidden cursor-pointer ${isActive ? 'w-[280px] md:w-[300px]' : 'w-[240px] md:w-[260px] hidden md:block'} rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.1)]`}
                    onClick={() => {
                      if (isPrev) handlePrev();
                      if (isNext) handleNext();
                    }}
                  >
                    {/* The Card Background - Active is Blue Gradient, Inactive is White */}
                    <div className={`w-full h-full min-h-[350px] p-5 md:p-6 transition-colors duration-500 flex flex-col ${isActive ? 'bg-linear-to-br from-[#1C75BC] to-[#0A051E] text-white' : 'bg-white text-[#0A051E] border border-gray-100'}`}>
                      
                      {/* Active Card Accent */}
                      {isActive && (
                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#45d1f5] rounded-full blur-[50px] opacity-40 z-0 pointer-events-none" />
                      )}

                      <div className="relative z-10 flex flex-col h-full text-left">
                        {/* Avatar & Details */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-full border-2 overflow-hidden shadow-sm shrink-0 ${isActive ? 'border-white/30' : 'border-gray-200'}`}>
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className={`font-bold text-base ${isActive ? 'text-white' : 'text-[#0A051E]'}`}>
                              {item.name}
                            </h4>
                            <p className={`text-[12px] font-semibold ${isActive ? 'text-[#45d1f5]' : 'text-[#1C75BC]'}`}>
                              {item.title}
                            </p>
                          </div>
                        </div>

                        {/* Project Heading */}
                        <div className="mb-4">
                          <p className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                            Project
                          </p>
                          <h5 className={`text-[15px] font-bold leading-tight ${isActive ? 'text-white/90' : 'text-gray-800'}`}>
                            {item.project}
                          </h5>
                        </div>

                        {/* Quote Text */}
                        <div className="grow">
                          <p className={`text-[13px] leading-relaxed italic ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                            "{item.quote}"
                          </p>
                        </div>

                        {/* Footer read more button */}
                        <div className={`mt-5 pt-4 border-t ${isActive ? 'border-white/10' : 'border-gray-100'}`}>
                           <span className={`inline-flex items-center gap-2 text-[11.5px] font-bold transition-all hover:gap-3 ${isActive ? 'text-white' : 'text-[#1C75BC]'}`}>
                              Read on Upwork
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                           </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-[#1C75BC]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
