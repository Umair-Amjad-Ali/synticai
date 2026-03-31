"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@synticai.com",
    href: "mailto:contact@synticai.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "San Francisco, CA · Remote-first worldwide",
    href: "#",
  },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-dark-bg pt-17.5 font-sans selection:bg-brand-light/20">
      {/* ── HERO ── */}
      <section className="relative w-full pt-20 pb-16 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
              Let's Build Together
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5"
          >
            Got a project in mind?
            <br />
            <span className="text-transparent bg-clip-text brand-gradient-text">
              We'd love to hear it.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Tell us what you're building. We'll get back to you within one
            business day.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* ── LEFT: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">
                Contact Info
              </h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand/20 transition-colors">
                      <Icon
                        className="w-4.5 h-4.5 text-brand"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Socials */}
            <div>
              <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-5">
                Find Us Online
              </h2>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-brand/20 hover:border-brand/30 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-brand" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick promise */}
            <div className="p-5 rounded-2xl border border-brand/20 bg-brand/5">
              <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-3">
                <CheckCircle2 className="w-4 h-4" /> Our Promise
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  "Reply within 1 business day",
                  "Free initial consultation",
                  "No commitment required",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-light/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light/10 border border-brand-light/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 max-w-sm">
                    Thanks for reaching out. Our team will get back to you
                    within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="mt-4 text-sm text-brand hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-lg font-extrabold text-white mb-1">
                    Send us a message
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Fill in the details below and we'll take it from there.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row: Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          Your Name *
                        </label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          Company
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp (optional)"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, timeline, and goals..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group relative w-full py-4 rounded-2xl bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[11px] text-center text-gray-600">
                      By submitting, you agree to our Privacy Policy. We never
                      share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
