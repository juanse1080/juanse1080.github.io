"use client";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import { useChangeLocale, useCurrentLocale } from "locales/client";

const languages = ["en", "es"];

const AppBar = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="h-min flex items-stretch gap-3 justify-end backdrop-blur fixed z-50 container m-x-auto -left-3 -right-3 p-3">
      <ButtonGroup size="small" value={locale} onChange={changeLocale}>
        {languages.map((locale) => (
          <Button key={locale} value={locale}>
            {locale}
          </Button>
        ))}
      </ButtonGroup>

      <a
        href="https://www.linkedin.com/in/juanmarcon"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/juanse1080"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <GitHubIcon
          fontSize="large"
          style={{
            transform: "scale(0.81)",
          }}
        />
      </a>
    </div>
  );
};

export default AppBar;
