// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";

// Import local assets
import photo from "assets/img/Foto.jpg";

const sections = {
   "Sobre mí": {
      component: About,
      props: {
         photo,
      },
      section: {
         // subtitle: "Ruta",
      },
   },
   Portafolio: {
      component: Portfolio,
      props: {},
      section: {
         subtitle: "Mis trabajos",
         fullWidth: true,
      },
   },
   Educación: {
      component: Education,
      props: {},
      section: {
         subtitle: "Educación formal",
      },
   },
   Cursos: {
      component: Course,
      props: {},
      section: {
         subtitle: "Cursos virtuales",
      },
   },
};

const section_keys = Object.keys(sections);

export { sections, section_keys };
