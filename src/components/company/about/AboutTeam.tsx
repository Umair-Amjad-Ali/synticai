"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Muhammad Umair Mushtaq",
    role: "Founder & CEO",
    bio: "Visionary leader driving AI innovation and enterprise software strategy across 12 countries.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Sara Khan",
    role: "Chief Technology Officer",
    bio: "Full-stack architect and ML engineer building the intelligence layer of our products.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Talha Nazeer",
    role: "Head of Backend Technologies",
    bio: "Leading cutting-edge LLM research and deploying next-gen predictive models.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Allah Rakha",
    role: "Head of App Development",
    bio: "Obsessed with design that feels effortless. Shapes every user-facing detail.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Ahsan Ali",
    role: "Lead Engineer",
    bio: "Systems thinker who turns complex requirements into elegant, scalable solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
];

export default function AboutTeam() {
  return (
    <section className="relative w-full bg-[#060B18] pb-24 pt-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1C75BC]/5 blur-[120px] rounded-full" />

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
            <div className="w-8 h-px bg-[#1C75BC]" />
            <span className="text-[#1C75BC] text-xs font-bold uppercase tracking-[0.25em]">The People Behind It</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-xl border-l-4 border-[#1C75BC] pl-4">
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
              /* Stagger: odd cards nudge down on large screens */
              className={`group flex flex-col ${idx % 2 !== 0 ? "lg:mt-10" : ""}`}
            >
              {/* Card shell */}
              <div className="relative bg-[#0B1224] border border-white/[0.07] rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-[#1C75BC]/50 group-hover:shadow-[0_0_40px_rgba(28,117,188,0.12)]">

                {/* ── Photo area ── */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Strong bottom-to-top gradient so text is readable */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B1224] via-[#0B1224]/50 to-transparent" />

                  {/* Index number — top right watermark */}
                  <span className="absolute top-4 right-5 text-4xl font-black text-white/20 select-none leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Name / role floating above bottom edge */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                    <p className="text-[#1C75BC] text-[10px] font-black uppercase tracking-[0.22em] mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-white text-xl font-extrabold leading-tight">{member.name}</h3>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px w-full bg-[#1C75BC]/30" />

                {/* ── Bio ── */}
                <div className="px-5 py-4 flex-1">
                  <p className="text-gray-400 text-[13px] leading-relaxed">{member.bio}</p>
                </div>

                {/* ── Social bar ── */}
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
                      className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#1C75BC] hover:text-[#45d1f5] hover:bg-[#1C75BC]/10 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                  {/* Thin accent line fills rest of bar */}
                  <div className="flex-1 h-px bg-white/5 ml-2" />
                </div>

                {/* Bottom glowing border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[#1C75BC]" />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
