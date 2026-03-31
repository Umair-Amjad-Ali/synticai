"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";

// ── Brand gradient constants ──────────────────────────────────────
const BRAND_GRAD     = "linear-gradient(to right, #1C75BC, #101254)";
const BRAND_GRAD_135 = "linear-gradient(135deg, #1C75BC, #101254)";
const BRAND_START    = "#1C75BC";

export default function IndustrySection({
  ind,
  idx,
}: {
  ind: (typeof industriesData)[0];
  idx: number;
}) {
  const Icon       = ind.icon;
  const isLight    = idx % 2 !== 0;
  const flip       = idx % 2 !== 0;
  const sectionNum = String(idx + 1).padStart(2, "0");

  return (
    <section
      id={String(ind.id)}
      className={`w-full relative overflow-hidden ${
        isLight ? "bg-[#F6F9FC]" : "bg-dark-bg"
      }`}
    >
      {/* ── Full-height brand edge stripe ───────────────────── */}
      <div
        className={`absolute top-0 bottom-0 w-[3px] z-10 ${flip ? "right-0" : "left-0"}`}
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${BRAND_START} 20%, #101254 80%, transparent 100%)`,
        }}
      />

      {/* ── Light section: dot texture + brand side glow ────── */}
      {isLight && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(28,117,188,0.07) 1px, transparent 1px)`,
              backgroundSize: "26px 26px",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: "700px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(28,117,188,0.08) 0%, transparent 70%)",
              [flip ? "right" : "left"]: "-150px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </>
      )}

      {/* ── Dark section: ind.color ambient glow ────────────── */}
      {!isLight && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: "900px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(ellipse, ${ind.color}0E 0%, transparent 65%)`,
            [flip ? "right" : "left"]: "-250px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      )}

      {/* ── Top hairline ─────────────────────────────────────── */}
      <div
        className={`absolute top-0 inset-x-0 h-px ${
          isLight ? "bg-blue-100" : "bg-white/6"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ── META BAR ────────────────────────────────────────── */}
          <div
            className={`flex items-center justify-between py-4 border-b ${
              isLight ? "border-blue-100" : "border-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-extrabold text-[10px] uppercase tracking-[0.38em] tabular-nums"
                style={{
                  background: BRAND_GRAD,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {sectionNum}
              </span>
              <div
                className="w-px h-3.5"
                style={{ background: "linear-gradient(to bottom, #1C75BC, #101254)" }}
              />
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{
                  background: "rgba(28,117,188,0.12)",
                  border: "1px solid rgba(28,117,188,0.28)",
                }}
              >
                <Icon className="w-3 h-3" style={{ color: BRAND_START }} strokeWidth={1.8} />
              </div>
              <span
                className={`text-[10px] font-extrabold uppercase tracking-[0.25em] ${
                  isLight ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Industry Solution
              </span>
            </div>

            <Link
              href="/contact"
              className={`hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-opacity opacity-40 hover:opacity-100 ${
                isLight ? "text-brand" : "text-gray-400"
              }`}
            >
              Discuss Your Project
              <ArrowUpRight className="w-3 h-3 shrink-0" />
            </Link>
          </div>

          {/* ── MAIN 12-COL GRID ──────────────────────────────── */}
          <div
            className={`grid lg:grid-cols-12 items-center gap-0 py-16 lg:py-20 ${
              flip ? "lg:[direction:rtl]" : ""
            }`}
          >
            {/* ══ VISUAL PANEL — cols 1–6 ══════════════════════════ */}
            <div
              className={`lg:col-span-6 flex flex-col justify-center gap-4 ${
                flip
                  ? "[direction:ltr] lg:border-r border-b lg:border-b-0 pb-12 lg:pb-0 lg:pr-10"
                  : "border-b lg:border-b-0 lg:border-r pb-12 lg:pb-0 lg:pr-10"
              } ${isLight ? "border-blue-100" : "border-white/5"}`}
            >

              {/* ── CAPABILITIES CARD — numbered rows ──────────── */}
              <div
                className={`rounded-2xl flex flex-col overflow-hidden border ${
                  isLight
                    ? "border-blue-100 bg-white shadow-[0_2px_28px_rgba(28,117,188,0.09)]"
                    : "border-white/[0.07] bg-white/3"
                }`}
              >
                {/* Card header */}
                <div
                  className={`px-6 py-4 border-b flex items-center justify-between ${
                    isLight
                      ? "border-blue-100/60 bg-slate-50/60"
                      : "border-white/5 bg-white/2"
                  }`}
                >
                  <p
                    className={`text-[9px] font-extrabold uppercase tracking-[0.32em] ${
                      isLight ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    Core Capabilities
                  </p>
                  <div
                    className="h-[3px] w-14 rounded-full"
                    style={{ background: BRAND_GRAD }}
                  />
                </div>

                {/* Numbered capability rows — 2 columns, 3 rows */}
                <div className="p-4 grid grid-cols-2 gap-2">
                  {ind.capabilities.map((cap, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.32 }}
                      className={`group relative flex items-center gap-3 px-4 py-6 rounded-xl border cursor-default transition-all duration-200 overflow-hidden ${
                        isLight
                          ? "bg-slate-50/80 border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/40"
                          : "bg-white/3 border-white/7 hover:border-white/15 hover:bg-white/6"
                      }`}
                    >
                      {/* Hover shimmer */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: "linear-gradient(100deg, rgba(28,117,188,0.07) 0%, transparent 55%)",
                        }}
                      />
                      {/* Numbered badge */}
                      <span
                        className="text-[9px] font-extrabold tabular-nums shrink-0 leading-none relative"
                        style={{
                          background: BRAND_GRAD,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Divider */}
                      <div
                        className="w-px h-3.5 shrink-0"
                        style={{ background: "rgba(28,117,188,0.25)" }}
                      />
                      {/* Label */}
                      <span
                        className={`text-[11px] font-semibold leading-tight relative ${
                          isLight ? "text-slate-600" : "text-gray-300"
                        }`}
                      >
                        {cap}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Card footer */}
                <div
                  className={`px-5 py-3.5 border-t flex items-center gap-3 ${
                    isLight
                      ? "border-blue-100/60 bg-slate-50/40"
                      : "border-white/4 bg-white/1.5"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(28,117,188,0.1)",
                      border: "1px solid rgba(28,117,188,0.2)",
                    }}
                  >
                    <Zap className="w-3 h-3" style={{ color: BRAND_START }} strokeWidth={2} />
                  </div>
                  <p
                    className={`text-[11px] font-medium leading-snug ${
                      isLight ? "text-slate-500" : "text-gray-400"
                    }`}
                  >
                    {ind.tagline}
                  </p>
                </div>
              </div>

              {/* ── TECH STACK ───────────────────────────────── */}
              <div
                className={`rounded-2xl px-6 py-5 border ${
                  isLight
                    ? "border-blue-100 bg-white shadow-[0_2px_16px_rgba(28,117,188,0.06)]"
                    : "border-white/6 bg-white/2.5"
                }`}
              >
                <p
                  className={`text-[9px] font-extrabold uppercase tracking-[0.3em] mb-3 ${
                    isLight ? "text-slate-400" : "text-gray-500"
                  }`}
                >
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {ind.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border whitespace-nowrap transition-all duration-150 ${
                        isLight
                          ? "bg-slate-50 border-blue-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50/40"
                          : "bg-dark-card-2 border-white/8 text-gray-400 hover:border-white/15"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── READY TO TRANSFORM ───────────────────────── */}
              <div
                className="rounded-2xl px-6 py-5 border relative overflow-hidden"
                style={{
                  background: isLight
                    ? "linear-gradient(135deg, rgba(28,117,188,0.07) 0%, rgba(16,18,84,0.04) 100%)"
                    : "linear-gradient(135deg, rgba(28,117,188,0.11) 0%, rgba(16,18,84,0.16) 100%)",
                  borderColor: "rgba(28,117,188,0.22)",
                }}
              >
               
                {/* Right fade */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-28 pointer-events-none"
                  style={{ background: "linear-gradient(to left, rgba(28,117,188,0.1), transparent)" }}
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p
                      className="text-[9px] font-extrabold uppercase tracking-[0.3em] mb-1"
                      style={{ color: BRAND_START }}
                    >
                      Ready to Transform
                    </p>
                    <p
                      className={`text-xs font-medium truncate ${
                        isLight ? "text-slate-600" : "text-gray-300"
                      }`}
                    >
                      Custom solutions for {ind.name}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 group flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-200 hover:scale-105 hover:brightness-110 text-white"
                    style={{
                      background: BRAND_GRAD,
                      boxShadow: "0 4px 20px rgba(28,117,188,0.40)",
                    }}
                  >
                    Talk to Us
                    <ArrowUpRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── SPACER col ───────────────────────────────────── */}
            <div
              className={`hidden lg:block lg:col-span-1 ${flip ? "[direction:ltr]" : ""}`}
            />

            {/* ══ EDITORIAL PANEL — cols 8–12 ══════════════════════ */}
            <div
              className={`lg:col-span-5 flex flex-col justify-center ${
                flip ? "[direction:ltr] lg:pr-10" : "lg:pl-10"
              }`}
            >
              {/* ── Watermark number + heading ───────────────────
                  z-index fix: watermark = z-0, heading = z-10
                  so watermark NEVER appears in front of heading
                  on either light or dark sections               */}
              <div className="relative mb-8">
                {/* Watermark — sits behind everything in this block */}
                <span
                  aria-hidden="true"
                  className="absolute select-none pointer-events-none font-extrabold leading-none tabular-nums"
                  style={{
                    zIndex: 0,
                    background: BRAND_GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: isLight ? 0.07 : 0.06,
                    fontSize: "clamp(80px, 13vw, 140px)",
                    top: "-12px",
                    [flip ? "right" : "left"]: "-4px",
                  }}
                >
                  {sectionNum}
                </span>

                {/* Heading — always on top of watermark */}
                <h2
                  className={`relative font-extrabold tracking-tight leading-[0.95] pt-2 ${
                    isLight ? "text-[#0B0720]" : "text-white"
                  }`}
                  style={{
                    zIndex: 10,
                    fontSize: "clamp(34px, 4vw, 52px)",
                  }}
                >
                  {ind.name}
                </h2>

                <div className="flex items-center gap-2.5 mt-4" style={{ position: "relative", zIndex: 10 }}>
                  <div
                    className="h-[2px] w-10 shrink-0 rounded-full"
                    style={{ background: BRAND_GRAD }}
                  />
                  <p
                    className={`text-xs font-medium leading-snug ${
                      isLight ? "text-slate-500" : "text-gray-400"
                    }`}
                  >
                    {ind.tagline}
                  </p>
                </div>
              </div>

              {/* ── KPI Metric rows ─────────────────────────────── */}
              <div className="space-y-2.5 mb-9">
                {ind.impact.map((imp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                    className={`relative flex items-center gap-5 rounded-xl px-5 py-4 overflow-hidden border ${
                      isLight
                        ? "border-blue-100 bg-white shadow-[0_2px_12px_rgba(28,117,188,0.07)]"
                        : "border-white/5 bg-white/2.5"
                    }`}
                  >
                    {/* Left gradient bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                      style={{
                        background:
                          i === 0
                            ? BRAND_GRAD
                            : i === 1
                            ? "linear-gradient(to bottom, #1C75BC88, #10125488)"
                            : "linear-gradient(to bottom, #1C75BC44, #10125444)",
                      }}
                    />
                    {/* First row tint */}
                    {i === 0 && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(100deg, rgba(28,117,188,0.06) 0%, transparent 55%)",
                        }}
                      />
                    )}
                    {/* Metric value — brand gradient text */}
                    <span
                      className="text-[22px] font-extrabold tracking-tighter leading-none w-20 shrink-0 tabular-nums relative"
                      style={{
                        background: BRAND_GRAD,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {imp.metric}
                    </span>
                    <span
                      className={`text-xs font-semibold leading-snug relative ${
                        isLight ? "text-slate-500" : "text-gray-400"
                      }`}
                    >
                      {imp.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* ── Challenge ────────────────────────────────────── */}
              <div className="mb-5">
                <span
                  className={`text-[9px] font-extrabold uppercase tracking-[0.32em] ${
                    isLight ? "text-slate-400" : "text-gray-500"
                  }`}
                >
                  The Challenge
                </span>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isLight ? "text-slate-600" : "text-gray-300"
                  }`}
                >
                  {ind.challenge}
                </p>
              </div>

              {/* ── Solution ─────────────────────────────────────── */}
              <div
                className="rounded-xl p-5 mb-9 relative overflow-hidden"
                style={{
                  background: isLight ? "rgba(28,117,188,0.05)" : "rgba(28,117,188,0.08)",
                  border: "1px solid rgba(28,117,188,0.18)",
                  borderLeftWidth: "3px",
                  borderLeftColor: BRAND_START,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-full pointer-events-none"
                  style={{ background: "linear-gradient(to left, rgba(16,18,84,0.06), transparent)" }}
                />
                <span
                  className="text-[9px] font-extrabold uppercase tracking-[0.3em]"
                  style={{ color: BRAND_START }}
                >
                  Our Approach
                </span>
                <p
                  className={`mt-2 text-sm leading-relaxed relative ${
                    isLight ? "text-slate-700" : "text-gray-200"
                  }`}
                >
                  {ind.solution}
                </p>
              </div>

              {/* ── CTA ──────────────────────────────────────────── */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 w-fit"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: BRAND_GRAD,
                    boxShadow: "0 4px 18px rgba(28,117,188,0.38)",
                  }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
                <span
                  className={`text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                    isLight
                      ? "text-[#0B0720] group-hover:text-brand"
                      : "text-white group-hover:text-gray-300"
                  }`}
                >
                  Start a Project in {ind.name.split(" ")[0]}
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      {/* ── Bottom hairline ──────────────────────────────────── */}
      <div
        className={`absolute bottom-0 inset-x-0 h-px ${
          isLight ? "bg-blue-100" : "bg-white/5"
        }`}
      />
    </section>
  );
}
