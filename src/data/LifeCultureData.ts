import { Zap, Globe2, Heart, Cpu, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export interface CultureItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: ComponentType<LucideProps>;
  image: string;
  color: string;
}

export const cultureItems: CultureItem[] = [
  {
    id: "engineering",
    title: "Engineering Excellence",
    subtitle: "We don't settle for 'good enough'.",
    desc: "Our teams are empowered to experiment, break things (safely), and push the boundaries of modern AI architecture. We prioritize elegant, scalable solutions over quick patches.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#1C75BC]",
  },
  {
    id: "global",
    title: "Global Mindset",
    subtitle: "Brilliance has no borders.",
    desc: "Collaborate with brilliant minds across 12+ countries. We believe that diverse perspectives and cultural backgrounds are the true drivers of our most innovative ideas.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#45d1f5]",
  },
  {
    id: "harmony",
    title: "Work-Life Harmony",
    subtitle: "Burnout isn't a badge of honor.",
    desc: "Flexible schedules, remote-first policies, and true asynchronous work patterns keep us energized and focused when we need to be.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500",
  },
];
