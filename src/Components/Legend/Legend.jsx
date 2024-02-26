import React from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

// Import local const
import legends from "const/legends";

// import styles
import useStyles from "./Legend.styles";

export default function Legend({ theme, language, ...others }) {
  const classes = useStyles({ theme });
  return (
    <div {...others}>
      <Timeline>
        {legends[language].map(({ name, color }) => (
          <TimelineItem
            key={name}
            classes={{
              root: classes.rootItem,
              missingOppositeContent: classes.missingOppositeContent,
            }}
          >
            <TimelineDot color={color} />
            <TimelineContent>
              <Typography
                className={classes.title}
                color="inherit"
                variant="subtitle2"
              >
                {name}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
