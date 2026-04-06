"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Custom Software", href: "/services", desc: "Tailored digital solutions" },
        { name: "AI Development", href: "/services#ai-ml", desc: "Intelligent systems" },
        { name: "Generative AI", href: "/services#genai-bots", desc: "LLMs & chatbots" },
        { name: "Digital Strategy", href: "/services#digital", desc: "Transform your business" },
      ],
    },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Company",
      href: "/company",
      subItems: [
        { name: "About Us", href: "/company/about", desc: "Our story & mission" },
        { name: "Life at SynticAI", href: "/company/life", desc: "Culture & values" },
        { name: "Careers", href: "/company/careers", desc: "Join our team" },
      ],
    },
    { name: "Resource", href: "/resource" },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4">
        <div className="w-full max-w-7xl px-6 md:px-20">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              boxShadow: scrolled
                ? "0 0 0 1px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(99,102,241,0.15) inset"
                : "none",
            }}
            className={`w-full rounded-2xl transition-all duration-500 pointer-events-auto ${
            scrolled
              ? "bg-[#0d0f1a]/60 backdrop-blur-2xl border border-white/6"
              : "bg-transparent"
          }`}
        >
          {/* Gradient top border shimmer */}
          {scrolled && (
            <div
              className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.6) 30%, rgba(168,85,247,0.6) 60%, transparent 100%)",
              }}
            />
          )}

          <div className="px-4 sm:px-6">
            <div className={`flex items-center justify-between transition-all duration-500 h-[62px]`}>

              {/* Logo */}
              <Link href="/" className="shrink-0 flex items-center gap-2.5 group">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="relative"
                >
                  {/* Logo glow */}
                  <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/assets/synticai-logo-only-s.png"
                    alt="SynticAI"
                    width={130}
                    height={28}
                    className="h-8 w-auto object-contain relative brightness-0 invert"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link, index) => {
                  const isActive =
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    pathname === link.href;

                  if (link.subItems) {
                    return (
                      <div
                        key={link.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <motion.button
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.06 * index }}
                          className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-gray-200 hover:text-white"
                          }`}
                        >
                          {/* Hover pill bg */}
                          {hoveredLink === link.name && (
                            <motion.div
                              layoutId="navHoverPill"
                              className="absolute inset-0 rounded-xl bg-white/[0.07]"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          {isActive && (
                            <motion.div
                              layoutId="navActivePill"
                              className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10">{link.name}</span>
                          <ChevronDown className="relative z-10 w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-gray-500" />
                        </motion.button>

                        {/* Bridge */}
                        <div className="absolute top-full left-0 w-full h-3" />

                        {/* Dropdown */}
                        <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 scale-95 group-hover:scale-100 origin-top z-50">
                          <div
                            className="rounded-2xl p-2 min-w-[220px] border border-white/8"
                            style={{
                              background: "rgba(13, 15, 26, 0.92)",
                              backdropFilter: "blur(24px)",
                              boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
                            }}
                          >
                            {/* Dropdown top shimmer */}
                            <div
                              className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
                              style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
                            />
                            {link.subItems.map((sub, i) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`group/sub flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 ${
                                  pathname === sub.href
                                    ? "bg-indigo-500/10 text-indigo-300"
                                    : "text-gray-200 hover:text-white hover:bg-white/6"
                                }`}
                              >
                                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 group-hover/sub:bg-indigo-500/10 group-hover/sub:border-indigo-500/20 transition-all duration-200">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/sub:bg-indigo-400 transition-colors" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-semibold leading-none mb-1">{sub.name}</div>
                                  {sub.desc && (
                                    <div className="text-[11px] text-gray-600 group-hover/sub:text-gray-500 transition-colors">{sub.desc}</div>
                                  )}
                                </div>
                                <ArrowUpRight className="ml-auto w-3.5 h-3.5 text-gray-700 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-indigo-400 transition-all duration-200 -translate-x-1 group-hover/sub:translate-x-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.06 * index }}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative"
                    >
                      <Link
                        href={link.href}
                        className={`relative flex items-center px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                          isActive ? "text-white" : "text-gray-200 hover:text-white"
                        }`}
                      >
                        {hoveredLink === link.name && (
                          <motion.div
                            layoutId="navHoverPill"
                            className="absolute inset-0 rounded-xl bg-white/[0.07]"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="navActivePill"
                            className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right: CTA & Mobile Button */}
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="group relative flex items-center gap-2 px-3 sm:px-5 py-2.5 text-[12px] sm:text-[13px] font-semibold rounded-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Gradient border */}
                    <span
                      className="absolute inset-0 rounded-xl p-px"
                      style={{
                        background: "linear-gradient(135deg, rgba(99,102,241,0.7) 0%, rgba(168,85,247,0.7) 100%)",
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-[11px]"
                        style={{ background: "rgba(30,32,50,0.9)" }}
                      />
                    </span>
                    {/* Hover glow fill */}
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(99,102,241,0.85) 0%, rgba(168,85,247,0.85) 100%)",
                      }}
                    />
                    <Sparkles className="relative z-10 w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors duration-300 hidden sm:block" />
                    <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">
                      Get in Touch
                    </span>
                  </Link>
                </motion.div>

                {/* Mobile Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
                >
                  <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              </div>
            </div>
          </div>
        </motion.nav>
        </div>
      </div>

      {/* Mobile Drawer — full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[88px] left-4 right-4 z-50 rounded-2xl border border-white/8 overflow-hidden md:hidden"
              style={{
                background: "rgba(10, 11, 20, 0.96)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
              }}
            >
              {/* Top shimmer */}
              <div
                className="absolute inset-x-0 top-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(168,85,247,0.6), transparent)" }}
              />

              <div className="p-3 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive =
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    pathname === link.href;

                  if (link.subItems) {
                    const isExpanded = link.name === "Company" ? companyOpen : servicesOpen;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <button
                          onClick={() => {
                            if (link.name === "Company") setCompanyOpen(!companyOpen);
                            if (link.name === "Services") setServicesOpen(!servicesOpen);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium transition-all ${
                            isActive ? "text-white bg-indigo-500/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 py-1 flex flex-col gap-0.5">
                                {link.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-medium transition-all ${
                                      pathname === sub.href
                                        ? "text-indigo-300 bg-indigo-500/10"
                                        : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                                  >
                                    <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                                    {sub.name}
                                    {sub.desc && (
                                      <span className="ml-auto text-[11px] text-gray-700">{sub.desc}</span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-[13px] font-medium transition-all ${
                          isActive
                            ? "text-white bg-indigo-500/10 border border-indigo-500/15"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}