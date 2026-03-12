"use client";

import { Mail } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Soft ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1C75BC]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8">
          <Mail className="w-5 h-5 text-[#45d1f5]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Stay ahead of the curve.
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Join 3,000+ engineers and founders getting our latest articles, case studies, and
          research — every two weeks. No spam, ever.
        </p>

        {/* Email form */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#45d1f5]/40 transition-all"
          />
          <button className="px-6 py-3.5 rounded-2xl bg-[#1C75BC] hover:bg-[#45d1f5] text-white text-sm font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap">
            Subscribe →
          </button>
        </div>

        <p className="text-[11px] text-gray-600 mt-4">3,000+ subscribers · Unsubscribe anytime</p>
      </div>
    </section>
  );
}
