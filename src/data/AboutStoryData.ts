import { Sparkles, Compass, Rocket, Trophy, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: ComponentType<LucideProps>;
  image: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2016",
    title: "The Genesis",
    desc: "Founded with a unified vision: to democratize enterprise AI and make it accessible worldwide.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2021",
    title: "Global Reach",
    desc: "Expanded operations to the UK, USA, and UAE. Delivered our 50th successful AI product.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "The Scale Up",
    desc: "Grew our engineering team to over 100+ experts, launching proprietary LLM accelerators.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Leadership",
    desc: "Recognized as a leading generative AI partner, pushing the boundaries for enterprises.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
];
