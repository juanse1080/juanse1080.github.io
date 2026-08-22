import { Button } from "components/atoms";
import { LocaleParams } from "types";
import { merge } from "utils/clsx";

const languages: LocaleParams["locale"][] = ["en", "es"];

export type ChangeLanguageProps = {
  locale: LocaleParams["locale"];
  path: `/${string}` | "";
};

const ChangeLanguage = ({ locale, path }: Readonly<ChangeLanguageProps>) => {
  return (
    <nav
      aria-label="Language selector"
      className="flex rounded-full border border-divider border-solid box-border h-min"
    >
      {languages.map((language, idx) => {
        const isLastItem = idx + 1 === languages.length;
        return (
          <span key={language} className="contents">
            <Button
              component="a"
              href={`/${language}${path}`}
              hrefLang={language}
              aria-current={locale === language ? "page" : undefined}
              variant="text"
              size="small"
              className={merge("px-3 py-1", {
                "rounded-r-none": idx === 0,
                "rounded-l-none": isLastItem,
                "bg-active": locale === language,
              })}
            >
              {language}
            </Button>
            {!isLastItem && (
              <span className="border-l border-divider border-solid" />
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default ChangeLanguage;
