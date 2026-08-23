import { experienceTimelineItems } from "./experienceTimeline";

export type ExperiencePriority = "featured" | "supporting" | "archive";
export type MicroCaseStudyField = "summary" | "problem" | "action" | "result";
export type LocalizedExperienceKey<Id extends string> = `${Id}.${MicroCaseStudyField}`;

export type LocalizedMicroCaseStudy<Id extends string> = {
  summaryKey: LocalizedExperienceKey<Id>;
  problemKey: LocalizedExperienceKey<Id>;
  actionKey: LocalizedExperienceKey<Id>;
  resultKey: LocalizedExperienceKey<Id>;
};

export type Experience<Id extends string = string> = {
  id: Id;
  role: string;
  company: string;
  skills: readonly string[];
  endDate?: string;
  startDate: string;
  priority: ExperiencePriority;
  localizedCaseStudy: LocalizedMicroCaseStudy<Id>;
};

const localizedCaseStudy = <Id extends string>(id: Id): LocalizedMicroCaseStudy<Id> => ({
  summaryKey: `${id}.summary`,
  problemKey: `${id}.problem`,
  actionKey: `${id}.action`,
  resultKey: `${id}.result`,
});

export const experiences = [
  {
    id: "main-12",
    role: "Senior Software Engineer",
    company: "MAIN 12 LLC",
    priority: "featured",
    localizedCaseStudy: localizedCaseStudy("main-12"),
    skills: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Payload CMS",
      "PostgreSQL",
      "Google Cloud",
      "Redis",
      "Queues/Jobs",
      "Storage",
      "Gemini",
      "OpenAI",
      "LLMs",
      "Mobile Architecture"
    ],
    startDate: "2025-12-01",
  },
  {
    id: "celerik",
    role: "Software Engineer",
    company: "Celerik",
    priority: "featured",
    localizedCaseStudy: localizedCaseStudy("celerik"),
    skills: [
      "Azure Cloud Services",
      "Python",
      "FastAPI",
      "Jest",
      "TypeScript",
      "Swagger",
      "JavaScript",
      "React.js",
      "Tailwind",
      "Microservices",
      "LLMs",
      "RAG"
    ],
    startDate: "2024-11-01",
    endDate: "2025-12-01"
  },
  {
    id: "conexalab",
    role: "Cloud Engineer",
    company: "Conexalab",
    priority: "featured",
    localizedCaseStudy: localizedCaseStudy("conexalab"),
    skills: [
      "Node.js",
      "Jest",
      "TypeScript",
      "Swagger",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Maptiler",
      "Material-UI",
      "GitLab",
      "PostgreSQL",
      "Python",
      "Modal Lab",
      "Microservices",
      "MQTT"
    ],
    startDate: "2024-05-01",
  },
  {
    id: "melonn",
    role: "Cloud Engineer",
    company: "Melonn",
    priority: "featured",
    localizedCaseStudy: localizedCaseStudy("melonn"),
    skills: [
      "Amazon Web Services (AWS)",
      "Node.js",
      "Jest",
      "TypeScript",
      "Swagger",
      "GraphQL",
      "JavaScript",
      "React.js",
      "Material-UI",
      "styled-components",
      "Figma",
      "Microfrontend",
      "Playwright",
      "GitHub",
      "GitLab"
    ],
    startDate: "2023-01-01",
    endDate: "2024-01-01"
  },
  {
    id: "mayasoft",
    role: "Fullstack Developer",
    company: "Mayasoft",
    priority: "supporting",
    localizedCaseStudy: localizedCaseStudy("mayasoft"),
    skills: [
      "NestJS",
      "Jenkins",
      "Node.js",
      "TypeScript",
      "styled-components",
      "MongoDB",
      "Docker",
      "JavaScript",
      "GitHub",
      "React.js",
      "Material-UI"
    ],
    startDate: "2022-03-01",
    endDate: "2022-10-01"
  },
  {
    id: "woombat",
    role: "Fullstack Developer",
    company: "Woombat Consulting Group S.A.S",
    priority: "supporting",
    localizedCaseStudy: localizedCaseStudy("woombat"),
    skills: [
      "RxJS",
      "Babel.js",
      "Azure DevOps Server",
      "Amazon Web Services (AWS)",
      "Node.js",
      "TypeScript",
      "Angular",
      "Material",
      "Webpack",
      "styled-components",
      "AngularJS",
      "JavaScript",
      "GitHub",
      "Cypress.io"
    ],
    startDate: "2021-11-01",
    endDate: "2022-03-01"
  },
  {
    id: "bitnovo",
    role: "Frontend Developer",
    company: "Bitnovo",
    priority: "supporting",
    localizedCaseStudy: localizedCaseStudy("bitnovo"),
    skills: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "SWR",
      "styled-components",
      "JavaScript",
      "React.js",
      "Material-UI",
      "GitLab",
      "Figma",
      "Redux.js"
    ],
    startDate: "2021-02-01",
    endDate: "2022-07-01"
  },
  {
    id: "binary-groups",
    role: "Frontend Developer",
    company: "Binary Groups",
    priority: "supporting",
    localizedCaseStudy: localizedCaseStudy("binary-groups"),
    skills: [
      "Amazon Web Services (AWS)",
      "Next.js",
      "React Native",
      "Node.js",
      "TypeScript",
      "Nativebase",
      "Laravel",
      "JavaScript",
      "GitHub",
      "React.js",
      "Material-UI",
      "GitLab",
      "Figma",
      "styled-components",
      "Google Cloud"
    ],
    startDate: "2021-01-01",
    endDate: "2022-11-01"
  },
  {
    id: "ipred",
    role: "Fullstack Developer",
    company: "IPRED",
    priority: "archive",
    localizedCaseStudy: localizedCaseStudy("ipred"),
    skills: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Academic platforms"],
    startDate: "2019-02-01",
    endDate: "2020-10-01"
  },
  {
    id: "uis",
    role: "Fullstack Developer",
    company: "UIS",
    priority: "archive",
    localizedCaseStudy: localizedCaseStudy("uis"),
    skills: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "Research support"],
    startDate: "2019-01-01",
    endDate: "2019-05-01"
  },
  {
    id: "freelance",
    role: "Fullstack Developer",
    company: "Freelance",
    priority: "archive",
    localizedCaseStudy: localizedCaseStudy("freelance"),
    skills: ["React.js", "Node.js", "TypeScript", "JavaScript", "Product discovery", "Client delivery"],
    startDate: "2019-01-01",
  },
] as const satisfies readonly Experience[];

export type ExperienceId = (typeof experiences)[number]["id"];
export const experienceIds = experiences.map((experience) => experience.id);

const timelineIds = new Set(experienceTimelineItems.map((item) => item.id));
const missingTimelineItems = experiences.filter((experience) => !timelineIds.has(experience.id));

if (missingTimelineItems.length > 0) {
  throw new Error(
    `Experiences missing from duration timeline: ${missingTimelineItems
      .map((experience) => experience.id)
      .join(", ")}`,
  );
}
