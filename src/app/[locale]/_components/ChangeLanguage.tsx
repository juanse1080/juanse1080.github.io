"use client";

import { Button } from "components/atoms";
import { ButtonGroup } from "components/molecules";
import { useChangeLocale, useCurrentLocale } from "locales/client";

const languages = ["en", "es"];

const ChangeLanguage = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <ButtonGroup size="small" value={locale} onChange={changeLocale}>
      {languages.map((locale) => (
        <Button key={locale} value={locale}>
          {locale}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ChangeLanguage;
