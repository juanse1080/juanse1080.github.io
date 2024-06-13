"use client";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "theme";
import { RootLayout } from "layout";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout />
    </ThemeProvider>
  );
}

export default App;
