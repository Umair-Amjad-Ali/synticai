"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Company",
      href: "/company",
      subItems: [
        { name: "About Us", href: "/company/about" },
        { name: "Life at SynticAI", href: "/company/life" },
      ],
    },
    { name: "Resource", href: "/resource" },
  ];

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/synticai-logo-footer.png"
                alt="SynticAI Logo"
                width={140}
                height={30}
                className="h-9 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive =
                (link.href !== "/" && pathname.startsWith(link.href)) ||
                pathname === link.href;

              if (link.subItems) {
                return (
                  <div key={link.name} className="relative group">
                    <motion.button
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * index }}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-brand bg-brand/8"
                          : "text-gray-500 hover:text-brand hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </motion.button>

                    {/* Hover bridge */}
                    <div className="absolute top-full left-0 w-full h-3" />

                    {/* Dropdown */}
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100 origin-top z-50">
                      <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.1)] min-w-[200px]">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group/sub ${
                              pathname === sub.href
                                ? "text-brand bg-brand/8"
                                : "text-gray-500 hover:text-brand hover:bg-gray-50"
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-light/50 group-hover/sub:bg-brand-light transition-colors" />
                            {sub.name}
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
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-brand border border-brand/20 bg-linear-to-b from-brand/10 to-brand/3 shadow-[0_1px_8px_rgba(28,117,188,0.1)]"
                        : "text-gray-500 hover:text-brand hover:border hover:border-brand/10 hover:bg-brand/5 border border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="relative group px-5 py-2.5 text-sm font-bold rounded-full overflow-hidden border border-brand/30 bg-brand/5 text-brand hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
              >

                <span className="relative">Get in Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 hover:text-brand transition-colors p-2 rounded-xl hover:bg-gray-50"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  (link.href !== "/" && pathname.startsWith(link.href)) ||
                  pathname === link.href;

                if (link.subItems) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setCompanyOpen(!companyOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-brand hover:bg-gray-50 transition-all"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {companyOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                                  pathname === sub.href ? "text-brand" : "text-gray-500 hover:text-brand hover:bg-gray-50"
                                }`}
                              >
                                <div className="w-1 h-1 rounded-full bg-brand-light/50" />
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-brand bg-brand/8 border border-brand/10"
                        : "text-gray-500 hover:text-brand hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-3 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-bold rounded-full border border-brand/30 bg-brand/5 text-brand hover:bg-brand hover:text-white transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}