"use client";

import { ThemeProvider } from "@material-ui/core/styles";
import { I18nProviderClient } from "locales/client";

import { PropsWithChildren } from "react";
import theme from "theme";

function Provider({ children, locale }: PropsWithChildren<{ locale: string }>) {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </I18nProviderClient>
  );
}

export default Provider;
