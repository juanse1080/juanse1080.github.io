import React from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import clsx from "clsx";

// import styles
import useStyles from "./styles";

export default function Header({
   page,
   isMobile,
   sections,
   onChangePage,
   ...other
}) {
   const classes = useStyles();

   const getIcon = () => {
      if (!sections[page]) return <HomeIcon />;
      const Icon = sections[page].icon;
      return <Icon />;
   };

   return (
      <>
         {isMobile ? (
            <Zoom in={page !== "home"}>
               <Tooltip
                  title={sections[page] ? sections[page].title : "Inicio"}
                  placement="left"
               >
                  <div role="presentation" className={classes.buttonBar}>
                     <Fab
                        onClick={null}
                        color="secondary"
                        size="small"
                        aria-label="scroll back to top"
                     >
                        {getIcon()}
                     </Fab>
                  </div>
               </Tooltip>
            </Zoom>
         ) : (
            <Slide in={page !== "home"}>
               <AppBar className={classes.appBar} color="transparent">
                  <Toolbar>
                     <div className={classes.floatRight} />
                     <Button
                        startIcon={<HomeIcon />}
                        color="inherit"
                        className={clsx({
                           [classes.activeButton]: page === "home",
                        })}
                        onClick={onChangePage("home")}
                     >
                        Inicio
                     </Button>
                     {Object.values(sections).map(
                        ({ key: section_name, title, icon: Icon }) => (
                           <Button
                              key={section_name}
                              startIcon={<Icon />}
                              color="inherit"
                              className={clsx("ml-3", {
                                 [classes.activeButton]: page === section_name,
                              })}
                              onClick={onChangePage(section_name)}
                           >
                              {title}
                           </Button>
                        )
                     )}
                  </Toolbar>
               </AppBar>
            </Slide>
         )}
      </>
   );
}
