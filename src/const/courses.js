const react = "docs/Udemy/React.pdf";
const django = "docs/Udemy/Django.pdf";

const courses = [
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
];

export default courses;
