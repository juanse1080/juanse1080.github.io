import { makeStyles } from "@material-ui/core/styles";

// Import local const

const useStyles = makeStyles((theme) => ({
  root: ({ color }: any) => ({
    backgroundColor: color ?? theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
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
  title: () => ({
    // paddingTop: theme.spacing(1),
    // borderTop: `2px solid ${theme.palette[themes[props.theme].icons].main}`,
    whiteSpace: "nowrap",
    display: "inline-block",
    color: theme.palette.primary.contrastText,
  }),
  subtitle: () => ({
    whiteSpace: "nowrap",
    color: theme.palette.primary.contrastText,
  }),
}));

export default useStyles;
