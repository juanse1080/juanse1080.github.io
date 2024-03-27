import { useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Slide from "@material-ui/core/Slide";

// Import others libs
import { isMobile } from "react-device-detect";

// import styles
import useStyles from "./Portfolio.styles";

// Import local const
import { faLink } from "@fortawesome/free-solid-svg-icons";
import images from "const/images";

export interface PortfolioProps {
  language: "espanol";
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Portfolio = ({ language, refs }: PortfolioProps) => {
  const classes = useStyles();

  const content = images[language as "espanol"];

  const [over, setOver] = useState<string>();

  const themeProvider = useTheme();
  const xl = useMediaQuery(themeProvider.breakpoints.only("xl"));
  const lg = useMediaQuery(themeProvider.breakpoints.only("lg"));
  const md = useMediaQuery(themeProvider.breakpoints.only("md"));
  const sm = useMediaQuery(themeProvider.breakpoints.only("sm"));
  const xs = useMediaQuery(themeProvider.breakpoints.only("xs"));

  const getColumns = () => {
    if (xl) return 2;
    else if (lg) return 3;
    else if (md) return 2;
    else if (sm) return 1;
    else if (xs) return 1;
  };

  const handleOver = (key?: string) => () => {
    if (key !== over) setOver(key);
  };

  const toProject = (idx: number) => () => {
    if (refs.current[idx])
      refs.current[idx]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div>
      <ImageList gap={0} rowHeight={300} cols={getColumns()}>
        {content.map(({ key: _key, img: _img, title: _title }, idx) => (
          <ImageListItem
            key={_key}
            onMouseEnter={isMobile ? undefined : handleOver(_key)}
            onMouseLeave={isMobile ? undefined : handleOver()}
            onMouseOver={isMobile ? undefined : handleOver(_key)}
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
                    onClick={toProject(idx)}
                  >
                    <FontAwesomeIcon icon={faLink as any} size="xs" />
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
