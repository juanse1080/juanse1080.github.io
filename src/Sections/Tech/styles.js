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
      transition: "all 0.4s ease-in-out",
      transform: "translateY(-1px)",
      filter: "drop-shadow(0px 1px 0px rgba(0,0,0,0.6))",
      "&:hover": {
         transform: "translateY(-9px)",
         filter: "drop-shadow(0px 9px 0px rgba(0,0,0,0.6))",
      },
   },
   title: {
      marginBottom: theme.spacing(2),
   },
}));

export default useStyles;
