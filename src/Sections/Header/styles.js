import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   floatRight: {
      flexGrow: 1,
   },
   appBar: props => ({
      position: props.home ? "relative" : "fixed",
      top: 0,
      left: 0,
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.white,
      width: "100%",
      zIndex: theme.zIndex.appBar,
   }),
   buttonScroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
   activeButton: {
      fontWeight: 600,
      color: theme.palette.secondary.dark,
   },
   buttonBar: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      top: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 1200,
   },
   buttonLanguage: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      top: theme.spacing(2),
      left: theme.spacing(2),
      zIndex: 1200,
   },
}));

export default useStyles;
