import React from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// Import local components

// Import local const
import studies from "const/studies";

// import styles
import useStyles from "./styles";

const About = ({ theme, photo, ...other }) => {
   const classes = useStyles({ theme });

   return (
      <Timeline
         classes={{
            root: classes.root,
         }}
      >
         {studies.map((study, index) => (
            <TimelineItem
               key={study.title}
               classes={{
                  missingOppositeContent: classes.missingOppositeContent,
               }}
            >
               <TimelineSeparator>
                  <Tooltip
                     title={study.ended ? "Finalizado" : "Transcurriendo"}
                     placement="left"
                  >
                     <TimelineDot color={study.color} className={classes.dot} />
                  </Tooltip>
                  {index === studies.length - 1 ? null : <TimelineConnector />}
               </TimelineSeparator>
               <TimelineContent>
                  <Typography
                     className={classes.title}
                     color="inherit"
                     variant="subtitle2"
                  >
                     {study.title}
                  </Typography>
                  <Typography paragraph variant="caption">
                     {study.institution} | {study.date}
                  </Typography>
                  <Typography color="inherit" paragraph variant="body1">
                     {study.description}
                  </Typography>
               </TimelineContent>
            </TimelineItem>
         ))}
      </Timeline>
   );
};

export default About;
