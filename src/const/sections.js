// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";

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
         // subtitle: "Ruta",
         fullWidth: true,
      },
   },
   Educación: {
      component: Education,
      props: {},
      section: {
         // subtitle: "Ruta",
      },
   },
};

export default sections;
