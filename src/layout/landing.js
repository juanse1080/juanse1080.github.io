import React, { useRef, createRef, useState, useEffect } from "react";

// Import Material UI components
import { makeStyles } from "@material-ui/core/styles";

// Import local sections
import Header from "Sections/Header";
import Home from "Sections/Home";
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Footer from "Sections/Footer";

// Import local components
import Section from "Components/Section";

// Import other modules
import { Scrollbars } from "react-custom-scrollbars";

// Import assets
import photo from "assets/img/Foto.jpg";

const useStyles = makeStyles(theme => ({
   root: {
      height: theme.shape.viewHeight,
   },
   buttonScroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
}));

const sections = {
   "Acerca de mi": {
      ref: null,
      component: About,
      props: {
         photo,
      },
      section: {
         subtitle: "Ruta",
      },
   },
   Portafolio: {
      ref: null,
      component: Portfolio,
      props: {},
      section: {
         subtitle: "Ruta",
         fullWidth: true,
      },
   },
};

const keys = Object.keys(sections);

export default function Landing(props) {
   const classes = useStyles();

   const scrollbar = useRef();
   const [page, setPage] = useState("Home");

   const refs = useRef(
      Array.apply(null, Array(keys.length)).map(_ => createRef())
   );

   const home_ref = useRef(createRef());

   const scrollTo = name => () => {
      scrollbar.current.view.scroll({
         top: name ? topPosition(name) : 0,
         behavior: "smooth",
      });
   };

   const handlePage = _page => {
      if (_page !== page) setPage(_page);
   };

   const onScroll = e => {
      const currentPosition = scrollbar.current.getScrollTop();
      [...keys, "Home"].forEach(section_name => {
         const itemTop = topPosition(section_name);
         // const itemBottom = itemTop + heightElement(section_name);
         // if (itemTop <= currentPosition && itemBottom > currentPosition)
         //    handlePage(section_name);
         if (itemTop <= currentPosition && itemTop + 92 > currentPosition)
            handlePage(section_name);
      });
   };

   const topPosition = name => {
      if (sections[name]) return sections[name].ref.current.offsetTop - 46;
      else return home_ref.current.offsetTop;
   };

   // const heightElement = name => {
   //    if (sections[name]) return sections[name].ref.current.offsetHeight;
   //    else return home_ref.current.offsetHeight;
   // };

   useEffect(() => {
      keys.forEach((name, index) => {
         sections[name].ref = refs.current[index];
      });
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
               />

               <Home nextPage={scrollTo(keys[0])} ref={home_ref} page={page} />

               {Object.keys(sections).map((section_name, section_index) => {
                  const Component = sections[section_name].component;
                  return (
                     <Section
                        {...sections[section_name].section}
                        key={section_name}
                        ref={refs.current[section_index]}
                        title={section_name}
                        theme={section_index % 2 === 0 ? "dark" : "light"}
                        nextPage={scrollTo(
                           section_index !== Object.keys(sections).length
                              ? Object.keys(sections)[section_index + 1]
                              : false
                        )}
                     >
                        <Component
                           {...sections[section_name].props}
                           theme={section_index % 2 === 0 ? "dark" : "light"}
                        />
                     </Section>
                  );
               })}
               <Footer hidden={page !== "Home"} scrollToTop={scrollTo()} />
            </Scrollbars>
         </div>
      </>
   );
}