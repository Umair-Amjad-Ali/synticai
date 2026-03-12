"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Network, HeartPulse, GraduationCap, ShieldCheck, ShoppingCart, Cpu, Building2 } from "lucide-react";
import Link from "next/link";

// ─── RICH INDUSTRY DATA ────────────────────────────────────────────────────────
const deepIndustries = [
  {
    id: "healthtech",
    name: "Health Tech & Medical",
    icon: HeartPulse,
    color: "#45d1f5",
    challenge: "Siloed patient data, legacy system interoperability, and strict HIPAA compliance bottlenecks creating massive operational friction.",
    solution: "We engineer centralized, encrypted EMR systems and telemedicine architectures that unify data while maintaining zero-trust security.",
    impact: [
      { metric: "100%", label: "HIPAA Compliance" },
      { metric: "40%", label: "Faster Onboarding" },
      { metric: "Zero", label: "Data Breaches" }
    ],
    capabilities: ["Custom EMR / EHR Integrations", "Telehealth Video Streaming", "IoMT Device Connectivity", "AI-Powered Diagnostics"],
    tech: ["Node.js", "PostgreSQL", "AWS Healthcare", "React Native"]
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    icon: ShieldCheck,
    color: "#1C75BC",
    challenge: "High-latency transactions, sophisticated fraud attempts, and decentralized ledgers requiring absolute microsecond precision.",
    solution: "We build high-frequency trading platforms and decentralized finance (DeFi) apps with memory-cached ledgers and ML-driven fraud detection.",
    impact: [
      { metric: "99.99%", label: "Uptime SLA" },
      { metric: "<5ms", label: "Trading Latency" },
      { metric: "Level 1", label: "PCI-DSS Standard" }
    ],
    capabilities: ["Algorithmic Trading Engines", "Blockchain Smart Contracts", "Real-Time Payment Gateways", "Automated KYC Pipelines"],
    tech: ["Python", "FastAPI", "Redis", "Solidity"]
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    icon: ShoppingCart,
    color: "#a78bfa",
    challenge: "Disconnected omnichannel experiences, unpredictable supply chain logistics, and high cart abandonment rates.",
    solution: "We deploy unified headless commerce architectures, AI-driven inventory prediction, and highly personalized mobile checkout experiences.",
    impact: [
      { metric: "3x", label: "Conversion Lift" },
      { metric: "Real-time", label: "Inventory Sync" },
      { metric: "Sub-1s", label: "Page Loads" }
    ],
    capabilities: ["Headless Commerce Engines", "AR Fitting Rooms", "Predictive Logistics", "Custom Loyalty Portals"],
    tech: ["Next.js", "Shopify Plus", "Supabase", "Flutter"]
  },
  {
    id: "edtech",
    name: "EdTech & Learning",
    icon: GraduationCap,
    color: "#34d399",
    challenge: "Low student engagement, non-scalable legacy LMS platforms, and lack of personalized learning pathways.",
    solution: "We craft interactive, gamified Learning Management Systems powered by AI to dynamically adapt curriculums to individual pacing.",
    impact: [
      { metric: "2.5x", label: "Course Completion" },
      { metric: "10k+", label: "Concurrent Users" },
      { metric: "95%", label: "Student Retention" }
    ],
    capabilities: ["Custom LMS Platforms", "WebRTC Virtual Classrooms", "AI Progress Tracking", "Gamification Engines"],
    tech: ["React", "WebRTC", "Firebase", "TypeScript"]
  },
  {
    id: "iot",
    name: "Industrial IoT",
    icon: Cpu,
    color: "#f59e0b",
    challenge: "Massive influxes of unstructured edge-device data resulting in delayed preventative maintenance and critical machinery downtime.",
    solution: "We develop ultra-low latency data pipelines processing millions of edge events per second into actionable, real-time dashboards.",
    impact: [
      { metric: "30%", label: "Downtime Decreased" },
      { metric: "1M/s", label: "Event Ingestion" },
      { metric: "Automated", label: "Work Orders" }
    ],
    capabilities: ["Edge Device Connectivity", "Digital Twin Modeling", "Predictive Maintenance", "SCADA Integrations"],
    tech: ["C++", "AWS IoT Core", "Docker", "Vue.js"]
  },
  {
    id: "enterprise",
    name: "Enterprise ERP",
    icon: Building2,
    color: "#f43f5e",
    challenge: "Fragmented departmental software requiring endless manual data entry, hiding true business intelligence from executives.",
    solution: "We architect cohesive, centralized Enterprise Resource Planning (ERP) systems that consolidate HR, Finance, and Operations into one source of truth.",
    impact: [
      { metric: "100s", label: "Hours Saved/Mo" },
      { metric: "Single", label: "Source of Truth" },
      { metric: "Instant", label: "BI Reporting" }
    ],
    capabilities: ["Legacy System Migration", "Custom BI Dashboards", "Automated Invoicing", "Cross-Department Workflows"],
    tech: ["Next.js", "Java", "PostgreSQL", "Kubernetes"]
  }
];

// ─── MAIN COMPONENTS ───────────────────────────────────────────────────────

function IndustriesHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0A051E] pt-24 pb-16">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-16 rounded-2xl border border-white/5 bg-[#110B29] flex items-center justify-center mb-8 shadow-inner"
        >
          <Network className="w-8 h-8 text-[#45d1f5]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
        >
          Transforming Verticals.<br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#45d1f5] to-[#1C75BC]">
            Powering the Future.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
        >
          We don't just write code; we solve complex, industry-specific operational nightmares. Discover how our tailored enterprise architectures push boundaries across global sectors.
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-[#0A051E] to-transparent pointer-events-none" />
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#0A051E] font-sans selection:bg-[#45d1f5]/30">
      <IndustriesHero />

      <section className="w-full relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          
          {deepIndustries.map((ind, idx) => {
            const Icon = ind.icon;
            const isEven = idx % 2 === 0;

            const newLocal = "absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-white/[0.07] to-white/1 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden z-10";
            return (
              <motion.div 
                key={ind.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}
              >
                {/* ── Left Side: 3D Floating Glass Prism Concept ── */}
                <div className="w-full lg:w-[45%] flex items-center justify-center relative min-h-[400px] perspective-1000">
                  
                  {/* Subtle Grain Background */}
                  <div className="absolute inset-4 rounded-[3rem] bg-[#0A071A] opacity-50 border border-white/2 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  </div>

                  {/* Core 3D Group */}
                  <motion.div 
                    whileHover={{ rotateY: isEven ? -10 : 10, rotateX: 10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-64 h-64 flex items-center justify-center transform-style-3d group cursor-default"
                  >
                    {/* Layer 1: Deep Drop Shadow Base */}
                    <div className="absolute inset-0 bg-[#060411] rounded-[2.5rem] shadow-[-20px_20px_40px_rgba(0,0,0,0.8)] translate-z-[-20px] transition-transform duration-500 group-hover:translate-z-[-40px]" />
                    
                    {/* Layer 2: Offset Wireframe Border */}
                    <div className="absolute -inset-4 border border-white/5 rounded-[3rem] translate-z-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-z-[-20px]" />

                    {/* Layer 3: Main Glass Block */}
                    <div className={newLocal}>
                       {/* Subtle Colored Accent Corner */}
                       <div 
                         className="absolute -top-12 -left-12 w-32 h-32 blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                         style={{ backgroundColor: ind.color }}
                       />
                       
                       <Icon 
                         className="w-24 h-24 relative z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110" 
                         style={{ color: ind.color }} 
                         strokeWidth={1.5}
                       />
                    </div>

                    {/* Layer 4: Floating Accent Ring */}
                    <div 
                      className="absolute inset-0 rounded-[2.5rem] border opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-105 transition-all duration-700 ease-out translate-z-[30px] pointer-events-none"
                      style={{ borderColor: `${ind.color}30` }}
                    />
                  </motion.div>
                </div>

                {/* ── Right Side: The Z-Pattern Deep Dashboard ── */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
                      style={{ borderColor: `${ind.color}40`, backgroundColor: `${ind.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: ind.color }} />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{ind.name}</h2>
                    </div>
                  </div>

                  {/* Core Challenge vs Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-[#110B29]/60 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">The Challenge</div>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">{ind.challenge}</p>
                    </div>
                    <div className="p-6 rounded-2xl border bg-white/5 hover:bg-white/10 transition-colors" style={{ borderColor: `${ind.color}30` }}>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ind.color }}>Our Solution</div>
                      <p className="text-sm text-white leading-relaxed font-medium">{ind.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mb-8">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-white/10" /> Proven Impact
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {ind.impact.map((imp, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{imp.metric}</span>
                          <span className="text-xs text-gray-400 font-semibold">{imp.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities & Tech (Bottom Strip) */}
                  <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    <div className="flex flex-col gap-2">
                       {ind.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ind.color }} />
                            <span className="text-[13px] text-gray-300 font-medium">{cap}</span>
                          </div>
                       ))}
                    </div>
                    <div className="flex flex-wrap gap-2 md:max-w-[180px] justify-start md:justify-end">
                      {ind.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#1C153A] text-[#8b92a5] border border-white/5">{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ── GLOBAL CTA ── */}
      <section className="w-full py-24 border-t border-white/5 bg-[#0A051E] relative overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to disrupt your industry?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">Let's discuss how our highly specialized engineering teams can architect your next profound advantage.</p>
          <Link 
            href="/contact"
            className="group relative px-8 py-4 bg-white text-[#0A051E] font-extrabold rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(69,209,245,0.5)] transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#45d1f5] to-[#1C75BC] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
