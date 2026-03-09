"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Globe2, Heart, Cpu, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const cultureItems = [
  {
    id: "engineering",
    title: "Engineering Excellence",
    subtitle: "We don't settle for 'good enough'.",
    desc: "Our teams are empowered to experiment, break things (safely), and push the boundaries of modern AI architecture. We prioritize elegant, scalable solutions over quick patches.",
    icon: <Cpu className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#1C75BC]",
  },
  {
    id: "global",
    title: "Global Mindset",
    subtitle: "Brilliance has no borders.",
    desc: "Collaborate with brilliant minds across 12+ countries. We believe that diverse perspectives and cultural backgrounds are the true drivers of our most innovative ideas.",
    icon: <Globe2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#45d1f5]",
  },
  {
    id: "harmony",
    title: "Work-Life Harmony",
    subtitle: "Burnout isn't a badge of honor.",
    desc: "Flexible schedules, remote-first policies, and true asynchronous work patterns keep us energized and focused when we need to be.",
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500",
  },
];

export default function LifeCultureGrid() {
  const [activeId, setActiveId] = useState(cultureItems[0].id);

  return (
    <section className="w-full relative py-24 pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Headlines & Navigation */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-linear-to-r from-[#1C75BC] to-[#45d1f5]" />
              <span className="text-[#45d1f5] text-xs font-black uppercase tracking-[0.3em]">Our DNA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A051E] mb-6 tracking-tight leading-tight">
              More than <br/>just code.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              Step inside SynticAI and discover a culture built on relentless innovation, unwavering support, and genuine human connection.
            </p>
          </motion.div>

          {/* Interactive Menu List */}
          <div className="flex flex-col gap-2">
            {cultureItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border-l-4 text-left ${
                    isActive 
                      ? "bg-[#f8fafc] border-[#1C75BC] shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
                      : "bg-transparent border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-xl transition-colors duration-300 ${isActive ? "text-[#1C75BC]" : "text-[#0A051E] group-hover:text-[#1C75BC]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors duration-300 ${isActive ? "text-gray-600 font-medium" : "text-gray-400"}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-[#1C75BC] text-white rotate-45" : "bg-gray-100 text-gray-400"}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Display Window */}
        <div className="w-full lg:w-2/3 h-[500px] lg:h-[650px] relative rounded-[40px] overflow-hidden shadow-2xl shadow-[#1C75BC]/10 border border-gray-100 group">
          <AnimatePresence mode="popLayout">
            {cultureItems.map((item) => 
               activeId === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Heavy dark gradient overlay at bottom for text readability */}
                  <div className={`absolute inset-0 bg-linear-to-t ${item.color} via-[#0A051E]/60 to-transparent mix-blend-multiply opacity-80`} />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A051E] via-[#0A051E]/40 to-transparent opacity-90" />
                  
                  {/* Floating Content Box */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-xl">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                        {item.icon}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
