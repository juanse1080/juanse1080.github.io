// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";
import Experience from "Sections/Experience";
import Tech from "Sections/Tech";
import Legend from "components/Legend";

import Face from "@material-ui/icons/Face";
import Work from "@material-ui/icons/Work";
import Build from "@material-ui/icons/Build";

// Import Font Awesome Icons components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChalkboard,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

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
      icon: () => <FontAwesomeIcon icon={faGraduationCap} />,
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
      icon: () => <FontAwesomeIcon icon={faBuilding} />,
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
      icon: () => <FontAwesomeIcon icon={faChalkboard} />,
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
      icon: () => <FontAwesomeIcon icon={faGraduationCap} />,
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
      icon: () => <FontAwesomeIcon icon={faBuilding} />,
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
      icon: () => <FontAwesomeIcon icon={faChalkboard} />,
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

export { sections, section_keys };
