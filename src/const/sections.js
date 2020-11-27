// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";
import Tech from "Sections/Tech";

// Import local assets
import photo from "assets/img/Foto.jpg";

const sections = {
   about: {
      title: "Sobre mí",
      component: About,
      props: {
         photo,
      },
      section: {
         // subtitle: "Ruta",
      },
   },
   portfolio: {
      title: "Portafolio",
      component: Portfolio,
      props: {},
      section: {
         subtitle: "Mis trabajos",
         fullWidth: true,
      },
   },
   tech: {
      title: "Tecnologías",
      component: Tech,
      props: {},
      section: {
         subtitle: "Tecnologías favoritas",
      },
   },
   education: {
      title: "Educación",
      component: Education,
      props: {},
      section: {
         subtitle: "Educación formal",
      },
   },
   curse: {
      title: "Cursos",
      component: Course,
      props: {},
      section: {
         subtitle: "Cursos virtuales",
      },
   },
};

const section_keys = Object.keys(sections);

export { sections, section_keys };
