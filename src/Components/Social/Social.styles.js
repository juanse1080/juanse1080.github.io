import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({   
   link: {
      textDecoration: "none",
      color: "inherit",
   },
   icon: {
      cursor: "pointer",
      zIndex: 1,
      marginRight: theme.spacing(1),
   },
}));

export default useStyles;
