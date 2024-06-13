import { useState } from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";

// Import local const
import studies from "const/studies";

// import styles
import useStyles from "./Education.styles";

const Education = ({ language }: any) => {
  const classes = useStyles();

  const content = studies[language as "espanol"];

  const [tooltip, setTooltip] = useState<number>();

  const handleTooltip = (newState?: number) => () => {
    if (newState !== tooltip) setTooltip(newState);
  };

  return (
    <Timeline
      classes={{
        root: classes.root,
      }}
    >
      {content.map((study, index) => (
        <TimelineItem
          key={study.title}
          classes={{
            missingOppositeContent: classes.missingOppositeContent,
          }}
        >
          <TimelineSeparator>
            <TimelineDot color={study.ended ? "secondary" : "grey"} />
            {index === content.length - 1 ? null : <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            onMouseOver={handleTooltip(index)}
            onMouseOut={handleTooltip(undefined)}
          >
            <Typography
              className={classes.title}
              align="justify"
              color="inherit"
              variant="subtitle2"
            >
              <span className={classes.bold}>{study.title}</span>
              <span className={classes.italic}>{study.date}</span>
            </Typography>
            <Typography
              align="justify"
              color="inherit"
              paragraph
              variant="caption"
            >
              <span className={classes.bold}>{study.institution}</span>
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

export default Education;
