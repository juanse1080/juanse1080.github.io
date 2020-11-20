import React from "react";

// Import Material UI components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Import local components
import Image from "Components/Image";

const themes = {
   dark: "primary",
   light: "secondary",
};

const useStyles = makeStyles(theme => ({
   avatar: {},
   content: {
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
         padding: theme.spacing(0),
      },
   },
}));

const About = ({ theme, photo, ...other }) => {
   const classes = useStyles();

   return (
      <Grid container spacing={3} justify="center" align="center">
         <Hidden mdUp>
            <Grid item lg={2} md={3} sm={5} xs={6}>
               <Image className={classes.avatar} photo={photo} />
            </Grid>
         </Hidden>
         <Grid item lg={9} md={9} sm={12} sx={12}>
            <div className={classes.content}>
               <Typography
                  color="inherit"
                  align="justify"
                  paragraph
                  variant="body1"
               >
                  Mi nombre es Juan Sebastian Marcon Caballero, soy un
                  estudiante de último nivel de Ingeniería de Sistemas de la
                  Universidad Industrial de Santander (UIS) con experiencia en
                  desarrollo web adquirida durante el proceso de aprendizaje con
                  la UIS.
               </Typography>
               <Typography
                  color="inherit"
                  align="justify"
                  paragraph
                  variant="body1"
               >
                  He obtenido experiencia con el Instituto de Proyección
                  Regional y Educación a Distancia (IPRED) desempeñándome como
                  desarrollador FullStack en su plataforma administrativa. Por
                  mi cuenta he participado en el desarrollo de multiples
                  proyectos de desarrollo web durante el transcurso de mi
                  carrera profesional.
               </Typography>
               <Typography
                  color="inherit"
                  align="justify"
                  paragraph
                  variant="body1"
               >
                  Por mi cuenta he participado en el desarrollo de multiples
                  proyectos de desarrollo web durante el transcurso de mi
                  carrera profesional.
               </Typography>
               {/* <Box color={`${themes[theme]}.title`}>
                  <Typography
                     color="inherit"
                     align="justify"
                     paragraph
                     variant="h3"
                  >
                     Contacto
                  </Typography>
               </Box>
               <Typography
                  color="inherit"
                  align="justify"
                  paragraph
                  variant="body1"
               >
                  Por mi cuenta he participado en el desarrollo de multiples
                  proyectos de desarrollo web durante el transcurso de mi
                  carrera profesional.
               </Typography> */}
            </div>
         </Grid>
         <Hidden smDown>
            <Grid item lg={2} md={3} sm={5} xs={6}>
               <Image className={classes.avatar} photo={photo} />
            </Grid>
         </Hidden>
      </Grid>
   );
};

export default About;
