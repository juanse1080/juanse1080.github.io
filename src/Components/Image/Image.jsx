import React, { forwardRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Visibility from "@material-ui/icons/Visibility";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import others libs
import { isMobile } from "react-device-detect";

// Import custom hooks
import useBoolean from "hooks/useBoolean";

// import styles
import useStyles from "./Image.styles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Image({ photo, ...others }) {
  const themeProvider = useTheme();
  const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

  const [open, onOpen, onClose] = useBoolean();
  const [eye, showEye, hideEye] = useBoolean();

  const classes = useStyles({ photo, eye: eye || xs });

  return (
    <div {...others}>
      <div
        className={classes.media}
        onMouseEnter={isMobile || xs ? null : showEye}
        onMouseLeave={isMobile || xs ? null : hideEye}
        onMouseOver={isMobile || xs ? null : showEye}
        onClick={onOpen}
      >
        <Zoom in={isMobile || xs || eye}>
          <Paper className={classes.icon}>
            <IconButton size="small" onClick={onOpen}>
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
        onClose={onClose}
        aria-labelledby="Image"
        open={open}
        TransitionComponent={Transition}
      >
        <img className={classes.viewPreview} src={photo} alt={photo} />
      </Dialog>
    </div>
  );
}
