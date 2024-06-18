import common from "./common";

export default {
  common,
  title: "Juan Marcon | Desarrollador de software",
  description: "El portafolio de Juan Marcon, desarrollador de software",
  content: {
    title: ["Hola. Soy Juan.", "Un desarrollador de software"],
    call_to_action: {
      contact: " Contacta conmigo",
    },
  },
  about: {
    title: "Acerca de mi",
    subtitle: [
      "Comprometido con la mejora continua",
      "a través del aprendizaje constante",
    ],
    description: [
      "Mi enfoque proactivo y adaptabilidad a nuevas tecnologías me han permitido aportar soluciones innovadoras.",
      "He colaborado en equipos dinámicos, desde startups hasta empresas consolidadas, obteniendo una perspectiva amplia en el desarrollo de software.",
    ],
    experience: "años de experiencia",
    query: {
      title: "Cualquier tipo de consulta",
    },
    cv: {
      title: ["Obtén una copia de mi", "currículum vitae"],
      call_to_action: "Ver currículum vitae",
    },
  },
  education: {
    title: "Education",
    subtitle: [
      "De la mano de la educación formal,",
      "he adquirido conocimientos estructurados y esenciales",
      "pilares para mi desarrollo profesional. Como egresado en",
      "Ingeniería de Sistemas",
      "de la",
      "Universidad Industrial de Santander (UIS).",
    ],
    description:
      "he experimentado de primera mano cómo una educación rigurosa y bien organizada puede abrir puertas y proporcionar las herramientas necesarias para enfrentar los desafíos del mundo laboral.",

    courses: {
      title: [
        "He consolidado",
        "conocimientos prácticos",

        "en plataformas de aprendizaje como",
        "Udemy",
        ", como parte de mi continua búsqueda de desarrollo personal y profesional",
      ],
      description: [
        "Algunos de los cursos certificados que he completado incluyen",
        "React (Hooks y MERN), React JS + Redux + ES6,",
        "entre otros.",
      ],
      current: {
        title: [
          "Mi compromiso es estar a la",
          "vanguardia",
          ", por eso actualmente estoy cursando la certificación AWS",
          "Certified Developer Associate DVA-C02.",
        ],
      },
    },
  },
  skill: {
    title: "Habilidades",
    subtitle: [
      "Acompañado de conocimientos en herramientas de gran escala, he adquirido experiencia en la utilización eficaz de",
      "tecnologías avanzadas",
      "y",
      "recursos robustos",
      ", clave para enfrentar desafíos en",
      "proyectos complejos.",
      "Algunas de estas herramientas incluyen:",
    ],
  },
} as const;
