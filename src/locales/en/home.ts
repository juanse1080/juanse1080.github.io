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
    title: "Capabilities",
    subtitle:
      "Capability evidence, not a flat skills list: I connect <span>web product engineering, cloud/backend systems, AI-assisted products, frontend architecture, and testing and delivery quality</span> to production outcomes.",
    supporting_technologies: "Supporting technologies",
    capabilities: {
      web_product_engineering: {
        title: "Web product engineering",
        evidence:
          "I turn product context into usable web and mobile interfaces, balancing user flows, maintainable TypeScript, and backend integration for production teams.",
      },
      cloud_backend_systems: {
        title: "Cloud/backend systems",
        evidence:
          "I design and evolve services, APIs, data models, and cloud infrastructure with pragmatic trade-offs around reliability, ownership, and delivery speed.",
      },
      ai_assisted_products: {
        title: "AI-assisted products",
        evidence:
          "I build LLM and RAG-backed product capabilities as part of real software systems, keeping UX, evaluation, privacy boundaries, and maintainability visible.",
      },
      frontend_architecture_performance: {
        title: "Frontend architecture and performance",
        evidence:
          "I structure React and Next.js applications so critical content stays indexable, interfaces remain accessible, and performance work supports conversion to opportunity.",
      },
      testing_delivery_quality: {
        title: "Testing and delivery quality",
        evidence:
          "I use type safety, focused verification scripts, code review, and CI-friendly checks to reduce regressions while keeping delivery practical.",
      },
    },
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
    title: "Project Evidence",
    subtitle:
      "Selected <span>public projects</span> kept only where they provide evidence, learning, a usable demo/repo, or a clear technical trust-building reason. Production experience remains the stronger proof.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      stack: "Stack",
      result: "Result / learning",
    },
    items: {
      deeptools: {
        problem:
          "Research and data teams needed a clearer way to expose AI model workflows without making every user understand deployment details.",
        solution:
          "Built a React interface backed by Python services and asynchronous workers so users could trigger and inspect model-oriented workflows.",
        stack:
          "React, Material UI, Python, Django, Celery, gRPC, Docker, and MySQL supported the web interface, background processing, and service communication.",
        result:
          "The project is useful evidence of AI workflow product thinking, service boundaries, and learning how to make technical capabilities accessible to non-specialist users.",
      },
      crowdinvestment: {
        problem:
          "A hackathon concept needed to become a working crowdfunding product that modeled project funding, rewards, and donor participation.",
        solution:
          "Implemented a usable Laravel application with funding flows, project presentation, and donation mechanics focused on validating the product idea quickly.",
        stack:
          "PHP, Laravel, MySQL, jQuery, and JavaScript provided a simple full-stack foundation for the prototype and product interactions.",
        result:
          "It remains visible as evidence of rapid product execution, early full-stack delivery, and learning how to turn a rough concept into working software.",
      },
      expense_track: {
        problem:
          "Shared expenses across homes, trips, and groups are easy to lose track of when people use informal notes, chats, or spreadsheets.",
        solution:
          "Built coordinated web and mobile interfaces backed by a typed backend so groups can record expenses and understand shared balances more clearly.",
        stack:
          "TypeScript, React, React Native, Next.js, NestJS, Prisma, MySQL, and Tailwind CSS support the cross-platform product surface.",
        result:
          "The project demonstrates web/mobile product engineering, end-to-end TypeScript delivery, and practical learning around shared-state product workflows.",
      },
    },
  },
} as const;
