export interface Industry {
  name: string;
  description: string;
  image: string; // URL or path
}

export const industriesData: Industry[] = [
  {
    name: "Health Tech",
    description:
      "Revolutionize healthcare administration by integrating AI-powered EHR or mHealth solutions to manage patient records and workflows seamlessly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    name: "Ed Tech",
    description:
      "Transform education through AI-driven personalized learning platforms, intelligent tutoring systems, and smart content delivery tools.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    name: "Retail",
    description:
      "Boost retail performance with AI-powered recommendation engines, demand forecasting, inventory management, and customer experience solutions.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "AI Diagnostics",
    description:
      "Empower clinical teams with cutting-edge AI diagnostic tools that detect, analyze, and predict medical conditions faster and more accurately.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
  },
  {
    name: "Green Tech",
    description:
      "Drive sustainability initiatives with AI-driven energy optimization, smart grid management, and environmental monitoring systems.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    name: "IoT",
    description:
      "Connect and intelligently automate devices with AI-powered IoT platforms, enabling smarter homes, cities, and industrial ecosystems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    name: "Fin Tech",
    description:
      "Accelerate financial services with AI-based fraud detection, risk analytics, automated trading, and intelligent banking solutions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    name: "HIPAA Compliance",
    description:
      "Ensure regulatory compliance with our AI-powered HIPAA solutions that safeguard patient data, automate audits, and mitigate risk.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    name: "eCommerce",
    description:
      "Scale your online business with AI-powered product recommendations, dynamic pricing, customer behavior analytics, and smart inventory management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
];
