import { makeStyles } from "@material-ui/core/styles";

// Import local const

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1),
    },
  },
  title: () => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.primary.contrastText,
    paddingBottom: theme.spacing(1),
  }),
  bold: {
    fontWeight: 800,
  },
  italic: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  missingOppositeContent: {
    "&::before": {
      flex: "none",
      content: "none",
    },
  },
}));

export default useStyles;
