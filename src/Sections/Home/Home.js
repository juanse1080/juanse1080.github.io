import React from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

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

   return (
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
                           className={classes.title}
                        >
                           {text[language].title}
                        </Typography>
                        <Typography
                           variant="subtitle2"
                           color="inherit"
                           align="justify"
                        >
                           {text[language].description}
                        </Typography>
                        <Box className={classes.sectionIcons}>                           
                           <Button
                              variant="outlined"
                              color="secondary"
                              className="mr-3"
                              size="large"
                              onClick={toPage()}
                           >
                              {text[language].buttons[1]}
                           </Button>
                           <Button
                              variant="contained"
                              color="secondary"                              
                              size="large"
                              onClick={nextPage}
                           >
                              {text[language].buttons[0]}
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
      </div>
   );
};

export default Home;
