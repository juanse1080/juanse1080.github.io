import { useState } from "react";

import { Card, CardMedia, Dialog, Paper } from "@material-ui/core";

// Import Font Awesome Icons components
import {
  faAngleLeft,
  faAngleRight,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import clsx from "clsx";

import ReactPlayer from "react-player";

// Import custom hooks
import useBoolean from "hooks/useBoolean";

// import styles
import useStyles from "./Media.styles";

export default function Media({ type, values, ...others }: any) {
  const classes = useStyles();
  const [index, setIndex] = useState<number>(0);
  const [open, onOpen, onClose] = useBoolean();

  const changeMedia = (index: number) => () => {
    setIndex(index);
  };

  return (
    <div {...others}>
      {values[0].type === "image" ? (
        <Card className={classes.group} onClick={onOpen}>
          <FontAwesomeIcon icon={faExpand as any} className={classes.icon} />
          <div className={clsx(classes.backgroundDark, "background")} />
          <CardMedia className={classes.media} image={`${values[0].url}`} />
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
        onClose={onClose}
        open={open}
        PaperProps={{
          elevation: 0,
          style: { backgroundColor: "transparent" },
        }}
      >
        {index === 0 ? null : (
          <Paper
            variant="outlined"
            className={classes.setMedia}
            style={{
              left: 10,
            }}
          >
            <FontAwesomeIcon
              onClick={changeMedia(index - 1)}
              className={classes.setMediaIcon}
              icon={faAngleLeft as any}
            />
          </Paper>
        )}
        {values[index].type === "image" ? (
          <div className={classes.fatherPreview}>
            <img
              className={classes.viewPreview}
              src={values[index].url}
              alt={values[index].url}
            />
          </div>
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
            variant="outlined"
            className={classes.setMedia}
            style={{
              right: 10,
            }}
          >
            <FontAwesomeIcon
              className={classes.setMediaIcon}
              onClick={changeMedia(index + 1)}
              icon={faAngleRight as any}
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
