import { makeStyles } from "@material-ui/core/styles";

// Import local const

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: "relative",
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
  header: {
    margin: theme.spacing(2),
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(1.5),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1),
    },
  },
  title: (props) => ({
    paddingBottom: theme.spacing(1),
    display: "inline-block",
    color: theme.palette.primary.contrastText,
  }),
  subtitle: (props) => ({
    color: theme.palette.primary.contrastText,
  }),
  social: {
    display: "flex",
    fontSize: theme.spacing(4),
    paddingTop: theme.spacing(1),
  },
  buttonScroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(3, 3, 7, 3),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1),
    },
  },
  bottom: {
    width: "100%",
    height: `calc(${theme.spacing(4)} + 40px)`,
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

export default useStyles;
