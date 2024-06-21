"use client";

import { Button, ButtonGroup, GithubIcon, LinkedInIcon } from "components";
import { useChangeLocale, useCurrentLocale } from "locales/client";

const languages = ["en", "es"];

const AppBar = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <div className="h-min backdrop-blur fixed z-50 left-0 right-0 p-3 border-solid border-b border-divider text-white">
      <div className="container m-x-auto flex items-stretch gap-3 justify-end">
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
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/juanse1080"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
          aria-label="GitHub profile"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default AppBar;
