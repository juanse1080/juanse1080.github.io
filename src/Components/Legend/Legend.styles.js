import { makeStyles } from "@material-ui/core/styles";

// Import local const
import themes from "const/themes";

const useStyles = makeStyles(theme => ({
   rootItem: {
      minHeight: "auto",
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
