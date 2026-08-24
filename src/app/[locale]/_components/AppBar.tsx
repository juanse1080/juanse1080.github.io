import { CodeIcon, GithubIcon, LinkedInIcon } from "components/icons";
import { merge } from "utils/clsx";
import ChangeLanguage from "./ChangeLanguage";
import { getCurrentLocale, getScopedI18n } from "locales/server";

export type AppBarProps = {
  path?: `/${string}` | "";
};

const AppBar = async ({ path = "" }: Readonly<AppBarProps>) => {
  const t = await getScopedI18n("common");
  const locale = getCurrentLocale();

  return (
    <header
      className={merge(
        "h-min backdrop-blur",
        "z-50 px-3 py-2 sm:p-3 text-white",
        "border-solid border-b border-divider",
        "sticky top-0"
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
        <ChangeLanguage locale={locale} path={path} />

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
    </header>
  );
};

export default AppBar;
