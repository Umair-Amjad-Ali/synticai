"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Working at SynticAI means you are constantly surrounded by people who are just as obsessed with perfecting the craft as you are. The level of engineering excellence here is unmatched.",
    name: "Alex Johnson",
    role: "Senior Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "I've never been at a company that truly encourages 'breaking things to learn' like this. Leadership trusts us with autonomy, and that results in our best, most innovative work.",
    name: "Priya Patel",
    role: "Lead Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The ability to work asynchronously from anywhere in the world, while feeling deeply connected to my team, is incredible. SynticAI actually practices the work-life harmony it preaches.",
    name: "Marcus Thorne",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
   {
    quote: "The ability to work asynchronously from anywhere in the world, while feeling deeply connected to my team, is incredible. SynticAI actually practices the work-life harmony it preaches.",
    name: "Marcus Thorne",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
   {
    quote: "The ability to work asynchronously from anywhere in the world, while feeling deeply connected to my team, is incredible. SynticAI actually practices the work-life harmony it preaches.",
    name: "Marcus Thorne",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
   {
    quote: "The ability to work asynchronously from anywhere in the world, while feeling deeply connected to my team, is incredible. SynticAI actually practices the work-life harmony it preaches.",
    name: "Marcus Thorne",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function LifeVoices() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#060B18] py-32 overflow-hidden border-t border-t-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <Quote className="w-16 h-16 text-[#1C75BC]/20 absolute -top-8 -rotate-12" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 relative z-10"
          >
             <div className="w-8 h-px bg-[#1C75BC]" />
             <span className="text-[#1C75BC] text-xs font-bold uppercase tracking-[0.25em]">Inside SynticAI</span>
             <div className="w-8 h-px bg-[#1C75BC]" />
          </motion.div>
        </div>

        {/* Unique Presentation Card */}
        <div className="relative w-full max-w-5xl mx-auto h-[550px] md:h-[350px] rounded-[40px] border border-white/10 bg-linear-to-br from-[#0B1224] to-[#060B18] shadow-2xl shadow-black overflow-hidden flex flex-col md:flex-row">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-[#1C75BC]/10 to-transparent blur-[80px] pointer-events-none" />

          {/* Nav / Avatars Column (Left/Top) */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col justify-start md:justify-center items-center gap-6 p-8 md:p-12 md:border-r border-white/10 relative z-10 bg-black/20 md:bg-transparent md:h-full overflow-x-auto md:overflow-y-auto overflow-hidden no-scrollbar">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`relative shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  current === idx ? "border-[#45d1f5] shadow-[0_0_20px_rgba(69,209,245,0.4)] md:scale-110 z-10" : "border-transparent opacity-50 hover:opacity-100 md:scale-90"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
                {current !== idx && <div className="absolute inset-0 bg-black/40" />}
              </button>
            ))}
          </div>

          {/* Quote Content Column (Right/Bottom) */}
          <div className="flex-1 relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center p-8 md:p-16"
              >
                <Quote className="w-10 h-10 text-[#1C75BC]/30 mb-6" />
                <p className="text-xl md:text-3xl font-medium text-white leading-relaxed md:leading-snug mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">{testimonials[current].name}</h4>
                  <p className="text-[#45d1f5] text-xs font-bold tracking-widest uppercase mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
