import { makeStyles } from "@material-ui/core/styles";

// Import local const
import themes from "const/themes";

const useStyles = makeStyles(theme => ({
   root: {
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(1),
      },
   },
   buttonDownload: {
      fontSize: theme.spacing(2),
      cursor: "pointer",
   },
   button: {
      fontSize: theme.spacing(2),
   },
   link: {
      textDecoration: "none",
      color: "inherit",
      height: 16,
      width: 16,
   },
   title: props => ({
      color: theme.palette[themes[props.theme].theme].title,
      paddingBottom: theme.spacing(1),
   }),
   missingOppositeContent: {
      "&::before": {
         flex: "none",
         content: "none",
      },
   },
}));

export default useStyles;
