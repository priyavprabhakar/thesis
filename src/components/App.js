import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import TimelinePage from "./TimelinePage";
import Home from "./Home"
import IntroPage from "./IntroPage";
import {INTRO_PAGE_1} from "../utilities/intropages"

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
        <Route path="/intro-1" exact>
          <IntroPage text={INTRO_PAGE_1} nextLink="/intro-2" buttonText="Next"/>
        </Route>
        <Route path="/intro-2" exact>
          <IntroPage text={INTRO_PAGE_1} nextLink="/intro-3" buttonText="Next"/>
        </Route>
        <Route path="/intro-3" exact>
          <IntroPage text={INTRO_PAGE_1} nextLink="/intro-4" buttonText="Next"/>
        </Route>
        <Route path="/intro-4" exact>
          <IntroPage text={INTRO_PAGE_1} nextLink="/timeline" buttonText="Enter"/>
        </Route>
      </Switch>
  );
}

export default App