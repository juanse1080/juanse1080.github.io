import React, { createRef, useEffect, useRef, useState } from "react";

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

   const scrollbar = useRef();
   const [page, setPage] = useState("home");
   const [shows, setShows] = useState([]);

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
      let newPage,
         _shows = [];
      const currentPosition = scrollbar.current.getScrollTop();
      const currentTopPosition =
         currentPosition + scrollbar.current.getClientHeight() / 3;
      const currentBottomPosition =
         currentPosition + (scrollbar.current.getClientHeight() * 2) / 3;
      ["home", ...keys].forEach(section_name => {
         const itemTop = topPosition(section_name);
         if (
            currentTopPosition <= itemTop &&
            currentBottomPosition > itemTop &&
            !_shows.includes(section_name) &&
            !shows.includes(section_name)
         )
            _shows.push(section_name);
         if (itemTop <= currentPosition && itemTop + 92 > currentPosition)
            newPage = section_name;
      });
      if (newPage) handlePage(newPage);
      if (_shows.length > 0) setShows(_ => [..._, ..._shows]);
   };

   const topPosition = name => {
      if (sections[name]) return sections[name].ref.current.offsetTop - 46;
      else return home_ref.current.offsetTop;
   };

   useEffect(() => {
      keys.forEach((name, index) => {
         sections[name].ref = refs.current[index];
      });
      scrollTo(page)();
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
                        page={page}
                        loads={shows}
                        key={section_name}
                        section_name={section_name}
                        ref={refs.current[section_index]}
                        title={sections[section_name].title}
                        theme={section_index % 2 === 0 ? "dark" : "light"}
                        nextPage={scrollTo(
                           section_index !== Object.keys(sections).length
                              ? Object.keys(sections)[section_index + 1]
                              : null
                        )}
                     >
                        <Component
                           {...sections[section_name].props}
                           page={page}
                           theme={section_index % 2 === 0 ? "dark" : "light"}
                        />
                     </Section>
                  );
               })}
               <Footer hidden={page !== "home"} scrollToTop={scrollTo()} />
            </Scrollbars>
         </div>
      </>
   );
}
