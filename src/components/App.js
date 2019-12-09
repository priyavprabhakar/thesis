import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import TimelinePage from "./TimelinePage";
import Home from "./Home"

function App() {
  return (
      <Switch>
        <Route path="/timeline" exact>
          <TimelinePage />
        </Route>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
  );
}

export default App