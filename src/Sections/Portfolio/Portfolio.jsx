import React, { useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import others libs
import { isMobile } from "react-device-detect";

// import styles
import useStyles from "./Portfolio.styles";

// Import local const
import images from "const/images";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ theme, toPage, language, ...other }) => {
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

  const handleOver = (key) => () => {
    if (key !== over) setOver(key || false);
  };

  return (
    <div className={classes.root}>
      <ImageList
        gap={0}
        rowHeight={300}
        className={classes.gridList}
        cols={getColumns()}
      >
        {images[language].map(({ key: _key, img: _img, title: _title }) => (
          <ImageListItem
            key={_key}
            onMouseEnter={isMobile ? null : handleOver(_key)}
            onMouseLeave={isMobile ? null : handleOver()}
            onMouseOver={isMobile ? null : handleOver(_key)}
          >
            <img src={_img} alt={_title} />
            <Slide direction="down" in={isMobile || _key === over}>
              <ImageListItemBar
                title={_title}
                position="top"
                actionIcon={
                  <IconButton
                    aria-label={`eye ${_title}`}
                    className={classes.icon}
                    onClick={toPage(_key)}
                  >
                    <FontAwesomeIcon icon={faLink} size="xs" />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </Slide>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Portfolio;
