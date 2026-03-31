"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "@/components/common/ActionButton";
import Link from "next/link";
import type { ServiceTab } from "@/data/servicesData";

interface ServicesTabsProps {
  sectionTitle: string;
  tabs: ServiceTab[];
  showButton?: boolean;
  buttonText?: string;
}

export default function ServicesTabs({
  sectionTitle,
  tabs,
  showButton = true,
  buttonText = "Read More",
}: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-bg mb-8 leading-tight">
          <span className="inline-block border-l-4 border-brand pl-4">
            {sectionTitle}
          </span>
        </h2>

        {/* Outer wrapper */}
        <div className="flex flex-col md:flex-row items-stretch">

          {/* ── LEFT SIDEBAR ─────────────────────────────── */}
          <div
            className="w-full md:w-[260px] shrink-0 flex flex-col overflow-x-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none [&::-webkit-scrollbar]:hidden"
            style={{
              background: "linear-gradient(170deg, #0C0A27 70%, #0e1a3a 100%)",
              boxShadow: "12px 0 40px rgba(0,0,0,0.5)",
              zIndex: 20,
              scrollbarWidth: "none",
            }}
          >
            {/* Logo accent at top */}
            <div className="px-6 pt-7 pb-4">
              <div className="w-8 h-[3px] bg-brand rounded-full" />
            </div>

            {/* Tabs */}
            <div className="flex flex-col flex-1">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                const num = String(index + 1).padStart(2, "0");
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(index)}
                    className="relative text-left transition-all group"
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(90deg, #1C75BC 0%, #0d1f3c 100%)",
                            boxShadow: "6px 0 22px rgba(0,0,0,0.4)",
                            width: "calc(100% + 20px)",
                            zIndex: 30,
                          }
                        : {}
                    }
                  >
                    <span
                      className={`flex items-center gap-3 px-5 py-[11px] text-[13.5px] ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {/* Number badge */}
                      <span
                        className={`text-[10px] font-bold tabular-nums shrink-0 ${
                          isActive ? "text-cyan-300" : "text-gray-600"
                        }`}
                      >
                        {num}
                      </span>
                      {tab.name}
                    </span>

                    {/* Active left accent bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400 rounded-r" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT CONTENT PANEL ────────────────────────── */}
          <div
            className="flex-1 overflow-hidden flex flex-col rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
            style={{
              background: "#fff",
              boxShadow: "0 0 60px 0 rgba(0,0,0,0.16)",
              zIndex: 10,
            }}
          >
            {/* Gradient accent strip at top */}
            <div
              className="h-[4px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #1C75BC 0%, #45d1f5 50%, #1C75BC 100%)",
              }}
            />

            {/* Content grid: all panels overlap in same cell, only active is visible */}
            <div className="flex-1 flex flex-col" style={{ display: "grid" }}>
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <motion.div
                    key={tab.name}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 py-6 md:px-10 md:py-8 flex flex-col"
                    style={{
                      gridArea: "1 / 1",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    {/* Service name chip */}
                    <span className="inline-block text-[11px] font-semibold tracking-widest text-brand uppercase mb-3">
                      SynticAI Services
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-dark-bg mb-3 leading-snug">
                      {tab.heading}
                    </h3>

                    <p className="text-gray-500 text-[14px] leading-relaxed mb-5 max-w-xl">
                      {tab.description}
                    </p>

                    {tab.benefitsTitle && (
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-5 h-[2px] bg-brand" />
                        <h4 className="text-[13px] font-bold text-dark-bg uppercase tracking-widest">
                          {tab.benefitsTitle}
                        </h4>
                      </div>
                    )}

                    {tab.benefits && (
                      <ul className="space-y-3 mb-6">
                        {tab.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="shrink-0 mt-[7px] rounded-sm"
                              style={{
                                display: "inline-block",
                                width: 7,
                                height: 7,
                                background: "#1C75BC",
                              }}
                            />
                            <p className="text-[13.5px] text-gray-600 leading-relaxed">
                              <span className="font-semibold text-dark-bg">
                                {benefit.title}:
                              </span>{" "}
                              {benefit.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {showButton && (
                      <div className="flex justify-end mt-auto pt-4">
                        <Link href={tab.href ?? "/services"} scroll={true}>
                          <ActionButton className="rounded-md! py-2.5 px-6 text-sm">{buttonText}</ActionButton>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
