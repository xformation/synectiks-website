import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";
import { Forms } from "./components/Forms/Forms";
import { Foundation } from "./components/Forms/Foundation";

import { Services, Company, Solutions, Resources } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Forms} />
          <Route exact path="/company" component={Company} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/resources" component={Resources} />
          <Route path="/Forms" component={Forms} />
          <Route path="/foundation" component={Foundation} />
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
