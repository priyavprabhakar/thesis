import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TimelinePage from "../TimelinePage";

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/timeline" exact>
          <TimelinePage />
        </Route>
        <Route path="/" exact>
          <TimelinePage />
        </Route>
        <Route path="/about">
        </Route>
      </Switch>
    </div>
  );
}

export default App