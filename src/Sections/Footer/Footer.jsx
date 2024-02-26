import React from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

// Import local components
import Social from "components/Social";

// Import local const
import text from "const/footer";

// import styles
import useStyles from "./Footer.styles";

const Footer = (
  { hidden, language, toPage, theme, state, handleState, ...other },
  ref
) => {
  const classes = useStyles({ theme });

  return (
    <div {...other} className={classes.root}>
      <div className={classes.paddings}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item lg={6} md={7} sm={12}>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].title}
                </Typography>
                <TextField
                  color="secondary"
                  fullWidth
                  id="subject"
                  label={text[language].inputs[0]}
                  variant="outlined"
                  className="mt-2"
                  size="small"
                  name="subject"
                  defaultValue={state.subject}
                  onBlur={handleState}
                />
                <TextField
                  color="secondary"
                  fullWidth
                  label={text[language].inputs[1]}
                  variant="outlined"
                  multiline
                  minRows={6}
                  size="small"
                  className="mt-3"
                  name="body"
                  defaultValue={state.body}
                  onBlur={handleState}
                />
                <Button
                  variant="contained"
                  className="mt-3"
                  color="secondary"
                  size="large"
                  target="_blank"
                  href={`mailto:juanmarcon1080@gmail.com?Subject=Github%20page:%20${state.subject}&body=${state.body}`}
                  rel="noreferrer"
                >
                  {text[language].inputs[2]}
                </Button>
              </div>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].social}
                </Typography>
                <Social
                  hiddenEmail
                  className={classes.social}
                  mailAction={toPage()}
                />
              </div>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].contact}
                </Typography>
                <Typography
                  color="inherit"
                  variant="body1"
                  align="left"
                  paragraph
                >
                  <Link
                    href={`mailto:juanmarcon1080@gmail.com?Subject=Github%20page:%20${state.subject}&body=${state.body}`}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                  >
                    juanmarcon1080@gmail.com
                  </Link>
                </Typography>
                <Typography color="inherit" variant="body1" align="left">
                  <Link href="tel:3154390477" color="inherit">
                    (+57) 3154390477
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
