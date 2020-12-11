import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
// import styles
import useStyles from "./styles";

export default function Header({
   page,
   isMobile,
   sections,
   onChangePage,
   ...other
}) {
   const classes = useStyles({ home: page === "home" });

   const [open, setOpen] = useState(false);

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
                        color="default"
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
                              color="default"
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
            <div style={{ height: 64 }}>
               <Paper className={classes.appBar} variant="outlined" square>
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
               </Paper>
            </div>
         )}
      </>
   );
}
