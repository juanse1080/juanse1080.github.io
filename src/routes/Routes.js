import React from "react";

// Import other modules
import { Switch } from "react-router-dom";

// Import local components
import Landing from "layout/landing/landing";

const Routes = () => {
   return (
      <Switch>
         <Landing />
      </Switch>
   );
};

export default Routes;
