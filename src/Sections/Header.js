import React from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
   floatRight: {
      flexGrow: 1,
   },
   appBar: {
      color: theme.palette.black,
      backgroundColor: theme.palette.white,
      width: "100%",
   },
   buttonScroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
   activeButton: {
      fontWeight: 600,
   },
}));

export default function Header({ page, sections, onChangePage, ...other }) {
   const classes = useStyles();

   return (
      <>
         <Slide in={page !== "Home"}>
            <AppBar className={classes.appBar} color="transparent">
               <Toolbar>
                  <div className={classes.floatRight} />
                  <Button
                     color="inherit"
                     className={clsx({
                        [classes.activeButton]: page === "Home",
                     })}
                     onClick={onChangePage()}
                  >
                     Home
                  </Button>
                  {Object.keys(sections).map(section_name => (
                     <Button
                        key={section_name}
                        color="inherit"
                        className={clsx({
                           [classes.activeButton]: page === section_name,
                        })}
                        onClick={onChangePage(section_name)}
                     >
                        {section_name}
                     </Button>
                  ))}
               </Toolbar>
            </AppBar>
         </Slide>
      </>
   );
}
