import React, { useState } from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";


// Import local const
import courses from "const/courses";

// import styles
import useStyles from "./styles";

const Course = ({ theme, photo, language, ...other }) => {
  const classes = useStyles({ theme });

  const [tooltip, setTooltip] = useState(false);

  const handleTooltip = (newState = false) => () => {
    if (newState !== tooltip) setTooltip(newState);
  };

  return (
    <Timeline
      classes={{
        root: classes.root,
      }}
    >
      {courses[language].map((study, index, _array) => (
        <TimelineItem
          key={study.title}
          classes={{
            missingOppositeContent: classes.missingOppositeContent,
          }}
        >
          <TimelineSeparator>
            <TimelineDot
              color={study.ended ? "secondary" : "grey"}
              className={classes.dot}
              component="a"
            >
              {study.ended ? (
                <Tooltip title="Descargue el certificado" placement="left">
                  <a
                    download="certify.pdf"
                    href={study.certify}
                    className={classes.link}
                  >
                    <GetAppIcon
                      color="inherit"
                      className={classes.buttonDownload}
                      fontSize="small"
                    />
                  </a>
                </Tooltip>
              ) : (
                <div className={classes.link} />
              )}
            </TimelineDot>
            {index === _array.length - 1 ? null : <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            onMouseOver={handleTooltip(index)}
            onMouseOut={handleTooltip(false)}
          >
            <Typography
              className={classes.title}
              align="justify"
              color="inherit"
              variant="subtitle2"
            >
              {study.title}
            </Typography>
            <Typography
              align="justify"
              color="inherit"
              variant="caption"
              paragraph
            >
              {study.institution}
              {study.date ? ` | ${study.date}` : null}
            </Typography>
            {study.description.map((description, key) => (
              <Typography
                key={key}
                align="justify"
                color="inherit"
                paragraph
                variant="body1"
              >
                {description}
              </Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Course;
