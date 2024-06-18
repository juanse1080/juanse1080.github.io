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
} as const;
