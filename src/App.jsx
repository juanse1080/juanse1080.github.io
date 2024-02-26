import React from "react";

// Import other modules
import { Router } from "react-router-dom";

// Import Material UI components
import { ThemeProvider } from "@material-ui/core/styles";

// Import local
import theme from "./theme";
import Routes from "./routes";
import history from "./utils/history";

// Import default styles
import "./App.css";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router history={history}>
            <Routes />
         </Router>
      </ThemeProvider>
   );
}

export default App;
