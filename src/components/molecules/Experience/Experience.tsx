// Import Material UI components
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";

// Import local const
import experiences from "const/experience";

// import styles
import useStyles from "./Experience.styles";

const Experience = ({ language, photo, ...other }: any) => {
  const classes = useStyles();

  const content = experiences[language as "espanol"];

  return (
    <Timeline
      classes={{
        root: classes.root,
      }}
    >
      {content.map((experience, index, _array) => (
        <TimelineItem
          key={`${experience.title} ${index}`}
          classes={{
            missingOppositeContent: classes.missingOppositeContent,
          }}
        >
          <TimelineSeparator>
            <TimelineDot color={experience.ended ? "secondary" : "grey"} />
            {index === _array.length - 1 ? null : <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              className={classes.title}
              align="justify"
              color="inherit"
              variant="subtitle2"
            >              
              <span className={classes.bold}>{experience.title}</span>
              <span className={classes.italic}>{experience.date}</span>
            </Typography>
            <Typography
              align="justify"
              color="inherit"
              paragraph
              variant="caption"
            >
              <span className={classes.bold}>{experience.institution}</span>                  
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
              {experience.techs.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  color="secondary"
                  className="m-1"
                />
              ))}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Experience;
