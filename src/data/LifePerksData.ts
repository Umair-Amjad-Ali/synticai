import { Target, Heart, Coffee, Monitor, Plane, Smile, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export interface Perk {
  title: string;
  desc: string;
  icon: ComponentType<LucideProps>; 
}

export const perks: Perk[] = [
  {
    title: "Continuous Learning",
    desc: "Generous budget for courses, conferences, and books to keep your skills sharp.",
    icon: Target,
  },
  {
    title: "Health & Wellness",
    desc: "Top-tier health coverage, fitness subsidies, and mental wellness stipends.",
    icon: Heart,
  },
  {
    title: "Caffeine & Snacks",
    desc: "Fully stocked kitchen with premium coffee, energy drinks, and healthy snacks.",
    icon: Coffee,
  },
  {
    title: "Hybrid Workspace",
    desc: "Ergonomic home office stipends plus access to state-of-the-art hubs.",
    icon: Monitor,
  },
  {
    title: "Work from Anywhere",
    desc: "We support true remote flexibility. Work from anywhere in the world for 30 days a year.",
    icon: Plane,
  },
  {
    title: "Team Retreats",
    desc: "Annual off-sites to amazing destinations to unwind, bond, and build culture.",
    icon: Smile,
  },
];
