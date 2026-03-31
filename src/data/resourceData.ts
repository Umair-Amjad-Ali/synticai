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
    content: `<h3>The Challenge</h3>
<p>In the healthcare sector, every second counts. A major Electronic Medical Records (EMR) provider approached us with a significant problem: their web application was taking upwards of 3.2 seconds to load critical patient data summaries. For medical professionals relying on rapid information retrieval during patient consultations, this delay was unacceptable and was leading to significant user frustration and task drop-offs.</p>
<p>The core of the issue lay in their legacy architecture. Every time a user requested a dashboard, the server had to process complex SQL queries across millions of rows of heavily encrypted relational data, construct the JSON payload, and serve it across the globe from a single centralized data center in Ohio. As their user base scaled past 50,000 daily active users across three continents, the database bottlenecks and geographic latency compounded.</p>
<h3>The Architecture Redesign</h3>
<p>To solve this without compromising the strict HIPAA compliance required for medical data, we implemented a sophisticated edge-caching architecture leveraging <strong>Next.js Incremental Static Regeneration (ISR)</strong> combined with Cloudflare's Edge Network.</p>
<p>First, we decoupled the public-facing and non-sensitive metadata (like hospital structural data, taxonomies, and anonymized aggregate statistics) from the highly sensitive Protected Health Information (PHI). We aggressively cached the non-sensitive data at the edge nodes closest to the users, cutting out the database round-trip entirely for 40% of the initial page load payload.</p>
<ul>
  <li><strong>API Gateway Proxy:</strong> Implemented a secure gateway that intelligently routed calls, serving cached data from the edge while proxying PHI calls securely to the central secure server.</li>
  <li><strong>Next.js ISR:</strong> We utilized Next.js ISR to keep the semi-dynamic dashboards up to date. This meant the first user to request a newly updated view might wait 1 second, but the next 1,000 users would receive a sub-100ms response.</li>
  <li><strong>Optimistic UI Updates:</strong> We rewrote the React frontend to use optimistic UI updates and skeleton loaders, completely eliminating the perceived waiting time for users querying complex patient histories.</li>
</ul>
<h3>The Results</h3>
<p>The impact was immediate and profound. Average Time to Interactive (TTI) dropped from 3.2 seconds to consistently under 400 milliseconds globally. The database load was reduced by 65%, freeing up resources for complex analytic queries, and user satisfaction surveys score shot up by 42%.</p>`
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
    content: `<h3>The Ascendance of Sophisticated Fraud</h3>
<p>As the FinTech startup scaled to over 1 million daily transactions, they faced a rapidly evolving threat landscape. Traditional rule-based fraud detection systems—relying on static blacklists and simple IP thresholding—were failing. They were either generating too many false positives (blocking legitimate users and destroying trust) or missing complex, multi-account orchestrated fraud rings that were costing the company thousands of dollars daily.</p>
<p>Fraudsters were utilizing distributed VPN networks, device-spoofing farms, and slow-drip extraction methods to blend in with normal consumer behavior. They needed a system that could intelligently adapt and evaluate holistic user behavior in real-time, without adding noticeable delay to the payment flow.</p>
<h3>Engineering a Real-Time ML Pipeline</h3>
<p>We architected a high-throughput, extremely low-latency Machine Learning pipeline using a combination of Python, Apache Kafka, and Redis. The core anomaly detection engine was powered by a highly optimized XGBoost (eXtreme Gradient Boosting) model.</p>
<p>Here is how the pipeline functions under heavy load:</p>
<ul>
  <li><strong>Event Ingestion:</strong> Every transaction, login attempt, and profile edit is streamed immediately into Apache Kafka.</li>
  <li><strong>Feature Extraction via Redis:</strong> We utilize Redis Enterprise to store ultra-fast, in-memory feature stores. As a transaction enters, the system instantly pulls up the user's historical velocity (e.g., "number of transactions in the last 15 minutes", "distance from usual login location").</li>
  <li><strong>Model Inference:</strong> The transaction data and historical features are fed into a containerized Python FastAPI microservice housing the trained XGBoost model.</li>
  <li><strong>Decision Engine:</strong> The model outputs a continuous fraud probability score. Based on dynamic, business-configurable thresholds, the transaction is Approved, Blocked, or routed to Step-Up Authentication (like an SMS OTP).</li>
</ul>
<h3>Performance & Impact</h3>
<p>The technical constraint was massive: the entire pipeline, from ingestion to decision, had to execute in less than 50 milliseconds to maintain a seamless checkout experience. Through extreme optimization of the Redis feature store and utilizing C++ bindings for the XGBoost inference logic, we achieved an average pipeline execution latency of <strong>4.2 milliseconds</strong>.</p>
<p>Post-deployment, the model reduced chargeback losses by 89% and slashed false-positive account freezes by 76%, saving the customer support team thousands of manual review hours per month.</p>`
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
    content: `<h3>The Perpetual Dilemma: Native vs. Hybrid</h3>
<p>When starting a new mobile project, one of the first and most consequential decisions an engineering team makes is choosing the underlying framework. Do you invest the time and budget into building two separate native applications using Swift (iOS) and Kotlin (Android), or do you leverage a unified codebase using a hybrid framework like React Native or Flutter?</p>
<p>After successfully shipping over 30 mobile applications across various industries at SynticAI, we've developed a battle-tested decision matrix that removes the guesswork from this critical architectural choice.</p>
<h3>When We Choose Hybrid (React Native / Flutter)</h3>
<p>For roughly 70% of the applications we build—primarily B2B SaaS platforms, e-commerce storefronts, and content delivery apps—hybrid is the undisputed winner. The ability to write business logic and UI components once and deploy them to both major app stores drastically reduces time-to-market and halves ongoing maintenance costs.</p>
<ul>
  <li><strong>Time to Market is Critical:</strong> If a startup needs an MVP to secure funding within 3 months, React Native allows us to iterate incredibly fast with features like Hot Reloading.</li>
  <li><strong>UI-Heavy, Interaction-Light:</strong> If the app consists mainly of forms, feeds, charts, and standard REST/GraphQL data fetching, modern hybrid frameworks render at a smooth 60fps, completely indistinguishable from native apps.</li>
  <li><strong>Web Team Synergy:</strong> Using React Native allows companies to leverage their existing React.js web developers to contribute to the mobile app, unifying the engineering culture.</li>
</ul>
<h3>When We Demand True Native (Swift / Kotlin)</h3>
<p>However, cross-platform frameworks introduce architectural overhead. They rely on "bridges" to communicate with native device APIs, which can become bottlenecks. We strictly advocate for pure Native development under specific conditions:</p>
<p>First, if the application heavily relies on <strong>Core Device Hardware</strong>. Apps that require intense Bluetooth Low Energy (BLE) communication, complex background location tracking algorithms, or raw camera buffer manipulation (like AR apps) will struggle with hybrid bridges.</p>
<p>Second, if the app demands <strong>High-Fidelity Rendering</strong>. Physics-based mobile games, real-time video processing, or highly intricate UI animations are better served by the metal-close performance of native views.</p>
<p>Our rule of thumb: If you find yourself writing custom native modules for more than 20% of your hybrid app's features, you should have built it natively from the start.</p>`
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
    content: `<h3>The Limits of Linear Learning</h3>
<p>Modern online education platforms suffer from a massive flaw: they treat all students identically. A linear curriculum assumes that a student who masters algebra intuitively learns at the precise same pace and through the exact same medium as a student struggling with basic fractions.</p>
<p>For a major EdTech client hosting over 10,000 active students, this one-size-fits-all approach resulted in a dismal 18% course completion rate. Advanced students were getting bored and dropping off, while struggling students were becoming overwhelmed and abandoning the platform.</p>
<h3>Building the Adaptive Curriculum Engine</h3>
<p>We set out to build a deeply personalized, AI-driven learning engine that dynamically adapts the curriculum path, difficulty, and content medium to fit the real-time cognitive state of the specific student.</p>
<p>The system comprises three core technical pillars:</p>
<ul>
  <li><strong>Knowledge Graph Architecture:</strong> We mapped the entire curriculum onto a Neo4j Graph Database. Instead of a linear list of videos, the course became a web of interconnected concepts. "Understanding Fractions" was structurally linked as a prerequisite to "Basic Algebra".</li>
  <li><strong>Continuous Micro-Assessments:</strong> We replaced daunting end-of-module exams with seamless, gamified micro-quizzes embedded directly into the video player. This allowed us to gather thousands of data points on a student's comprehension in real time.</li>
  <li><strong>AI Routing Logic:</strong> Using Natural Language Processing (NLP) and a custom decision tree, the AI evaluates the quiz results. If a student fails a concept three times using text-based tutorials, the engine dynamically re-routes their next lesson to a visual, animated explanation of the exact same concept.</li>
</ul>
<h3>Results That Redefined the Platform</h3>
<p>By tailoring the educational path to the individual, the platform transformed. The engine automatically skipped redundant introductory modules for advanced users, keeping them engaged. Crucially, it identified struggling students early, routing them to foundational remediation content before they could fail.</p>
<p>Within six months of deploying the adaptive engine, overall course completion rates skyrocketed by 2.5x, and average student daily engagement metrics improved from 14 minutes to 38 minutes per session.</p>`
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
    content: `<h3>The Legacy Monolith Burden</h3>
<p>Many enterprises find themselves trapped by their own success. A massive logistics client came to us with a 15-year-old on-premise ERP system built entirely on a single PHP monolith. While it had served them well, it had become a "Big Ball of Mud." Any update required weeks of regression testing, and during peak shipping seasons, the entire system would slow to a crawl because independent modules (like invoicing and label printing) couldn't be scaled independently.</p>
<h3>Implementing the Strangler Fig Pattern</h3>
<p>Rebuilding a system of this magnitude from scratch introduces massive business risk. Instead, we utilized the <strong>Strangler Fig Pattern</strong>—a systematic process of intercepting requests to the old system and gradually overriding them with a new, microservice-based architecture running alongside it in the cloud.</p>
<p>Here is the step-by-step technical blueprint we followed:</p>
<ul>
  <li><strong>The Traefik API Gateway:</strong> We installed a powerful edge router (Traefik) in front of the legacy ERP to act as the traffic cop. Initially, 100% of traffic simply passed straight through to the old system.</li>
  <li><strong>Event Sourcing to Sync State:</strong> We implemented Change Data Capture (CDC) via Debezium on the legacy database. Any write to the old database instantly triggered a Kafka event, keeping the new cloud PostgreSQL databases perfectly synchronized.</li>
  <li><strong>Isolating Domains:</strong> We identified the "Shipping Rate Calculator" as the lowest-hanging fruit. We built a highly scalable Go microservice to handle this specific function.</li>
  <li><strong>Traffic Redirection:</strong> We configured the API gateway to catch all <code>/api/v1/rates</code> requests and route them to the new Go microservice instead of the legacy PHP app. Completely seamlessly to the front-end clients, the new service took over.</li>
</ul>
<h3>Achieving Zero-Downtime Migration</h3>
<p>Over a period of 14 months, we systematically "strangled" out the core functionalities: Inventory, Invoicing, Carrier Routing, and finally User Auth. The old monolith slowly shrank until it was nothing but an empty shell that we finally turned off.</p>
<p>By extracting these domains into Dockerized microservices deployed on Kubernetes, cluster auto-scaling now handles seasonal shipping spikes effortlessly. The migration was completed with absolutely zero system downtime, reducing infrastructure costs by 35%.</p>`
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
    content: `<h3>The Evolution of React Frameworks</h3>
<p>At SynticAI, our engineering stack is constantly evolving to chase the ultimate balance between developer velocity and raw client-side performance. For the past two years, Next.js has been our undisputed champion for enterprise web applications, but the release of Next.js 15 has cemented it as our default framework for any serious SaaS build.</p>
<h3>Why Next.js 15 Changes the Game</h3>
<p>The transition from the traditional Pages router to the App router was painful for the ecosystem, but Next.js 15 finally realizes the full promise of that architecture shift.</p>
<ul>
  <li><strong>React Server Components (RSC):</strong> The ability to keep heavy dependencies (like markdown parsers or date formatting libraries) entirely on the server means we are shipping drastically less JavaScript to the browser. We've seen client-side bundle sizes decrease by up to 40% on complex dashboard pages.</li>
  <li><strong>Partial Prerendering (PPR):</strong> For SaaS applications, a page is rarely 100% static or 100% dynamic. The navigation shell might be static, but the user's data table is dynamic. PPR allows us to instantly serve a static HTML shell from the CDN, while dynamically streaming in the personalized user data. The perceived load time is almost instantaneous.</li>
  <li><strong>Simplified Caching:</strong> Next.js 15 overhauled the aggressive caching defaults that frustrated developers in earlier versions. The new opt-in caching model makes fetching and mutating data via Server Actions much more intuitive and predictable.</li>
</ul>
<h3>Edge Deployment Architecture</h3>
<p>Combining Next.js 15 with Vercel's Edge Network allows us to execute server-side middleware and authentication checks within 50 milliseconds of the user, globally. For our B2B clients, this means their application feels as snappy in London as it does in Tokyo, without the overhead of maintaining multi-region Kubernetes clusters.</p>
<p>By standardizing on Next.js 15, we've unified our API and frontend logic into cohesive, type-safe repositories, allowing smaller, leaner teams to ship complex features faster than ever before.</p>`
  },
  {
    id: 7,
    title: "Mastering Large Language Models in Enterprise Customer Support",
    category: "AI & ML",
    color: "#eab308",
    icon: Globe,
    author: "SynticAI AI Lab",
    date: "Dec 12, 2025",
    readTime: "8 min read",
    description: "Learn how we safely integrated LLMs into a Tier-1 customer support workflow reducing agent time by 60%.",
    tag: "Best Practices",
    content: `<h3>The Enterprise LLM Paradox</h3>
<p>Large Language Models like GPT-4 possess incredible conversational capabilities, making them obvious candidates to revolutionize Tier-1 customer support. However, enterprises face a massive roadblock: <strong>AI Hallucinations.</strong></p>
<p>If a customer asks a highly specific question about a company's refund policy or a niche API configuration, a raw LLM might confidently invent a totally plausible—but entirely incorrect—answer. For enterprise brands, serving confidently incorrect information to paying users is catastrophic.</p>
<h3>Engineering a RAG Pipeline</h3>
<p>To safely deploy LLMs into a production support environment for a major SaaS client, we circumvented the hallucination problem by implementing a <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline.</p>
<p>A RAG pipeline fundamentally restricts the AI's "worldview" forcing it to use the company's proprietary, approved documentation as its only source of truth.</p>
<ul>
  <li><strong>Data Ingestion & Embedding:</strong> We built automated scripts to scrape the company's internal Confluence wikis, public knowledge base, and historical resolved Zendesk tickets. Using OpenAI's embedding models, we converted all this text into high-dimensional vectors.</li>
  <li><strong>Vector Database (Pinecone):</strong> We stored these vectors in Pinecone. Now, whenever a user asks a question, the system instantly performs a semantic search to retrieve the top 5 most relevant paragraphs of documentation.</li>
  <li><strong>Controlled Prompting:</strong> Instead of asking the AI to simply "Answer the user", we inject those 5 retrieved paragraphs into the system prompt. The prompt explicitly commands: <em>"You are a helpful support agent. Answer the user's question USING ONLY the provided documentation. If the answer is not contained in the documents, you must state that you do not know."</em></li>
</ul>
<h3>Real-World Results</h3>
<p>This governed approach yielded a highly conversational, yet completely safe AI agent. It successfully deflected 60% of all incoming Tier-1 support tickets by providing instant, accurate, and fully cited answers to customers.</p>
<p>Human agents were freed from answering repetitive queries like "How do I reset my API key?" allowing them to focus on complex, high-touch account management issues, drastically improving the overall customer experience.</p>`
  },
  {
    id: 8,
    title: "Automated Deployment Pipelines for Regulated Industries",
    category: "DevOps",
    color: "#06b6d4",
    icon: Layers,
    author: "SynticAI Compliance Team",
    date: "Dec 1, 2025",
    readTime: "14 min read",
    description: "Balancing strict compliance controls (SOC2, HIPAA) with multiple deployments per day.",
    tag: "Compliance",
    content: `<h3>The Clash of Agility and Compliance</h3>
<p>In the world of modern software development, Continuous Integration and Continuous Deployment (CI/CD) pipelines allow engineering teams to ship code smoothly multiple times a day. However, for companies operating in heavily regulated industries (like Healthcare, Banking, or Defense), the mandate for strict compliance (SOC2, HIPAA, PCI-DSS) often grinds agility to a halt.</p>
<p>Traditionally, every release required manual code reviews by a security officer, manual penetration testing, and heavy governance board approvals—turning a "continuous" pipeline into a monthly, high-stress release event.</p>
<h3>Automating Governance into the Pipeline</h3>
<p>We partnered with a major health tech platform to prove that "Agile vs. Compliance" is a false dichotomy. By shifting security left and automating compliance <em>as code</em>, we architected a deployment pipeline that is both incredibly fast and undeniably secure.</p>
<p>Here is how we automated the regulatory hurdles via GitHub Actions and AWS CodePipeline:</p>
<ul>
  <li><strong>Static Application Security Testing (SAST):</strong> As soon as a developer opens a Pull Request, SonarQube automatically scans the source code for hardcoded secrets, injection vulnerabilities, and known CVEs in upstream dependencies.</li>
  <li><strong>Infrastructure as Code (IaC) Scanning:</strong> To prevent misconfigurations (like accidentally exposing an S3 bucket containing patient data), we utilize <em>Checkov</em>. It explicitly scans Terraform templates against strict HIPAA compliance policies before the infrastructure is even provisioned.</li>
  <li><strong>Dynamic Container Analysis:</strong> Before deployment, the Docker container is completely scanned by Trivy. If a critical vulnerability is found at the OS level, the pipeline automatically fails and blocks the release.</li>
  <li><strong>Immutable Audit Trails:</strong> Every single automated check, test result, and approval is cryptographically signed and stored in immutable logs, providing instant, push-button evidence for SOC2 auditors.</li>
</ul>
<h3>The Ultimate Outcome</h3>
<p>By mathematically enforcing compliance rules within the CI/CD pipeline rather than relying on human checklists, deployed security posture actually improved. The team was able to move from 1 manual release per month to safely shipping to production multiple times a week without violating a single regulatory requirement.</p>`
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
