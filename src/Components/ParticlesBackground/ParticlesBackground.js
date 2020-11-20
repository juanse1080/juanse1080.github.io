import React from "react";
import Particles from "react-particles-js";

// Import config
import config from "./config";

export default function ParticlesBackground(props) {
   return <Particles {...props} params={config} />;
}
