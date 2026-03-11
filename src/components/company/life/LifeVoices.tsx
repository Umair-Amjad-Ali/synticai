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
        <div className="flex flex-col items-center mb-12 md:mb-24 relative z-20">
          <Quote className="w-10 h-10 md:w-16 md:h-16 text-[#1C75BC]/20 absolute -top-4 md:-top-8 -rotate-12" />
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

        {/* Desktop Orbit Constellation (Hidden on Mobile) */}
        <div 
          className="hidden md:flex relative w-full max-w-5xl mx-auto aspect-video items-center justify-center"
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
          <div className="relative z-20 w-[60%] bg-[#0B1224]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-2xl font-medium text-white leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-[#1C75BC] text-xs font-bold tracking-widest uppercase mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Orbiting Avatar Nodes */}
          <div className="absolute inset-0 pointer-events-none">
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
                  {/* Subtle connection line visualization */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-[#1C75BC] rounded-full blur-[20px] opacity-40"
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
                        ? "border-[#1C75BC] shadow-[0_0_30px_rgba(69,209,245,0.6)] scale-125 z-40" 
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

        {/* Mobile Testimonial Card (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-center w-full px-2 mt-8">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={current}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-[#0B1224]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative mt-12"
                >
                    {/* Active Avatar Protruding from Top */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[#060B18] shadow-[0_0_20px_rgba(69,209,245,0.3)] overflow-hidden bg-gray-900 z-10">
                        <Image src={testimonials[current].image} alt={testimonials[current].name} fill className="object-cover" />
                    </div>
                    
                    <div className="mt-12 text-center relative z-20">
                        <Quote className="w-8 h-8 text-[#1C75BC]/30 mx-auto mb-4" />
                        <p className="text-[15px] sm:text-base font-medium text-gray-200 leading-relaxed italic mb-6 min-h-[120px] flex items-center justify-center">
                            "{testimonials[current].quote}"
                        </p>
                        <h4 className="text-white font-bold text-base sm:text-lg">{testimonials[current].name}</h4>
                        <p className="text-[#1C75BC] text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1">
                            {testimonials[current].role}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-sm">
                {testimonials.map((t, idx) => (
                   <button
                     key={`mobile-btn-${idx}`}
                     onClick={() => setCurrent(idx)}
                     className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                       current === idx 
                         ? "border-[#1C75BC] scale-110 shadow-[0_0_15px_rgba(69,209,245,0.5)] z-10" 
                         : "border-white/20 opacity-40 hover:opacity-100"
                     }`}
                     aria-label={`Show quote from ${t.name}`}
                   >
                     <Image src={t.image} alt={t.name} fill className="object-cover" />
                   </button>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
