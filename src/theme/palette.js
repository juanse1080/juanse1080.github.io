import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#2f2e41";

const custom = {
   black,
   white,
   transparent: "transparent",
   primary: {
      // title: white,
      // subtitle: "#d0d0d0",
      // contrastText: white,
      // dark: "#07466F",
      // main: "#105989",
      // light: "#296E9A",
      title: black,
      subtitle: "#d0d0d0",
      light: "#f6f6f6",
      main: "#f6f6f6",
      dark: "#f6f6f6",
      contrastText: black,
   },
   secondary: {
      // title: white,
      // subtitle: "#d0d0d0",
      // contrastText: "#105989",
      // dark: "#E2B60B",
      // main: "#FAD137",
      // light: "#FFDD5C",
      title: black,
      subtitle: "#d0d0d0",
      light: "#7eaeff",
      main: "#4285f4",
      dark: "#3968b6",
      contrastText: "#fff",
   },
   tertiary: {
      contrastText: black,
      title: black,
      subtitle: "#404040",
      main: white,
   },
   success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400],
   },
   info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400],
   },
   warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400],
   },
   error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400],
   },
   text: {
      // primary: "#105989",
      secondary: white,
      link: colors.blue[600],
   },
   background: {
      default: white,
      paper: white,
   },
   icon: colors.blueGrey[600],
   divider: colors.grey[200],
};

export default custom;
