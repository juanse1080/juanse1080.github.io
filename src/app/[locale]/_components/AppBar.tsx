import { CodeIcon, GithubIcon, LinkedInIcon } from "components/icons";
import { merge } from "utils/clsx";
import ChangeLanguage from "./ChangeLanguage";
import { getCurrentLocale, getScopedI18n } from "locales/server";

const AppBar = async () => {
  const t = await getScopedI18n("common");
  const locale = getCurrentLocale();

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
        <ChangeLanguage />

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
