import React, { useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

import Visibility from "@material-ui/icons/Visibility";

// Import others libs
import { isMobile } from "react-device-detect";

// import styles
import useStyles from "./styles";

// Import local const
import images from "const/images";

const Portfolio = ({ theme, toPage, ...other }) => {
   const classes = useStyles();

   const [over, setOver] = useState(false);

   const themeProvider = useTheme();
   const xl = useMediaQuery(themeProvider.breakpoints.only("xl"));
   const lg = useMediaQuery(themeProvider.breakpoints.only("lg"));
   const md = useMediaQuery(themeProvider.breakpoints.only("md"));
   const sm = useMediaQuery(themeProvider.breakpoints.only("sm"));
   const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

   const getColumns = () => {
      if (xl) return 5;
      else if (lg) return 3;
      else if (md) return 3;
      else if (sm) return 2;
      else if (xs) return 1;
   };

   const handleOver = key => () => {
      if (key !== over) setOver(key ? key : false);
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
               {images.map(({ key: _key, img: _img, title: _title }) => (
                  <GridListTile
                     key={_key}
                     onMouseEnter={isMobile ? null : handleOver(_key)}
                     onMouseLeave={isMobile ? null : handleOver()}
                     onMouseOver={isMobile ? null : handleOver(_key)}
                  >
                     <img src={_img} alt={_title} />
                     <Slide direction="down" in={isMobile || _key === over}>
                        <GridListTileBar
                           title={_title}
                           titlePosition="top"
                           actionIcon={
                              <IconButton
                                 aria-label={`eye ${_title}`}
                                 className={classes.icon}
                                 onClick={toPage(_key)}
                              >
                                 <Visibility />
                              </IconButton>
                           }
                           actionPosition="left"
                           className={classes.titleBar}
                        />
                     </Slide>
                  </GridListTile>
               ))}
            </GridList>
         </div>
      </>
   );
};

export default Portfolio;
