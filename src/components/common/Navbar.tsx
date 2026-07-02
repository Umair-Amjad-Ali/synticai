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
  const isLightPage = pathname.startsWith("/portfolio");
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
    { name: "Careers", href: "/company/careers" },
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
              boxShadow: (scrolled || isLightPage)
                ? "0 0 0 1px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(99,102,241,0.15) inset"
                : "0 0 0 1px rgba(255,255,255,0), 0 24px 64px rgba(0,0,0,0), 0 0 0 0.5px rgba(99,102,241,0) inset",
              transitionProperty: "background-color, border-color, backdrop-filter, -webkit-backdrop-filter, box-shadow",
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            className={`w-full rounded-2xl border pointer-events-auto ${
              (scrolled || isLightPage)
                ? "bg-[#0d0f1a]/85 backdrop-blur-2xl border-white/10"
                : "bg-[#0d0f1a]/0 backdrop-blur-none border-white/0"
            }`}
        >
          {/* Gradient top border shimmer */}
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none transition-opacity duration-500"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.6) 30%, rgba(168,85,247,0.6) 60%, transparent 100%)",
              opacity: (scrolled || isLightPage) ? 1 : 0,
            }}
          />

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
                    link.href === "/company"
                      ? pathname.startsWith("/company") && pathname !== "/company/careers"
                      : (link.href !== "/" && pathname.startsWith(link.href)) || pathname === link.href;

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
                              : "text-white/80 hover:text-white"
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
                              className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/35 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10">{link.name}</span>
                          <ChevronDown className="relative z-10 w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" />
                        </motion.button>

                        {/* Bridge */}
                        <div className="absolute top-full left-0 w-full h-3" />

                        {/* Dropdown */}
                        <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 scale-95 group-hover:scale-100 origin-top z-50">
                          <div
                            className="rounded-2xl p-1.5 w-[250px] border border-white/10"
                            style={{
                              background: "rgba(10, 11, 20, 0.88)",
                              backdropFilter: "blur(28px)",
                              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
                            }}
                          >
                            {link.subItems.map((sub, i) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`relative group/sub flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-300 ${
                                  pathname === sub.href
                                    ? "bg-indigo-500/10 text-indigo-300"
                                    : "text-gray-200 hover:bg-white/[0.035] hover:text-white"
                                }`}
                              >
                                {/* Left slide-in solid vertical pill glow */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[55%] rounded-r-full bg-indigo-500 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300" />
                                
                                <div className="flex-1 min-w-0 pl-1.5">
                                  <div className="text-[13px] font-semibold text-white/90 leading-tight transition-colors group-hover/sub:text-indigo-400">
                                    {sub.name}
                                  </div>
                                  {sub.desc && (
                                    <div className="text-[11px] text-gray-400 leading-tight mt-1 transition-colors group-hover/sub:text-gray-300">
                                      {sub.desc}
                                    </div>
                                  )}
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-white/20 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-indigo-400 transition-all duration-300 shrink-0 -translate-x-1 group-hover/sub:translate-x-0" />
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
                          isActive ? "text-white" : "text-white/80 hover:text-white"
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
                            className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/35 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
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
                    className="relative flex items-center px-4 py-2 text-[12px] sm:text-[13px] font-semibold rounded-xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/35 shadow-[0_0_12px_rgba(99,102,241,0.15)] text-white hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/50 hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] transition-all duration-300"
                  >
                    <span className="relative z-10">
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
                    link.href === "/company"
                      ? pathname.startsWith("/company") && pathname !== "/company/careers"
                      : (link.href !== "/" && pathname.startsWith(link.href)) || pathname === link.href;

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
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                  >
                                    <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                                    {sub.name}
                                    {sub.desc && (
                                      <span className="ml-auto text-[11px] text-gray-400">{sub.desc}</span>
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