import {
   Card,
   CardMedia,
   Chip,
   Dialog,
   Icon,
   IconButton,
   MobileStepper,
   Paper,
} from "@material-ui/core";

// Import Font Awesome Icons components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faClone,
   faAngleLeft,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import ReactPlayer from "react-player";
// import styles
import useStyles from "./styles";

export default function Media({ type, values, ...others }) {
   const classes = useStyles();
   const [index, setIndex] = useState(0);
   const [image, setImage] = useState(false);

   const changeMedia = index => () => {
      setIndex(index);
   };

   const handleCloseView = () => {
      setImage(false);
   };
   const handleShowView = () => {
      setImage(true);
   };

   return (
      <div {...others}>
         {values[0].type === "image" ? (
            <Card className={classes.group} onClick={handleShowView}>
               <FontAwesomeIcon icon={faClone} className={classes.icon} />
               <div className={clsx(classes.backgroundDark, "background")} />
               <CardMedia
                  className={classes.media}
                  image={`${values[0].url}`}
               />
            </Card>
         ) : (
            <ReactPlayer
               url={`${values[0].url}`}
               className="react-player"
               controls
               loop
               width="100%"
               height="100%"
            />
         )}
         <Dialog
            classes={{
               root: classes.rootDialog,
               paperScrollBody: classes.paperScrollBody,
            }}
            fullWidth
            maxWidth="lg"
            scroll="body"
            onClose={handleCloseView}
            open={image}
         >
            {index === 0 ? null : (
               <Paper
                  elevation={3}
                  className={classes.setMedia}
                  style={{
                     left: 10,
                  }}
               >
                  <FontAwesomeIcon
                     onClick={changeMedia(index - 1)}
                     className={classes.setMediaIcon}
                     icon={faAngleLeft}
                  />
               </Paper>
            )}
            {values[index].type === "image" ? (
               <img
                  className={classes.viewPreview}
                  src={values[index].url}
                  alt={values[index].url}
               />
            ) : (
               <ReactPlayer
                  url={values[index].url}
                  className="react-player"
                  controls
                  loop
                  width="100%"
                  height="100%"
               />
            )}
            {index === values.length - 1 ? null : (
               <Paper
                  elevation={3}
                  className={classes.setMedia}
                  style={{
                     right: 10,
                  }}
               >
                  <FontAwesomeIcon
                     className={classes.setMediaIcon}
                     onClick={changeMedia(index + 1)}
                     icon={faAngleRight}
                  />
               </Paper>
            )}
            <Paper
               square
               elevation={0}
               className={clsx(classes.stepperRoot, classes.positionBottom)}
            >
               <div className={classes.dots}>
                  {[...new Array(values.length)].map((_, key) => (
                     <div
                        key={key}
                        onClick={changeMedia(key)}
                        className={clsx(classes.dot, {
                           [classes.dotActive]: key === index,
                        })}
                     />
                  ))}
               </div>
            </Paper>
         </Dialog>
      </div>
   );
}
