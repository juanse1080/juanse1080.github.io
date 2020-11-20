import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   paddings: {
      padding: theme.spacing(0, 4, 3, 4),
      [theme.breakpoints.only("sm")]: {
         padding: theme.spacing(0, 3, 3, 3),
      },
      [theme.breakpoints.only("xs")]: {
         padding: theme.spacing(0, 2.5, 3, 2.5),
      },
   },
   titleBar: {
      background:
         "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
         "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
   },
   icon: {
      color: "white",
   },
}));

export default useStyles;
