import React, { useEffect, useRef, useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import local components
import Section from "Components/Section";

// Import local const
import { sections, section_keys as keys } from "const/sections";

// Import other modules
import { Scrollbars } from "react-custom-scrollbars";

// Import local sections
import Header from "Sections/Header";
import Home from "Sections/Home";
import Footer from "Sections/Footer";

// import styles
import useStyles from "./styles";

export default function Landing(props) {
   const classes = useStyles();

   const themeProvider = useTheme();
   const smDown = useMediaQuery(themeProvider.breakpoints.down("sm"));

   const scrollbar = useRef();
   const [page, setPage] = useState("home");
   const [positions, setPositions] = useState([]);
   const [state, setState] = useState({
      subject: "",
      body: "",
   });

   const offset = smDown ? 0 : 46;

   const handleState = e => {
      const { name, value } = e.target;
      setState(_state => ({ ..._state, [name]: value }));
   };

   const scrollTo = name => () => {
      if (name)
         scrollbar.current.view.scroll({
            top: topPosition(name),
            behavior: "smooth",
         });
      else
         scrollbar.current.view.scroll({
            top: topPosition("footer"),
            behavior: "smooth",
         });
   };

   const handlePage = _page => {
      if (_page !== page) setPage(_page);
   };

   const onScroll = e => {
      let newPage;
      const currentPosition = scrollbar.current.getScrollTop();
      ["home", ...keys].forEach(section_name => {
         const itemTop = topPosition(section_name);
         if (itemTop <= currentPosition && itemTop + 92 > currentPosition)
            newPage = section_name;
      });
      if (newPage) handlePage(newPage);
   };

   const topPosition = name => {
      const _element = positions.find(item => item.key === name);
      if (_element) return _element.position;
      else return getByID(name).offsetTop - offset;
   };

   const getByID = name => {
      const _element = document.getElementById(name);
      if (_element) return _element;
      else return false;
   };

   useEffect(() => {
      setTimeout(() => {
         setPositions(() =>
            [
               { key: "home" },
               { key: "footer" },
               ...Object.values(sections),
            ].map(({ key }) => ({
               key,
               position: topPosition(key),
            }))
         );
      }, 3000);
   }, []);

   return (
      <>
         <div className={classes.root}>
            <Scrollbars
               className="custom-scrollbars"
               ref={scrollbar}
               onScrollFrame={onScroll}
               autoHide
               autoHideTimeout={1000}
               autoHideDuration={200}
            >
               <Header
                  onChangePage={scrollTo}
                  page={page}
                  sections={sections}
                  isMobile={smDown}
               />

               <Home
                  id="home"
                  toPage={scrollTo}
                  nextPage={scrollTo(keys[0])}
                  page={page}
                  state={state}
               />

               {Object.keys(sections).map((section_name, section_index) => {
                  const {
                     component: Component,
                     title,
                     props,
                     section: {
                        leftPart: LeftPart = null,
                        ...propsSection
                     } = {},
                  } = sections[section_name];
                  return (
                     <Section
                        {...propsSection}
                        id={section_name}
                        page={page}
                        key={section_name}
                        section_name={section_name}
                        title={title}
                        leftPart={
                           LeftPart ? (
                              <LeftPart
                                 theme={
                                    section_index % 2 === 0 ? "dark" : "light"
                                 }
                              />
                           ) : null
                        }
                        theme={section_index % 2 === 0 ? "dark" : "light"}
                     >
                        <Component
                           {...props}
                           state={state}
                           page={page}
                           toPage={scrollTo}
                           theme={section_index % 2 === 0 ? "dark" : "light"}
                        />
                     </Section>
                  );
               })}
               <Footer
                  id="footer"
                  hidden={page !== "home"}
                  theme="light"
                  scrollToTop={scrollTo("home")}
                  toPage={scrollTo}
                  state={state}
                  handleState={handleState}
               />
            </Scrollbars>
         </div>
      </>
   );
}
