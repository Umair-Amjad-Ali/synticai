"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { team } from "@/data/AboutTeamData";



export default function AboutTeam() {
  const newLocal = "w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand-light hover:bg-brand/10 transition-all duration-200";
  return (
    <section className="relative w-full bg-[#060B18] pb-24 pt-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">The People Behind It</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-xl border-l-4 border-brand pl-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A collective of engineers, researchers, and builders united by one mission — forging the future of AI.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className={`group flex flex-col ${idx % 2 !== 0 ? "lg:mt-10" : ""}`}
            >
              {/* Card shell */}
              <div className="relative bg-[#0B1224] border border-white/[0.07] rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-brand/50 group-hover:shadow-[0_0_40px_rgba(28,117,188,0.12)]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B1224] via-[#0B1224]/50 to-transparent" />

                  <span className="absolute top-4 right-5 text-4xl font-black text-white/20 select-none leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                    <p className="text-brand text-[10px] font-black uppercase tracking-[0.22em] mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-white text-xl font-extrabold leading-tight">{member.name}</h3>
                  </div>
                </div>

                <div className="h-px w-full bg-brand/30" />

                <div className="px-5 py-4 flex-1">
                  <p className="text-gray-400 text-[13px] leading-relaxed">{member.bio}</p>
                </div>

                <div className="px-5 pb-5 flex items-center gap-2">
                  {[
                    { icon: <Linkedin className="w-3.5 h-3.5" />, href: member.linkedin, label: "LinkedIn" },
                    { icon: <Twitter className="w-3.5 h-3.5" />, href: member.twitter, label: "Twitter" },
                    { icon: <Github className="w-3.5 h-3.5" />, href: member.github, label: "GitHub" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={newLocal}
                    >
                      {s.icon}
                    </a>
                  ))}
                  <div className="flex-1 h-px bg-white/5 ml-2" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-brand" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
