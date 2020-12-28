import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from "@material-ui/icons/Translate";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
// import styles
import useStyles from "./styles";

// Import local const
import text from "const/header";

export default function Header({
   page,
   language,
   lang,
   setLanguage,
   isMobile,
   sections,
   onChangePage,
   ...other
}) {
   const classes = useStyles({ home: page === "home" });

   const [open, setOpen] = useState(false);
   const [menu, setMenu] = useState(false);

   const scrollTo = key => () => {
      onChangePage(key)();
      setOpen(false);
   };

   const handleOpen = newState => () => {
      if (newState !== open) setOpen(_open => (newState ? newState : !_open));
   };

   const handleMenuLanguage = newState => () => {
      if (newState !== menu) setMenu(_open => (newState ? newState : !_open));
   };

   const handleMenu = event => {
      setMenu(event.currentTarget);
   };

   const menuClose = () => {
      setMenu(null);
   };

   const handleLanguage = language => () => {
      setLanguage(language);
      menuClose();
   };

   useMemo(() => {
      if (page === "home" && open) setOpen(false);
   }, [page]);

   return (
      <>
         {isMobile ? (
            <>
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
                     timeout={250}
                     className="mt-3"
                  >
                     <Tooltip
                        open={page !== "home" && open}
                        TransitionProps={{
                           style: {
                              transitionDelay: `${100}ms`,
                           },
                        }}
                        title={text[language].home}
                        placement="left"
                     >
                        <Fab
                           onClick={scrollTo("home")}
                           color={page === "home" ? "secondary" : "default"}
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
                           timeout={250 + 50 * (index + 1)}
                           className="mt-3"
                        >
                           <Tooltip
                              open={page !== "home" && open}
                              TransitionProps={{
                                 style: {
                                    transitionDelay: `${
                                       100 + 50 * (index + 1)
                                    }ms`,
                                 },
                              }}
                              title={title}
                              placement="left"
                           >
                              <Fab
                                 onClick={scrollTo(key)}
                                 color={page === key ? "secondary" : "default"}
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
               <div role="presentation" className={classes.buttonLanguage}>
                  <Zoom in={page !== "home"}>
                     <Fab
                        onClick={handleMenuLanguage()}
                        color="secondary"
                        size="small"
                        aria-label="scroll back to top"
                     >
                        {open ? <CloseIcon /> : <TranslateIcon />}
                     </Fab>
                  </Zoom>
                  {Object.values(lang).map(({ key, title, icon }, index) => (
                     <Zoom
                        key={key}
                        in={page !== "home" && menu}
                        timeout={250 + 50 * (index + 1)}
                        className="mt-3"
                     >
                        <Tooltip
                           open={page !== "home" && menu}
                           TransitionProps={{
                              style: {
                                 transitionDelay: `${100 + 50 * (index + 1)}ms`,
                              },
                           }}
                           title={title}
                           placement="right"
                        >
                           <Fab
                              onClick={handleLanguage(key)}
                              color={key === language ? "secondary" : "default"}
                              size="small"
                           >
                              {icon}
                           </Fab>
                        </Tooltip>
                     </Zoom>
                  ))}
               </div>
            </>
         ) : (
            <div style={{ height: 64 }}>
               <Paper className={classes.appBar} variant="outlined" square>
                  <Toolbar>
                     <Button color="inherit" onClick={handleMenu}>
                        {lang[language].title}
                     </Button>
                     <Menu
                        anchorEl={menu}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        open={Boolean(menu)}
                        onClose={menuClose}
                     >
                        {Object.values(lang).map(({ key, title }) => (
                           <MenuItem key={key} onClick={handleLanguage(key)}>
                              {title}
                           </MenuItem>
                        ))}
                     </Menu>
                     <div className={classes.floatRight} />
                     <Button
                        color="inherit"
                        className={clsx({
                           [classes.activeButton]: page === "home",
                        })}
                        onClick={onChangePage("home")}
                     >
                        {text[language].home}
                     </Button>
                     {Object.values(sections).map(
                        ({ key: section_name, title }) => (
                           <Button
                              key={section_name}
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
