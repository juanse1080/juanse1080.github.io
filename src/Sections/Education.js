import React from "react";

// Import Material UI components
import { makeStyles } from "@material-ui/core/styles";
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

const themes = {
   dark: {
      theme: "primary",
      icons: "secondary",
   },
   light: {
      theme: "tertiary",
      icons: "primary",
   },
};
const useStyles = makeStyles(theme => ({
   avatar: {},
   title: props => ({
      color: theme.palette[themes[props.theme].theme].title,
   }),
   missingOppositeContent: {
      "&::before": {
         flex: "none",
         content: "none",
      },
   },
}));

const studies = [
   {
      title: "INGENIERO DE SISTEMAS",
      date: "2015",
      institution: "Universidad Industrial de Santander",
      description: "",
   },
   {
      title: "BACHILLER ACADÉMICO CON PROFUNDIZACIÓN EN PEDAGOGÍA",
      date: "2003 - 2014",
      institution: "Escuela Normal Superior de Piedecuesta",
      description: "",
   },
];

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
