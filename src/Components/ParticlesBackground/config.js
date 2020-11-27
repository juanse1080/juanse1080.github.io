import palette from "theme/palette";
import image from "assets/img/Tech/git.svg";

const config = {
   fps_limit: 28,
   particles: {
      number: {
         value: 60,
         density: {
            enable: true,
            value_area: 800,
         },
      },
      color: {
         value: palette.primary.light,
      },
      shape: {
         type: "circle",
         stroke: {
            width: 0,
            color: palette.primary.light,
         },
         image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
         },
      },
      opacity: {
         value: 0.4,
         random: true,
         anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
         },
      },
      size: {
         value: 3,
         random: true,
         anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
         },
      },
      line_linked: {
         enable_auto: true,
         distance: 100,
         color: palette.primary.light,
         opacity: 1,
         width: 1,
         condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
         },
      },
      move: {
         enable: true,
         speed: 3,
         direction: "none",
         random: false,
         straight: false,
         out_mode: "out",
         bounce: false,
         attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
         },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: {
            enable: true,
            mode: "repulse",
         },
         onclick: { enable: true, mode: "push" },
         resize: true,
      },
      modes: {
         repulse: {
            distance: 100,
            duration: 0.4,
         },
         grab: { distance: 400, line_linked: { opacity: 1 } },
         bubble: {
            distance: 100,
            size: 4,
            duration: 1,
            opacity: 0.8951048951048951,
            speed: 3,
         },
         push: { particles_nb: 1 },
         remove: { particles_nb: 10 },
      },
   },
   retina_detect: true,
};

export default config;
