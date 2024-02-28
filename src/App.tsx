import { Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";
import theme from "./theme";
import history from "./utils/history";

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
