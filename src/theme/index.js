import { createMuiTheme } from "@material-ui/core/styles";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import props from "./props";

const theme = createMuiTheme({
   palette,
   props,
   typography,
   overrides,
   spacing: factor => `${0.5 * factor}rem`,
   shape: {
      borderRadius: 16,
      viewHeight: '100vh',
      viewWidth: '100vw',
   },
   zIndex: {
      appBar: 1200,
      drawer: 1100,
   },
});

export default theme;
