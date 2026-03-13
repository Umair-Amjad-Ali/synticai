"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";

export default function IndustrySection({
  ind,
  idx,
}: {
  ind: (typeof industriesData)[0];
  idx: number;
}) {
  const Icon = ind.icon;
  const isLight = idx % 2 !== 0;
  const flip = idx % 2 !== 0;

  return (
    <section
      id={String(ind.id)}
      className={`w-full py-16 lg:py-24 relative ${
        isLight ? "bg-white" : "bg-dark-bg"
      }`}
    >
      {/* Top hairline */}
      <div
        className={`absolute top-0 inset-x-0 h-px ${
          isLight ? "bg-gray-100" : "bg-white/5"
        }`}
      />

      {/* Ambient color splash (dark mode only) */}
      {!isLight && (
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
          style={{ background: ind.color }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className={`flex flex-col ${
            flip ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 lg:gap-20 items-start`}
        >
          {/* ── VISUAL PANEL ─────────────────────────────────────── */}
          <div className="w-full lg:w-[46%] shrink-0">
            {/* Top label strip */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${ind.color}18`, border: `1px solid ${ind.color}30` }}
              >
                <Icon className="w-4 h-4" style={{ color: ind.color }} strokeWidth={1.8} />
              </div>
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.3em]"
                style={{ color: ind.color }}
              >
                {ind.name}
              </span>
            </div>

            {/* Main card */}
            <div
              className={`rounded-2xl overflow-hidden border ${
                isLight
                  ? "border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
                  : "border-white/8 shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Colored banner top */}
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(to right, ${ind.color}, ${ind.color}44)`,
                }}
              />

              {/* Metrics row */}
              <div
                className={`grid grid-cols-3 divide-x ${
                  isLight ? "divide-gray-100 bg-gray-50" : "divide-white/5 bg-dark-card-2/40"
                }`}
              >
                {ind.impact.map((imp, i) => (
                  <div key={i} className="flex flex-col items-center py-6 px-3 text-center">
                    <span
                      className="text-2xl md:text-3xl font-extrabold tracking-tight"
                      style={{ color: ind.color }}
                    >
                      {imp.metric}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${
                        isLight ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {imp.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capabilities grid */}
              <div
                className={`p-5 border-t ${
                  isLight ? "border-gray-100 bg-white" : "border-white/5 bg-dark-card-2/20"
                }`}
              >
                <p
                  className={`text-[9px] font-extrabold uppercase tracking-[0.25em] mb-3 ${
                    isLight ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Core Capabilities
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {ind.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-semibold border ${
                        isLight
                          ? "bg-gray-50 border-gray-200 text-gray-600"
                          : "bg-white/3 border-white/8 text-gray-300"
                      }`}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: ind.color }}
                      />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack footer */}
              <div
                className={`px-5 py-4 border-t flex items-center gap-3 flex-wrap ${
                  isLight ? "border-gray-100 bg-gray-50" : "border-white/5 bg-dark-bg/60"
                }`}
              >
                <span
                  className={`text-[9px] font-extrabold uppercase tracking-widest shrink-0 ${
                    isLight ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Stack:
                </span>
                {ind.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${
                      isLight
                        ? "bg-white border-gray-200 text-gray-600"
                        : "bg-dark-card-2 border-white/8 text-gray-400"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── EDITORIAL CONTENT ─────────────────────────────── */}
          <div className="w-full lg:flex-1 flex flex-col justify-center pt-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: `${ind.color}80` }} />
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.3em]"
                style={{ color: ind.color }}
              >
                Industry Solution
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.08] mb-2 ${
                isLight ? "text-[#0B0720]" : "text-white"
              }`}
            >
              {ind.name}
            </h2>

            {/* Tagline */}
            <p
              className={`text-base font-medium mb-8 ${
                isLight ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {ind.tagline}
            </p>

            {/* Problem */}
            <div className="mb-6">
              <p
                className={`text-[10px] font-extrabold uppercase tracking-[0.25em] mb-2 ${
                  isLight ? "text-gray-400" : "text-gray-500"
                }`}
              >
                The Problem
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  isLight ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {ind.challenge}
              </p>
            </div>

            {/* Solution */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                background: `${ind.color}0D`,
                borderLeft: `3px solid ${ind.color}`,
                border: `1px solid ${ind.color}20`,
                borderLeftWidth: "3px",
                borderLeftColor: ind.color,
              }}
            >
              <p
                className="text-[10px] font-extrabold uppercase tracking-[0.25em] mb-2"
                style={{ color: ind.color }}
              >
                Our Approach
              </p>
              <p
                className={`text-sm leading-relaxed font-medium ${
                  isLight ? "text-gray-700" : "text-gray-200"
                }`}
              >
                {ind.solution}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-3 text-sm font-bold w-fit transition-all duration-300 ${
                isLight ? "text-[#0B0720] hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: `${ind.color}50`,
                  background: `${ind.color}12`,
                }}
              >
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  style={{ color: ind.color }}
                />
              </div>
              <span>Start a Project in {ind.name.split(" ")[0]}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
