import React from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import clsx from "clsx";

// import styles
import useStyles from "./styles";

export default function Header({ page, sections, onChangePage, ...other }) {
   const classes = useStyles();

   return (
      <>
         <Slide in={page !== "home"}>
            <AppBar className={classes.appBar} color="transparent">
               <Toolbar>
                  <div className={classes.floatRight} />
                  <Button
                     color="inherit"
                     className={clsx({
                        [classes.activeButton]: page === "home",
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
                           [classes.activeButton]:
                              page === section_name,
                        })}
                        onClick={onChangePage(section_name)}
                     >
                        {sections[section_name].title}
                     </Button>
                  ))}
               </Toolbar>
            </AppBar>
         </Slide>
      </>
   );
}
