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
} as const;
