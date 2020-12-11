import { makeStyles } from "@material-ui/core/styles";

// Import local const
import themes from "const/themes";

const useStyles = makeStyles(theme => ({
   root: props => ({
      backgroundColor: theme.palette[themes[props.theme].theme].dark,
      color: theme.palette[themes[props.theme].theme].contrastText,
   }),
   paddings: {
      padding: theme.spacing(8),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(5),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(2.5, 1, 2.5, 1),
      },
   },
   paddingsFull: {
      padding: theme.spacing(8, 8, 3, 8),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(5, 5, 3, 5),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(2.5, 1, 1, 1),
      },
   },
   header: {
      margin: theme.spacing(2),
      [theme.breakpoints.only("sm")]: {
         margin: theme.spacing(1.5),
      },
      [theme.breakpoints.only("xs")]: {
         margin: theme.spacing(1),
      },
   },
   content: {
      padding: theme.spacing(3),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(1),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(0),
      },
   },
   title: props => ({
      // paddingTop: theme.spacing(1),
      // borderTop: `2px solid ${theme.palette[themes[props.theme].icons].main}`,
      display: "inline-block",
      color: theme.palette[themes[props.theme].theme].contrastText,
   }),
   subtitle: props => ({
      color: theme.palette[themes[props.theme].theme].contrastText,
   }),
}));

export default useStyles;
