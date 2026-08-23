export const capabilityIds = [
  "web_product_engineering",
  "cloud_backend_systems",
  "ai_assisted_products",
  "frontend_architecture_performance",
  "testing_delivery_quality",
] as const;

export type CapabilityId = (typeof capabilityIds)[number];

export const capabilities: Array<{
  id: CapabilityId;
  technologies: string[];
}> = [
  {
    id: "web_product_engineering",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "React Native"],
  },
  {
    id: "cloud_backend_systems",
    technologies: ["Google Cloud", "AWS", "Azure", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    id: "ai_assisted_products",
    technologies: ["LLMs", "RAG", "AI product engineering", "Python", "FastAPI"],
  },
  {
    id: "frontend_architecture_performance",
    technologies: ["React", "Next.js", "Tailwind CSS", "Static HTML", "Accessibility"],
  },
  {
    id: "testing_delivery_quality",
    technologies: ["TypeScript", "Jest", "Playwright", "CI checks", "Code review"],
  },
];
