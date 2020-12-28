const react = "docs/Udemy/React.pdf";
const django = "docs/Udemy/Django.pdf";

const courses = {
   espanol: [
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
