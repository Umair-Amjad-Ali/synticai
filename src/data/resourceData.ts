import {
  Globe, ShieldCheck, Cpu, Layers, TrendingUp, Smartphone
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
  content: string;
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

export const categories = ["All", "AI & ML", "FinTech", "Mobile", "Web Dev", "DevOps"];

// ─── ARTICLES ──────────────────────────────────────────────────────────────────

export const articles: Article[] = [
  {
    id: 1,
    title: "Integrating Gemini AI for Real-Time Contextual Financial Coaching in Flutter",
    category: "AI & ML",
    color: "#1C75BC",
    icon: Cpu,
    author: "SynticAI Mobile & AI Team",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    description:
      "How we integrated Google Generative AI (Gemini SDK) into SmartCash to deliver real-time, context-aware financial advice for freelancers.",
    tag: "AI Architecture",
    content: `<h3>Contextual AI in Mobile FinTech</h3>
<p>In modern personal finance applications, users expect more than static charts—they want interactive, personalized advice based on their actual spending and earning trends.</p>
<p>When developing <strong>SmartCash</strong>, our goal was to connect user telemetry (income sources, hourly wage configurations, expense thresholds) directly to a Gemini AI conversational assistant without incurring high latency or compromising API keys.</p>
<h3>Technical Implementation</h3>
<ul>
  <li><strong>Dynamic Prompt Context Injection:</strong> User financial metrics and active category parameters are dynamically aggregated in a GetX controller and passed as structured system context to the Gemini SDK.</li>
  <li><strong>Secure Environment Configuration:</strong> AI API tokens are securely managed server-side and accessed via encrypted environment injection.</li>
  <li><strong>Reactive GetX UI:</strong> AI responses stream directly into reactive UI components for instant user feedback.</li>
</ul>
<h3>Key Takeaways</h3>
<p>Combining reactive Flutter state management with Google Generative AI enabled a highly responsive, conversational financial advisor directly inside a mobile app with over 5,000 Play Store downloads.</p>`
  },
  {
    id: 2,
    title: "Building Instant Vision AI Food Tracking with GPT-4o Vision API",
    category: "AI & ML",
    color: "#45d1f5",
    icon: Globe,
    author: "SynticAI AI Team",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    description:
      "A deep dive into building Nutrea's 'Snap & Track' feature using GPT-4o Vision for rapid meal logging and portion estimation.",
    tag: "Vision AI",
    content: `<h3>The Latency & Portion Estimation Challenge</h3>
<p>Manual calorie logging is tedious. Nutrea's vision tracking allows users to take a single photo of their meal and instantly receive detailed macro and calorie breakdowns.</p>
<p>However, processing raw images via vision models introduced a 5-8 second latency window, and portion estimation without reference objects produced variance.</p>
<h3>Architectural Solutions</h3>
<ul>
  <li><strong>Optimistic UI & Skeleton Loading:</strong> We implemented instant skeleton UI states and optimistic local state updates while image payloads processed asynchronously.</li>
  <li><strong>Reference Calibration:</strong> Users can optionally include standard reference items (e.g. coins, plates) to help the vision model calibrate portion scale.</li>
  <li><strong>Firestore Real-Time Sync:</strong> Processed nutrition data synchronizes across all active user devices in real time via Firebase Firestore.</li>
</ul>`
  },
  {
    id: 3,
    title: "Solving Database Race Conditions in Social Matching with Custom PostgreSQL RPCs",
    category: "Mobile",
    color: "#a78bfa",
    icon: Smartphone,
    author: "SynticAI Backend Team",
    date: "Feb 1, 2026",
    readTime: "8 min read",
    description:
      "How we designed atomic mutual matching for Borkow using Supabase PostgreSQL RPC functions and real-time WebSockets.",
    tag: "Database Architecture",
    content: `<h3>High-Concurrency Matching</h3>
<p>When two users like each other simultaneously in a swipe-based discovery application, standard sequential SELECT-then-UPDATE queries can suffer from race conditions or duplicate notification triggers.</p>
<h3>PostgreSQL Atomic RPC Execution</h3>
<p>For <strong>Borkow</strong>, we wrote custom PostgreSQL RPC functions executing atomically within database transactions, bypassing default Row-Level Security policies safely to detect mutual matches in a single round-trip.</p>
<ul>
  <li><strong>Atomic Execution:</strong> Mutual match checks and insertion into the active conversation table happen within a single atomic RPC transaction.</li>
  <li><strong>Real-Time WebSockets:</strong> Match events immediately trigger Supabase WebSocket signals to notify both users instantly with zero polling overhead.</li>
</ul>`
  },
  {
    id: 4,
    title: "Designing Multi-Tenant Inventory Control and Truck Passcode Security",
    category: "DevOps",
    color: "#1C75BC",
    icon: ShieldCheck,
    author: "SynticAI Enterprise Team",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    description:
      "Architecting Battery Eye Admin Panel for multi-company asset tracking, role-based controls, and dynamic truck passcode security.",
    tag: "Enterprise System",
    content: `<h3>Multi-Tenant Data Isolation</h3>
<p>Managing inventory across multiple companies requires strict multi-tenant data separation while allowing Super Admin platform management.</p>
<h3>Security & Operational Control</h3>
<ul>
  <li><strong>Multi-Tenant Rules:</strong> Database access rules enforce strict company boundary checks across truck stock, warehouse inventory, and sales records.</li>
  <li><strong>Automated Truck Security:</strong> Passcodes for field sales trucks rotate automatically and can be remotely revoked by company administrators.</li>
  <li><strong>Remote Session Termination:</strong> Super Admins and Company Admins can inspect active device sessions and terminate unauthorized sessions in real time.</li>
</ul>`
  }
];

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "SmartCash",
    vertical: "FinTech & Productivity",
    color: "#1C75BC",
    problem:
      "Freelancers needed a unified mobile solution to track fluctuating income, manage expenses, and receive personalized AI financial advice.",
    solution:
      "Built a Flutter app with GetX reactive state management, Gemini AI context injection, and Firebase Auth for secure mobile financial tracking.",
    results: ["5,000+ Play Store Downloads", "Real-Time Gemini AI Coaching", "Offline Expense Telemetry"],
  },
  {
    id: 2,
    client: "Nutrea",
    vertical: "Health & Fitness",
    color: "#45d1f5",
    problem:
      "Manual meal logging was slow and tedious, leading to high user drop-off rates.",
    solution:
      "Engineered 'Snap & Track' using GPT-4o Vision API with optimistic UI and real-time Firestore synchronization.",
    results: ["Published on Apple App Store", "Instant Vision AI Meal Breakdown", "Near-Instant Perceived Latency"],
  },
  {
    id: 3,
    client: "Borkow",
    vertical: "Social Discovery",
    color: "#a78bfa",
    problem:
      "High-concurrency mutual likes caused database race conditions and payment validation hurdles across mobile stores.",
    solution:
      "Wrote custom PostgreSQL RPC functions for atomic mutual matching and Supabase Edge Functions for cross-platform billing verification.",
    results: ["Published on Google Play & App Store", "Atomic Match RPCs", "Real-Time WebSocket Messaging"],
  },
];
