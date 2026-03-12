import { Clock4, Cpu, Gem, Globe2, ShieldCheck, Users2 } from "lucide-react";
import type { ComponentType } from "react";

export interface WhyChooseItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const whyChooseUsData: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Proven Track Record",
    desc: "Our team goes above and beyond expectations, ensuring measurable results and complete client satisfaction.",
  },
  {
    icon: Cpu,
    title: "Industry-Specific Expertise",
    desc: "We deliver outstanding results through deep knowledge of your industry's standards and technical requirements.",
  },
  {
    icon: Users2,
    title: "Skilled In-House Staff",
    desc: "100% in-house talent — specialized engineers and domain experts with inventive thinking and proven execution.",
  },
  {
    icon: Globe2,
    title: "Global Expansion",
    desc: "With connections across UK, USA, UAE and beyond, we deliver digital excellence with agility and speed.",
  },
  {
    icon: Clock4,
    title: "On-Time Delivery",
    desc: "We commit to delivering exactly what we promised, within the specified timeframe — no compromise.",
  },
  {
    icon: Gem,
    title: "Premium Value",
    desc: "Dedicated teams, fixed-price projects, or hourly rates — flexible hiring models that deliver maximum ROI.",
  },
];
