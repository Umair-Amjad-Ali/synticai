export interface InfoSlide {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  stat: { value: string; label: string };
  badge: string;
}

export const infoSlides: InfoSlide[] = [
  {
    title: "Drive Unstoppable Business Success Through AI!",
    paragraphs: [
      "Maximize your business potential with our exceptional AI Development Services. Our customer-centric team of engineers is committed to delivering tailored solutions that exceed your expectations.",
      "We leverage expertise in machine learning, deep learning, and AI to deliver exceptional NLP, computer vision, predictive analytics, and generative AI solutions.",
      "Our AI-based solutions offer a clear pathway to success — helping businesses improve decision-making, automate operations, and boost profits.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    imageAlt: "Global AI Network",
    stat: { value: "98.5%", label: "Success Rate" },
    badge: "AI Verified",
  },
  {
    title: "Transform Healthcare with Intelligent AI Solutions",
    paragraphs: [
      "We build AI-powered healthcare systems that automate scheduling, secure patient records, and streamline daily medical operations — ensuring better care with reduced workload.",
      "From diagnostic chatbots to hospital information management, our healthcare AI solutions cut operational costs and elevate patient satisfaction scores significantly.",
      "Partner with SynticAI to modernize your clinic or hospital with HIPAA-compliant, data-driven systems built for tomorrow.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI Healthcare Solutions",
    stat: { value: "45%", label: "Wait Time Reduced" },
    badge: "HIPAA Ready",
  },
  {
    title: "Unlock the Power of Predictive Analytics & Big Data",
    paragraphs: [
      "Harness big data and predictive modeling to gain actionable insights that help you anticipate market trends, identify risks, and make smarter decisions faster.",
      "Our data engineering and analytics services process vast datasets from multiple sources, delivering customizable dashboards and reports tailored to your business objectives.",
      "Whether in finance, retail, or logistics — our predictive analytics solutions give your enterprise a measurable competitive advantage.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Predictive Analytics Dashboard",
    stat: { value: "3x", label: "Faster Insights" },
    badge: "Data Powered",
  },
  {
    title: "Build Smarter Systems with Custom Software & DevOps",
    paragraphs: [
      "With over 10 years of experience, SynticAI delivers custom software solutions that transform your unique ideas into reality and give your business a true competitive edge.",
      "Our DevOps and CI/CD pipelines ensure rapid, reliable software delivery — while containerization maintains consistent performance across all environments.",
      "We prioritize transparency, agile practices, and open communication to deliver innovative solutions that push the boundaries of what's possible.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Custom Software Development",
    stat: { value: "110+", label: "Projects Delivered" },
    badge: "Agile Ready",
  },
];
