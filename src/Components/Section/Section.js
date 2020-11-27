import React, { forwardRef, useEffect, useState, useMemo } from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";

// import styles
import useStyles from "./styles";

const Section = forwardRef(
   (
      {
         title,
         page,
         loads,
         section_name,
         leftPart,
         subtitle,
         theme,
         children,
         fullWidth,
         ...other
      },
      ref
   ) => {
      const classes = useStyles({ theme });

      const [initSection, setInitSection] = useState(false);

      useMemo(() => {
         if (loads.includes(section_name)) setInitSection(true);
      }, [loads]);

      return (
         <div ref={ref}>
            <div className={classes.root}>
               <Zoom in={initSection}>
                  {fullWidth ? (
                     <>
                        <div className={classes.paddings}>
                           <Container>
                              <Grid container spacing={3} justify="flex-start">
                                 <Grid item lg={3} md={3} sm={4} xs={12}>
                                    <div className={classes.header}>
                                       <Typography
                                          className={classes.title}
                                          color="inherit"
                                          variant="h2"
                                       >
                                          {title}
                                       </Typography>
                                       <Typography
                                          className={classes.subtitle}
                                          color="inherit"
                                          variant="subtitle1"
                                       >
                                          {subtitle}
                                       </Typography>
                                    </div>
                                 </Grid>
                              </Grid>
                           </Container>
                        </div>
                        {children}
                        <div className={classes.paddingBottom} />
                     </>
                  ) : (
                     <div className={classes.paddings}>
                        <Container>
                           <Grid container spacing={3} justify="center">
                              <Grid item lg={3} md={3} sm={4} xs={12}>
                                 <div className={classes.header}>
                                    <Typography
                                       className={classes.title}
                                       color="inherit"
                                       variant="h2"
                                    >
                                       {title}
                                    </Typography>
                                    <Typography
                                       className={classes.subtitle}
                                       color="inherit"
                                       variant="subtitle1"
                                    >
                                       {subtitle}
                                    </Typography>
                                 </div>
                                 {leftPart}
                              </Grid>
                              <Grid item lg={9} md={9} sm={8} xs={12}>
                                 <div className={classes.content}>
                                    {children}
                                 </div>
                              </Grid>
                           </Grid>
                        </Container>
                     </div>
                  )}
               </Zoom>
            </div>
         </div>
      );
   }
);

export default Section;
