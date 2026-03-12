import { Zap, Users, Target, Globe, Heart, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export interface CoreValue {
  title: string;
  desc: string;
  icon: ComponentType<LucideProps>;
  wide: boolean;
  accent: boolean;
}

export const values: CoreValue[] = [
  {
    icon: Zap,
    title: "Relentless Innovation",
    desc: `We never settle for "standard." We push the boundaries of what AI can achieve — constantly researching, building, testing, and reinventing our approach to deliver products that lead markets.`,
    wide: true,
    accent: false,
  },
  {
    icon: Heart,
    title: "Client Value",
    desc: "We strive to exceed our clients' expectations and deliver measurable results that positively impact their business.",
    wide: false,
    accent: true,
  },
  {
    icon: Users,
    title: "Absolute Transparency",
    desc: "No black boxes. We communicate clearly, honestly, and proactively with all partners.",
    wide: false,
    accent: false,
  },
  {
    icon: Target,
    title: "Accountability",
    desc: "We take responsibility for our actions and outcomes, holding ourselves accountable for our performance.",
    wide: false,
    accent: false,
  },
  {
    icon: Globe,
    title: "Empathetic Design",
    desc: "Human needs sit at the center of our engineering. Code doesn't matter if it's hard to use.",
    wide: false,
    accent: false,
  },
];
