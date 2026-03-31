"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Flutter Developer",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="apply" className="max-w-4xl mx-auto px-6 pb-32">
      <div className="rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-16 gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-brand-light/10 border border-brand-light/30 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Application Received!</h3>
            <p className="text-gray-400 max-w-sm">
              Thanks for applying to join our team. We review applications daily and will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  email: "",
                  role: "Flutter Developer",
                  portfolio: "",
                  message: "",
                });
              }}
              className="mt-4 text-sm font-semibold text-brand hover:underline transition-colors"
            >
              Submit another application
            </button>
          </motion.div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-extrabold text-white mb-3">Apply Now</h3>
              <p className="text-sm text-gray-400">
                Ready to make an impact? Fill out the form below to show us what you can do.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Row: Role + Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Job Role *
                  </label>
                  <select
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Flutter Developer" className="bg-dark text-white">Flutter Developer</option>
                    <option value="Web Developer" className="bg-dark text-white">Web Developer</option>
                    <option value="AI Developer" className="bg-dark text-white">AI Developer</option>
                    <option value="Backend Developer" className="bg-dark text-white">Backend Developer</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    name="portfolio"
                    type="url"
                    value={form.portfolio}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  Cover Letter / About You *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your experience and why you're a great fit for this role..."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-light/40 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full py-4 rounded-2xl brand-gradient hover:opacity-90 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
              >
                Submit Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-gray-600 mt-2">
                By applying, you agree to our Privacy Policy. We process your information securely.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
