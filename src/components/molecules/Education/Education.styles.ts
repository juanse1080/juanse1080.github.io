import { makeStyles } from "@material-ui/core/styles";

// Import local const

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1),
    },
  },
  title: () => ({
    color: theme.palette.primary.contrastText,
    paddingBottom: theme.spacing(1),
  }),
  missingOppositeContent: {
    "&::before": {
      flex: "none",
      content: "none",
    },
  },
}));

export default useStyles;
