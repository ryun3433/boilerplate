import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />;
        <Route exact path="/login" component={LoginPage} />;
      </Switch>
    </div>
  );
}

export default App;
