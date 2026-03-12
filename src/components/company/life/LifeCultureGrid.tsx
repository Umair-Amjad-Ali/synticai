"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cultureItems } from "@/data/LifeCultureData";
import Image from "next/image";


function SelectionCard({ item, isActive, onClick }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-distant w-full">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full relative"
      >
        <button
          onClick={onClick}
          className={`w-full group flex items-center justify-between p-3 md:p-4 rounded-[16px] transition-all duration-300 border-l-4 text-left bg-white ${
            isActive 
              ? "border-brand shadow-[0_12px_35px_rgba(28,117,188,0.15)] bg-linear-to-r from-[#f8fbff] to-white" 
              : "border-gray-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:bg-gray-50/80"
          }`}
          style={{ transform: "translateZ(15px)" }} // Entire button base pops out
        >
          <div style={{ transform: "translateZ(10px)" }} className="flex-1 pr-3">
            <h3 className={`font-bold text-base md:text-lg transition-colors duration-300 ${isActive ? "text-brand" : "text-dark-bg group-hover:text-brand"}`}>
              {item.title}
            </h3>
            <p className={`text-[11px] md:text-xs mt-0.5 transition-colors duration-300 ${isActive ? "text-gray-600 font-medium" : "text-gray-400"}`}>
              {item.subtitle}
            </p>
          </div>
          <div 
            style={{ transform: "translateZ(20px)" }} 
            className={`shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive ? "bg-brand text-white rotate-45 shadow-[0_4px_12px_rgba(28,117,188,0.4)]" : "bg-gray-100 text-gray-400 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:bg-gray-200"
            }`}
          >
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export default function LifeCultureGrid() {
  const [activeId, setActiveId] = useState(cultureItems[0].id);

  return (
    <section className="w-full relative py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        
        {/* Left Side: Headlines & Navigation */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-[2px] brand-gradient" />
              <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em]">Our DNA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-bg tracking-tight max-w-lg border-l-4 border-brand pl-4">
            More than <br/>just code.
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 mt-5">
              Step inside SynticAI and discover a culture built on relentless innovation, unwavering support, and genuine human connection.
            </p>
          </motion.div>

          {/* Interactive Menu List (with 3D Cards) */}
          <div className="flex flex-col w-full gap-2">
            {cultureItems.map((item) => (
              <SelectionCard
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={() => setActiveId(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Visual Display Window */}
        <div className="w-full lg:w-[60%] h-[400px] lg:h-[500px] relative rounded-[30px] overflow-hidden shadow-2xl shadow-brand/10 border border-gray-100 group">
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
                  
                  {/* Dark gradient mapping down */}
                  <div className={`absolute inset-0 bg-linear-to-t ${item.color} via-dark-bg/50 to-transparent mix-blend-multiply opacity-80`} />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-dark-bg/30 to-transparent opacity-90" />
                  
                  {/* Floating Content Box */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 border border-white/20">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
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
