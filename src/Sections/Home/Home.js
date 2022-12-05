import React from "react";

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

import { Waypoint } from "react-waypoint";

// Import local components
import ParticlesBackground from "components/ParticlesBackground";
import Social from "components/Social";

// Import local const
import text from "const/home";

// import styles
import useStyles from "./styles";

//import local assets
const Img = "img/Home/develop_page.svg";

const Home = ({
   id,
   language,
   toPage,
   handlePage,
   after,
   nextPage,
   state,
   page,
   ...other
}) => {
   const classes = useStyles();

   const onLeave = ({ currentPosition, previousPosition }) => {
      if (currentPosition === "above" && previousPosition === "inside" && after)
         handlePage(after);
   };

   const onEnter = ({ currentPosition, previousPosition }) => {
      if (currentPosition === "inside" && previousPosition === "above" && after)
         handlePage(id);
   };

   return (
      <Waypoint onLeave={onLeave} onEnter={onEnter}>
         <div id={id} className={classes.root} {...other}>
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
                              {text[language].title}
                           </Typography>
                           <Typography
                              variant="subtitle2"
                              color="inherit"
                              align="left"
                           >
                              {text[language].description}
                           </Typography>
                           <Box className={classes.sectionIcons}>
                              <Button
                                 variant="contained"
                                 color="secondary"
                                 className="mr-3"
                                 onClick={nextPage}
                              >
                                 {text[language].buttons[0]}
                              </Button>
                              <Button
                                 variant="contained"
                                 color="secondary"
                                 onClick={toPage()}
                              >
                                 {text[language].buttons[1]}
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
               <Social mailAction={toPage()} />
            </Box>
            <Zoom in={page === "home"}>
               <Tooltip title={text[language].buttons[2]} placement="top">
                  <Fab
                     color="secondary"
                     aria-label={text[language].buttons[2]}
                     className={classes.scrollIcon}
                     size="small"
                     onClick={nextPage}
                  >
                     <KeyboardArrowDownIcon />
                  </Fab>
               </Tooltip>
            </Zoom>
         </div>
      </Waypoint>
   );
};

export default Home;
