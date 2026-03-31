"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { whyChooseUsData } from "@/data/AboutWhyChooseUsData";

export default function AboutWhyChoose() {
  const left = whyChooseUsData.slice(0, 3);
  const right = whyChooseUsData.slice(3);

  return (
    <section className="relative w-full bg-white pb-24 pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">Our Differentiators</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-bg tracking-tight max-w-lg border-l-4 border-brand pl-4">
            Why Choose SynticAI?
          </h2>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-6 items-center">

          {/* Left features */}
          <div className="flex flex-col gap-4">
            {left.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(28,117,188,0.15), 0 2px 8px rgba(0,0,0,0.08)' }}
              >
                {/* Top accent bar */}
                {/* <div className="h-[3px] w-full bg-linear-to-r from-[#1C75BC] to-[#45d1f5]" /> */}
                <div className="p-5 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-white"
                    style={{ backgroundImage: "linear-gradient(to right, #1C75BC, #000000)" }}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold text-dark-bg mb-1 leading-tight">{f.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                  </div>
                  <span className="text-[11px] font-black text-brand/50 tabular-nums shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block w-[280px] xl:w-[320px] shrink-0"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(28,117,188,0.15)] border border-brand/10" style={{ aspectRatio: "3/4" }}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="SynticAI Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060B18]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center">
                  <p className="text-white text-2xl font-black leading-none">110+</p>
                  <p className="text-brand text-[11px] font-bold uppercase tracking-widest mt-1">Products Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-4">
            {right.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(28,117,188,0.15), 0 2px 8px rgba(0,0,0,0.08)' }}
              >
                {/* <div className="h-[3px] w-full bg-linear-to-r from-[#1C75BC] to-[#45d1f5]" /> */}
                <div className="p-5 flex gap-4 items-start">
                 
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-white"
                    style={{ backgroundImage: "linear-gradient(to right, #1C75BC, #000000)" }}>
                     <f.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold text-dark-bg mb-1 leading-tight">{f.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                  </div>
                  <span className="text-[11px] font-black text-brand/50 tabular-nums shrink-0 mt-0.5">{String(i + 4).padStart(2, '0')}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
