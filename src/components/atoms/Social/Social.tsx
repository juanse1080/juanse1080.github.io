import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

// import styles
import useStyles from "./Social.styles";

export default function Social({
  theme,
  hiddenEmail,
  mailAction,
  ...others
}: any) {
  const classes = useStyles();

  return (
    <div {...others}>
      <a
        href="https://www.linkedin.com/in/juanmarcon/"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <LinkedInIcon fontSize="inherit" className={classes.icon} />
      </a>
      <a
        href="https://github.com/juanse1080"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <GitHubIcon
          fontSize="inherit"
          className={classes.icon}
          style={{
            transform: "scale(0.81)",
          }}
        />
      </a>
      {!hiddenEmail && (
        <span onClick={mailAction}>
          <MailIcon fontSize="inherit" className={classes.icon} />
        </span>
      )}
    </div>
  );
}
