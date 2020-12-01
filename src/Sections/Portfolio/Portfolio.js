import React, { useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

import Visibility from "@material-ui/icons/Visibility";

// Import others libs
import { isMobile } from "react-device-detect";

// import styles
import useStyles from "./styles";

// Import local const
import images from "const/images";

const Portfolio = ({ theme, ...other }) => {
   const classes = useStyles();

   const [over, setOver] = useState(false);
   const [open, setOpen] = useState(false);

   const handleCloseView = () => {
      setOpen(false);
   };

   const handleShowView = key => () => {
      console.log(key);
      if (key !== open) setOpen(key || false);
   };

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
                                 onClick={handleShowView(_key)}
                              >
                                 <Visibility />
                              </IconButton>
                           }
                           actionPosition="left"
                           className={classes.titleBar}
                        />
                     </Slide>
                     {/* <Slide direction="up" in={isMobile || _key === over}>
                        <GridListTileBar
                           title={""}
                           titlePosition="bottom"
                           actionIcon={
                              <IconButton
                                 aria-label={`eye ${_title}`}
                                 className={classes.icon}
                                 onClick={handleShowView(_key)}
                              >
                                 <Visibility />
                              </IconButton>
                           }
                           actionPosition="left"
                           className={classes.titleFooter}
                        />
                     </Slide> */}
                     <Dialog
                        classes={{
                           root: classes.rootDialog,
                           paperScrollBody: classes.paperScrollBody,
                        }}
                        scroll="body"
                        onClose={handleCloseView}
                        aria-labelledby="Image"
                        open={open === _key}
                        // TransitionComponent={Transition}
                     >
                        <img
                           className={classes.viewPreview}
                           src={_img}
                           alt={_title}
                        />
                     </Dialog>
                  </GridListTile>
               ))}
            </GridList>
         </div>
      </>
   );
};

export default Portfolio;
