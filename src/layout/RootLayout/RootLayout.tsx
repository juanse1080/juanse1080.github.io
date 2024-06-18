"use client";

import { useRef } from "react";

import { Legend, Section } from "components/atoms";
import {
  About,
  Course,
  Education,
  Experience,
  Footer,
  Tech,
} from "components/molecules";
import { PortfolioPage } from "sections";

const page = "home";
const language = "espanol";

const Landing = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
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
    </>
  );
};

export default Landing;
