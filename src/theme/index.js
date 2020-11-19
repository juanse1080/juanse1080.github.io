import { createMuiTheme } from "@material-ui/core/styles";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

const theme = createMuiTheme({
   palette,
   typography,
   overrides,
   spacing: factor => `${0.5 * factor}rem`,
   shape: {
      borderRadius: 4,
      viewHeight: '100vh',
      viewWidth: '100vw',
   },
   zIndex: {
      appBar: 1200,
      drawer: 1100,
   },
});

export default theme;
