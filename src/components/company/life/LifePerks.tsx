"use client";

import { motion } from "framer-motion";
import { perks } from "@/data/LifePerksData";


export default function LifePerks() {
  return (
    <section className="w-full bg-[#f8fafc] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-start mb-16 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">Benefits</span>
            <div className="w-8 h-px bg-brand" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight max-w-lg border-l-4 border-brand pl-4">
            Perks that support <br/>your best work.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(28,117,188,0.1)] overflow-hidden transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                <perk.icon className="w-6 h-6" />
              </div>
              <h4 className="text-dark-bg font-bold text-xl mb-3">{perk.title}</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed relative z-10">{perk.desc}</p>
              
              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
