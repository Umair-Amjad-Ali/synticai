"use client";

import { motion } from "framer-motion";
import { Target, Heart, Coffee, Smile } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";

export default function LifeAtSynticAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Life at SynticAI"
        subtitle="We believe that the best products are built by happy, healthy, and inspired teams."
      />

      <div className="w-full bg-[#0A051E] relative z-20 py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              More Than Just Code
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Step inside SynticAI and discover a culture built on relentless innovation, unwavering support, and genuine human connection.
            </p>
          </motion.div>

          {/* Photo Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 h-auto md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 relative h-[300px] md:h-full rounded-3xl overflow-hidden group"
            >
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 to-transparent" />
              <div className="absolute bottom-6 left-6"><p className="text-white font-bold text-xl">Collaborative Workspace</p></div>
            </motion.div>
            
            <div className="md:col-span-7 grid grid-rows-2 gap-6 h-full">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[250px] md:h-auto rounded-3xl overflow-hidden group"
              >
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategy meeting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 to-transparent" />
                <div className="absolute bottom-6 left-6"><p className="text-white font-bold text-xl">Strategy Sessions</p></div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6 h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-[200px] md:h-auto rounded-3xl overflow-hidden group"
                >
                  <Image src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop" alt="Company event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 to-transparent" />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative h-[200px] md:h-auto rounded-3xl overflow-hidden group"
                >
                  <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="Remote work" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/80 to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Perks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Continuous Learning", desc: "Generous budget for courses, conferences, and books.", icon: <Target /> },
              { title: "Health & Wellness", desc: "Premium health coverage and mental wellness stipends.", icon: <Heart /> },
              { title: "Caffeine & Snacks", desc: "Fully stocked kitchen with premium coffee and healthy snacks.", icon: <Coffee /> },
              { title: "Team Retreats", desc: "Annual off-sites to amazing destinations to unwind and bond.", icon: <Smile /> },
            ].map((perk, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-[#45d1f5] mb-4">{perk.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{perk.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
