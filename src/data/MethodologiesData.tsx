import React from "react";

export interface MethodologyStep {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const stepsData: MethodologyStep[] = [
  {
    id: "step-1",
    stepNum: "Step 1",
    title: "Understand pattern identification",
    description: "SynticAI Methodology revolves around understanding pattern identification. It involves analyzing data to identify and extract significant patterns.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    id: "step-2",
    stepNum: "Step 2",
    title: "Pattern mapping user stories",
    description: "Pattern mapping user stories is the second step in SynticAI Methodology. It involves categorizing user stories according to recognized patterns.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      </svg>
    ),
  },
  {
    id: "step-3",
    stepNum: "Step 3",
    title: "Wireframe and front end",
    description: "After pattern mapping, our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
      </svg>
    ),
  },
  {
    id: "step-4",
    stepNum: "Step 4",
    title: "Model development and training",
    description: "Model development and training involves the development of machine learning models and training using the identified patterns and data.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
  },
  {
    id: "step-5",
    stepNum: "Step 5",
    title: "Development and deployment",
    description: "Development and deployment is the final step in SynticAI Methodology. The developed models are integrated into the software and deployed for use.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.03L13.13 22.19zM5.64 12.5l-3.83-1.63L7.97 8.1C7 9.46 6.22 10.93 5.64 12.5zM21.61 2.39C21.61 2.39 16.66 .269 11 5.93c-2.19 2.19-3.5 4.6-4.35 6.71-.28 .75-.09 1.57.46 2.13l2.13 2.12c.56 .56 1.35 .73 2.13 .46 2.11-.85 4.52-2.16 6.71-4.35 5.66-5.66 3.53-10.61 3.53-10.61zm-7.07 7.07c-.78 .78-2.05 .78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83z" />
      </svg>
    ),
  },
];
