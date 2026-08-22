export default {
  title: "Juan Marcon | Senior Software Engineer",
  description: "Portfolio of Juan Marcon, Senior Software Engineer focused on web, cloud, and AI-enabled products. I turn business needs into maintainable software, scalable architecture, and production-ready user experiences.",
  content: {
    title: "Hi. I'm Juan. <span>Senior Software Engineer</span>",
    description:
      "I build fast, reliable <span>web, cloud, and AI-enabled products</span> with architecture, performance, and product impact in mind.",
    company_context:
      "Experience delivering across <span>SaaS, e-commerce, data visualization, cloud platforms, and AI-enabled product work</span>.",
    call_to_action: {
      contact: "Contact me",
      resume: "View / download resume",
    },
  },
  about: {
    title: "About me",
    subtitle:
      "I build <span>web, cloud, and AI-enabled products</span> with architecture, performance, and delivery quality in mind",
    description: [
      "Across SaaS platforms, LLM-based capabilities, data visualization products, e-commerce integrations, and distributed systems, I help teams translate business context into maintainable software.",
      "My work spans frontend architecture, backend services, cloud infrastructure, and product-oriented delivery, with a focus on reliable user-facing systems and pragmatic technical decisions.",
    ],
    experience: "years of experience",
    query: {
      title: "Let's talk about opportunities",
      availability:
        "Open to aligned software engineering opportunities in web, cloud, and AI-enabled products.",
      linkedin: "LinkedIn",
    },
    cv: {
      title: "Get a copy of my <span>resume</span>",
      call_to_action: "View / download resume",
    },
  },
  education: {
    title: "Education",
    subtitle:
      "I graduated in <span>Systems Engineering</span> from the <span>Universidad Industrial de Santander (UIS)</span>, a foundation I connect with production software work.",
    description:
      "Formal engineering training gave me a structured base for reasoning about systems, trade-offs, and maintainable software.",
    courses: {
      title:
        "I keep learning through <span>practical, targeted study</span> in cloud, frontend architecture, backend systems, and applied AI.",
      description:
        "The focus is not collecting course names; it is keeping the judgment and tools current for real product delivery.",
      current: {
        title:
          "Current learning supports the same professional promise: <span>reliable web, cloud, and AI-enabled products</span>.",
      },
    },
  },
  skill: {
    title: "Skills",
    subtitle:
      "I work across <span>product engineering, frontend architecture, backend services, cloud infrastructure, and applied AI</span>. The technologies below support that delivery focus:",
  },
  experience: {
    title: "Experience",
    subtitle:
      "A selection of roles where I have built <span>web, cloud, and AI-enabled products</span>, from current SaaS and AI product delivery to earlier e-commerce, data visualization, and platform work.",
    senior: "Senior Software Engineer",
    software: "Software Engineer",
    fullstack: "Fullstack developer",
    frontend: "Frontend developer",
    cloud: "Cloud engineer",
  },
  project: {
    title: "Projects",
    subtitle:
      "Selected <span>public projects</span> that provide secondary evidence of product thinking, technical judgment, and hands-on delivery.",
    items: {
      deeptools: {
        description:
          "Deeptools explored how research teams could expose <span>AI model</span> workflows to users who were not deployment specialists, combining a React interface with Python, Django, Celery, gRPC, Docker, and MySQL.",
      },
      crowdinvestment: {
        description:
          "Crowdinvestment turned a hackathon idea into a working <span>crowdfunding</span> application, using Laravel, MySQL, jQuery, and JavaScript to model project funding, rewards, and donor participation.",
      },
      expense_track: {
        description:
          "Expense Track solves shared-expense coordination for homes, trips, and groups through <span>web and mobile</span> interfaces backed by a TypeScript, React, React Native, Next.js, NestJS, Prisma, and MySQL stack.",
      },
    },
  },
} as const;
