import React from "react";

// Import Material UI components
import Box from "@material-ui/core/Box";

// import const
import socials from "const/socials";

// import styles
import useStyles from "./styles";

export default function Legend({ theme, state, ...others }) {
   const classes = useStyles({ theme });
   return (
      <div {...others}>
         {socials(state).map(({ icon: Icon, propsLink, name, props }) => (
            <a {...propsLink} key={name} className={classes.link}>
               <Icon {...props} fontSize="inherit" className={classes.icon} />
            </a>
         ))}
      </div>
   );
}
