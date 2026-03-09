"use client";

import { motion } from "framer-motion";
import { Zap, Users, Target, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Relentless Innovation",
    desc: `We never settle for "standard." We push the boundaries of what AI can achieve — constantly researching, building, testing, and reinventing our approach to deliver products that lead markets.`,
    wide: true,
    accent: false,
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Client Value",
    desc: "We strive to exceed our clients' expectations and deliver measurable results that positively impact their business.",
    wide: false,
    accent: true,
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Absolute Transparency",
    desc: "No black boxes. We communicate clearly, honestly, and proactively with all partners.",
    wide: false,
    accent: false,
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Accountability",
    desc: "We take responsibility for our actions and outcomes, holding ourselves accountable for our performance.",
    wide: false,
    accent: false,
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Empathetic Design",
    desc: "Human needs sit at the center of our engineering. Code doesn't matter if it's hard to use.",
    wide: false,
    accent: false,
  },
];

export default function AboutCoreValues() {
  return (
    <div className="relative w-full bg-[#060B18] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#1C75BC]" />
            <span className="text-[#1C75BC] text-xs font-bold uppercase tracking-[0.25em]">What We Stand For</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-xl border-l-4 border-[#1C75BC] pl-4">
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
                  ? "bg-[#1C75BC] border border-[#1C75BC]"
                  : "bg-[#0D1530] border border-white/8 hover:border-[#1C75BC]/40 group",
              ].join(" ")}
            >
              <div
                className={[
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                  val.accent
                    ? "bg-white/15 text-white"
                    : "bg-[#1C75BC]/15 text-[#45d1f5] group-hover:bg-[#1C75BC]/25 transition-colors",
                ].join(" ")}
              >
                {val.icon}
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
