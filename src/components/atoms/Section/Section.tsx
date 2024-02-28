// Import Material UI components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import styles
import useStyles from "./Section.styles";

const Section = ({
  id,
  title,
  page,
  leftPart,
  subtitle,
  theme,
  children,
  fullWidth,
  handlePage,
  before,
  after,
  ...other
}: any) => {
  const classes = useStyles({ theme });

  return (
    <div id={id} {...other}>
      <div className={classes.root}>
        {fullWidth ? (
          <>
            <div className={classes.paddingsFull}>
              <Container>
                <Grid container spacing={3} justifyContent="flex-start">
                  <Grid item lg={3} md={3} sm={4} xs={12}>
                    <div className={classes.header}>
                      <Typography
                        className={classes.title}
                        color="inherit"
                        variant="h2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        className={classes.subtitle}
                        color="inherit"
                        variant="subtitle1"
                      >
                        {subtitle}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            {children}
          </>
        ) : (
          <div className={classes.paddings}>
            <Container>
              <Grid container spacing={3} justifyContent="center">
                <Grid item lg={3} md={3} sm={4} xs={12}>
                  <div className={classes.header}>
                    <Typography
                      className={classes.title}
                      color="inherit"
                      variant="h2"
                    >
                      {title}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      color="inherit"
                      variant="subtitle1"
                    >
                      {subtitle}
                    </Typography>
                  </div>
                  {leftPart}
                </Grid>
                <Grid item lg={9} md={9} sm={8} xs={12}>
                  <div className={classes.content}>{children}</div>
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
