// Import Material UI components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Import local const
import tools from "const/tools";

// import styles
import useStyles from "./Tech.styles";

const Tech = ({ theme, page, ...other }: any) => {
  const classes = useStyles({ theme });

  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        {tools.map(({ name, icon, props, ...others }, index) => (
          <Grid key={name} item lg={3} md={4} sm={5} xs={6}>
            <a {...others} className={classes.contentIcon}>
              <img {...props} className={classes.icon} src={icon} alt={name} />
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tech;
