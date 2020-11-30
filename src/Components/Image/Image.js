import React, { useState, forwardRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Visibility from "@material-ui/icons/Visibility";

// Import others libs
import { isMobile } from "react-device-detect";

// import styles
import useStyles from "./styles";

const Transition = forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function Image({ photo, ...others }) {
   const [open, setOpen] = useState(false);
   const [eye, setEye] = useState(false);

   const classes = useStyles({ photo, eye });

   const handleCloseView = () => {
      setOpen(false);
   };

   const handleShowView = () => {
      setOpen(true);
   };

   const handleEye = state => () => {
      if (state === undefined) setEye(eye => !eye);
      else if (state !== eye) setEye(eye => state);
   };

   return (
      <div {...others}>
         <div
            className={classes.media}
            onMouseEnter={isMobile ? null : handleEye(true)}
            onMouseLeave={isMobile ? null : handleEye(false)}
            onMouseOver={isMobile ? null : handleEye(true)}
            onClick={handleShowView}
         >
            <Zoom in={isMobile || eye}>
               <Paper className={classes.icon}>
                  <IconButton size="small" onClick={handleShowView}>
                     <Visibility fontSize="small" />
                  </IconButton>
               </Paper>
            </Zoom>
         </div>

         <Dialog
            classes={{
               root: classes.rootDialog,
               paperScrollBody: classes.paperScrollBody,
            }}
            scroll="body"
            onClose={handleCloseView}
            aria-labelledby="Image"
            open={open}
            TransitionComponent={Transition}
         >
            <img className={classes.viewPreview} src={photo} alt={photo} />
         </Dialog>
      </div>
   );
}
