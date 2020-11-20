import { makeStyles } from "@material-ui/core/styles";

// Import local const
import themes from "const/themes";

const useStyles = makeStyles(theme => ({
   avatar: {},
   title: props => ({
      color: theme.palette[themes[props.theme].theme].title,
   }),
   missingOppositeContent: {
      "&::before": {
         flex: "none",
         content: "none",
      },
   },
}));

export default useStyles;
