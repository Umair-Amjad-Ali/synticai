"use client";

import { motion } from "framer-motion";
import { Users, Zap, Target, Globe, Heart } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="About Us"
        subtitle="We forge intelligent engines that drive global enterprises into the future."
      />

      <div className="w-full bg-white relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A051E] mb-6">
              <span className="inline-block border-l-4 border-[#1C75BC] pl-4">Our Mission</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              At SynticAI, we don't just build software. We forge intelligent engines that drive global enterprises into the future. Our core mission is to democratize highly advanced, enterprise-grade AI and custom software, making it accessible, scalable, and radically transformational for any business.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#1C75BC]/10 text-[#1C75BC] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-[#0A051E] mb-1">50+</h3>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Products Shipped</p>
              </div>
              <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#1C75BC]/10 text-[#1C75BC] flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-[#0A051E] mb-1">12</h3>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Countries Served</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              alt="Modern office architecture"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="bg-[#F8F9FA] py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A051E] mb-4">Our Core Values</h2>
              <p className="text-gray-500 max-w-2xl mx-auto mb-16">The principles that guide our every decision, from lines of code to client handshakes.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Relentless Innovation", desc: "We never settle for \"standard.\" We push the boundaries of what AI can achieve.", icon: <Zap /> },
                { title: "Absolute Transparency", desc: "No black boxes. We communicate clearly, honestly, and proactively with all partners.", icon: <Users /> },
                { title: "Empathetic Design", desc: "Code doesn't matter if it's hard to use. Human needs sit at the center of our engineering.", icon: <Heart /> }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1C75BC]/10 text-[#1C75BC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1C75BC] group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A051E] mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
