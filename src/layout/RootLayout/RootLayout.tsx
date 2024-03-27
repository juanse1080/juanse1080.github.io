import { useRef } from "react";

import { Legend, Section } from "components/atoms";
import {
  About,
  Course,
  Education,
  Experience,
  Footer,
  Home,
  Tech,
} from "components/molecules";
import { sections } from "const/sections";
import { PortfolioPage } from "sections";
import useStyles from "./RootLayout.styles";

const page = "home";
const language = "espanol";
const content = sections[language];
const values = Object.values(content);

const Landing = () => {
  const classes = useStyles();
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const goToAbout = () => {
    if (aboutRef?.current)
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const goToContact = () => {
    if (contactRef?.current)
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div className={classes.root}>
      <Home
        id="home"
        language={language}
        after={values[0].key}
        page={page}
        toAbout={goToAbout}
        toContact={goToContact}
      />

      <Section ref={aboutRef} id="about" title="Sobre mí">
        <About photo="img/Foto.jpg" language={language} page={page} />
      </Section>

      <Section id="education" title="Educación" color="white">
        <Education
          language={language}
          page={page}
          leftPart={<Legend language={language} />}
        />
      </Section>

      <Section
        id="experience"
        title="Experiencia"
        subtitle="Experiencia certificada"
      >
        <Experience
          language={language}
          page={page}
          leftPart={<Legend language={language} />}
        />
      </Section>

      <Section
        id="curse"
        title="Cursos"
        subtitle="Cursos virtuales"
        color="white"
      >
        <Course
          language={language}
          page={page}
          leftPart={<Legend language={language} />}
        />
      </Section>

      <Section id="tech" title="Tecnologías" subtitle="Tecnologías favoritas">
        <Tech language={language} page={page} />
      </Section>

      <PortfolioPage page={page} language={language} />
      <Footer ref={contactRef} language={language} />
    </div>
  );
};

export default Landing;
