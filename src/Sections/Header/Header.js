import React, { useState, useMemo } from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

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

   const [open, setOpen] = useState(false);

   const getCurrentIcon = () => {
      if (!sections[page]) return <HomeIcon />;
      const Icon = sections[page].icon;
      return <Icon />;
   };

   const scrollTo = key => () => {
      onChangePage(key)();
      setOpen(false);
   };

   const handleOpen = newState => () => {
      if (newState !== open) setOpen(_open => (newState ? newState : !_open));
   };

   useMemo(() => {
      if (page === "home" && open) setOpen(false);
   }, [page]);

   return (
      <>
         {isMobile ? (
            <div role="presentation" className={classes.buttonBar}>
               <Zoom in={page !== "home"}>
                  <Fab
                     onClick={handleOpen()}
                     color="secondary"
                     size="small"
                     aria-label="scroll back to top"
                  >
                     {open ? <CloseIcon /> : <MenuIcon />}
                  </Fab>
               </Zoom>
               <Zoom
                  in={page !== "home" && open}
                  timeout={200}
                  className="mt-3"
               >
                  <Tooltip
                     open={page !== "home" && open}
                     TransitionProps={{
                        style: {
                           transitionDelay: `${100}ms`,
                        },
                     }}
                     title="Inicio"
                     placement="left"
                  >
                     <Fab
                        onClick={scrollTo("home")}
                        color="secondary"
                        size="small"
                        aria-label="scroll back to top"
                     >
                        <HomeIcon />
                     </Fab>
                  </Tooltip>
               </Zoom>
               {Object.values(sections).map(
                  ({ icon: Icon, key, title }, index) => (
                     <Zoom
                        key={key}
                        in={page !== "home" && open}
                        timeout={200 + 50 * (index + 1)}
                        className="mt-3"
                     >
                        <Tooltip
                           open={page !== "home" && open}
                           TransitionProps={{
                              style: {
                                 transitionDelay: `${100 + 50 * (index + 1)}ms`,
                              },
                           }}
                           title={title}
                           placement="left"
                        >
                           <Fab
                              onClick={scrollTo(key)}
                              color="secondary"
                              size="small"
                              aria-label="scroll back to top"
                           >
                              <Icon />
                           </Fab>
                        </Tooltip>
                     </Zoom>
                  )
               )}
            </div>
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
