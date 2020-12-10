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
                  <IconButton
                     size="small"
                     style={{ width: 24 }}
                     onClick={changeMedia(index - 1)}
                  >
                     <FontAwesomeIcon icon={faAngleLeft} />
                  </IconButton>
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
                  <IconButton
                     size="small"
                     style={{ width: 24 }}
                     onClick={changeMedia(index + 1)}
                  >
                     <FontAwesomeIcon icon={faAngleRight} />
                  </IconButton>
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
            <MobileStepper
               variant="dots"
               steps={values.length}
               position="static"
               activeStep={index}
               classes={{
                  root: classes.stepperRoot,
               }}
            />
         </Dialog>
         {/* {type === "image" ? (
            <>
               {values.length < 2 ? (
                  <Card className={classes.group}>
                     <CardMedia
                        className={classes.media}
                        image={`${values[0]}`}
                     />
                     <Dialog
                        classes={{
                           root: classes.rootDialog,
                           paperScrollBody: classes.paperScrollBody,
                        }}
                        fullWidth
                        maxWidth="xl"
                        scroll="body"
                        onClose={handleCloseView}
                        open={image}
                     >
                        <img
                           className={classes.viewPreview}
                           src={`${values[index]}`}
                           alt={values[index]}
                        />
                     </Dialog>
                  </Card>
               ) : (
                  <>
                     <Card className={classes.group}>
                        {index === 0 ? null : (
                           <Paper
                              variant="outlined"
                              style={{
                                 display: isMobile ? "flex" : "none",
                                 position: "absolute",
                                 left: 5,
                                 borderRadius: "50%",
                                 zIndex: 1,
                                 bottom: "calc(50% - 13px)",
                              }}
                              className="actions"
                           >
                              <IconButton
                                 size="small"
                                 onClick={changeMedia(index - 1)}
                              >
                                 <ArrowBack fontSize="small" />
                              </IconButton>
                           </Paper>
                        )}
                        <CardMedia
                           className={classes.media}
                           image={`${values[index]}`}
                        />
                     </Card>
                     <MobileStepper
                        classes={{
                           root: classes.stepper,
                           dot: classes.dot,
                           dots: classes.dots,
                        }}
                        variant="progress"
                        steps={values.length + 1}
                        position="static"
                        activeStep={index + 1}
                     />
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
                              variant="outlined"
                              style={{
                                 display: isMobile ? "flex" : "none",
                                 position: "absolute",
                                 left: 5,
                                 borderRadius: "50%",
                                 zIndex: 1,
                                 bottom: "calc(50% - 13px)",
                              }}
                              className="actions"
                           >
                              <IconButton
                                 size="small"
                                 onClick={changeMedia(index - 1)}
                              >
                                 <ArrowBack fontSize="small" />
                              </IconButton>
                           </Paper>
                        )}
                        <img
                           className={classes.viewPreview}
                           src={`${values[index]}`}
                           alt={values[index]}
                        />
                        {index === values.length - 1 ? null : (
                           <Paper
                              variant="outlined"
                              style={{
                                 display: isMobile ? "flex" : "none",
                                 position: "absolute",
                                 right: 5,
                                 borderRadius: "50%",
                                 zIndex: 1,
                                 bottom: "calc(50% - 13px)",
                              }}
                              className="actions"
                           >
                              <IconButton
                                 size="small"
                                 onClick={changeMedia(index + 1)}
                              >
                                 <ArrowForward fontSize="small" />
                              </IconButton>
                           </Paper>
                        )}
                     </Dialog>
                  </>
               )}
            </>
         ) : (
            <div className={classes.group}>
               {index === 0 ? null : (
                  <Paper
                     variant="outlined"
                     style={{
                        display: isMobile ? "flex" : "none",
                        position: "absolute",
                        left: 5,
                        borderRadius: "50%",
                        zIndex: 1,
                        bottom: "calc(50% - 13px)",
                     }}
                     className="actions"
                  >
                     <IconButton size="small" onClick={changeMedia(index - 1)}>
                        <ArrowBack fontSize="small" />
                     </IconButton>
                  </Paper>
               )}
               <ReactPlayer
                  url={`${values[index]}`}
                  className="react-player"
                  controls
                  loop
                  width="100%"
                  height="100%"
               />
               {index === values.length - 1 ? null : (
                  <Paper
                     variant="outlined"
                     style={{
                        display: isMobile ? "flex" : "none",
                        position: "absolute",
                        right: 5,
                        borderRadius: "50%",
                        zIndex: 1,
                        bottom: "calc(50% - 13px)",
                     }}
                     className="actions"
                  >
                     <IconButton size="small" onClick={changeMedia(index + 1)}>
                        <ArrowForward fontSize="small" />
                     </IconButton>
                  </Paper>
               )}
            </div>
         )} */}
      </div>
   );
}
