// Import Material UI components

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import GetAppIcon from "@material-ui/icons/GetApp";

// Import local components
import { Image } from "components/atoms";

// import styles
import useStyles from "./About.styles";

// Import local const
import text from "const/about";

const About = ({ language, photo }: any) => {
  const classes = useStyles();

  const content = text[language as "espanol"];

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Hidden mdUp>
        <Grid item lg={2} md={3} sm={5} xs={6}>
          <Image photo={photo} />
        </Grid>
      </Hidden>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <div className={classes.content}>
          {content.content.map((paragraph, index) => (
            <Typography
              key={index}
              color="inherit"
              align="justify"
              paragraph
              variant="body1"
            >
              {paragraph}
            </Typography>
          ))}
          <Typography
            variant="subtitle2"
            color="inherit"
            paragraph
            align="left"
            className={classes.subtitle}
          >
            {content.contact}
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
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
            </Grid>
            <Grid item>
              <Button
                href={content.cv}
                download="JuanMarcon.pdf"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<GetAppIcon />}
              >
                {content.buttons[0]}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item lg={2} md={3} sm={5} xs={6}>
          <Image photo={photo} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default About;
