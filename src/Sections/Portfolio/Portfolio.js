import React from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

import InfoIcon from "@material-ui/icons/Info";

// import styles
import useStyles from "./styles";

// Import local const
import { images } from "const/images";

const Portfolio = ({ theme, ...other }) => {
   const classes = useStyles();

   const themeProvider = useTheme();
   const xl = useMediaQuery(themeProvider.breakpoints.only("xl"));
   const lg = useMediaQuery(themeProvider.breakpoints.only("lg"));
   const md = useMediaQuery(themeProvider.breakpoints.only("md"));
   const sm = useMediaQuery(themeProvider.breakpoints.only("sm"));
   const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

   const getColumns = () => {
      if (xl) return 5;
      else if (lg) return 4;
      else if (md) return 3;
      else if (sm) return 2;
      else if (xs) return 1;
   };

   return (
      <>
         <div className={classes.root}>
            <GridList
               cellHeight={300}
               spacing={0}
               className={classes.gridList}
               cols={getColumns()}
            >
               {images.map(image => (
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
               ))}
            </GridList>
         </div>
      </>
   );
};

export default Portfolio;
