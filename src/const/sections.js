// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";
import Tech from "Sections/Tech";
import Legend from "Components/Legend";

import Icon from "@material-ui/core/Icon";
import Face from "@material-ui/icons/Face";
import Work from "@material-ui/icons/Work";
import Build from "@material-ui/icons/Build";

// Import Font Awesome Icons components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGraduationCap,
   faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

// Import local assets
import photo from "assets/img/Foto.jpg";

const sections = {
   about: {
      key: "about",
      title: "Sobre mí",
      component: About,
      icon: Face,
      props: {
         photo,
      },
      section: {
         // subtitle: "Ruta",
      },
   },
   portfolio: {
      key: "portfolio",
      title: "Portafolio",
      component: Portfolio,
      icon: Work,
      props: {},
      section: {
         subtitle: "Mis trabajos (en construcción)",
         fullWidth: true,
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
};

const section_keys = Object.keys(sections);

export { sections, section_keys };
