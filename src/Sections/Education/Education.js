import React, { useState } from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

// Import others libs
import { isMobile } from "react-device-detect";
import Legend from "Components/Legend";

// Import local const
import studies from "const/studies";

// import styles
import useStyles from "./styles";

const About = ({ theme, photo, ...other }) => {
   const classes = useStyles({ theme });

   const [tooltip, setTooltip] = useState(false);

   const handleTooltip = (newState = false) => () => {
      if (newState !== tooltip) setTooltip(newState);
   };

   return (
      <>
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
                     <TimelineDot
                        color={study.ended ? "secondary" : "grey"}
                        className={classes.dot}
                     />
                     {index === studies.length - 1 ? null : (
                        <TimelineConnector />
                     )}
                  </TimelineSeparator>
                  <TimelineContent
                     onMouseOver={handleTooltip(index)}
                     onMouseOut={handleTooltip(false)}
                  >
                     <Typography
                        className={classes.title}
                        color="inherit"
                        variant="subtitle2"
                     >
                        {study.title}
                     </Typography>
                     <Typography color="inherit" paragraph variant="caption">
                        {study.institution}
                        {study.date ? ` | ${study.date}` : null}
                     </Typography>
                     {study.description.map((description, key) => (
                        <Typography
                           key={key}
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
      </>
   );
};

export default About;
