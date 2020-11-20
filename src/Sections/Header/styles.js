import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   floatRight: {
      flexGrow: 1,
   },
   appBar: {
      color: theme.palette.black,
      backgroundColor: theme.palette.white,
      width: "100%",
   },
   buttonScroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
   activeButton: {
      fontWeight: 600,
   },
}));

export default useStyles;
