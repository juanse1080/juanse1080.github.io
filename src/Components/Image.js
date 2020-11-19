import React, { useState, forwardRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Visibility } from "@material-ui/icons";

const Transition = forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
   media: props => ({
      height: 0,
      width: "100%",
      display: "block",
      paddingTop: "100%",
      backgroundImage: `url(${props.photo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "50%",
      position: "relative",
   }),
   viewPreview: {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: `calc( ${theme.shape.viewHeight} - 69px )`,
   },
   rootDialog: {
      lineHeight: 0,
   },
   icon: {
      display: "flex",
      position: "absolute",
      right: "6.75%",
      borderRadius: "50%",
      zIndex: 1,
      bottom: "6.75%",
   },
   paperScrollBody: {
      overflowY: "hidden",
   },
}));

export default function Image({ photo, ...others }) {
   const classes = useStyles({ photo });
   const [open, setOpen] = useState(false);
   const [eye, setEye] = useState(false);

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
            onMouseEnter={handleEye(true)}
            onMouseLeave={handleEye(false)}
            onMouseOver={handleEye(true)}
         >
            <Zoom in={eye}>
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
            aria-labelledby="customized-dialog-title"
            open={open}
            TransitionComponent={Transition}
         >
            <img className={classes.viewPreview} src={photo} alt={photo} />
         </Dialog>
      </div>
   );
}
