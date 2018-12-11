import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import { App } from "./components/App";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";
// import Company from "./components/Pages/Company";
import { Services, Company, Solutions } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Background />
        <Main />
        <Switch>
          <Route exact path="/company" component={Company} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
