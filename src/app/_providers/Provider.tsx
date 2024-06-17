"use client";

import { ThemeProvider } from "@material-ui/core/styles";

import { PropsWithChildren } from "react";
import theme from "theme";

function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
