"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };
  return (
    <footer className="relative bg-[#060312] text-gray-300 pt-16 pb-6 overflow-hidden font-sans border-t border-white/5">
      {/* Background Glows for unique aesthetic */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-light rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col pr-4">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/assets/synticai-logo-footer.png"
                alt="SynticAI Logo"
                width={400}
                height={50}
                className="h-14 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-[13px] text-gray-400/80 mb-8 leading-relaxed max-w-[260px]">
              Shaping technology for the future through innovative AI solutions
              tailored for enterprise success.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/synticai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 py-2 text-[12px] font-semibold rounded-xl bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-brand hover:from-brand/20 hover:to-brand-light/20 transition-all duration-300 text-gray-300 hover:text-white shadow-xs"
              >
                <Linkedin
                  size={14}
                  className="text-[#0077B5] group-hover:text-white transition-colors"
                />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Custom Software Development", href: "/services" },
                { name: "Web Application Development", href: "/services" },
                { name: "Mobile App Development", href: "/services" },
                { name: "Full-Stack Development", href: "/services" },
                { name: "AI Development", href: "/services#ai-ml" },
                { name: "ChatGPT Integration", href: "/services#genai-bots" },
              ].map((link) => (
                <li key={link.name} className="group flex items-center">
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-6">
              <a
                href="tel:03288761182"
                className="flex items-center gap-4 text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center group-hover:bg-brand transition-all duration-300">
                  <Phone
                    size={13}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <span>03288761182</span>
              </a>
              <a
                href="mailto:contact@synticai.com"
                className="flex items-center gap-4 text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center group-hover:bg-brand transition-all duration-300">
                  <Mail
                    size={13}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <span>contact@synticai.com</span>
              </a>

              <div className="w-full h-px bg-white/5 my-2" />

              <div className="flex items-start gap-4 text-[13px] text-gray-400/80">
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center mt-1">
                  <MapPin size={13} className="text-gray-400" />
                </div>
                <div className="flex flex-col items-start gap-1 pt-1.5">
                  <span className="hover:text-white transition-colors cursor-pointer font-medium leading-tight">
                    Satellite Town 67B Bahawalpur, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Join Our Newsletter
            </h4>

            <p className="text-[13px] text-gray-400/80 mb-6 leading-relaxed">
              Subscribe to get the latest updates on AI innovations directly to
              your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-brand/10 border border-brand/20 rounded-xl text-[13px] text-[#45d1f5] mb-6">
                <svg className="w-4 h-4 shrink-0 text-brand-light" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Successfully subscribed!</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex w-full mb-6 relative group h-[48px]"
              >
                {/* Input container */}
                <div className="relative flex w-full h-full rounded-md overflow-hidden bg-[#0A0713]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent border border-white/5 border-r-0 text-white text-[13px] px-4 outline-none placeholder:text-gray-500 rounded-l-md transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="h-full bg-brand/90 text-white text-[10px] font-medium px-3 tracking-wider hover:bg-brand transition-colors duration-300 shrink-0 w-16"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}

            <Link
              href="/contact"
              className="relative w-full rounded-md h-[48px] bg-[#0f0b1b] border border-white/5 flex items-center justify-center hover:border-white/10 transition-colors duration-300 group"
            >
              <span className="text-[13px] text-gray-300 group-hover:text-white font-medium transition-colors duration-300 flex items-center gap-2">
                Got Questions? Ask SynticAI
                <ArrowRight
                  size={14}
                  className="text-brand group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-[13px] text-gray-500">
            2026 ©{" "}
            <span className="text-white font-medium hover:text-brand cursor-pointer transition-colors">
              SynticAI
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/company/careers"
              className="relative text-[13px] text-gray-500 hover:text-white transition-colors duration-300"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
