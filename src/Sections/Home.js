import React, { forwardRef } from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Import local components
import ParticlesBackground from "Components/ParticlesBackground";

const useStyles = makeStyles(theme => ({
   root: {
      height: theme.shape.viewHeight,
      position: "relative",
   },
   header: {
      display: "flex",
      justifyContent: "center",
   },
   container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 1,
   },
   content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 128px)",
   },
   scrollIcon: {
      position: "absolute",
      bottom: 20,
      left: "calc(50% - 20px)",
   },
   particlesBackground: {
      position: "absolute",
      background: theme.palette.tertiary.main,
      zIndex: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
   },
   contentBox: {
      // backgroundColor: "rgba(0,0,0, 0.1)",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      color: theme.palette.black,
      zIndex: 1,
   },
}));

const Home = forwardRef(({ nextPage, page, ...other }, ref) => {
   const classes = useStyles();
   return (
      <div className={classes.root} ref={ref}>
         <ParticlesBackground className={classes.particlesBackground} />
         <Container className={classes.container}>
            <Grid
               container
               direction="row"
               justify="space-between"
               alignItems="center"
            >
               <Grid item lg={6} sm={8} className={classes.headar}>
                  <Box className={classes.contentBox}>
                     <Typography variant="h1" color="inherit" paragraph>
                        Juan Marcon.
                     </Typography>
                     <Typography variant="subtitle2" color="inherit">
                        Soy un estudiante de último nivel de Ingeniería de
                        Sistemas de la Universidad Industrial de Santander con
                        amplia experiencia en diferentes tecnologías de
                        desarrollo Web. He tenido la oportunidad de participar
                        en diferentes proyectos lo cual me ha ayudado mucho en
                        mi crecimiento profesional.
                     </Typography>
                  </Box>
               </Grid>
               <Grid item lg={6} sm={4}></Grid>
            </Grid>
         </Container>
         <Zoom in={page === "Home"}>
            <Fab
               color="secondary"
               aria-label="Next section"
               className={classes.scrollIcon}
               size="small"
               onClick={nextPage}
            >
               <KeyboardArrowDownIcon />
            </Fab>
         </Zoom>
      </div>
   );
});

export default Home;
