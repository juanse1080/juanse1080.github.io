import React from "react";

// Import Material UI components
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// Import local components
import Social from "Components/Social";

// import styles
import useStyles from "./styles";

export default function Footer({
   hidden,
   theme,
   state,
   handleState,
   scrollToTop,
   ...other
}) {
   const classes = useStyles({ theme });

   return (
      <div className={classes.root}>
         <div className={classes.paddings}>
            <Container>
               <Grid container spacing={3} justify="center">
                  <Grid item lg={6} md={7} sm={12}>
                     <div className={classes.header}>
                        <Typography
                           className={classes.title}
                           color="inherit"
                           variant="h2"
                        >
                           Contacta conmigo
                        </Typography>
                        <TextField
                           fullWidth
                           label="Asunto"
                           variant="outlined"
                           className="mt-2"
                           size="small"
                           name="subject"
                           defaultValue={state.subject}
                           onBlur={handleState}
                        />
                        <TextField
                           fullWidth
                           label="Contenido"
                           variant="outlined"
                           multiline
                           rows={6}
                           size="small"
                           className="mt-3"
                           name="body"
                           defaultValue={state.body}
                           onBlur={handleState}
                        />
                     </div>
                  </Grid>
                  <Grid item lg={5} md={5} sm={12} xs={12}>
                     <div className={classes.header}>
                        <Typography
                           className={classes.title}
                           color="inherit"
                           variant="h2"
                        >
                           Redes sociales
                        </Typography>
                        <Social className={classes.social} state={state} />
                     </div>
                     <div className={classes.header}>
                        <Typography
                           className={classes.title}
                           color="inherit"
                           variant="h2"
                        >
                           Contacto
                        </Typography>
                        <Typography
                           color="inherit"
                           variant="body1"
                           align="left"
                           paragraph
                        >
                           <Link
                              href="mailto:juanmarcon1080@gmail.com?Subject=Github%20page:%20"
                              target="_blank"
                              color="inherit"
                              rel="noreferrer"
                           >
                              juanmarcon1080@gmail.com
                           </Link>
                        </Typography>
                        <Typography
                           color="inherit"
                           variant="body1"
                           align="left"
                        >
                           <Link href="tel:3154390477" color="inherit">
                              (+57) 3154390477
                           </Link>
                        </Typography>
                     </div>
                  </Grid>
               </Grid>
            </Container>
         </div>
         <div className={classes.bottom}>
            <Typography variant="subtitle2" color="inherit" align="center">
               Juan Sebastian Marcon Caballero
            </Typography>
         </div>
         <Zoom in={hidden}>
            <Tooltip title="Scroll back to top" placement="left">
               <div role="presentation" className={classes.buttonScroll}>
                  <Fab
                     onClick={scrollToTop}
                     color="secondary"
                     size="small"
                     aria-label="scroll back to top"
                  >
                     <KeyboardArrowUpIcon />
                  </Fab>
               </div>
            </Tooltip>
         </Zoom>
      </div>
   );
}
