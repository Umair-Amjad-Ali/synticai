import type { ComponentType } from "react"; 

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    twitter: string;
    github: string;
}

 export const team:TeamMember[] = [
  {
    name: "Muhammad Umair Mushtaq",
    role: "Founder & CEO",
    bio: "Visionary leader driving AI innovation and enterprise software strategy across 12 countries.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Sara Khan",
    role: "Chief Technology Officer",
    bio: "Full-stack architect and ML engineer building the intelligence layer of our products.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Talha Nazeer",
    role: "Head of Backend Technologies",
    bio: "Leading cutting-edge LLM research and deploying next-gen predictive models.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Allah Rakha",
    role: "Head of App Development",
    bio: "Obsessed with design that feels effortless. Shapes every user-facing detail.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
  {
    name: "Ahsan Ali",
    role: "Lead Engineer",
    bio: "Systems thinker who turns complex requirements into elegant, scalable solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    linkedin: "#", twitter: "#", github: "#",
  },
];