export const projectIds = [
  "expense_track",
  "deeptools",
  "crowdinvestment",
] as const;

export type ProjectId = (typeof projectIds)[number];

export const projects: Array<{
  id: ProjectId;
  title: string;
  skills: string[];
  img: string;
  width: number;
  height: number;
}> = [
  {
    id: "expense_track",
    title: "Expense Track",
    skills: [
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "NestJS",
      "Prisma",
      "MySQL",
      "Tailwind CSS",
    ],
    img: "/img/projects/expense-track/home.webp",
    width: 110,
    height: 240,
  },
  {
    id: "deeptools",
    title: "Deeptools",
    skills: [
      "React",
      "Material UI",
      "Python",
      "Django",
      "Celery",
      "gRPC",
      "Docker",
      "MySQL",
    ],
    img: "/img/projects/deeptools/algorithms.webp",
    width: 488,
    height: 222,
  },
  {
    id: "crowdinvestment",
    title: "Crowdinvestment",
    skills: ["PHP", "Laravel", "MySQL", "jQuery", "JavaScript"],
    img: "/img/projects/crowdinvestment/investment.webp",
    width: 471,
    height: 242,
  },
];
