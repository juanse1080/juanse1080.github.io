// Import local sections
import { Legend } from "components/atoms";

import Build from "@material-ui/icons/Build";
import Face from "@material-ui/icons/Face";
import Work from "@material-ui/icons/Work";

// Import Font Awesome Icons components
import {
  faBuilding,
  faChalkboard,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  About,
  Course,
  Education,
  Experience,
  Portfolio,
  Tech,
} from "components/molecules";

const photo = "img/Foto.jpg";

const sections = {
  espanol: {
    about: {
      key: "about",
      title: "Sobre mí",
      component: About,
      icon: Face,
      props: {
        photo,
      },
      section: {},
    },
    education: {
      key: "education",
      title: "Educación",
      component: Education,
      icon: () => <FontAwesomeIcon icon={faGraduationCap as any} />,
      props: {},
      section: {
        subtitle: "Educación formal",
        leftPart: Legend,
      },
    },
    experience: {
      key: "experience",
      title: "Experiencia",
      component: Experience,
      icon: () => <FontAwesomeIcon icon={faBuilding as any} />,
      props: {},
      section: {
        subtitle: "Experiencia certificada",
        leftPart: Legend,
      },
    },
    curse: {
      key: "curse",
      title: "Cursos",
      component: Course,
      icon: () => <FontAwesomeIcon icon={faChalkboard as any} />,
      props: {},
      section: {
        subtitle: "Cursos virtuales",
        leftPart: Legend,
      },
    },
    tech: {
      key: "tech",
      title: "Tecnologías",
      component: Tech,
      icon: Build,
      props: {},
      section: {
        subtitle: "Tecnologías favoritas",
      },
    },
    portfolio: {
      key: "portfolio",
      title: "Portafolio",
      component: Portfolio,
      icon: Work,
      props: {},
      section: {
        subtitle: "Mis trabajos",
        fullWidth: true,
      },
    },
  },
  english: {
    about: {
      key: "about",
      title: "About me",
      component: About,
      icon: Face,
      props: {
        photo,
      },
      section: {},
    },
    education: {
      key: "education",
      title: "Education",
      component: Education,
      icon: () => <FontAwesomeIcon icon={faGraduationCap as any} />,
      props: {},
      section: {
        subtitle: "Formal education",
        leftPart: Legend,
      },
    },
    experience: {
      key: "experience",
      title: "Experience",
      component: Experience,
      icon: () => <FontAwesomeIcon icon={faBuilding as any} />,
      props: {},
      section: {
        subtitle: "Certified experience",
        leftPart: Legend,
      },
    },
    curse: {
      key: "curse",
      title: "Courses",
      component: Course,
      icon: () => <FontAwesomeIcon icon={faChalkboard as any} />,
      props: {},
      section: {
        subtitle: "Virtual courses",
        leftPart: Legend,
      },
    },
    tech: {
      key: "tech",
      title: "Techs",
      component: Tech,
      icon: Build,
      props: {},
      section: {
        subtitle: "Favorite Technologies",
      },
    },
    portfolio: {
      key: "portfolio",
      title: "Portfolio",
      component: Portfolio,
      icon: Work,
      props: {},
      section: {
        subtitle: "My work",
        fullWidth: true,
      },
    },
  },
};

const section_keys = Object.keys(sections);

export { section_keys, sections };
