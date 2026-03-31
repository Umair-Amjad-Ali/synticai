"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
}

function AnimatedCounter({ value, suffix = "", prefix = "", inView }: {
  value: number; suffix?: string; prefix?: string; inView: boolean;
}) {
  const spring = useSpring(0, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);
  useEffect(() => { if (inView) spring.set(value); }, [inView, spring, value]);
  return <motion.span>{display}</motion.span>;
}

export default function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-bg mb-2">
            <span className="inline-block border-l-4 border-brand pl-4">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed pl-5 mt-2">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: "rgba(28,117,188,0.5)", transition: { duration: 0.2 } }}
              className="group relative flex flex-col gap-4 rounded-2xl p-6 md:p-8"
              style={{
                background: "linear-gradient(145deg, #f0f6ff 0%, #fafcff 100%)",
                border: "1.5px solid rgba(28,117,188,0.13)",
                boxShadow: "0 4px 24px rgba(28,117,188,0.07)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1C75BC22 0%, #45d1f522 100%)",
                  border: "1px solid rgba(28,117,188,0.18)",
                }}
              >
                <span className="text-brand">{stat.icon}</span>
              </div>

              {/* Number */}
              <div
                className="text-2xl md:text-4xl font-black leading-none tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #0A051E 20%, #1C75BC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={isInView} />
              </div>

              {/* Label */}
              <div>
                <p className="text-[13px] font-semibold text-dark-bg">{stat.label}</p>
              </div>

              {/* Animated bottom accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full overflow-hidden bg-transparent">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 1.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  style={{ background: "linear-gradient(90deg, #1C75BC, #45d1f5)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
