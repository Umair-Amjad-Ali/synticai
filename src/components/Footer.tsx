import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Twitter, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#060312] text-gray-300 pt-16 pb-6 overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Glows for unique aesthetic */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1C75BC] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#45d1f5] rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#1C75BC]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col pr-4">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/assets/synticai-logo.png" 
                alt="SynticAI Logo" 
                width={200} 
                height={50} 
                className="h-12 w-auto object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <p className="text-[13px] text-gray-400/80 mb-8 leading-relaxed max-w-[260px]">
              Shaping technology for the future through innovative AI solutions tailored for enterprise success.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/5 rounded-full flex items-center justify-center bg-transparent hover:bg-[#1C75BC] hover:border-[#1C75BC] transition-all duration-300 group">
                  <Icon size={14} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1C75BC] shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Services
            </h4>
            <ul className="space-y-4">
              {['Predictive Modelling', 'Chat GPT Integration', 'Natural Language Processing', 'Machine Learning', 'Computer Vision', 'Big Data Analytics'].map((service) => (
                <li key={service} className="group flex items-center">
                  <Link href="#" className="text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1C75BC] shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-6">
              <a href="tel:+12678000191" className="flex items-center gap-4 text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center group-hover:bg-[#1C75BC] transition-all duration-300">
                  <Phone size={13} className="text-gray-400 group-hover:text-white" />
                </div>
                <span>+12678000191</span>
              </a>
              <a href="mailto:info@synticai.com" className="flex items-center gap-4 text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center group-hover:bg-[#1C75BC] transition-all duration-300">
                  <Mail size={13} className="text-gray-400 group-hover:text-white" />
                </div>
                <span>info@synticai.com</span>
              </a>
              
              <div className="w-full h-px bg-white/5 my-2" />
              
              <div className="flex items-start gap-4 text-[13px] text-gray-400/80">
                <div className="w-8 h-8 rounded-full bg-white/5 flex shrink-0 items-center justify-center mt-1">
                  <MapPin size={13} className="text-gray-400" />
                </div>
                <div className="flex flex-col items-center  justify-center gap-2 mt-2">
                  <span className="hover:text-white transition-colors cursor-pointer">Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-white text-[16px] font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1C75BC] shadow-[0_0_8px_rgba(28,117,188,0.8)]" />
              Join Our Newsletter
            </h4>
            
            <p className="text-[13px] text-gray-400/80 mb-6 leading-relaxed">
              Subscribe to get the latest updates on AI innovations directly to your inbox.
            </p>

            <form className="flex w-full mb-6 relative group h-[48px]">
              {/* Input container */}
              <div className="relative flex w-full h-full rounded-md overflow-hidden bg-[#0A0713]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-[calc(100%-100px)] bg-transparent border border-white/5 border-r-0 text-white text-[13px] px-4 outline-none placeholder:text-gray-500 rounded-l-md transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="h-full bg-[#1e81c7] text-white text-[12px] font-bold px-4 tracking-wider hover:bg-[#1C75BC] transition-colors duration-300 w-[100px] shrink-0 min-w-[100px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            <button className="relative w-full rounded-md h-[48px] bg-[#0f0b1b] border border-white/5 flex items-center justify-center hover:border-white/10 transition-colors duration-300 group">
              <span className="text-[13px] text-gray-300 group-hover:text-white font-medium transition-colors duration-300 flex items-center gap-2">
                Got Questions? Ask SynticAI
                <ArrowRight size={14} className="text-[#1C75BC] group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-[13px] text-gray-500">
            2026 © <span className="text-white font-medium hover:text-[#1C75BC] cursor-pointer transition-colors">SynticAI</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="relative text-[13px] text-gray-500 hover:text-white transition-colors duration-300">Careers</Link>
            <Link href="#" className="relative text-[13px] text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
