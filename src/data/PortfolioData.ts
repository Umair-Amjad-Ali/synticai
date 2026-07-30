export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  year: string;
  duration: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
  liveLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  github?: string;
}

export const portfolioProjects: PortfolioItem[] = [
  {
    id: "smartcash",
    title: "SmartCash",
    description: "A smart financial management, time-tracking, and AI-powered coaching application designed for freelancers, gig workers, and contractors with over 5,000 downloads on the Google Play Store.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    link: "/portfolio/smartcash",
    category: "FinTech & Productivity",
    year: "2026",
    duration: "4 Months",
    technologies: ["Flutter", "Dart", "GetX", "Firebase", "Gemini AI", "Google Generative AI"],
    features: [
      "AI-Powered Financial Coaching using Gemini AI for real-time financial context answers.",
      "Smart Time & Project Tracking with custom hourly wage configurators.",
      "Comprehensive Expense & Budget Management with real-time budget limits.",
      "Analytics & Visual Reports displaying earnings vs. spending trends.",
      "Secure Authentication & OTP verification via Firebase Auth.",
      "Multi-Language Support & Localization for seamless international use.",
    ],
    challenge: "Freelancers and gig workers struggle to monitor multiple income sources, categorize fluctuating expenses, and receive personalized financial advice on the fly. Designing a unified mobile flow that connects real-time telemetry securely to a conversational AI assistant was a primary objective.",
    solution: "Developed SmartCash in Flutter using GetX state management. Hooked the app to Google Generative AI (Gemini SDK) via environment configurations, injecting current user stats dynamically into the prompts for highly tailored suggestions. Added robust offline tracking, expense budgeting thresholds, and OTP verification via Firebase Auth.",
    results: [
      "Amassed 5,000+ downloads on the Google Play Store.",
      "Successfully integrated real-time Gemini AI financial coaching.",
      "Delivered clean, reactive state management using GetX controllers.",
      "Active production updates currently in progress.",
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.enigmnex.smartcashapp",
    liveLink: "https://play.google.com/store/apps/details?id=com.enigmnex.smartcashapp",
  },
  {
    id: "nutrea",
    title: "Nutrea – AI Calorie Tracker",
    description:
      "Smart nutrition tracking app with AI-powered food analysis using GPT-4o Vision for automated meal logging. Snap a photo and get instant nutritional breakdowns.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    link: "/portfolio/nutrea",
    category: "Health & Fitness",
    year: "2025",
    duration: "3 Months",
    technologies: ["Flutter", "Firebase", "GPT-4o Vision API", "Dart"],
    features: [
      "AI-powered 'Snap & Track' feature using GPT-4o Vision API for instant food analysis.",
      "Automated nutritional breakdown and portion estimation from a single photo.",
      "Real-time Firebase Firestore synchronization across devices.",
      "Daily calorie intake and hydration tracking with goal-based logic.",
      "Automatic calorie target adjustments based on user goals.",
      "Progress tracking and health insights dashboard.",
    ],
    challenge:
      "Manual food logging is tedious and inaccurate, leading to poor nutrition tracking and users abandoning their health goals. GPT-4o Vision API responses took 5-8 seconds, making the user experience feel slow. AI also struggled with accurate portion estimation without reference objects.",
    solution:
      "Developed a 'Snap & Track' feature using AI vision to automatically analyze food photos, estimate portions, and provide accurate nutritional breakdowns instantly. Added optimistic UI with skeleton loaders and background processing with push notifications for latency. Implemented optional reference object detection (coins, plates) for portion calibration.",
    results: [
      "Instant food recognition and nutritional breakdown from a single photo.",
      "Real-time cross-device data sync via Firebase Firestore.",
      "Optimistic UI reduced perceived latency from 5-8 seconds to near-instant.",
      "Published on the Apple App Store for production users.",
    ],
    appStoreLink:
      "https://apps.apple.com/pk/app/nutrea-ai-calorie-tracker/id6758021432",
    liveLink:
      "https://apps.apple.com/pk/app/nutrea-ai-calorie-tracker/id6758021432",
  },
  {
    id: "modivfit",
    title: "ModivFit",
    description:
      "Gamified social fitness platform with challenges, leaderboards, workout videos, streaks, badges, and real-time engagement tools to keep users motivated.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    link: "/portfolio/modivfit",
    category: "Social Fitness",
    year: "2025",
    duration: "7 Months",
    technologies: ["Flutter", "Firebase", "Laravel API", "Google Ads", "FCM"],
    features: [
      "Challenge-focused app with interactive workout videos and tutorials.",
      "Streaks, badges, and leaderboards for full gamification of fitness routines.",
      "Scalable social platform with real-time chat and personalized feeds.",
      "Google Mobile Ads and subscription model integration for monetization.",
      "Firebase Cloud Messaging for real-time push notifications.",
      "Server-side leaderboard validation with activity pattern analysis and anomaly detection.",
    ],
    challenge:
      "Traditional fitness apps lack social engagement and motivation, causing users to lose interest and abandon their fitness routines. Workout videos were buffering on slow connections and users were finding ways to artificially inflate leaderboard scores.",
    solution:
      "Created a gamified social fitness platform with challenges, streaks, badges, and leaderboards to keep users motivated. Implemented adaptive bitrate streaming and pre-caching of next workout segments. Added server-side validation with activity pattern analysis for leaderboard integrity.",
    results: [
      "Full gamification engine with streaks, badges, and dynamic leaderboards.",
      "Adaptive bitrate streaming eliminated buffering on slow connections.",
      "Server-side anomaly detection prevented leaderboard cheating.",
      "Monetized via Google Mobile Ads and premium subscription tiers.",
    ],
  },
  {
    id: "thenotyou",
    title: "TheNotYou",
    description:
      "A clinical-grade mental wellness and panic stabilization mobile app built in Flutter, powered by Firebase Auth and a custom Laravel REST API with relational telemetry.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&q=80",
    link: "/portfolio/thenotyou",
    category: "Mental Health",
    year: "2026",
    duration: "3+ Months",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Laravel API", "MySQL"],
    features: [
      "9 therapeutic chambers seamlessly integrated into a futuristic Hub Dashboard.",
      "Emergency Mind Detox for immediate, tactile 45-second panic stabilization.",
      "Addiction Breaker offering clinical Urge Surfing tools to capture and delay cravings.",
      "Guilt Cleanser featuring a structured 11-step cognitive-restructuring workshop.",
      "Anger Tamer combining rage-journaling, somatic heatmaps, and response reframing.",
      "Restful Mind chamber with twilight dimming, moon breathing, and star-release tools.",
      "Robust Firebase Authentication integrated with a secure custom Laravel REST API.",
    ],
    challenge:
      "Modern wellness apps rarely feature immersive, step-by-step cognitive-behavioral tools for handling acute stress spikes, panic triggers, or compulsive cravings. Achieving high-fidelity organic flares and neon rendering in Flutter without performance degradation, and structuring relational telemetry sync across multi-step paths were major hurdles.",
    solution:
      "Engineered an interactive psychological wellness app comprising 9 modular chambers rendered in a dark futuristic neon aesthetic. Utilized custom paints and RadialGradients with optimized drawing caches for 60fps performance. Designed a localized state machine caching progress on-device with modular session telemetry uploaded to a custom Laravel database schema.",
    results: [
      "9 fully immersive therapeutic chambers with clinical-grade tools.",
      "Consistent 60fps rendering with complex custom canvas animations.",
      "Localized state machine with server-synced session telemetry.",
      "Dark futuristic neon aesthetic with glassmorphism visual design.",
    ],
    github: "",
  },
  {
    id: "borkow",
    title: "Borkow",
    description:
      "A premium, full-stack, location-based social discovery and community networking app built with Flutter and Supabase, featuring swipe-based discovery, real-time chat, and paywalled features.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    link: "/portfolio/borkow",
    category: "Social Networking",
    year: "2025",
    duration: "7+ Months",
    technologies: [
      "Flutter",
      "Supabase",
      "Dart",
      "TypeScript",
      "Stripe API",
      "Riverpod",
    ],
    features: [
      "Tinder-style swipe deck with responsive gestures and haptic triggers.",
      "Instant mutual matching using secure PostgreSQL RPC bypass functions.",
      "Smart message requests to prevent chat inbox spam.",
      "Supabase real-time WebSocket sync for messaging, read receipts, and typing states.",
      "Passport location spoofing with global cities database search.",
      "Dual payment gateways with Google Play / Apple App Store billing and Stripe checkouts.",
      "Active sessions portal tracking device info, IPs, and remote logout controls.",
      "Bidirectional user blocking and instant content moderation reporting.",
    ],
    challenge:
      "Managing high-concurrency likes and database race conditions when two users like each other simultaneously. Verifying receipt payloads from Google Play, Apple App Store, and Stripe web payments securely server-side was complex.",
    solution:
      "Wrote a custom PostgreSQL RPC function running outside default Row-Level Security (RLS) policies to check and record mutual matches atomically. Deployed custom Supabase Edge Functions in TypeScript to securely validate App Store, Google Play, and Stripe checkout receipts before upgrading user tiers.",
    results: [
      "Atomic mutual-match detection via custom PostgreSQL RPC functions.",
      "Cross-platform billing verification across Google Play, Apple, and Stripe.",
      "Real-time WebSocket messaging with read receipts and typing indicators.",
      "Published on both Google Play Store and Apple App Store.",
    ],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.borkow.app&pcampaignid=web_share",
    appStoreLink: "https://apps.apple.com/pk/app/borkow/id6761169964",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.borkow.app&pcampaignid=web_share",
  },
  {
    id: "battery-eye",
    title: "Battery Eye App",
    description:
      "Streamlined mobile application for battery sales, smart checkout, and real-time inventory management with multi-method payment processing.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "/portfolio/battery-eye",
    category: "Sales & Inventory",
    year: "2025",
    duration: "Ongoing",
    technologies: ["Flutter", "Firebase", "Dart"],
    features: [
      "Smart Checkout with automatic tax, delivery, and discount calculations.",
      "Split inventory tracking (Truck vs. Warehouse) with warranty separation.",
      "Digital receipt generation and photo evidence for proof of delivery.",
      "Role-based interface customization for different worker ranks.",
      "Secure login with station assignment verification.",
      "Real-time sales performance and commission tracking.",
    ],
    challenge:
      "Field technicians needed a robust tool to handle complex sales scenarios, track truck inventory versus warehouse stock, and process payments securely. Preventing overselling when multiple technicians access the same warehouse inventory simultaneously was critical.",
    solution:
      "Developed a comprehensive mobile checkout system with automatic price calculation, live stock deduction, and digital receipt generation. Implemented real-time transaction processing with immediate stock updates and conflict resolution. Created a dynamic payment module validating inputs for Card, Cash, Check, and Account methods.",
    results: [
      "Eliminated overselling with real-time transaction processing and conflict resolution.",
      "Automated tax, delivery fee, and discount calculations in the checkout flow.",
      "Role-based UI customization for technicians, managers, and administrators.",
      "Published on both Apple App Store and Google Play Store.",
    ],
    appStoreLink: "https://apps.apple.com/pk/app/battery-eye-app/id6757906597",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.enigmanex.battery_eye",
    liveLink: "https://apps.apple.com/pk/app/battery-eye-app/id6757906597",
  },
  {
    id: "battery-eye-admin",
    title: "Battery Eye Admin Panel",
    description:
      "Centralized administration system for managing companies, workforce, assets, and inventory across the Battery Eye platform with multi-tenant architecture.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "/portfolio/battery-eye-admin",
    category: "Enterprise Admin",
    year: "2025",
    duration: "Ongoing",
    technologies: ["Flutter", "Firebase", "GetX", "Dart"],
    features: [
      "Super Admin dashboard for platform infrastructure and company onboarding.",
      "Company Admin tools for workforce management and station assignments.",
      "Real-time asset tracking with automated truck passcode security.",
      "Global user activity monitoring and remote session control.",
      "Dynamic interface customization based on worker roles.",
      "Comprehensive inventory search and audit across all locations.",
      "Issue tracking module for equipment and stock discrepancies.",
    ],
    challenge:
      "Administrators needed a hierarchical system to manage multiple companies, monitor workforce activities, and secure assets like trucks and inventory. Ensuring complete data separation between companies while allowing Super Admin oversight and securing remote assets dynamically were key challenges.",
    solution:
      "Built a dual-layer admin panel (Super Admin & Company Admin) with extensive controls for onboarding, security, and operational oversight. Architected a strict multi-tenant database schema with company-specific access rules. Implemented automated passcode rotation for trucks and real-time remote session termination.",
    results: [
      "Strict multi-tenant data isolation across all managed companies.",
      "Automated truck passcode rotation and real-time remote session termination.",
      "Dual-layer admin hierarchy for platform-wide and company-level management.",
      "Full inventory visibility and audit trail across all locations.",
    ],
  },
];
