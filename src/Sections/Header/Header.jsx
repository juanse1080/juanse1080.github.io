import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from "@material-ui/icons/Translate";
import clsx from "clsx";
import React, { useEffect } from "react";
// import styles
import useStyles from "./Header.styles";

// Import local const
import text from "const/header";

// Import custom hooks
import useBoolean from "hooks/useBoolean";
import useMenu from "hooks/useMenu";

export default function Header({
  page,
  language,
  lang,
  setLanguage,
  isMobile,
  sections,
  onChangePage,
}) {
  const classes = useStyles({ home: page === "home" });

  const [open, onOpen, onClose] = useBoolean();
  const [menu, openMenu, closeMenu] = useMenu();

  const scrollTo = (key) => () => {
    onChangePage(key)();
    onClose();
  };

  const handleLanguage = (language) => () => {
    setLanguage(language);
    closeMenu();
  };

  useEffect(() => {
    if (page === "home" && open) onClose();
  }, [page, open, onClose]);

  return (
    <>
      {isMobile ? (
        <>
          <div role="presentation" className={classes.buttonBar}>
            <Zoom in={page !== "home"}>
              <Fab
                onClick={open ? onClose : onOpen}
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </Fab>
            </Zoom>
            <Zoom in={page !== "home" && open} timeout={250} className="mt-3">
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
                        transitionDelay: `${100 + 50 * (index + 1)}ms`,
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
            {Object.values(lang).map(({ key, title, icon }, index) => (
              <Zoom
                key={key}
                in={page !== "home" && menu}
                timeout={
                  250 + 50 * (Object.keys(lang).length - 1) * (index + 1)
                }
                className="mb-3"
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
            <Zoom in={page !== "home"}>
              <Fab
                onClick={menu ? closeMenu : openMenu}
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                {menu ? <CloseIcon /> : <TranslateIcon />}
              </Fab>
            </Zoom>
          </div>
        </>
      ) : (
        <div style={{ height: 64 }}>
          <Paper className={classes.appBar} variant="outlined" square>
            <Toolbar>
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
              {Object.values(sections).map(({ key: section_name, title }) => (
                <Button
                  key={section_name}
                  color="inherit"
                  className={clsx("mr-3", {
                    [classes.activeButton]: page === section_name,
                  })}
                  onClick={onChangePage(section_name)}
                >
                  {title}
                </Button>
              ))}
              |
              <Button
                color="inherit"
                onClick={openMenu}
                className="ml-3"
                endIcon={<ArrowDropDownIcon />}
              >
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
                onClose={closeMenu}
              >
                {Object.values(lang).map(({ key, title }) => (
                  <MenuItem
                    key={key}
                    onClick={handleLanguage(key)}
                    selected={key === language}
                  >
                    {title}
                  </MenuItem>
                ))}
              </Menu>
            </Toolbar>
          </Paper>
        </div>
      )}
    </>
  );
}
