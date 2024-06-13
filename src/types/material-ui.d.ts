import "@material-ui/lab"; // Import the module
import "@material-ui/core"; // Import the module
import { ReactNode } from "react";

declare module "@material-ui/core" {
  export interface HiddenProps {
    children: ReactNode;
  }
}

declare module "@material-ui/lab" {
  export interface TimelineDotProps {
    component?: string;
  }

  export interface TimelineContentProps {
    onMouseOver?: any;
    onMouseOut?: any;
  }
}
