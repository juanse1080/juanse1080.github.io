import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paddings: {
    padding: theme.spacing(8),
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2.5, 1, 1, 1),
    },
  },
  content: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0),
    },
  },
  header: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(1.5, 0),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1, 0),
    },
  },
  title: (props) => ({
    // paddingTop: theme.spacing(1),
    // borderTop: `2px solid ${theme.palette[themes[props.theme].icons].main}`,
    display: "inline-block",
    // color: theme.palette[themes[props.theme].theme].title,
  }),
  subtitle: (props) => ({
    // color: theme.palette[themes[props.theme].theme].subtitle,
  }),
  media: {
    height: 0,
    width: "100%",
    display: "block",
    paddingTop: "56.25%",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
  },
}));

export default useStyles;
