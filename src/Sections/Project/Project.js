import React from "react";

// Import Material UI components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Import local const
import tools from "const/tools";

// import styles
import useStyles from "./styles";

const Tech = ({ theme, page, ...other }) => {
   const classes = useStyles({ theme });

   return (
      <Container>
         <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={3}
         >
            {tools.map(({ name, icon, props, ...others }, index) => (
               <Grid key={name} item lg={4} md={4} sm={5} xs={6}>
                  <a {...others} className={classes.contentIcon}>
                     <img
                        {...props}
                        className={classes.icon}
                        src={icon}
                        alt={name}
                     />
                  </a>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default Tech;
