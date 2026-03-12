import { Globe, Smartphone, Server, Layers, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export interface TechItem {
  name: string;
  icon: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  icon: ComponentType<LucideProps>;
  title: string;
  color: string;
  description: string;
  techStack: TechItem[];
  whatWeBuild: string[];
  features: FeatureItem[];
}

export interface Stat {
  value: string;
  label: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const capabilities: Capability[] = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    color: "#1C75BC",
    description: "Scalable SaaS platforms, enterprise portals, and pixel-perfect websites built to convert.",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "𝗧𝗦" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Redux", icon: "🔮" },
    ],
    whatWeBuild: ["High-performance SaaS products", "Enterprise internal dashboards", "B2B and B2C web applications", "High-conversion landing pages"],
    features: [
      { title: "Server-Side Rendering", description: "Blazing fast SSR using Next.js for flawless SEO and zero-layout-shift performance." },
      { title: "Automated Deployment", description: "Zero-downtime CI/CD pipelines deploying directly to platforms like Vercel or AWS." },
      { title: "Edge Architecture", description: "Distributing assets globally via CDN Edge networks for the lowest possible latency." },
      { title: "Component Systems", description: "Modular, reusable UI architectures wrapped in strict TypeScript for zero runtime errors." },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    color: "#45d1f5",
    description: "Cross-platform mobile applications delivering native-quality experiences on iOS and Android.",
    techStack: [
      { name: "Flutter", icon: "💙" },
      { name: "Dart", icon: "🎯" },
      { name: "React Native", icon: "⚛️" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
    ],
    whatWeBuild: ["Consumer iOS & Android apps", "On-demand service platforms", "Fintech & healthcare applications", "IoT companion apps"],
    features: [
      { title: "Native vs Hybrid", description: "We architect the optimal path, whether compiling cross-platform or writing pure native." },
      { title: "App Store Deployment", description: "End-to-end management of Apple & Google build variants, testing, and store compliance." },
      { title: "Offline-First Design", description: "Robust local databases ensuring the app functions flawlessly without internet access." },
      { title: "Hardware Integration", description: "Deep native bindings into Bluetooth edge devices, camera APIs, and biometric sensors." },
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    color: "#a78bfa",
    description: "Rock-solid APIs and microservices powering your product's core business logic at scale.",
    techStack: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "🚀" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🟥" },
    ],
    whatWeBuild: ["RESTful & GraphQL APIs", "Distributed microservices", "Real-time socket servers", "High-volume data pipelines"],
    features: [
      { title: "Microservices", description: "Decoupled domain logic for maximum horizontal scalability and isolated fault tolerance." },
      { title: "DevOps & CI/CD", description: "Rigorous automated testing, Docker container orchestration, and Kubernetes clusters." },
      { title: "Data Integrity", description: "Strict database normalization combined with blazing-fast in-memory caching layers." },
      { title: "Advanced Security", description: "Enterprise-grade JWT authentication, IP rate limiting, and encrypted data at rest." },
    ],
  },
  {
    id: "fullstack",
    icon: Layers,
    title: "Full Stack Apps",
    color: "#34d399",
    description: "End-to-end product delivery — from concept and architecture to deployment and maintenance.",
    techStack: [
      { name: "Supabase", icon: "⚡" },
      { name: "Firebase", icon: "🔥" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "GCP", icon: "🌩️" },
    ],
    whatWeBuild: ["Marketplace platforms", "E-learning ecosystems", "Custom ERP / CRM systems", "AI-integrated products"],
    features: [
      { title: "End-to-End Ownership", description: "From initial DB schema to frontend UI, handled entirely by one synchronized agile team." },
      { title: "Cloud Infrastructure", description: "Scalable AWS or GCP hosting, utilizing modern serverless and containerized deployment." },
      { title: "Agile Delivery", description: "Iterative two-week sprints ensuring continuous stakeholder feedback and rapid shipping." },
      { title: "Active Monitoring", description: "Post-launch application performance monitoring (APM) and centralized log management." },
    ],
  },
];

export const row1Tech: string[] = [
  "React", "Next.js", "TypeScript", "JavaScript", "Vue.js",
  "Tailwind CSS", "Angular", "Vite", "Redux", "React Query",
];

export const row2Tech: string[] = [
  "Flutter", "Dart", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "Firebase", "Supabase", "Docker", "AWS",
];

export const techIcons: Record<string, string> = {
  "React": "⚛️", "Next.js": "▲", "TypeScript": "𝗧𝗦", "JavaScript": "𝗝𝗦", "Vue.js": "💚",
  "Tailwind CSS": "🎨", "Angular": "🔺", "Vite": "⚡", "Redux": "🔮", "React Query": "🔁",
  "Flutter": "💙", "Dart": "🎯", "Node.js": "🟢", "Python": "🐍", "FastAPI": "🚀",
  "PostgreSQL": "🐘", "Firebase": "🔥", "Supabase": "⚡", "Docker": "🐳", "AWS": "☁️",
};

export const stats: Stat[] = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Technologies" },
  { value: "98%", label: "Client Satisfaction" },
];
