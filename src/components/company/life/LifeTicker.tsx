"use client";

import { motion } from "framer-motion";

const keywords1 = [
  "Innovation First",
  "Radical Candor",
  "Continuous Learning",
  "Global Mindset",
  "Work-Life Harmony",
  "Engineering Excellence",
];

const keywords2 = [
  "Customer Obsession",
  "Inclusive Culture",
  "Future Thinkers",
  "Relentless Growth",
  "Creative Freedom",
  "AI Mavericks",
];

export default function LifeTicker() {
  return (
    <div className="w-full bg-dark-bg py-8 overflow-hidden relative border-y border-white/5 flex flex-col items-center justify-center -mt-px">
      
      {/* The Container holding both strips straight */}
      <div className="relative w-full flex flex-col gap-4 transform-gpu">
        
        {/* Strip 1: Scrolling Left (Stroked Text) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[...keywords1, ...keywords1, ...keywords1, ...keywords1].map((keyword, index) => (
              <div key={index} className="flex items-center">
                <span 
                  className="text-2xl md:text-3xl font-black uppercase tracking-wider px-6 md:px-10 text-transparent" 
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
                >
                  {keyword}
                </span>
                <span className="text-brand text-xl md:text-2xl leading-none">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strip 2: Scrolling Right (Solid Glowing Text) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[...keywords2, ...keywords2, ...keywords2, ...keywords2].map((keyword, index) => (
              <div key={index} className="flex items-center">
                <span className="text-2xl md:text-3xl font-black uppercase tracking-wider px-6 md:px-10 text-white/80">
                  {keyword}
                </span>
                <span className="text-brand-light text-xl md:text-2xl leading-none">✧</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
