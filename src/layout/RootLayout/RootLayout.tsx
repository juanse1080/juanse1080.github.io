import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRef, useState } from "react";

import { Section } from "components/atoms";
import { Footer, Home, Project } from "components/molecules";
import { sections } from "const/sections";
import useStyles from "./RootLayout.styles";

const Landing = () => {
  const classes = useStyles();

  const language = "espanol";
  const content = sections[language];
  const keys = Object.keys(content);
  const values = Object.values(content);

  const themeProvider = useTheme();
  const smDown = useMediaQuery(themeProvider.breakpoints.down("sm"));

  const scrollbar = useRef();
  const [page, setPage] = useState("home");

  const [state, setState] = useState({
    subject: "",
    body: "",
  });

  const offset = smDown ? -2 : -2;

  const handleState = (e: any) => {
    const { name, value } = e.target;
    setState((_state) => ({ ..._state, [name]: value }));
  };

  const scrollTo = (name?: string) => () => {
    if (scrollbar.current)
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

  const handlePage = (_page: string) => {
    if (_page !== page) setPage(_page);
  };

  const topPosition = (name: string) => {
    return getByID(name).offsetTop - offset;
  };

  const getByID = (name: string) => {
    const _element = document.getElementById(name);
    if (_element) return _element;
    throw new Error(`${name} section not found`);
  };

  return (
    <div className={classes.root}>
      <Home
        id="home"
        language={language}
        handlePage={handlePage}
        after={values[0].key}
        toPage={scrollTo}
        nextPage={scrollTo(keys[0])}
        page={page}
        state={state}
      />

      {values.map(
        (
          {
            component: Component,
            key,
            title,
            props,
            section: { leftPart: LeftPart = null, ...propsSection } = {},
          },
          section_index,
          array
        ) => {
          return (
            <Section
              {...propsSection}
              id={key}
              page={page}
              key={key}
              handlePage={handlePage}
              before={
                array[section_index - 1] ? array[section_index - 1].key : null
              }
              after={
                array[section_index + 1] ? array[section_index + 1].key : null
              }
              title={title}
              leftPart={
                LeftPart ? (
                  <LeftPart
                    language={language}
                    theme={section_index % 2 === 0 ? "dark" : "light"}
                  />
                ) : null
              }
              theme={section_index % 2 === 0 ? "dark" : "light"}
            >
              <Component
                {...props}
                language={language}
                state={state}
                page={page}
                toPage={scrollTo}
                theme={section_index % 2 === 0 ? "dark" : "light"}
              />
            </Section>
          );
        }
      )}

      <Project id="project" page={page} language={language} />

      <Footer
        id="footer"
        language={language}
        hidden={page !== "home"}
        theme="light"
        toPage={scrollTo}
        state={state}
        handleState={handleState}
      />
    </div>
  );
};

export default Landing;
