import React, { useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import InfoIcon from "@material-ui/icons/Info";

// import styles
import useStyles from "./styles";

// Import local const
import { images, images_kinds } from "const/images";

const Portfolio = ({ theme, ...other }) => {
   const classes = useStyles();

   const themeProvider = useTheme();
   const xl = useMediaQuery(themeProvider.breakpoints.only("xl"));
   const lg = useMediaQuery(themeProvider.breakpoints.only("lg"));
   const md = useMediaQuery(themeProvider.breakpoints.only("md"));
   const sm = useMediaQuery(themeProvider.breakpoints.only("sm"));
   const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

   const [kind, setKind] = useState(0);

   const getColumns = () => {
      if (xl) return 5;
      else if (lg) return 4;
      else if (md) return 3;
      else if (sm) return 2;
      else if (xs) return 1;
   };

   const handleKind = newKind => () => {
      setKind(newKind);
   };

   return (
      <>
         <div className={classes.paddings}>
            <Container>
               <Grid container spacing={1} justify="flex-end">
                  {Object.keys(images_kinds).map(kindStr => {
                     const kindId = parseInt(kindStr, 10);
                     return (
                        <Grid key={kindId} item>
                           <Button
                              variant="contained"
                              color={kindId === kind ? "secondary" : "default"}
                              onClick={
                                 kindId === kind ? null : handleKind(kindId)
                              }
                           >
                              {images_kinds[kindId]}
                           </Button>
                        </Grid>
                     );
                  })}
               </Grid>
            </Container>
         </div>
         <div className={classes.root}>
            <GridList
               cellHeight={300}
               spacing={0}
               className={classes.gridList}
               cols={getColumns()}
            >
               {images.map(image => (
                  <Grow
                     key={image.img}
                     in={image.kind.includes(kind)}
                     appear={image.kind.includes(kind)}
                     unmountOnExit
                     // timeout={{
                     //    enter: image.timeout,
                     //    exit: image.timeout - 200,
                     // }}
                  >
                     <GridListTile>
                        <img src={image.img} alt={image.title} />
                        <GridListTileBar
                           title={image.title}
                           titlePosition="top"
                           actionIcon={
                              <IconButton
                                 aria-label={`star ${image.title}`}
                                 className={classes.icon}
                              >
                                 <InfoIcon />
                              </IconButton>
                           }
                           actionPosition="left"
                           className={classes.titleBar}
                        />
                     </GridListTile>
                  </Grow>
               ))}
            </GridList>
         </div>
      </>
   );
};

export default Portfolio;
