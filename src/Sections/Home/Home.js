import React, { forwardRef } from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

//import local assets
import Img from "assets/img/Home/develop_page.svg";

// Import local components
import ParticlesBackground from "Components/ParticlesBackground";
import Social from "Components/Social";

// import styles
import useStyles from "./styles";

// import const

const Home = forwardRef(({ nextPage, state, page, ...other }, ref) => {
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
                  alignItems="flex-start"
               >
                  <Grid item lg={6} md={6} sm={10} xs={12}>
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
                           <Button
                              variant="contained"
                              color="secondary"
                              onClick={nextPage}
                           >
                              Empecemos
                           </Button>
                        </Box>
                     </Box>
                  </Grid>
                  <Hidden smDown>
                     <Grid item lg={5} md={5} sm={4}>
                        <img
                           src={Img}
                           alt=""
                           style={{
                              zIndex: 2,
                              width: "100%",
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>
                  </Hidden>
               </Grid>
            </Container>
         </div>
         <Box className={classes.socialIcons}>
            <Social state={state} />
         </Box>
         <Zoom in={page === "home"}>
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
