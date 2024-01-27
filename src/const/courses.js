const react = "docs/Udemy/React.pdf";
const django = "docs/Udemy/Django.pdf";
const python = "docs/Udemy/python.pdf";

const courses = {
  espanol: [
    {
      title: "Curso de AWS Certified Developer Associate DVA-C02",
      date: null,
      institution: "Udemy",
      description: [
        "Este curso tiene por objectivo prepararte para el examente de certificación 'Developer Associate DVA-C02' de AWS",
      ],
      ended: false,
    },
    {
      title: "React: De cero a experto ( Hooks y MERN )",
      date: null,
      institution: "Udemy",
      description: [
        "Este curso tiene por objetivo llevarte de cero conocimiento de React hasta un nivel competitivo en el ambiente laboral de hoy en día. Este curso está construido 100% en Hooks y functional components.",
        "También cuenta con secciones sobre pruebas unitarias y de integración en cada aplicación que hacemos en el curso, esto incluye pruebas en componentes, hooks, customHooks, context, Redux, Fetch, mocks, spies, snapshots y mucho más relacionado al unit test.",
      ],
      ended: true,
    },
    {
      title: "React JS + Redux + ES6. Completo ¡De 0 a experto!",
      date: null,
      institution: "Udemy",
      description: [
        "Este curso es bastante practico enfocándose en estándares nuevos tales como React hooks, ES6, Redux, entre otros. Al finalizar este curso pude crear un pequeño proyecto altamente escalable.",
        "Se mostraron conceptos propios de React, como el ciclo de vida, migración a React hooks, uso de los hooks a profundidad, DOM virtual, entre otros. Ademas se tocaron temas propios de JS, destructuring, arrow functions, const, let",
      ],
      ended: true,
      certify: react,
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      date: null,
      institution: "Udemy",
      description: [
        '"Automate the Boring Stuff with Python" fue escrito para personas que quieren ponerse al día escribiendo pequeños programas que realicen tareas prácticas lo antes posible. No es necesario que conozca los algoritmos de clasificación o la programación orientada a objetos, por lo que este curso omite todas las ciencias de la computación y se concentra en escribir código que permita hacer las cosas.',
      ],
      ended: true,
      certify: python,
    },
    {
      title: "PROBAR DJANGO | Crear una Aplicación Web",
      date: null,
      institution: "Udemy",
      description: [
        "Este curso tiene enfoque práctico dirigido a gente sin experiencia técnica ya que con Django se puede crear aplicaciones escribiendo el menor código posible. Al seguir el curso, cree una página de aterrizaje como base para tu gran proyecto, una aplicación web con mucha funcionalidad.",
        "Debido a que está escrito en Python, se mostraron conceptos como programación orientada a objetos, un paradigma de programación que usa objetos en sus interacciones, para diseñar programas informáticos. Tocan otros conceptos, incluyendo herencia y encapsulamiento, entre otros",
      ],
      ended: true,
      certify: django,
    },
  ],
  english: [
    {
      title: "Curso de AWS Certified Developer Associate DVA-C02",
      date: null,
      institution: "Udemy",
      description: [
        "This course is designed to prepare you for the AWS Developer Associate DVA-C02 certification exam.",
      ],
      ended: false,
    },
    {
      title: "React: De cero a experto ( Hooks y MERN )",
      date: null,
      institution: "Udemy",
      description: [
        "This course aims to take you from zero React knowledge to a competitive level in today's work environment. This course is built 100% in Hooks and functional components.",
        "It also has sections on unit and integration tests in each application that we do in the course, this includes tests on components, hooks, customHooks, context, Redux, Fetch, mocks, spies, snapshots and much more related to the unit test.",
      ],
      ended: false,
    },
    {
      title: "React JS + Redux + ES6. Completo ¡De 0 a experto!",
      date: null,
      institution: "Udemy",
      description: [
        "This course is quite practical focusing on new standards such as React hooks, ES6, Redux, among others. At the end of this course I was able to create a small highly scalable project.",
        "React own concepts were shown, such as the life cycle, migration to React hooks, use of in-depth hooks, virtual DOM, among others. In addition, JS own themes were played, destructuring, arrow functions, const, let",
      ],
      ended: true,
      certify: react,
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      date: null,
      institution: "Udemy",
      description: [
        `"Automate the Boring Stuff with Python" Automate the Boring Stuff with Python was written for people who want to get up to speed writing small programs that do practical tasks as soon as possible. You don't need to know sorting algorithms or object-oriented programming, so this course skips all the computer science and concentrates on writing code that gets stuff done.`,
      ],
      ended: true,
      certify: python,
    },
    {
      title: "PROBAR DJANGO | Crear una Aplicación Web",
      date: null,
      institution: "Udemy",
      description: [
        "This course has a practical approach aimed at people without technical experience since with Django you can create applications by writing as little code as possible. By following the course, create a landing page as the basis for your big project, a web application with a lot of functionality.",
        "Because it is written in Python, concepts such as object-oriented programming, a programming paradigm that uses objects in their interactions, to design computer programs were shown. They touch on other concepts, including inheritance and encapsulation, among others",
      ],
      ended: true,
      certify: django,
    },
  ],
};

export default courses;
