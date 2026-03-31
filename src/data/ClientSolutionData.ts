export interface SolutionTab {
  id: string;
  tabTitle: string;
  heading: string;
  description1: string;
  description2: string;
  image: string;
  badgeTitle: string;
  badgeSubtitle: string;
  link: string;
}

export const solutionsData: SolutionTab[] = [
  {
    id: "hims",
    tabTitle: "AI-Powered HIMS",
    heading: "AI-Powered Hospital Information Management System",
    description1:
      "A leading healthcare provider struggled with high operational costs, staff shortages, and inefficient patient flow. They needed a secure, reliable way to modernize their entire hospital workflow.",
    description2:
      "SynticAI developed a custom AI-driven Hospital Information Management System that automates scheduling, secures patient records, and streamlines daily medical operations—ensuring better care and reduced workload.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badgeTitle: "AI Powered",
    badgeSubtitle: "Cost Effective",
    link: "/portfolio/1"
  },
  {
    id: "gp-pod",
    tabTitle: "GP-Pod",
    heading: "Patient Diagnostic System – GP POD",
    description1:
      "A US-based healthcare organization needed a faster, more accurate way to handle initial patient diagnostics to reduce wait times and improve clinical accuracy.",
    description2:
      "SynticAI delivered GP POD, a custom AI diagnostic tool that empowers doctors with instant, data-backed insights. This optimized their clinic resources and greatly improved patient satisfaction.",
    image: "https://images.pexels.com/photos/6870332/pexels-photo-6870332.jpeg",
    badgeTitle: "Precision",
    badgeSubtitle: "Diagnostics",
    link: "/portfolio/4"
  },
  {
    id: "law-gpt",
    tabTitle: "AI-Powered Law GPT",
    heading: "AI-Powered Law GPT",
    description1:
      "A major UK law firm was overwhelmed by massive volumes of legal documents, making research and compliance incredibly time-consuming and prone to human error.",
    description2:
      "SynticAI created a specialized Law GPT platform that centralizes their data, instantly surfaces relevant case law, and automates risk detection, saving their paralegals thousands of hours.",
    image: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg",
    badgeTitle: "Legal Tech",
    badgeSubtitle: "Compliance",
    link: "/portfolio"
  },
];
