import plataforma_tic from "assets/img/Portfolio/PlataformaTIC/Login.png";
import deep_tools from "assets/img/Portfolio/Deeptools/Login.png";

import vtasesores from "const/vt_asesores";
import colcief from "const/colcief";
import bivlab from "const/bivlab";
import crowdinvestment from "const/crowdinvestment";
import deeptools from "const/deeptools";

const images = [
   {
      key: "vt_asesores",
      img: vtasesores[0].url,
      title: "Vt Asesores",
      date: "Dic 10, 2017 - Feb 8, 2018",
      location: "Bucaramanga, Santander",
      role: "FullStack",
      entity: "Vt Asesores",
      description: [
         "El objetivo de este proyecto era desarrollar una plataforma web para la gestión de la información durante el transcurso de un proceso legal evolucionado por la empresa VT asesores jurídicos.",
         "El aplicativo cuenta con diferentes herramientas para la administración de la información, generación de backups, filtrado de datos, entre otros.",
      ],
      techs: ["PHP 5.6", "PostgreSQL", "JQuery", "Javascript", "Bootstrap 4"],
      media: vtasesores,
   },
   {
      key: "colcief",
      img: colcief[0].url,
      title: "ColCIEF",
      date: "Febrero 22, 2018 - Mayo 3, 2019",
      location: "Bucaramanga, Santander",
      role: "FullStack",
      entity: "Colegio Integrado Ezequiel Florián",
      description: [
         "En este proyecto se desarrollo una plataforma web para la administración de calificaciones e información estudiantil.",
         "Permite la generación de PDF con calificaciones por estudiante y por grupo. La plataforma permite la inserción de calificaciones y realiza los cálculos necesarios para encontrar la calificación final de cada alumno.",
      ],
      techs: [
         "PHP 7.2",
         "laravel 5.6",
         "MySQL",
         "JQuery",
         "Javascript",
         "Bootstrap 4",
      ],
      media: colcief,
   },
   {
      key: "bivlab",
      img: bivlab[0].url,
      title: "Bivl2ab",
      date: "Junio 6, 2019 - Agosto 23, 2019",
      location: "Bucaramanga, Santander",
      role: "FullStack",
      entity: "Bivl2ab UIS",
      description: [
         "En este proyecto se desarrollo una plataforma para la mostrar a detalle el transcurso de los proyectos de investigación de los integrantes del grupo Bivl2ab de la UIS.",
         "Permite registrar información detallada de cada unos de los proyectos, tales como los productos de cada uno de estos, artículos, conferencias, entre otros. Ademas datos esenciales durante el desarrollo del mismo como los datasets.",
      ],
      techs: [
         "PHP 7.2",
         "laravel 5.6",
         "MySQL",
         "JQuery",
         "Javascript",
         "Bootstrap 4",
      ],
      media: bivlab,
   },
   {
      key: "crowd_investment",
      img: crowdinvestment[0].url,
      title: "CrowdInvestment",
      date: "Nov 16, 2018 - Ago 29, 2019",
      location: "Bucaramanga, Santander",
      role: "FullStack",
      entity: "Mayasoft - hackathon",
      description: [
         "Este proyecto comenzó en una Hackathon organizada por Mayasoft. Al finalizar la competencia este proyecto continuo como una propuesta de proyecto final para la material Ingeniería de Software II lo cual permitió la finalizacion y su mejoramiento.",
         "El aplicativo tiene como filosofía el CrowdFounding, se basa en donaciones económicas, para conseguir financiar un determinado proyecto a cambio de recompensas, participaciones de forma altruista.",
      ],
      techs: [
         "PHP 7.2",
         "laravel 5.6",
         "MySQL",
         "JQuery",
         "Javascript",
         "Bootstrap 4",
      ],
      media: crowdinvestment,
   },
   {
      key: "deep_tools",
      img: deeptools[0].url,
      title: "Deep tools",
      date: "Mar 28, 2020 - Oct 10, 2020",
      location: "Bucaramanga, Santander",
      role: "FullStack",
      entity: "Bivl2ab UIS",
      description: [
         "Este proyecto va enfocado a los desarrolladores de algoritmos de IA que no tienen el conocimiento para desplegar estos algoritmos con los estándares y medidas necesarias para su ejecución.",
         "El software fue pensado para gran parte de los miembros del grupo Bivl2ab debido a que muchos de estos no cuentan con dicho conocimiento.",
      ],
      techs: [
         "Python 3.8",
         "Django 3.0",
         "Celery",
         "Channels 2",
         "RxPy",
         "gRPC",
         "Docker",
         "Javascript",
         "React JS",
         "Bootstrap utilities",
         "Material UI",
         "mySQL",
      ],
      media: deeptools,
   },
];

export default images;
