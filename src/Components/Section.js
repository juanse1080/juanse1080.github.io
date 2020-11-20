import React, { forwardRef } from "react";

// Import Material UI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import clsx from "clsx";

// Import local components

const themes = {
   dark: {
      theme: "primary",
      icons: "secondary",
   },
   light: {
      theme: "tertiary",
      icons: "primary",
   },
};

const useStyles = makeStyles(theme => ({
   root: props => ({
      backgroundColor: theme.palette[themes[props.theme].theme].dark,
      color: theme.palette[themes[props.theme].theme].subtitle,
      // height: theme.shape.viewHeight,
   }),
   paddingBottom: {
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.only("sm")]: {
         paddingBottom: theme.spacing(3),
      },
      [theme.breakpoints.only("xs")]: {
         paddingBottom: theme.spacing(2.5),
      },
   },
   paddings: {
      padding: theme.spacing(4),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(3),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(2.5),
      },
   },
   header: {
      margin: theme.spacing(2),
      [theme.breakpoints.only("sm")]: {
         margin: theme.spacing(1.5),
      },
      [theme.breakpoints.only("xs")]: {
         margin: theme.spacing(1),
      },
   },
   content: {
      padding: theme.spacing(3),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(1),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(0),
      },
   },
   title: props => ({
      paddingTop: theme.spacing(1),
      borderTop: `2px solid ${theme.palette[themes[props.theme].icons].main}`,
      display: "inline-block",
      color: theme.palette[themes[props.theme].theme].title,
   }),
   subtitle: props => ({
      color: theme.palette[themes[props.theme].theme].subtitle,
   }),
}));

const Home = forwardRef(
   ({ title, subtitle, theme, children, fullWidth, ...other }, ref) => {
      const classes = useStyles({ theme });

      return (
         <div ref={ref}>
            <div className={classes.root}>
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
                           </Grid>
                           <Grid item lg={9} md={9} sm={8} xs={12}>
                              <div className={classes.content}>{children}</div>
                           </Grid>
                        </Grid>
                     </Container>
                  </div>
               )}
            </div>
         </div>
      );
   }
);

export default Home;
