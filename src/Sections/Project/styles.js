import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   contentIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      fontWeight: 1000,
      cursor: "default",
   },
   icon: {
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      transform: "translateY(-3px)",
      filter: "drop-shadow(0px 3px 0px rgba(0,0,0,0.6))",
      "&:hover": {
         transform: "translateY(-11px)",
         filter: "drop-shadow(0px 11px 0px rgba(0,0,0,0.6))",
      },
   },
   title: {
      marginBottom: theme.spacing(2),
   },
}));

export default useStyles;
