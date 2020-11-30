import React from "react";

// import const
import socials from "const/socials";

// import styles
import useStyles from "./styles";

export default function Legend({ theme, mailAction, ...others }) {
   const classes = useStyles({ theme });
   return (
      <div {...others}>
         {socials({ mailAction }).map(
            ({
               icon: Icon,
               children: { component: Component = null, ...propsChildren },
               name,
               props,
            }) => (
               <Component {...propsChildren}>
                  <Icon
                     {...props}
                     fontSize="inherit"
                     className={classes.icon}
                  />
               </Component>
            )
         )}
      </div>
   );
}
