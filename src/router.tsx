import * as React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
// import { App } from "./components/App";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div>
        <Route component={Header} />
        <Background />
        <Main />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/cloud-services" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Route component={Footer} />
      </div>
    </HashRouter>
  );
};
