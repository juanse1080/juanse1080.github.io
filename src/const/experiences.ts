export type Experience = {
  id: string;
  role: string;
  company: string;
  skills: string[];
  endDate?: string;
  startDate: string;
}

export const experiences: Experience[] = [
  {
    id: "celerik",
    role: "Fullstack Developer",
    company: "Celerik",
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
      "Microservicios"
    ],
    startDate: "2024-11-01",
  },
  {
    id: "conexalab",
    role: "Cloud Engineer",
    company: "Conexalab",
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
      "Gitlab",
      "PostgreSQL",
      "Python",
      "Modal Lab",
      "Microservicios",
      "MQTT"
    ],
    startDate: "2024-05-01",
  },
  {
    id: "melonn",
    role: "Cloud Engineer",
    company: "Melonn",
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
      "Gitlab"
    ],
    startDate: "2023-01-01",
    endDate: "2024-01-01"
  },

  {
    id: "mayasoft",
    role: "Fullstack Developer",
    company: "Mayasoft",
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
  }, {
    id: "woombat",
    role: "Fullstack Developer",
    company: "Woombat Consulting Group S.A.S",
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
];

