"use client";

import { motion } from "framer-motion";
import { Target, Heart, Coffee, Smile, Monitor, Plane } from "lucide-react";

const perks = [
  {
    title: "Continuous Learning",
    desc: "Generous budget for courses, conferences, and books to keep your skills sharp.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Health & Wellness",
    desc: "Top-tier health coverage, fitness subsidies, and mental wellness stipends.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Caffeine & Snacks",
    desc: "Fully stocked kitchen with premium coffee, energy drinks, and healthy snacks.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Hybrid Workspace",
    desc: "Ergonomic home office stipends plus access to state-of-the-art hubs.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "Work from Anywhere",
    desc: "We support true remote flexibility. Work from anywhere in the world for 30 days a year.",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    title: "Team Retreats",
    desc: "Annual off-sites to amazing destinations to unwind, bond, and build culture.",
    icon: <Smile className="w-6 h-6" />,
  },
];

export default function LifePerks() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#1C75BC]" />
            <span className="text-[#1C75BC] text-xs font-bold uppercase tracking-[0.25em]">Benefits</span>
            <div className="w-8 h-px bg-[#1C75BC]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A051E] mb-6 tracking-tight max-w-2xl">
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
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(28,117,188,0.08)] transition-all duration-300 overflow-hidden"
            >
              <div className="w-14 h-14 bg-[#1C75BC]/10 rounded-2xl flex items-center justify-center text-[#1C75BC] mb-6 group-hover:bg-[#1C75BC] group-hover:text-white transition-colors duration-300 shadow-sm">
                {perk.icon}
              </div>
              <h4 className="text-[#0A051E] font-bold text-xl mb-3">{perk.title}</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed relative z-10">{perk.desc}</p>
              
              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1C75BC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
