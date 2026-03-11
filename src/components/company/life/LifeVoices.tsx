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
    quote: "From day one, I felt like my ideas matter. The flat hierarchy here means anyone can pitch a great concept, and if it's solid, the whole team rallies behind building it.",
    name: "Elena Rostova",
    role: "AI Research Scientist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "SynticAI gives you the absolute best tools, the most challenging problems, and the smartest colleagues. It is the ultimate playground for ambitious engineers.",
    name: "Jin Soo",
    role: "DevOps Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The culture here is built on genuine human connection. Even though we are scattered across the globe, the camaraderie and support system make it feel like we share an office.",
    name: "Sarah Jenkins",
    role: "People & Culture Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export default function LifeVoices() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll logic pauses when hovered
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="w-full bg-[#060B18] py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24 relative z-20">
          <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#1C75BC]/20 absolute -top-6 md:-top-8 -rotate-12" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 relative z-10"
          >
             <div className="w-6 md:w-8 h-px bg-[#1C75BC]" />
             <span className="text-[#1C75BC] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Inside SynticAI</span>
             <div className="w-6 md:w-8 h-px bg-[#1C75BC]" />
          </motion.div>
        </div>

        {/* Orbit Constellation Container */}
        <div 
          className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[60%] h-[60%] rounded-full border border-white/5 bg-[#1C75BC]/5 blur-3xl" />
            <div className="absolute w-[80%] h-[80%] rounded-full border border-white/3 border-dashed" />
            <div className="absolute w-full h-full rounded-full border border-white/2" />
          </div>

          {/* Central Quote Hub */}
          <div className="relative z-20 w-[85%] md:w-[60%] bg-[#0B1224]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#45d1f5] shadow-[0_0_20px_rgba(69,209,245,0.4)] mb-6 md:mb-8 md:hidden">
                  <Image src={testimonials[current].image} alt={testimonials[current].name} fill className="object-cover" />
                </div>
                
                <p className="text-lg md:text-2xl font-medium text-white leading-relaxed mb-6 md:mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg">{testimonials[current].name}</h4>
                  <p className="text-[#45d1f5] text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Orbiting Avatar Nodes (Desktop Only) */}
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            {testimonials.map((t, idx) => {
              // Calculate position on an ellipse
              const angle = (idx / testimonials.length) * Math.PI * 2;
              // Add a slight offset to staring angle so it doesn't always start at exact right
              const adjustedAngle = angle - Math.PI / 4; 
              
              const radiusX = 45; // percentage of container width
              const radiusY = 40; // percentage of container height
              
              const left = `${50 + radiusX * Math.cos(adjustedAngle)}%`;
              const top = `${50 + radiusY * Math.sin(adjustedAngle)}%`;
              
              const isActive = current === idx;

              return (
                <div 
                  key={idx}
                  className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{ left, top }}
                >
                  {/* Subtle connection line visualization (simplified with pseudo-glow towards center) */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-[#45d1f5] rounded-full blur-[20px] opacity-40"
                    />
                  )}

                  <motion.button
                    onClick={() => setCurrent(idx)}
                    animate={{
                       y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: isActive ? 4 : 6 + (idx % 3), 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: idx * 0.2
                    }}
                    className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ease-out focus:outline-hidden ${
                      isActive 
                        ? "border-[#45d1f5] shadow-[0_0_30px_rgba(69,209,245,0.6)] scale-125 z-40" 
                        : "border-white/20 opacity-50 hover:opacity-100 hover:scale-110 hover:border-white/50"
                    }`}
                    aria-label={`Show quote from ${t.name}`}
                  >
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                    {!isActive && <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-transparent" />}
                  </motion.button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
