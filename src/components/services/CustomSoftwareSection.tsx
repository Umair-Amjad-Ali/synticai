"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Server, Layers, ArrowRight, Code2, X, CheckCircle2 } from "lucide-react";


const capabilities = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    color: "#1C75BC",
    bg: "rgba(28,117,188,0.12)",
    border: "rgba(28,117,188,0.25)",
    description: "Scalable SaaS platforms, enterprise portals, and pixel-perfect websites built to convert.",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "𝗧𝗦" },
      { name: "Tailwind", icon: "🎨" }
    ],
    whatWeBuild: ["High-performance SaaS products", "Enterprise internal dashboards", "B2B and B2C web applications", "High-conversion landing pages"],
    howWeDoIt: "We employ modern component-driven architecture using Next.js and React. Our approach prioritizes blazing-fast SSR/SSG load times, strict TypeScript typing for zero runtime errors, and automated CI/CD pipelines for seamless daily deployments."
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    color: "#45d1f5",
    bg: "rgba(69,209,245,0.10)",
    border: "rgba(69,209,245,0.25)",
    description: "Cross-platform mobile applications delivering native-quality experiences on iOS and Android.",
    techStack: [
      { name: "Flutter", icon: "💙" },
      { name: "Dart", icon: "🎯" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
    ],
    whatWeBuild: ["Consumer iOS & Android apps", "On-demand service platforms", "Fintech & healthcare applications", "IoT companion apps"],
    howWeDoIt: "Utilizing Flutter, we build from a single robust codebase that compiles strictly to native ARM code. We integrate complex animations, native device features (camera, GPS, biometrics), and real-time backend synchronization."
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.10)",
    border: "rgba(167,139,250,0.25)",
    description: "Rock-solid APIs and microservices powering your product's core business logic at scale.",
    techStack: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "🚀" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    whatWeBuild: ["RESTful & GraphQL APIs", "Distributed microservices", "Real-time socket servers", "High-volume data pipelines"],
    howWeDoIt: "We design resilient architectures using Node.js and Python. Our focus is on horizontal scalability, rigorous database normalization (PostgreSQL), memory caching (Redis), and top-tier security including JWT auth and rate limiting."
  },
  {
    id: "fullstack",
    icon: Layers,
    title: "Full Stack Apps",
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.25)",
    description: "End-to-end product delivery — from concept and architecture to deployment and maintenance.",
    techStack: [
      { name: "Supabase", icon: "⚡" },
      { name: "Firebase", icon: "🔥" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
    ],
    whatWeBuild: ["Marketplace platforms", "E-learning ecosystems", "Custom ERP / CRM systems", "AI-integrated products"],
    howWeDoIt: "Taking full ownership of the stack, we wrap your frontend and backend in Docker containers, orchestrate them on AWS, and leverage BaaS like Supabase for rapid iteration. One cohesive team delivers the entire product lifecycle."
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

function MarqueeRow({ items, direction = 1 }: { items: string[]; direction?: 1 | -1 }) {
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
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:border-[#1C75BC]/40 hover:text-[#1C75BC] hover:bg-blue-50/50 transition-all duration-200 whitespace-nowrap cursor-default shadow-sm group"
          >
            <span className="text-base leading-none group-hover:scale-110 transition-transform">{techIcons[name]}</span>
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CustomSoftwareSection() {
  const [activeCard, setActiveCard] = useState<typeof capabilities[0] | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = activeCard ? "hidden" : "unset";
  }

  const newLocal = "fixed inset-0 bg-[#0A051E]/80 backdrop-blur-md z-200 cursor-pointer";
  return (
    <section id="custom-software" className="w-full bg-[#0A051E] relative">
      
      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className={newLocal}
            />
            <div className="fixed inset-0 flex items-center justify-center z-201 p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${activeCard.id}`}
                className="w-full max-w-2xl bg-[#110B29] border rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] pointer-events-auto flex flex-col max-h-[90vh]"
                style={{ borderColor: activeCard.border }}
              >
                {/* Modal Header */}
                <div 
                  className="p-6 md:p-8 relative overflow-hidden"
                  style={{ background: activeCard.bg }}
                >
                  <div 
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-40"
                    style={{ background: activeCard.color }}
                  />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner"
                        style={{ background: `${activeCard.color}15`, borderColor: `${activeCard.color}40` }}
                      >
                        <activeCard.icon className="w-7 h-7" style={{ color: activeCard.color }} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {activeCard.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{activeCard.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveCard(null)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body (Scrollable) */}
                <div className="p-6 md:p-8 overflow-y-auto no-scrollbar space-y-8 bg-[#0A051E]/50">
                  
                  {/* Detailed Tech Stack */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">
                      Full Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {activeCard.techStack.map((tech, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/5 shadow-sm"
                          style={{ borderColor: `${activeCard.color}30` }}
                        >
                          <span className="text-lg leading-none">{tech.icon}</span>
                          <span className="text-sm font-bold text-white tracking-wide">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What We Build */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">
                      What We Build
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCard.whatWeBuild.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: activeCard.color }} />
                          <span className="text-gray-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How We Do It */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">
                      How We Engineer It
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {activeCard.howWeDoIt}
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── A. Stunning Section Header ── */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        {/* Animated Glowing Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block mb-6"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#1C75BC] to-[#45d1f5] rounded-full blur-md opacity-50 animate-pulse" />
          <div className="relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#0A051E] shadow-[0_0_20px_rgba(69,209,245,0.2)]">
            <Code2 className="w-4 h-4 text-[#45d1f5]" /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#45d1f5] to-[#1C75BC] text-xs font-black tracking-widest uppercase">
              Custom Development
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
        >
          We Build.{" "}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-[#45d1f5] via-white to-[#1C75BC]">
              End to End.
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Full-spectrum software engineering across web, mobile, backend, and cloud — from raw idea to beautifully shipped product. Click on any capability below to explore our process.
        </motion.p>
      </div>

      {/* ── B. 4 Expandable Capability Cards ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            // Hide the actual grid card if it's currently expanded in the modal
            const isExpanded = activeCard?.id === cap.id;

            return (
              <motion.div
                key={cap.id}
                layoutId={`card-${cap.id}`}
                onClick={() => setActiveCard(cap)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group flex flex-col relative overflow-hidden rounded-[20px] border p-6 transition-all duration-400 bg-[#110B29]/40 backdrop-blur-xs cursor-pointer ${
                  isExpanded ? "opacity-0 pointer-events-none" : "hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                }`}
                style={{ borderColor: cap.border }}
              >
                {/* Highlight line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)` }}
                />

                {/* Ambient background glow */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: cap.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border relative z-10 shadow-inner group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${cap.color}15`, borderColor: `${cap.color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color: cap.color }} />
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-bold text-white mb-2 relative z-10 transition-colors duration-200 group-hover:text-white/90 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 relative z-10 grow">
                  {cap.description}
                </p>

                {/* Condensed Tech Stack Pills */}
                <div className="relative z-10 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cap.techStack.slice(0, 3).map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-300"
                      >
                        {tech.icon} {tech.name}
                      </div>
                    ))}
                    {cap.techStack.length > 3 && (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold text-[#45d1f5]">
                        +{cap.techStack.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="text-[11px] font-bold text-[#45d1f5] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Details <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── C. Tech Stack Carousel ── */}
      <div className="w-full bg-white py-16 relative">
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
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A051E] tracking-tight"
          >
            Our Complete Tech Stack
          </motion.h3>
        </div>

        <div
          className="relative flex flex-col gap-4 overflow-hidden"
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
      <div className="w-full bg-[#f8fafc] border-t border-gray-200 border-b pb-14 pt-14">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={(i > 0 ? "pt-8 md:pt-0" : "")}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl md:text-5xl font-extrabold text-[#0A051E] mb-2 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── E. CTA ── */}
      <div className="w-full bg-[#0A051E] py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Ready to build something great?</h4>
            <p className="text-gray-400 text-sm md:text-base">Let's discuss your project and architect the perfect solution.</p>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#0A051E] font-bold rounded-full hover:bg-[#45d1f5] transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-[0_8px_24px_rgba(255,255,255,0.08)] hover:shadow-[0_8px_30px_rgba(69,209,245,0.3)] text-sm uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
}
