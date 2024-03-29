import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
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

export default function Image({ photo, ...others }: any) {
  const themeProvider = useTheme();
  const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

  const [open, onOpen, onClose] = useBoolean();
  const [eye, showEye, hideEye] = useBoolean();

  const classes = useStyles({ photo, eye: eye || xs });

  return (
    <div {...others}>
      <div
        className={classes.media}
        onMouseEnter={isMobile || xs ? undefined : showEye}
        onMouseLeave={isMobile || xs ? undefined : hideEye}
        onMouseOver={isMobile || xs ? undefined : showEye}
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
      >
        <img className={classes.viewPreview} src={photo} alt={photo} />
      </Dialog>
    </div>
  );
}
