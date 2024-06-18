import common from "./common";

export default {
  common,
  title: "Juan Marcon | Software Developer",
  description: "The portfolio of Juan Marcon, software developer",
  content: {
    title: ["Hi. I'm Juan.", "A software developer"],
    call_to_action: {
      contact: " Contact me",
    },
  },
  about: {
    title: "About me",
    subtitle: [
      "Committed to continuous improvement",
      "through constant learning",
    ],
    description: [
      "My proactive approach and adaptability to new technologies have allowed me to bring innovative solutions.",
      "I have collaborated in dynamic teams, from startups to consolidated companies, gaining a broad perspective in software development.",
    ],
    experience: "years of experience",
    query: {
      title: "Any type of query",
    },
    cv: {
      title: ["Get a copy of me", "resume"],
      call_to_action: "View resume",
    },
  },
  education: {
    title: "Education",
    subtitle: [
      "Hand in hand with formal education,",
      "I have acquired structured and essential knowledge",
      "pillars for my professional development. As a graduate in",
      "Systems Engineering",
      "from the",
      "Universidad Industrial de Santander (UIS).",
    ],
    description:
      "I have experienced firsthand how a rigorous and well-organized education can open doors and provide the necessary tools to face the challenges of the working world.",
    courses: {
      title: [
        "I have consolidated",
        "practical knowledge",
        "on learning platforms like",
        "Udemy",
        "as part of my ongoing quest for personal and professional development",
      ],
      description: [
        "Some of the certified courses I have completed include",
        "React (Hooks and MERN), React JS + Redux + ES6,",
        "among others.",
      ],
      current: {
        title: [
          "My commitment is to be at the",
          "cutting edge",
          "that's why I am currently pursuing the AWS certification",
          "Certified Developer Associate DVA-C02.",
        ],
      },
    },
  },
  skill: {
    title: "Skills",
    subtitle: [
      "Accompanied by expertise in large-scale tools, I have gained experience in the effective use of",
      "advanced technologies",
      "and",
      "robust resources",
      ", key to face challenges in",
      "complex projects",
      "Some of these tools include:",
    ],
  },
  experience: {
    title: "Experience",
    subtitle: [
      "Accompanied by leading industry companies, including several",
      "innovative startups",
      ", I have had the opportunity to work with teams of",
      "high performing",
      "and gain valuable knowledge in the use of advanced tools and",
      "cutting-edge technologies.",
    ],
    fullstack: "Fullstack developer",
    frontend: "Frontend developer",
    cloud: "Cloud engineer",
  },
} as const;
