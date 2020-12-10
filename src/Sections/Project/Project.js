import React from "react";

// Import Material UI components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCalendarAlt,
   faMapMarkerAlt,
   faBuilding,
   faUserTag,
} from "@fortawesome/free-solid-svg-icons";

// Import local components
import Media from "Components/Media";

// Import local const
import images from "const/images";

// import styles
import useStyles from "./styles";

const Project = ({ id, page, scrollTo, ...other }) => {
   const classes = useStyles();

   return (
      <div id={id} {...other}>
         {images.map(
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
               <div id={key} key={key} className={classes.paddings}>
                  <Container>
                     <div className={classes.content}>
                        <Grid container spacing={3} justify="flex-start">
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
                                                   icon={faUserTag}
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
                                                   icon={faCalendarAlt}
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
                                                   icon={faBuilding}
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
                                                   icon={faMapMarkerAlt}
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
                           justify="center"
                        >
                           <Grid item lg={7} md={6}>
                              <Hidden smDown>
                                 <Grid container justify="space-between">
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
                                                icon={faUserTag}
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
                                                icon={faCalendarAlt}
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
                                                icon={faBuilding}
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
                                                icon={faMapMarkerAlt}
                                                className="mr-2"
                                             />
                                             {location}
                                          </Typography>
                                       </Grid>
                                    ) : null}
                                 </Grid>
                              </Hidden>
                              {description.map(item => (
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
                              <ul className="pl-4">
                                 {techs.map(item => (
                                    <li key={item}>
                                       <Typography
                                          color="inherit"
                                          align="justify"
                                          variant="caption"
                                       >
                                          {item}
                                       </Typography>
                                    </li>
                                 ))}
                              </ul>
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
               </div>
            )
         )}
      </div>
   );
};

export default Project;
