"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifePhotoGrid() {
  return (
    <section className="w-full relative z-20 py-24 bg-[#0A051E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Premium Bento Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6 relative">
          
          {/* Main Tall Image (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[300px] md:min-h-[500px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
              alt="Team collaboration" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 via-transparent to-transparent group-hover:opacity-60 transition-opacity duration-300" />
          </motion.div>
          
          {/* Top Right Square */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-square group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
              alt="Strategy session" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-300" />
          </motion.div>

          {/* Bottom Right Square */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-square group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" 
              alt="Desk work" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-300" />
          </motion.div>
          
          {/* Optional Wide Bottom Image (Spans both columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-21/9 md:aspect-3/1 group mt-2"
          >
            <Image 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" 
              alt="Office hangout" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/90 via-transparent to-transparent group-hover:opacity-60 transition-opacity duration-300" />
          </motion.div>

        </div>

        {/* Right Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 max-w-lg lg:ml-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-linear-to-r from-[#1C75BC] to-[#45d1f5]" />
            <span className="text-[#45d1f5] text-xs font-black uppercase tracking-[0.3em]">The Environment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Spaces built for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1C75BC] to-[#45d1f5]">
              deep focus
            </span> & play.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Whether you&apos;re whiteboarding a complex LLM architecture, or grabbing a coffee with the design team. Our remote-first and hybrid hubs are engineered to support how you work best.
          </p>
          
          <ul className="space-y-4">
            {["State-of-the-art hybrid workspaces", "Yearly company off-sites and retreats", "Ergonomic home office stipends"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1C75BC]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
