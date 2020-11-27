import React from "react";

// Import Material UI components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import SvgIcon from "@material-ui/core/SvgIcon";

import { Spring } from "react-spring/renderprops";

// Import local const
import tools from "const/tools";

// import styles
import useStyles from "./styles";

const Percentage = ({ percentage }) => {
   return (
      <Spring from={{ number: 0 }} to={{ number: percentage || 100 }}>
         {props => <div>{parseInt(props.number)}%</div>}
      </Spring>
   );
};

const Tech = ({ theme, page, ...other }) => {
   const classes = useStyles({ theme });

   return (
      <Container>
         <Grid container justify="space-between" alignItems="center">
            {tools.map((tool, index) => (
               <Grid key={tool.name} item lg={4} md={4} sm={5} xs={6}>
                  <Zoom in={page === "tech"} timeout={index * 100}>
                     <div className={classes.contentIcon}>
                        <Typography
                           className={classes.title}
                           color="inherit"
                           variant="subtitle2"
                           align="center"
                        >
                           {tool.name}
                        </Typography>
                        <img {...tool.props} src={tool.icon} alt={tool.name} />
                     </div>
                  </Zoom>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default Tech;
