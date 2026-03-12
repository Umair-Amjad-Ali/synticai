import {
  Globe, ShieldCheck, Cpu, GraduationCap, Layers, TrendingUp
} from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────────────────────────────

export interface Article {
  id: number;
  title: string;
  category: string;
  color: string;
  icon: React.ElementType;
  author: string;
  date: string;
  readTime: string;
  description: string;
  tag: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  vertical: string;
  color: string;
  problem: string;
  solution: string;
  results: string[];
}

// ─── FILTER CATEGORIES ─────────────────────────────────────────────────────────

export const categories = ["All", "AI & ML", "FinTech", "Web Dev", "Mobile", "EdTech", "DevOps"];

// ─── ARTICLES ──────────────────────────────────────────────────────────────────

export const articles: Article[] = [
  {
    id: 1,
    title: "How We Cut Healthcare App Load Time by 40% Using Edge Caching",
    category: "Web Dev",
    color: "#45d1f5",
    icon: Globe,
    author: "SynticAI Engineering",
    date: "Mar 10, 2026",
    readTime: "7 min read",
    description:
      "A deep dive into our architecture decisions when we needed to reduce latency for a high-traffic EMR application serving 50,000+ daily active users.",
    tag: "Case Study",
  },
  {
    id: 2,
    title: "Building a Real-Time Fraud Detection Pipeline with Python & ML",
    category: "FinTech",
    color: "#1C75BC",
    icon: ShieldCheck,
    author: "SynticAI AI Team",
    date: "Feb 22, 2026",
    readTime: "11 min read",
    description:
      "We trained and deployed a gradient-boosted fraud detection model processing 1M+ transactions per day with sub-5ms response latency.",
    tag: "Deep Dive",
  },
  {
    id: 3,
    title: "Native vs Hybrid: Our Decision Framework for Mobile Projects",
    category: "Mobile",
    color: "#a78bfa",
    icon: Cpu,
    author: "SynticAI Product Team",
    date: "Feb 8, 2026",
    readTime: "9 min read",
    description:
      "After shipping 30+ mobile apps across Flutter, React Native, and Swift, here's the exact framework we use to decide which approach wins.",
    tag: "Guide",
  },
  {
    id: 4,
    title: "AI-Powered Personalization in EdTech: A Technical Blueprint",
    category: "EdTech",
    color: "#34d399",
    icon: GraduationCap,
    author: "SynticAI AI Team",
    date: "Jan 29, 2026",
    readTime: "13 min read",
    description:
      "We designed an adaptive curriculum engine that boosted course completion rates by 2.5x for a 10,000+ student learning platform.",
    tag: "Blueprint",
  },
  {
    id: 5,
    title: "From Silos to Source of Truth: Migrating a Legacy Enterprise ERP",
    category: "DevOps",
    color: "#f43f5e",
    icon: Layers,
    author: "SynticAI Platform Team",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    description:
      "Our step-by-step blueprint for migrating a 15-year-old monolithic ERP into a modern, event-driven microservice architecture with zero downtime.",
    tag: "Migration",
  },
  {
    id: 6,
    title: "Why We Chose Next.js 15 for High-Traffic SaaS Platforms",
    category: "Web Dev",
    color: "#f59e0b",
    icon: TrendingUp,
    author: "SynticAI Engineering",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    description:
      "Server components, partial prerendering, and edge deployment — we break down exactly why Next.js 15 is our default for serious SaaS builds.",
    tag: "Opinion",
  },
];

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "FinTech Startup",
    vertical: "Banking & Payments",
    color: "#1C75BC",
    problem:
      "High-latency payment gateway causing 12% cart abandonment at checkout.",
    solution:
      "Re-architected their payment pipeline using Redis caching and an event-driven microservice topology.",
    results: ["99.99% Uptime SLA", "<5ms Payment Latency", "12% Abandonment Eliminated"],
  },
  {
    id: 2,
    client: "Health Platform",
    vertical: "Health Tech",
    color: "#45d1f5",
    problem:
      "Siloed patient data across 6 legacy systems causing compliance failures.",
    solution:
      "Built a centralized HIPAA-compliant data layer with encrypted EMR integrations and role-based access.",
    results: ["100% HIPAA Compliance", "40% Faster Onboarding", "Zero Data Breaches"],
  },
  {
    id: 3,
    client: "eCommerce Brand",
    vertical: "Retail & Commerce",
    color: "#a78bfa",
    problem:
      "Fragmented inventory and 3-second page loads costing conversions.",
    solution:
      "Migrated to a headless Next.js storefront with real-time inventory sync and sub-1s load times.",
    results: ["3x Conversion Lift", "Sub-1s Page Loads", "Real-time Inventory"],
  },
];
