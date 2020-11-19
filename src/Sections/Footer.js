import React from "react";

// Import Material UI components
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(theme => ({
   buttonScroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
}));

export default function Footer({ hidden, scrollToTop, ...other }) {
   const classes = useStyles();

   return (
      <Zoom in={hidden}>
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
      </Zoom>
   );
}
