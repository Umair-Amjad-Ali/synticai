import { HeartPulse, ShieldCheck, ShoppingCart, GraduationCap, Cpu, Building2, Smartphone, CpuIcon, Lock, type LucideIcon } from "lucide-react";

export interface IndustryImpact {
  metric: string;
  label: string;
}

export interface Industry {
  id: number;
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
  image: string;
  description?: string;
}

export const industriesData: Industry[] = [
  {
    id: 1,
    name: "Health Tech & Medical",
    tagline: "Zero-compromise patient data infrastructure",
    icon: HeartPulse,
    color: "#45d1f5",
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge: "Siloed patient data, legacy system interoperability, and strict HIPAA compliance bottlenecks are creating massive operational friction for healthcare providers.",
    solution: "We engineer centralized, encrypted EMR systems and telemedicine architectures that unify data silos while maintaining zero-trust security across every access layer.",
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
      "Clinical Workflow Automation",
      "Patient Portal Development",
    ],
    tech: ["Node.js", "PostgreSQL", "AWS Healthcare", "React Native"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    id: 2,
    name: "FinTech & Banking",
    tagline: "Microsecond precision for modern finance",
    icon: ShieldCheck,
    color: "#1C75BC",
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge: "High-latency transactions, increasingly sophisticated fraud attempts, and decentralized ledgers requiring absolute microsecond-level precision are disrupting financial operations.",
    solution: "We build high-frequency trading platforms and DeFi applications with memory-cached ledgers and ML-driven fraud detection pipelines that scale globally.",
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
      "ML Fraud Detection",
      "Open Banking Integrations",
    ],
    tech: ["Python", "FastAPI", "Redis", "Solidity"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 3,
    name: "Retail & eCommerce",
    tagline: "Unified commerce that converts at scale",
    icon: ShoppingCart,
    color: "#45d1f5",
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge: "Disconnected omnichannel experiences, unpredictable supply chain disruptions, and high cart abandonment rates are costing retailers billions in lost revenue.",
    solution: "We deploy unified headless commerce architectures with AI-driven inventory prediction and hyper-personalized mobile checkout flows that convert.",
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
      "Omnichannel Order Management",
      "Personalization Engines",
    ],
    tech: ["Next.js", "Shopify Plus", "Supabase", "Flutter"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
  },
  {
    id: 4,
    name: "EdTech & Learning",
    tagline: "Education systems that adapt and deeply engage",
    icon: GraduationCap,
    color: "#1C75BC",
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge: "Low student engagement rates, non-scalable legacy LMS platforms, and the complete absence of personalized adaptive learning pathways are failing learners globally.",
    solution: "We craft interactive, gamified LMS platforms powered by AI that dynamically adapt curriculum content and pacing to each individual student's needs.",
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
      "Adaptive Curriculum AI",
      "Student Analytics Dashboards",
    ],
    tech: ["React", "WebRTC", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
  },
  {
    id: 5,
    name: "Industrial IoT",
    tagline: "Edge intelligence at machine speed",
    icon: Cpu,
    color: "#45d1f5",
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge: "Massive influxes of unstructured edge-device data result in delayed preventative maintenance triggers and costly critical machinery downtime.",
    solution: "We develop ultra-low latency data pipelines capable of processing millions of edge events per second, surfacing them in actionable real-time dashboards.",
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
      "Real-Time Sensor Dashboards",
      "OTA Firmware Management",
    ],
    tech: ["C++", "AWS IoT Core", "Docker", "Vue.js"],
    image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=800&q=80"
  },
  {
    id: 6,
    name: "Enterprise ERP",
    tagline: "One source of truth for your entire operation",
    icon: Building2,
    color: "#1C75BC",
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge: "Fragmented departmental software requiring endless manual data reconciliation hides true business intelligence and blocks executives from making confident decisions.",
    solution: "We architect cohesive centralized ERP systems that consolidate HR, Finance, and Operations into a single real-time source of truth with live BI reporting.",
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
      "Role-Based Access Control",
      "Multi-Currency & Multi-Entity",
    ],
    tech: ["Next.js", "Java", "PostgreSQL", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    id: 7,
    name: "App Development",
    tagline: "High-performance mobile experiences",
    icon: Smartphone,
    color: "#45d1f5",
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge: "Slow, poorly-optimized mobile applications drive away users, reduce retention, and fail to provide the seamless experience modern consumers expect.",
    solution: "We build native and cross-platform mobile apps with incredibly fluid animations, rich offline capabilities, and instant API response times.",
    impact: [
      { metric: "4.9", label: "Avg App Rating" },
      { metric: "60fps", label: "UI Performance" },
      { metric: "2x", label: "User Retention" },
    ],
    capabilities: [
      "iOS & Android Native",
      "Cross-Platform Apps",
      "App Store Optimization",
      "Mobile Backend as a Service",
      "Offline-First Architecture",
      "Push Notification Systems",
    ],
    tech: ["Swift", "Kotlin", "Flutter", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    id: 8,
    name: "AI & Automation",
    tagline: "Intelligent systems that do the heavy lifting",
    icon: CpuIcon,
    color: "#1C75BC",
    gradient: "from-[#1C75BC] to-[#101254]",
    challenge: "Manual, highly-repetitive business processes drain employee productivity, introduce human error, and artificially cap how fast a company can scale.",
    solution: "We deploy custom generative AI agents, smart OCR pipelines, and autonomous workflow bots to handle repetitive tasks at superhuman speed.",
    impact: [
      { metric: "80%", label: "Task Automation" },
      { metric: "0", label: "Human Error" },
      { metric: "10x", label: "Process Speed" },
    ],
    capabilities: [
      "Custom LLM Integrations",
      "Robotic Process Automation",
      "Predictive Analytics",
      "Computer Vision",
      "Smart OCR Pipelines",
      "Autonomous Workflow Agents",
    ],
    tech: ["Python", "TensorFlow", "OpenAI", "PyTorch"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 9,
    name: "Cybersecurity",
    tagline: "Bulletproof defense for critical assets",
    icon: Lock,
    color: "#45d1f5",
    gradient: "from-[#45d1f5] to-[#1C75BC]",
    challenge: "Rising threat vectors, sophisticated phishing attacks, and unpatched infrastructure vulnerabilities leave organizations wide open to devastating ransomware.",
    solution: "We implement advanced zero-trust architectures, 24/7 AI-driven threat monitoring, and automated penetration testing to secure your most valuable data.",
    impact: [
      { metric: "24/7", label: "Threat Monitoring" },
      { metric: "100%", label: "Compliance Met" },
      { metric: "<1ms", label: "Threat Detection" },
    ],
    capabilities: [
      "Zero-Trust Architecture",
      "Penetration Testing",
      "SOC as a Service",
      "Incident Response",
      "Vulnerability Management",
      "Security Awareness Training",
    ],
    tech: ["Rust", "CrowdStrike", "AWS Security", "Kali Linux"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  }
];