"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PortfolioItem } from "@/data/PortfolioData";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface CaseStudyLayoutProps {
  project: PortfolioItem;
}

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const router = useRouter();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <article className="bg-white min-h-screen">

      {/* ── Hero: dark bg, image right, text left ── */}
      <section className="relative bg-[#0A051E] pt-32 pb-0 overflow-hidden">
        {/* subtle glow blobs */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#1C75BC]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#45d1f5]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          {/* Back */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            {/* Left: title block */}
            <div className="pb-16 md:pb-24">
              {/* Category / year */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-[#1C75BC]/20 border border-[#1C75BC]/30 text-[#45d1f5] text-[11px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-gray-500 text-[13px] font-mono">{project.year} · {project.duration}</span>
              </div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-[16px] leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Right: project image (slides up and overlaps section border) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-4/3 rounded-t-2xl overflow-hidden shadow-[0_-20px_60px_rgba(28,117,188,0.15)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A051E]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-[#F8F9FA] border-y border-gray-100 py-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 shrink-0 mr-2">Technologies</span>
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#0A051E] text-[12px] font-semibold hover:border-[#1C75BC] hover:text-[#1C75BC] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── Project Details ── */}
      <section ref={contentRef} className= " pt-8 md:pt-8 pb-16 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A051E] mb-4">
              <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
                Project Details
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] max-w-2xl leading-relaxed">
              A full breakdown of the features and modules delivered as part of this project.
            </p>
          </motion.div>

          {/* Meta stats — horizontal strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-stretch mb-6 rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-x divide-gray-100"
          >
            {([
              { label: "Category", value: project.category, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C75BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
              { label: "Year", value: project.year, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C75BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
              { label: "Duration", value: project.duration, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C75BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { label: "Stack Size", value: `${project.technologies.length} Technologies`, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C75BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
            ] as const).map((item) => (
              <div key={item.label} className="flex-1 min-w-[130px] flex items-center gap-3 px-6 py-5 bg-white hover:bg-[#F8F9FA] transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] border border-[#1C75BC]/10 flex items-center justify-center shrink-0">{item.icon}</div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                  <p className="text-[#0A051E] font-extrabold text-[14px]">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Features bento grid */}
          <div className="rounded-2xl bg-[#0A051E] p-8 md:p-10 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1C75BC]/15 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <p className="text-white font-extrabold text-lg">Key Features</p>
              <span className="px-3 py-1 rounded-full bg-[#1C75BC]/20 border border-[#1C75BC]/30 text-[#45d1f5] text-[11px] font-bold uppercase tracking-widest">
                {project.features.length} Modules
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-[#1C75BC]/40 transition-all duration-300"
                >
                  {/* Number badge */}
                  <div className="shrink-0 w-7 h-7 rounded-lg bg-[#1C75BC]/20 border border-[#1C75BC]/30 text-[#45d1f5] font-black text-[11px] flex items-center justify-center group-hover:bg-[#1C75BC] group-hover:text-white group-hover:border-[#1C75BC] transition-colors duration-300 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-300 text-[13px] md:text-[14px] leading-relaxed group-hover:text-white transition-colors duration-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ── Results ── */}
      <section className="pb-16 md:pb-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A051E] mb-4">
              <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
                Key Results & Impact
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Measurable business outcomes delivered through this project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-stretch gap-0 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(28,117,188,0.1)] hover:border-[#1C75BC]/25 transition-all duration-300"
              >
                {/* Left accent bar with number */}
                <div className="flex flex-col items-center justify-start pt-7 px-5 bg-[#F8F9FA] group-hover:bg-[#1C75BC] transition-colors duration-300 min-w-[64px] border-r border-gray-100 group-hover:border-[#1C75BC]">
                  <span className="text-[#1C75BC] group-hover:text-white font-black text-[18px] leading-none transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Text */}
                <div className="p-6">
                  <p className="text-[#0A051E] font-semibold text-[15px] md:text-[16px] leading-relaxed">
                    {result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
}
