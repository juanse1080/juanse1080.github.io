import React from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

// Import local const
import experience from "const/experience";

// import styles
import useStyles from "./styles";

const Experience = ({ theme, photo, ...other }) => {
   const classes = useStyles({ theme });

   return (
      <>
         <Timeline
            classes={{
               root: classes.root,
            }}
         >
            {experience.map((experience, index, _array) => (
               <TimelineItem
                  key={experience.title}
                  classes={{
                     missingOppositeContent: classes.missingOppositeContent,
                  }}
               >
                  <TimelineSeparator>
                     <TimelineDot
                        color={experience.ended ? "secondary" : "grey"}
                        className={classes.dot}
                     />
                     {index === _array.length - 1 ? null : (
                        <TimelineConnector />
                     )}
                  </TimelineSeparator>
                  <TimelineContent>
                     <Typography
                        className={classes.title}
                        align="justify"
                        color="inherit"
                        variant="subtitle2"
                     >
                        {experience.title}
                     </Typography>
                     <Typography
                        align="justify"
                        color="inherit"
                        paragraph
                        variant="caption"
                     >
                        {experience.institution}
                        {experience.date ? ` | ${experience.date}` : null}
                     </Typography>
                     {experience.description.map((description, key) => (
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
                     <div className="mb-3">
                        {experience.techs.map(item => (
                           <Chip
                              key={item}
                              label={item}
                              color="secondary"
                              className="m-1"
                           />
                        ))}
                     </div>
                  </TimelineContent>
               </TimelineItem>
            ))}
         </Timeline>
      </>
   );
};

export default Experience;
