import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";
import { Forms } from "./components/Forms/Forms";
import { Foundation } from "./components/Forms/Foundation";
import { Contact } from "./components/Forms/Contact";
import { Featured } from "./components/Forms/Featured";
import { Casestudy } from "./components/Forms/Casestudy";
import { Videos } from "./components/Forms/Videos";
import { Aboutus } from "./components/Forms/Aboutus";
import { Careers } from "./components/Forms/Careers";
import { Partners } from "./components/Forms/Partners";

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
          <Route path="/contactus" component={Contact} />
          <Route path="/featured" component={Featured} />
          <Route path="/casestudy" component={Casestudy} />
          <Route path="/videos" component={Videos} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/careers" component={Careers} />
          <Route path="/partners" component={Partners} />          
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
