// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot, { TimelineDotProps } from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";

// Import local const
import legends from "const/legends";

// import styles
import useStyles from "./Legend.styles";

export interface LegendProps {
  language: "espanol";
}

export default function Legend({ language, ...others }: Readonly<LegendProps>) {
  const classes = useStyles();
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
            <TimelineDot color={color as TimelineDotProps["color"]} />
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
