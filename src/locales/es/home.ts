export default {
  title: "Juan Marcon | Senior Software Engineer",
  description: "Portafolio de Juan Marcon, Senior Software Engineer enfocado en productos web, cloud y habilitados con IA. Convierto necesidades de negocio en software mantenible, arquitectura escalable y experiencias listas para producción.",
  content: {
    title: "Hola. Soy Juan. <span>Senior Software Engineer</span>",
    description:
      "Construyo <span>productos web, cloud y habilitados con IA</span> rápidos y confiables, con foco en arquitectura, performance e impacto de producto.",
    company_context:
      "Experiencia entregando en <span>SaaS, e-commerce, visualización de datos, plataformas cloud y productos habilitados con IA</span>.",
    call_to_action: {
      contact: "Contacta conmigo",
      resume: "Ver / descargar CV",
    },
  },
  about: {
    title: "Acerca de mí",
    subtitle:
      "Construyo <span>productos web, cloud y habilitados con IA</span> con foco en arquitectura, performance y calidad de entrega",
    description: [
      "He trabajado en plataformas SaaS, capacidades basadas en LLMs, productos de visualización de datos, integraciones de e-commerce y sistemas distribuidos, ayudando a convertir contexto de negocio en software mantenible.",
      "Mi experiencia cruza arquitectura frontend, servicios backend, infraestructura cloud y entrega orientada a producto, con foco en sistemas confiables para usuarios reales y decisiones técnicas pragmáticas.",
    ],
    experience: "años de experiencia",
    query: {
      title: "Hablemos de oportunidades",
      availability:
        "Abierto a oportunidades alineadas en software engineering para productos web, cloud y habilitados con IA.",
      linkedin: "LinkedIn",
    },
    cv: {
      title: "Obtén una copia de mi <span>CV</span>",
      call_to_action: "Ver / descargar CV",
    },
  },
  education: {
    title: "Educación",
    subtitle:
      "Soy egresado de <span>Ingeniería de Sistemas</span> de la <span>Universidad Industrial de Santander (UIS)</span>, una base que conecto con trabajo de software en producción.",
    description:
      "La formación formal me dio una base estructurada para razonar sobre sistemas, trade-offs y software mantenible.",
    courses: {
      title:
        "Sigo aprendiendo con <span>estudio práctico y enfocado</span> en cloud, arquitectura frontend, sistemas backend e IA aplicada.",
      description:
        "El foco no es acumular nombres de cursos; es mantener criterio y herramientas vigentes para entregar productos reales.",
      current: {
        title:
          "El aprendizaje actual apoya la misma promesa profesional: <span>productos web, cloud y habilitados con IA confiables</span>.",
      },
    },
  },
  skill: {
    title: "Capacidades",
    subtitle:
      "Evidencia de capacidades, no una lista plana de habilidades: conecto <span>ingeniería de producto web, sistemas cloud/backend, productos asistidos con IA, arquitectura frontend y calidad de testing y entrega</span> con resultados en producción.",
    supporting_technologies: "Tecnologías de apoyo",
    capabilities: {
      web_product_engineering: {
        title: "Ingeniería de producto web",
        evidence:
          "Convierto contexto de producto en interfaces web y mobile usables, equilibrando flujos de usuario, TypeScript mantenible e integración backend para equipos de producción.",
      },
      cloud_backend_systems: {
        title: "Sistemas cloud/backend",
        evidence:
          "Diseño y evoluciono servicios, APIs, modelos de datos e infraestructura cloud con trade-offs pragmáticos sobre confiabilidad, ownership y velocidad de entrega.",
      },
      ai_assisted_products: {
        title: "Productos asistidos con IA",
        evidence:
          "Construyo capacidades con LLMs y RAG como parte de sistemas de software reales, manteniendo visibles UX, evaluación, privacidad y mantenibilidad.",
      },
      frontend_architecture_performance: {
        title: "Arquitectura frontend y performance",
        evidence:
          "Estructuro aplicaciones React y Next.js para que el contenido crítico sea indexable, las interfaces sigan siendo accesibles y el performance apoye oportunidades profesionales.",
      },
      testing_delivery_quality: {
        title: "Calidad de testing y entrega",
        evidence:
          "Uso type safety, scripts de verificación enfocados, code review y checks compatibles con CI para reducir regresiones sin frenar la entrega práctica.",
      },
    },
  },
  experience: {
    title: "Experiencia",
    subtitle:
      "Una selección de roles donde he construido <span>productos web, cloud y habilitados con IA</span>, desde entrega SaaS actual y productos con IA hasta experiencia previa en e-commerce, visualización de datos y plataformas.",
    senior: "Senior Software Engineer",
    software: "Software Engineer",
    fullstack: "Desarrollador fullstack",
    frontend: "Desarrollador frontend",
    cloud: "Ingeniero cloud",
  },
  project: {
    title: "Evidencia de Proyectos",
    subtitle:
      "Proyectos <span>públicos seleccionados</span> que se mantienen visibles solo cuando aportan evidencia, aprendizaje, demo/repo usable o una razón técnica clara para generar confianza. La experiencia en producción sigue siendo la prueba principal.",
    labels: {
      problem: "Problema",
      solution: "Solución",
      stack: "Stack",
      result: "Resultado / aprendizaje",
    },
    items: {
      deeptools: {
        problem:
          "Equipos de investigación y datos necesitaban exponer flujos de modelos de IA sin obligar a cada usuario a entender detalles de despliegue.",
        solution:
          "Construí una interfaz React apoyada en servicios Python y workers asíncronos para que los usuarios pudieran ejecutar e inspeccionar flujos orientados a modelos.",
        stack:
          "React, Material UI, Python, Django, Celery, gRPC, Docker y MySQL soportaron la interfaz web, el procesamiento en background y la comunicación entre servicios.",
        result:
          "El proyecto funciona como evidencia de pensamiento de producto con IA, límites entre servicios y aprendizaje para hacer capacidades técnicas accesibles a usuarios no especialistas.",
      },
      crowdinvestment: {
        problem:
          "Una idea de hackathon necesitaba convertirse en un producto funcional de crowdfunding con financiación de proyectos, recompensas y participación de donantes.",
        solution:
          "Implementé una aplicación Laravel usable con flujos de financiación, presentación de proyectos y mecánicas de donación enfocadas en validar la idea rápidamente.",
        stack:
          "PHP, Laravel, MySQL, jQuery y JavaScript dieron una base full-stack simple para el prototipo y las interacciones del producto.",
        result:
          "Se mantiene visible como evidencia de ejecución rápida de producto, entrega full-stack temprana y aprendizaje al convertir un concepto en software funcional.",
      },
      expense_track: {
        problem:
          "Los gastos compartidos en hogares, viajes y grupos se vuelven difíciles de seguir cuando la coordinación depende de notas, chats o spreadsheets informales.",
        solution:
          "Construí interfaces web y mobile coordinadas sobre un backend tipado para que los grupos registren gastos y entiendan balances compartidos con mayor claridad.",
        stack:
          "TypeScript, React, React Native, Next.js, NestJS, Prisma, MySQL y Tailwind CSS soportan la superficie de producto cross-platform.",
        result:
          "El proyecto demuestra ingeniería de producto web/mobile, entrega end-to-end con TypeScript y aprendizaje práctico sobre flujos de producto con estado compartido.",
      },
    },
  },
} as const;
