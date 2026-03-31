"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutMission() {
  const newLocal = "w-8 h-8 rounded-lg bg-brand flex items-center justify-center";
  const newLocal_1 = "w-8 h-px bg-brand";
  const newLocal_2 = "w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0";
  return (
    <div className="relative w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              alt="SynticAI Mission"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-xl flex items-center gap-3 shadow-lg">
              <div className={newLocal}>
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-dark-bg font-black text-lg leading-none">12</p>
                <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">Countries Served</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={newLocal_1} />
              <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-bg tracking-tight max-w-lg border-l-4 border-brand pl-4">
            Our Mission
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 mt-5">
              At SynticAI, we don&apos;t just build software. We forge intelligent engines that drive global
              enterprises into the future. Our core mission is to democratize highly advanced, enterprise-grade
              AI — making it accessible, scalable, and radically transformational for any business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, value: "110+", label: "Products Shipped" },
                { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, value: "100%", label: "In-House Talent" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 bg-[#F5F7FA] rounded-2xl border border-gray-100"
                >
                  <div className={newLocal_2}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-dark-bg leading-none">{s.value}</p>
                    <p className="text-[9px] sm:text-[11px] uppercase tracking-normal sm:tracking-widest text-gray-400 font-bold mt-1 leading-[1.2]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
