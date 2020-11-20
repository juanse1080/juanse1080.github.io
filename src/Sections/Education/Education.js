import React from "react";

// Import Material UI components

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Import local components

// Import local const
import studies from "const/studies";

// import styles
import useStyles from "./styles";

const About = ({ theme, photo, ...other }) => {
   const classes = useStyles({ theme });

   return (
      <Timeline>
         {studies.map((study, index) => (
            <TimelineItem
               classes={{
                  missingOppositeContent: classes.missingOppositeContent,
               }}
            >
               <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  {index === studies.length - 1 ? null : <TimelineConnector />}
               </TimelineSeparator>
               <TimelineContent>
                  <Typography className={classes.title}>
                     {study.title}
                  </Typography>
               </TimelineContent>
            </TimelineItem>
         ))}
      </Timeline>
   );
};

export default About;
