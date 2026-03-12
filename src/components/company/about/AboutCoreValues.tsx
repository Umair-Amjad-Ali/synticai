"use client";

import { motion } from "framer-motion";
import { values } from "@/data/AboutCoreValuesData";



export default function AboutCoreValues() {
  return (
    <div className="relative w-full bg-dark-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">What We Stand For</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-xl border-l-4 border-brand pl-4">
            Core Values That Drive Our Brand Forward
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            The principles that guide every decision — from lines of code to client handshakes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={[
                "rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300",
                val.wide ? "lg:col-span-2" : "",
                val.accent
                  ? "bg-brand border border-brand"
                  : "bg-[#0D1530] border border-white/8 hover:border-brand/40 group",
              ].join(" ")}
            >
              <div
                className={[
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                  val.accent
                    ? "bg-white/15 text-white"
                    : "bg-brand/15 text-brand group-hover:bg-brand/25 transition-colors",
                ].join(" ")}
              >
                <val.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className={`font-bold mb-3 ${val.wide ? "text-2xl" : "text-xl"} text-white`}>{val.title}</h3>
                <p className={`leading-relaxed ${val.accent ? "text-white/80" : "text-gray-400"} ${val.wide ? "" : "text-sm"}`}>
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
