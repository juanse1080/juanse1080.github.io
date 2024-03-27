// Import Material UI components
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// Import local components
import { Social } from "components/atoms";

// Import local const
import text from "const/footer";

// import styles
import { forwardRef, useState } from "react";
import useStyles from "./Footer.styles";

export interface FooterProps {
  language: "espanol";
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ language, ...other }, ref) => {
    const classes = useStyles();

    const content = text[language];

    const [state, setState] = useState({
      subject: "",
      body: "",
    });

    const handleState = (e: any) => {
      const { name, value } = e.target;
      setState((_state) => ({ ..._state, [name]: value }));
    };

    return (
      <div ref={ref} {...other} className={classes.root}>
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
                    {content.title}
                  </Typography>
                  <TextField
                    color="secondary"
                    fullWidth
                    id="subject"
                    label={content.inputs[0]}
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
                    label={content.inputs[1]}
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
                    {content.inputs[2]}
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
                    {content.social}
                  </Typography>
                  <Social
                    hiddenEmail
                    className={classes.social}
                    // mailAction={toPage()}
                    // TODO: add function
                  />
                </div>
                <div className={classes.header}>
                  <Typography
                    className={classes.title}
                    color="inherit"
                    variant="h2"
                  >
                    {content.contact}
                  </Typography>
                  <Typography
                    color="inherit"
                    variant="body1"
                    align="left"
                    paragraph
                  >
                    <Link
                      href="mailto:juanmarcon1080@gmail.com"
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
  }
);

export default Footer;
