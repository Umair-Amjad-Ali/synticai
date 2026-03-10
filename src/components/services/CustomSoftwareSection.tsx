"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    color: "#1C75BC",
    bg: "rgba(28,117,188,0.12)",
    border: "rgba(28,117,188,0.25)",
    description: "Scalable SaaS platforms, enterprise portals, and pixel-perfect websites built to convert.",
    items: ["Corporate Websites", "SaaS Platforms", "Web Portals & Dashboards", "E-Commerce", "Landing Pages"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    color: "#45d1f5",
    bg: "rgba(69,209,245,0.10)",
    border: "rgba(69,209,245,0.25)",
    description: "Cross-platform Flutter apps delivering native-quality experiences on iOS and Android.",
    items: ["Flutter Cross-Platform", "iOS & Android", "Real-time Features", "Push Notifications", "App Store Deployment"],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.10)",
    border: "rgba(167,139,250,0.25)",
    description: "Rock-solid APIs and microservices powering your product's core business logic at any scale.",
    items: ["REST & GraphQL APIs", "Microservices", "Database Architecture", "Cloud Infrastructure", "Auth & Security"],
  },
  {
    icon: Layers,
    title: "Full Stack Apps",
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.25)",
    description: "End-to-end product delivery — from concept and design to deployment and maintenance.",
    items: ["Full-Stack Web Apps", "Custom CMS & Admin", "Real-time Dashboards", "SaaS Products", "API Integrations"],
  },
];

const row1Tech = ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "Angular", "Vite", "Redux", "React Query"];
const row2Tech = ["Flutter", "Dart", "Node.js", "Python", "FastAPI", "PostgreSQL", "Firebase", "Supabase", "Docker", "AWS"];

const techIcons: Record<string, string> = {
  "React": "⚛️", "Next.js": "▲", "TypeScript": "𝗧𝗦", "JavaScript": "𝗝𝗦", "Vue.js": "💚",
  "Tailwind CSS": "🎨", "Angular": "🔺", "Vite": "⚡", "Redux": "🔮", "React Query": "🔁",
  "Flutter": "💙", "Dart": "🎯", "Node.js": "🟢", "Python": "🐍", "FastAPI": "🚀",
  "PostgreSQL": "🐘", "Firebase": "🔥", "Supabase": "⚡", "Docker": "🐳", "AWS": "☁️",
};

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Technologies" },
  { value: "98%", label: "Client Satisfaction" },
];

// ─── Seamless Infinite Row ───────────────────────────────────────────────────
// Following LifeVoices pattern: quadruple items, animate 0% → -50%

function MarqueeRow({ items, direction = 1 }: { items: string[]; direction?: 1 | -1 }) {
  // Quadruple the items so the -50% translate lands back at the start perfectly
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 22, repeat: Infinity }}
        className="flex gap-3 px-2 w-max shrink-0"
      >
        {looped.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:border-[#1C75BC]/40 hover:text-[#1C75BC] hover:bg-blue-50/50 transition-all duration-200 whitespace-nowrap cursor-default shadow-sm"
          >
            <span className="text-base leading-none">{techIcons[name]}</span>
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CustomSoftwareSection() {
  return (
    <section id="custom-software" className="w-full bg-[#0A051E]">

      {/* ── A. Section Header ── */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#45d1f5] text-[11px] font-bold tracking-widest uppercase mb-6"
        >
          Custom Development
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5"
        >
          We Build.{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#45d1f5] to-[#1C75BC]">
            End to End.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          Full-spectrum software engineering across web, mobile, backend, and cloud — from idea to ship.
        </motion.p>
      </div>

      {/* ── B. 4 Capability Cards ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: cap.bg,
                  borderColor: cap.border,
                }}
              >
                {/* Subtle top gradient shimmer on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                  style={{ background: `${cap.color}18`, borderColor: `${cap.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: cap.color }} />
                </div>

                {/* Title + Description */}
                <h3 className="text-base font-bold text-white mb-2 transition-colors duration-200 group-hover:text-white/90">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {cap.description}
                </p>

                {/* Feature List */}
                <div className="space-y-1.5">
                  {cap.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: cap.color }} />
                      <span className="text-gray-400 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── C. Tech Stack Carousel ── */}
      <div className="w-full bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-widest uppercase text-[#1C75BC] mb-3"
          >
            Technologies We Excel In
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold text-[#0A051E]"
          >
            Our Full Tech Stack
          </motion.h3>
        </div>

        {/* Carousel with left/right edge mask fade — same approach as LifeVoices */}
        <div
          className="relative flex flex-col gap-3 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <MarqueeRow items={row1Tech} direction={1} />
          <MarqueeRow items={row2Tech} direction={-1} />
        </div>
      </div>

      {/* ── D. Stats Strip ── */}
      <div className="w-full bg-white border-t border-gray-100 pb-14">
        <div className="max-w-2xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#0A051E] mb-1">{s.value}</div>
              <div className="text-xs text-gray-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── E. CTA ── */}
      <div className="w-full bg-[#0A051E] py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-1">Ready to build something great?</h4>
            <p className="text-gray-500 text-sm">Tell us your idea — we'll bring it to life.</p>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#0A051E] font-bold rounded-full hover:bg-[#45d1f5] transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-[0_8px_24px_rgba(255,255,255,0.08)] hover:shadow-[0_8px_30px_rgba(69,209,245,0.3)] text-sm"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
}
