import { HeartPulse, ShieldCheck, ShoppingCart, GraduationCap, Cpu, Building2, LucideIcon } from "lucide-react";

export interface IndustryImpact {
  metric: string;
  label: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  challenge: string;
  solution: string;
  impact: IndustryImpact[];
  capabilities: string[];
  tech: string[];
}

export const industriesData: Industry[] = [
  {
    id: "healthtech",
    name: "Health Tech & Medical",
    tagline: "Zero-compromise patient data infrastructure",
    icon: HeartPulse,
    color: "#45d1f5", // Brand Light
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge:
      "Siloed patient data, legacy system interoperability, and strict HIPAA compliance bottlenecks are creating massive operational friction for healthcare providers.",
    solution:
      "We engineer centralized, encrypted EMR systems and telemedicine architectures that unify data silos while maintaining zero-trust security across every access layer.",
    impact: [
      { metric: "100%", label: "HIPAA Compliant" },
      { metric: "40%", label: "Faster Onboarding" },
      { metric: "0", label: "Data Breaches" },
    ],
    capabilities: [
      "Custom EMR / EHR Integrations",
      "Telehealth Video Streaming",
      "IoMT Device Connectivity",
      "AI-Powered Diagnostics",
    ],
    tech: ["Node.js", "PostgreSQL", "AWS Healthcare", "React Native"],
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "Microsecond precision for modern finance",
    icon: ShieldCheck,
    color: "#1C75BC", // Brand Primary
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge:
      "High-latency transactions, increasingly sophisticated fraud attempts, and decentralized ledgers requiring absolute microsecond-level precision are disrupting financial operations.",
    solution:
      "We build high-frequency trading platforms and DeFi applications with memory-cached ledgers and ML-driven fraud detection pipelines that scale globally.",
    impact: [
      { metric: "99.99%", label: "Uptime SLA" },
      { metric: "<5ms", label: "Trade Latency" },
      { metric: "L1", label: "PCI-DSS Standard" },
    ],
    capabilities: [
      "Algorithmic Trading Engines",
      "Blockchain Smart Contracts",
      "Real-Time Payment Gateways",
      "Automated KYC Pipelines",
    ],
    tech: ["Python", "FastAPI", "Redis", "Solidity"],
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    tagline: "Unified commerce that converts at scale",
    icon: ShoppingCart,
    color: "#45d1f5", // Brand Light
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge:
      "Disconnected omnichannel experiences, unpredictable supply chain disruptions, and high cart abandonment rates are costing retailers billions in lost revenue.",
    solution:
      "We deploy unified headless commerce architectures with AI-driven inventory prediction and hyper-personalized mobile checkout flows that convert.",
    impact: [
      { metric: "3×", label: "Conversion Lift" },
      { metric: "Real-time", label: "Inventory Sync" },
      { metric: "Sub-1s", label: "Page Loads" },
    ],
    capabilities: [
      "Headless Commerce Engines",
      "AR Fitting Rooms",
      "Predictive Logistics",
      "Custom Loyalty Portals",
    ],
    tech: ["Next.js", "Shopify Plus", "Supabase", "Flutter"],
  },
  {
    id: "edtech",
    name: "EdTech & Learning",
    tagline: "Education systems that adapt and deeply engage",
    icon: GraduationCap,
    color: "#1C75BC", // Brand Primary
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge:
      "Low student engagement rates, non-scalable legacy LMS platforms, and the complete absence of personalized adaptive learning pathways are failing learners globally.",
    solution:
      "We craft interactive, gamified LMS platforms powered by AI that dynamically adapt curriculum content and pacing to each individual student's needs.",
    impact: [
      { metric: "2.5×", label: "Course Completion" },
      { metric: "10k+", label: "Concurrent Users" },
      { metric: "95%", label: "Student Retention" },
    ],
    capabilities: [
      "Custom LMS Platforms",
      "WebRTC Virtual Classrooms",
      "AI Progress Tracking",
      "Gamification Engines",
    ],
    tech: ["React", "WebRTC", "Firebase", "TypeScript"],
  },
  {
    id: "iot",
    name: "Industrial IoT",
    tagline: "Edge intelligence at machine speed",
    icon: Cpu,
    color: "#45d1f5", // Brand Light
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge:
      "Massive influxes of unstructured edge-device data result in delayed preventative maintenance triggers and costly critical machinery downtime.",
    solution:
      "We develop ultra-low latency data pipelines capable of processing millions of edge events per second, surfacing them in actionable real-time dashboards.",
    impact: [
      { metric: "30%", label: "Downtime Reduced" },
      { metric: "1M/s", label: "Event Ingestion" },
      { metric: "Auto.", label: "Work Orders" },
    ],
    capabilities: [
      "Edge Device Connectivity",
      "Digital Twin Modeling",
      "Predictive Maintenance",
      "SCADA Integrations",
    ],
    tech: ["C++", "AWS IoT Core", "Docker", "Vue.js"],
  },
  {
    id: "enterprise",
    name: "Enterprise ERP",
    tagline: "One source of truth for your entire operation",
    icon: Building2,
    color: "#1C75BC", // Brand Primary
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge:
      "Fragmented departmental software requiring endless manual data reconciliation hides true business intelligence and blocks executives from making confident decisions.",
    solution:
      "We architect cohesive centralized ERP systems that consolidate HR, Finance, and Operations into a single real-time source of truth with live BI reporting.",
    impact: [
      { metric: "100s", label: "Hours Saved/Mo" },
      { metric: "Single", label: "Source of Truth" },
      { metric: "Live", label: "BI Reporting" },
    ],
    capabilities: [
      "Legacy System Migration",
      "Custom BI Dashboards",
      "Automated Invoicing",
      "Cross-Department Workflows",
    ],
    tech: ["Next.js", "Java", "PostgreSQL", "Kubernetes"],
  },
];
