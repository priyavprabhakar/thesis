import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TimelinePage from "../TimelinePage";
import Home from "./Home"
import About from "./About"

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
        <About/>
        </Route>
      </Switch>
  );
}

export default App