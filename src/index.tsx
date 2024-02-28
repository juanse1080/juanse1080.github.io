import { createRoot } from "react-dom/client";
import App from "./App";

const app = document.getElementById("app");

// create a root
const root = createRoot(app as HTMLElement);

//render app to root
root.render(<App />);
