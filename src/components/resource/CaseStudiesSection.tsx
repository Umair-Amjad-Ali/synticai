"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { BarChart2, ChevronRight } from "lucide-react";
import { CaseStudy } from "@/data/resourceData";
import { useRef } from "react";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

function Card3D({ cs, i }: { cs: CaseStudy; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-80, 80], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-12, 12]), { stiffness: 300, damping: 30 });
  const shadowX = useTransform(x, [-80, 80], [-12, 12]);
  const shadowY = useTransform(y, [-80, 80], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([lx, ly]: number[]) =>
              `${-lx}px ${-ly * 0.5 + 8}px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)`
          ),
        }}
        className="group relative rounded-3xl bg-white overflow-hidden transition-colors duration-300 hover:bg-gray-50 p-7 flex flex-col gap-5 cursor-default"
      >
        {/* Subtle inner highlight on top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-white/80 via-white/40 to-transparent pointer-events-none" />

        {/* Vertical + Client */}
        <div className="pt-2" style={{ transform: "translateZ(10px)" }}>
          <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: cs.color }}>
            {cs.vertical}
          </div>
          <div className="text-base font-extrabold text-gray-900">{cs.client}</div>
        </div>

        {/* Problem */}
        <div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">The Problem</div>
          <p className="text-xs text-gray-500 leading-relaxed">{cs.problem}</p>
        </div>

        {/* Solution */}
        <div>
          <div className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: cs.color }}>
            Our Solution
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">{cs.solution}</p>
        </div>

        {/* Results */}
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-1.5" style={{ transform: "translateZ(6px)" }}>
          {cs.results.map((r, ri) => (
            <div key={ri} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: cs.color }} />
              <span className="text-xs font-semibold text-gray-700">{r}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="w-full border-t border-gray-100 py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <BarChart2 className="w-5 h-5 text-brand" />
          <h2 className="text-xl font-extrabold text-gray-900">Case Studies</h2>
        </div>
        <p className="text-gray-400 text-sm mb-10 max-w-xl">
          Real problems. Engineered solutions. Measurable results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Card3D key={cs.id} cs={cs} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
