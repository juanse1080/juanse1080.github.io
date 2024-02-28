import { createTheme } from "@material-ui/core/styles";

import overrides from "./overrides";
import palette from "./palette";
import props from "./props";
import typography from "./typography";

const theme = createTheme({
  palette,
  props,
  typography,
  overrides,
  spacing: (factor) => `${0.5 * factor}rem`,
  shape: {
    borderRadius: 16,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
