import React from "react";

// Import Material UI components

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import GetAppIcon from "@material-ui/icons/GetApp";

// Import local components
import Image from "Components/Image";

// import styles
import useStyles from "./styles";

// import local assets
const cv = "docs/CV/JuanMarconCV.pdf";

const About = ({ theme, state, photo, toPage, ...other }) => {
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
               <Typography
                  variant="subtitle2"
                  color="inherit"
                  paragraph
                  align="left"
               >
                  Contacto
               </Typography>
               <Grid
                  container
                  justify="space-between"
                  alignItems="flex-start"
                  spacing={3}
               >
                  <Grid item>
                     <Typography
                        color="inherit"
                        variant="body1"
                        align="left"
                        paragraph
                     >
                        <Link
                           href={`mailto:juanmarcon1080@gmail.com?Subject=Github%20page:%20${state.subject}&body=${state.body}`}
                           target="_blank"
                           rel="noreferrer"
                           color="inherit"
                        >
                           juanmarcon1080@gmail.com
                        </Link>
                     </Typography>
                     <Typography color="inherit" variant="body1" align="left">
                        <Link href="tel:3154390477" color="inherit">
                           (+57) 3154390477
                        </Link>
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Button
                        href={cv}
                        download="JuanMarconCV.pdf"
                        variant="contained"
                        color="secondary"
                        startIcon={<GetAppIcon />}
                     >
                        Descargar CV
                     </Button>
                  </Grid>
               </Grid>
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
