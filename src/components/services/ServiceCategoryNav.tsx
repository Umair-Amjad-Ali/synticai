"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "custom-software", name: "Software", full: "Custom Software Development" },
  { id: "ai-ml", name: "AI & ML", full: "AI & Machine Learning" },
  { id: "genai-bots", name: "GenAI", full: "GenAI & Bots" },
  { id: "digital", name: "Digital", full: "Digital Strategy" },
];

export default function ServiceCategoryNav() {
  const [activeTab, setActiveTab] = useState("ai-ml");
  const [isSticky, setIsSticky] = useState(false);

  // Show the sticky right-side pill once we're past the hero
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-detect active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = categories.map((c) => c.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Sticky vertical pill fixed to the RIGHT edge */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            key="sticky-nav"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-200 hidden lg:flex flex-col items-stretch gap-1 p-2 bg-[#0A051E]/90 backdrop-blur-2xl border border-white/10 rounded-l-2xl shadow-[0_0_40px_rgba(0,0,0,0.7)]"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                title={cat.full}
                className="relative px-4 py-3 rounded-xl text-xs font-bold transition-colors duration-200 whitespace-nowrap text-center overflow-hidden"
              >
                {/* Animated slide-in active background */}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeSideNav"
                    className="absolute inset-0 bg-linear-to-b from-[#1C75BC] to-[#45d1f5] rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    activeTab === cat.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
