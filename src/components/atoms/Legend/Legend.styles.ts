import { makeStyles } from "@material-ui/core/styles";

// Import local const

const useStyles = makeStyles((theme) => ({
  rootItem: {
    minHeight: "auto",
  },
  title: () => ({
    color: theme.palette.text.primary,
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
