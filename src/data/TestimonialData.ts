interface Testimonial {
  id: number;
  name: string;
  title: string;
  project: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bill Kil Patrick",
    title: "CEO of Drive App Suit",
    project: "Automotive App Suite",
    quote: "This is a stellar team. I have assigned contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Kate Callahan",
    title: "President of Memore",
    project: "Website Memore",
    quote: "The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aram Saffarian",
    title: "President of Treaty Health",
    project: "Website Treaty Automation",
    quote: "SynticAI has highly improved our existing app. Their team manages projects to deliver comprehensive, user-friendly solutions with excellent documentation and continuous support.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    title: "Founder of EduSmart",
    project: "AI Learning Platform",
    quote: "The team's grasp of AI technologies is truly impressive. They transformed our rough concept into a fully functional, highly intuitive system that our users absolutely love.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "David Chen",
    title: "CTO of DataGrid Systems",
    project: "Predictive Analytics Engine",
    quote: "Incredible technical depth and problem-solving skills. The models they delivered outperformed our initial benchmarks by 40%, directly boosting our clients' bottom line within weeks.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    title: "Director of Operations",
    project: "Logistics Optimization",
    quote: "SynticAI entirely rebuilt our messy routing algorithm into an AI-driven masterpiece. We're saving thousands weekly just in operational efficiency. I highly recommend this incredible team.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  }
];