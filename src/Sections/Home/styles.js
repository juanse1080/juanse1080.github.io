import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   root: {
      height: theme.shape.viewHeight,
      position: "relative",
   },
   header: {
      display: "flex",
      justifyContent: "center",
   },
   container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      // zIndex: 1,
   },
   content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 128px)",
      // zIndex: 1,
   },
   scrollIcon: {
      position: "absolute",
      bottom: 20,
      left: "calc(50% - 20px)",
      // zIndex: 1,
   },
   particlesBackground: {
      position: "absolute",
      background: "transparent",
      zIndex: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
   },
   contentBox: {
      // backgroundColor: "rgba(0,0,0, 0.1)",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      color: theme.palette.black,
      // zIndex: 1,
   },
}));

export default useStyles;
