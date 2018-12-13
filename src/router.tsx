import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";

import { Services, Company, Solutions, Resources } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
