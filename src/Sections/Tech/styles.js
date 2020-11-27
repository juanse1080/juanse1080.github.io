import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   contentIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      fontWeight: 1000,
   },
   title: {
      marginBottom: theme.spacing(2),
   },
}));

export default useStyles;
