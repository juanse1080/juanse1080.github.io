import React from "react";
import Particles from "react-particles-js";

import { useTheme } from "@material-ui/core/styles";

export default function ParticlesBackground(props) {
   const theme = useTheme();
   return (
      <Particles
         {...props}
         params={{
            particles: {
               number: {
                  value: 100,
                  density: {
                     enable: true,
                     value_area: 800,
                  },
               },
               color: {
                  value: theme.palette.primary.light,
               },
               shape: {
                  type: "circle",
                  stroke: {
                     width: 0,
                     color: theme.palette.primary.light,
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
                  color: theme.palette.primary.light,
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
                  onclick: {
                     enable: false,
                  },
                  resize: true,
               },
               modes: {
                  repulse: {
                     distance: 40,
                     duration: 0.4,
                  },
               },
            },
            retina_detect: true,
         }}
      />
   );
}
