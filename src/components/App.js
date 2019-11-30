import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TimelinePage from "../TimelinePage";
import Home from "./Home"

function App() {
  return (
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/timeline" exact>
          <TimelinePage />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about">
        </Route>
      </Switch>
  );
}

export default App