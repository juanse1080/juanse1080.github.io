"use client";

import { Button } from "components/atoms";
import { ButtonGroup } from "components/molecules";
import { CodeIcon, GithubIcon, LinkedInIcon } from "components/icons";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "locales/client";
import { merge } from "utils/clsx";

const languages = ["en", "es"];

const AppBar = () => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("common");
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <div
      className={merge(
        "h-min backdrop-blur",
        "z-50 px-3 py-2 sm:p-3 text-white",
        "border-solid border-b border-divider"
      )}
    >
      <div className="container m-x-auto flex items-stretch gap-3">
        <a
          href={`/${locale}`}
          className="flex items-center"
          aria-label={t("appBar.ariaLabel.home")}
        >
          <CodeIcon />
        </a>
        <span className="grow" />
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
          aria-label={t("appBar.ariaLabel.linkedIn")}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/juanse1080"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
          aria-label={t("appBar.ariaLabel.github")}
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default AppBar;
