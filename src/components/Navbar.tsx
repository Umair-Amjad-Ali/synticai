"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Salesforce", href: "/salesforce" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Company", href: "/company" },
    { name: "Resource", href: "/resource" },
  ];

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Left Side */}
          <div className="shrink-0 w-48 flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/assets/synticai-logo.png" 
                  alt="SynticAI Logo" 
                  width={240} 
                  height={60} 
                  className="h-80 w-auto object-contain" 
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link, index) => {
              // Making 'Services' active if on home route for visual matching with screenshot
              const isActive = pathname === link.href || (pathname === '/' && link.name === 'Services');
              return (
                <motion.div
                  key={link.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className={`text-[15px] font-bold transition-colors ${
                      isActive ? "text-[#1E73BE]" : "text-gray-600 hover:text-[#1E73BE]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Empty space to balance the logo and keep links centered */}
          {/* Login/Register removed as requested */}
          <div className="hidden md:flex w-48 justify-end items-center">
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#1E73BE] focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname === '/' && link.name === 'Services');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-3 text-base font-bold rounded-md ${
                      isActive ? "text-[#1E73BE] bg-blue-50/50" : "text-gray-600 hover:text-[#1E73BE] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}