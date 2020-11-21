import React from "react";

// Import Material UI components
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// import styles
import useStyles from "./styles";

export default function Footer({ hidden, scrollToTop, ...other }) {
   const classes = useStyles();

   return (
      <Zoom in={hidden}>
         <Tooltip
            title="Scroll back to top"
            placement="left"
         >
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
   );
}
