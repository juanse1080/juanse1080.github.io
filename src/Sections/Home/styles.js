import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   root: {
      height: theme.shape.viewHeight,
      position: "relative",
   },
   sectionIcons: {
      display: "flex",
      fontSize: theme.spacing(4),
      paddingTop: theme.spacing(3),
   },
   socialIcons: {
      display: "flex",
      fontSize: theme.spacing(4),
      paddingTop: theme.spacing(3),
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(3),
   },
   link: {
      textDecoration: "none",
      color: "inherit",
      // height: 16,
      // width: 16,
   },
   icon: {
      cursor: "pointer",
      zIndex: 1,
      marginRight: theme.spacing(1),
   },
   container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
   },
   paddings: {
      height: "100%",
      padding: theme.spacing(0, 4),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(0, 3),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(0, 1),
      },
   },
   content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 128px)",
   },
   scrollIcon: {
      position: "absolute",
      bottom: 20,
      left: "calc(50% - 20px)",
   },
   particlesBackground: {
      position: "absolute",
      background: "transparent",
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
   },
   contentBox: {
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      color: theme.palette.black,
      padding: theme.spacing(3, 3, 7, 3),
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(1),
      },
   },
}));

export default useStyles;
