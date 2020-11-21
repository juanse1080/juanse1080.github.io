import React, { forwardRef } from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

//import local assets
import Img from "assets/img/Home/undraw_building_websites_i78t.svg";

// Import local components
import ParticlesBackground from "Components/ParticlesBackground";

// import styles
import useStyles from "./styles";

// import const
import socials from "const/socials";

const Home = forwardRef(({ nextPage, page, ...other }, ref) => {
   const classes = useStyles();
   return (
      <div className={classes.root} ref={ref}>
         <ParticlesBackground className={classes.particlesBackground} />
         <div className={classes.paddings}>
            <Container className={classes.container}>
               <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
               >
                  <Grid item lg={6} sm={10}>
                     <Box className={classes.contentBox}>
                        <Typography
                           variant="h1"
                           color="inherit"
                           paragraph
                           align="left"
                        >
                           Juan Marcon.
                        </Typography>
                        <Typography
                           variant="subtitle2"
                           color="inherit"
                           align="left"
                        >
                           Soy un estudiante de último nivel de Ingeniería de
                           Sistemas de la Universidad Industrial de Santander
                           con amplia experiencia en diferentes tecnologías de
                           desarrollo Web. He tenido la oportunidad de
                           participar en diferentes proyectos lo cual me ha
                           ayudado mucho en mi crecimiento profesional.
                        </Typography>
                        <Box className={classes.sectionIcons}>
                           {socials.map(social => {
                              const Icon = social.icon;
                              return (
                                 <Icon
                                    {...social.props}
                                    key={social.name}
                                    fontSize="inherit"
                                    className={classes.icon}
                                 />
                              );
                           })}
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item lg={5} sm={4}>
                     <img src={Img} alt="" style={{ zIndex: 2 }} />
                  </Grid>
               </Grid>
            </Container>
         </div>
         <Zoom in={page === "Home"}>
            <Tooltip title="Next section" placement="top">
               <Fab
                  color="secondary"
                  aria-label="Next section"
                  className={classes.scrollIcon}
                  size="small"
                  onClick={nextPage}
               >
                  <KeyboardArrowDownIcon />
               </Fab>
            </Tooltip>
         </Zoom>
      </div>
   );
});

export default Home;
