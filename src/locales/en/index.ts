import common from "./common";

export default {
  common,
  title: "Juan Marcon | Software Developer",
  description: "The portfolio of Juan Marcon, software developer",
  content: {
    title: "Hi. I'm Juan. <span>A software developer</span>",
    call_to_action: {
      contact: "Contact me",
    },
  },
  about: {
    title: "About me",
    subtitle:
      "Committed to continuous improvement <span>through constant learning</span>",
    description: [
      "My proactive approach and adaptability to new technologies have allowed me to bring innovative solutions.",
      "I have collaborated in dynamic teams, from startups to consolidated companies, gaining a broad perspective in software development.",
    ],
    experience: "years of experience",
    query: {
      title: "Any type of query",
    },
    cv: {
      title: "Get a copy of me <span>resume</span>",
      call_to_action: "View resume",
    },
  },
  education: {
    title: "Education",
    subtitle:
      "Hand in hand with formal education, <span>I have acquired structured and essential knowledge</span> pillars for my professional development. As a graduate in <span>Systems Engineering</span> from the <span>Universidad Industrial de Santander (UIS).</span>",
    description:
      "I have experienced firsthand how a rigorous and well-organized education can open doors and provide the necessary tools to face the challenges of the working world.",
    courses: {
      title:
        "I have consolidated <span>practical knowledge</span> on learning platforms like <span>Udemy</span>as part of my ongoing quest for personal and professional development",
      description:
        "Some of the certified courses I have completed include <span>React (Hooks and MERN)</span>, <span>React JS + Redux + ES6,</span> among others.",
      current: {
        title:
          "My commitment is to be at the <span>cutting edge</span> that's why I am currently pursuing the AWS certification <span>Certified Developer Associate DVA-C02.</span>",
      },
    },
  },
  skill: {
    title: "Skills",
    subtitle:
      "Accompanied by expertise in large-scale tools, I have gained experience in the effective use of <span>advanced technologies</span> and <span>robust resources</span>, key to face challenges in <span>complex projects</span> Some of these tools include:",
  },
  experience: {
    title: "Experience",
    subtitle:
      "Accompanied by leading industry companies, including several <span>innovative startups</span>, I have had the opportunity to work with teams of <span>high performing</span> and gain valuable knowledge in the use of advanced tools and <span>cutting-edge technologies.</span>",
    fullstack: "Fullstack developer",
    frontend: "Frontend developer",
    cloud: "Cloud engineer",
  },
  project: {
    title: "Projects",
    subtitle:
      "Below, I present a selection of my most outstanding <span>public works</span>, this oriented to improve my technical skills.",
    items: {
      deeptools: {
        description:
          "This project is aimed at <span>AI model</span> developers without knowledge of proper algorithm deployment. The software was designed to help many members of the <span>Bivl2ab</span> group who lack this expertise.",
      },
      portfolio: {
        description:
          "This project is an opportunity to share who I am <span>professionally</span> in a more personal way. My goal is to showcase my <span>skills</span>, <span>experiences</span> and <span>accomplishments</span> in a way that reflects my passion and dedication to my career.",
      },
      crowdinvestment: {
        description:
          "This project began in a <span>Hackathon</span> organized by <span>Mayasoft</span>. The application's philosophy is <span>CrowdFunding</span>, it is based on financial donations, in order to finance a certain project in exchange for rewards, altruistic participation.",
      },
      expense_track: {
        description:
          "Expense Track is a project to keep <span>track of your expenses</span> and facilitate the maintenance of <span>shared balance</span> records with housemates, during trips, in groups, with friends and family.",
      },
    },
  },
} as const;
