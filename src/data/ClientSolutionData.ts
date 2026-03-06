export interface SolutionTab {
  id: string;
  tabTitle: string;
  heading: string;
  description1: string;
  description2: string;
  image: string;
  badgeTitle: string;
  badgeSubtitle: string;
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
    image: "/assets/hims.png",
    badgeTitle: "AI Powered",
    badgeSubtitle: "Cost Effective"
  },
  {
    id: "gp-pod",
    tabTitle: "GP-Pod",
    heading: "Patient Diagnostic System – GP POD",
    description1:
      "A US-based healthcare organization needed a faster, more accurate way to handle initial patient diagnostics to reduce wait times and improve clinical accuracy.",
    description2:
      "SynticAI delivered GP POD, a custom AI diagnostic tool that empowers doctors with instant, data-backed insights. This optimized their clinic resources and greatly improved patient satisfaction.",
    image: "/assets/gp-pod-img.webp",
    badgeTitle: "Precision",
    badgeSubtitle: "Diagnostics"
  },
  {
    id: "law-gpt",
    tabTitle: "AI-Powered Law GPT",
    heading: "AI-Powered Law GPT",
    description1:
      "A major UK law firm was overwhelmed by massive volumes of legal documents, making research and compliance incredibly time-consuming and prone to human error.",
    description2:
      "SynticAI created a specialized Law GPT platform that centralizes their data, instantly surfaces relevant case law, and automates risk detection, saving their paralegals thousands of hours.",
    image: "/assets/Law-GPT-img.webp",
    badgeTitle: "Legal Tech",
    badgeSubtitle: "Compliance"
  },
];
