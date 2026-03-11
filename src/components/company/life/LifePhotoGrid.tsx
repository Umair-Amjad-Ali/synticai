"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifePhotoGrid() {
  return (
    <section className="w-full relative z-20 py-16 md:py-20 bg-[#0A051E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Overlapping Image Collage */}
        <div className="flex-1 w-full flex flex-col md:block relative md:h-[450px] perspective-[1000px] mt-10 md:mt-0 order-2 md:order-1 gap-6 md:gap-0">
          
          {/* Back left image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -5, 
              scale: 1.02, 
              zIndex: 30,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:absolute md:top-4 md:left-0 w-full md:w-3/5 h-[220px] sm:h-[300px] md:h-72 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 z-10 md:-rotate-3"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
                alt="Strategy session" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-[#1C75BC]/20 mix-blend-overlay hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Front right image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              rotateY: -8, 
              rotateX: 5, 
              scale: 1.05, 
              zIndex: 40,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative md:absolute md:bottom-4 md:right-0 w-full md:w-[65%] h-[240px] sm:h-[320px] md:h-[320px] rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 z-20 md:rotate-3"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative md:-translate-z-[-20px]">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Team collaboration" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 via-[#0A051E]/20 to-transparent opacity-90" />
              
              {/* Overlay Badge */}
              <div 
                className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center gap-2 shadow-xl"
              >
                 <div className="w-2 h-2 rounded-full bg-[#45d1f5] animate-pulse" />
                 <span className="text-white text-xs font-bold tracking-wide">Remote Hubs</span>
              </div>
            </div>
          </motion.div>

          {/* Floating graphic element removed per user request */}
        </div>

        {/* Right Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 max-w-lg lg:ml-auto order-1 md:order-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-linear-to-r from-[#1C75BC] to-[#101254]" />
            <span className="text-[#1C75BC] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">The Environment</span>
          </div>

           <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-lg border-l-4 border-[#1C75BC] pl-4">
             Spaces built for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1C75BC] to-[#101254]">
              deep focus
            </span> & play.
            </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 mt-5">
            Whether you&apos;re whiteboarding complex LLM architectures, or grabbing coffee with the design team. Our remote-first and hybrid hubs are engineered to support how you work best.
          </p>
          
          <ul className="space-y-4">
            {[
              "State-of-the-art hybrid workspaces", 
              "Yearly company off-sites and retreats", 
              "Ergonomic home office stipends"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1C75BC] shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
