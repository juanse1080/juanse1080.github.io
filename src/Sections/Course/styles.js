import { makeStyles } from "@material-ui/core/styles";

// Import local const
import themes from "const/themes";

const useStyles = makeStyles(theme => ({
   root: {
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(1),
      },
   },
   certify: {
      display: "flex",
      alignContent: "center",
      paddingBottom: theme.spacing(1),
   },
   buttonDownload: {
      marginLeft: theme.spacing(1),
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
