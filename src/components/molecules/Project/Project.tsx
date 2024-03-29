// Import Material UI components
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import {
  faBuilding,
  faCalendarAlt,
  faMapMarkerAlt,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import local components
import { Media } from "components/atoms";

// Import local const

// import styles
import images from "const/images";
import useStyles from "./Project.styles";

export interface ProjectProps {
  id: string;
  language: "espanol";
  page: string;
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Project = ({ id, language, page, refs, ...other }: ProjectProps) => {
  const classes = useStyles();

  const content = images[language as "espanol"];

  return (
    <div id={id} {...other} className={classes.paddings}>
      {content.map(
        (
          {
            key,
            img,
            title,
            date,
            location,
            entity,
            role,
            description = [],
            techs = [],
            media = null,
          },
          index
        ) => (
          <Container
            id={key}
            key={key}
            ref={(element) => refs.current.push(element)}
          >
            <div className={classes.content}>
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
                  </div>
                </Grid>
              </Grid>
              <Hidden mdUp>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    {media ? (
                      <Media type="image" values={media} />
                    ) : (
                      <div
                        className={classes.media}
                        style={{
                          backgroundImage: `url('${img}')`,
                        }}
                      />
                    )}
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6}>
                      <Grid container>
                        {role ? (
                          <Grid item xs={12} sm={12}>
                            <Typography
                              noWrap
                              color="inherit"
                              align="justify"
                              paragraph
                              variant="caption"
                            >
                              <FontAwesomeIcon
                                icon={faUserTag as any}
                                className="mr-2"
                              />
                              {role}
                            </Typography>
                          </Grid>
                        ) : null}
                        {date ? (
                          <Grid item xs={12} sm={12}>
                            <Typography
                              noWrap
                              color="inherit"
                              align="justify"
                              paragraph
                              variant="caption"
                            >
                              <FontAwesomeIcon
                                icon={faCalendarAlt as any}
                                className="mr-2"
                              />
                              {date}
                            </Typography>
                          </Grid>
                        ) : null}
                        {entity ? (
                          <Grid item xs={12} sm={12}>
                            <Typography
                              noWrap
                              color="inherit"
                              align="justify"
                              paragraph
                              variant="caption"
                            >
                              <FontAwesomeIcon
                                icon={faBuilding as any}
                                className="mr-2"
                              />
                              {entity}
                            </Typography>
                          </Grid>
                        ) : null}
                        {location ? (
                          <Grid item xs={12} sm={12}>
                            <Typography
                              noWrap
                              color="inherit"
                              align="justify"
                              paragraph
                              variant="caption"
                            >
                              <FontAwesomeIcon
                                icon={faMapMarkerAlt as any}
                                className="mr-2"
                              />
                              {location}
                            </Typography>
                          </Grid>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Hidden>
                </Grid>
              </Hidden>
              <Grid
                container
                spacing={5}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                justifyContent="center"
              >
                <Grid item lg={7} md={6}>
                  <Hidden smDown>
                    <Grid container justifyContent="space-between">
                      {role ? (
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography
                            noWrap
                            color="inherit"
                            align="justify"
                            paragraph
                            variant="caption"
                          >
                            <FontAwesomeIcon
                              icon={faUserTag as any}
                              className="mr-2"
                            />
                            {role}
                          </Typography>
                        </Grid>
                      ) : null}
                      {date ? (
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography
                            noWrap
                            color="inherit"
                            align="justify"
                            paragraph
                            variant="caption"
                          >
                            <FontAwesomeIcon
                              icon={faCalendarAlt as any}
                              className="mr-2"
                            />
                            {date}
                          </Typography>
                        </Grid>
                      ) : null}
                      {entity ? (
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography
                            noWrap
                            color="inherit"
                            align="justify"
                            paragraph
                            variant="caption"
                          >
                            <FontAwesomeIcon
                              icon={faBuilding as any}
                              className="mr-2"
                            />
                            {entity}
                          </Typography>
                        </Grid>
                      ) : null}
                      {location ? (
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography
                            noWrap
                            color="inherit"
                            align="justify"
                            paragraph
                            variant="caption"
                          >
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt as any}
                              className="mr-2"
                            />
                            {location}
                          </Typography>
                        </Grid>
                      ) : null}
                    </Grid>
                  </Hidden>
                  {description.map((item) => (
                    <Typography
                      key={item}
                      color="inherit"
                      align="justify"
                      paragraph
                      variant="caption"
                    >
                      {item}
                    </Typography>
                  ))}
                  {techs.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      variant="outlined"
                      color="secondary"
                      className="m-1"
                    />
                  ))}
                </Grid>
                <Hidden smDown>
                  <Grid item lg={5} md={6}>
                    {media ? (
                      <Media type="image" values={media} />
                    ) : (
                      <div
                        className={classes.media}
                        style={{
                          backgroundImage: `url('${img}')`,
                        }}
                      />
                    )}
                  </Grid>
                </Hidden>
              </Grid>
            </div>
          </Container>
        )
      )}
    </div>
  );
};

export default Project;
