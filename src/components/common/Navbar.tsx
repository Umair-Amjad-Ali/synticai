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
    // { name: "Salesforce", href: "/salesforce" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { 
      name: "Company", 
      href: "/company",
      subItems: [
        { name: "About Us", href: "/company/about" },
        { name: "Life at SynticAI", href: "/company/life" }
      ]
    },
    { name: "Resource", href: "/resource" },
  ];

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Left Side */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/assets/synticai-logo-footer.png" 
                  alt="SynticAI Logo" 
                  width={140} 
                  height={40} 
                  className="h-10 w-auto object-contain" 
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex flex-1 h-full items-center justify-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = (link.href !== '/' && pathname.startsWith(link.href)) || pathname === link.href;
              
              if (link.subItems) {
                // Dropdown for Desktop
                return (
                  <motion.div
                    key={link.name}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="relative group"
                  >
                    <Link 
                      href={link.href}
                      className={`text-[15px] font-bold transition-colors py-6 ${isActive ? "text-[#1E73BE]" : "text-gray-600 group-hover:text-[#1E73BE]"}`}
                    >
                      {link.name}
                    </Link>

                    {/* Invisible hover bridge connecting text to dropdown */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 h-8 z-40" />

                    {/* Dropdown Menu */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 origin-[top_center] transform scale-95 group-hover:scale-100">
                      <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 w-max min-w-[200px] flex flex-col gap-1">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 hover:bg-[#F8F9FA] hover:text-[#1E73BE] hover:translate-x-1 block whitespace-nowrap ${pathname === subItem.href ? "text-[#1E73BE] bg-[#F8F9FA]" : "text-gray-500"}`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={link.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className={`text-[15px] font-bold transition-colors py-6 ${
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
                const isActive = (link.href !== '/' && pathname.startsWith(link.href)) || pathname === link.href;
                
                if (link.subItems) {
                  return (
                    <div key={link.name} className="py-2">
                      <div className="px-3 py-2 text-base font-bold text-gray-400 uppercase tracking-wider">{link.name}</div>
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 text-base font-semibold rounded-md ${
                              pathname === subItem.href ? "text-[#1E73BE] bg-blue-50/50" : "text-gray-600 hover:text-[#1E73BE] hover:bg-gray-50"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

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