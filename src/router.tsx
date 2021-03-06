import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main/Main";
import { Forms } from "./components/Forms/Forms";
import { Foundation } from "./components/Forms/Foundation";
import { Contact } from "./components/Forms/Contact";
import { Featured } from "./components/Forms/Featured";
import { Casestudy } from "./components/Forms/Casestudy";
import { Aboutus } from "./components/Forms/Aboutus";
import { Careers } from "./components/Forms/Careers";
import { Partners } from "./components/Forms/Partners";
import { Audit } from "./components/Forms/Audit";
import { EnterpriseManagedservice } from "./components/Forms/EnterpriseManagedservice";
import { Operations } from "./components/Forms/Operations";
import { Softwaredefined } from "./components/Forms/Softwaredefined";
import { Realtime } from "./components/Forms/Realtime";
import { Storagemigration } from "./components/Forms/Storagemigration";
import { Networkdesign } from "./components/Forms/Networkdesign";
import { Storagetier } from "./components/Forms/Storagetier";
import { Disasterrecovery } from "./components/Forms/Disasterrecovery";
import { Transformation } from "./components/Forms/Transformation";
import { Devops } from "./components/Forms/Devops";
import { Migrations } from "./components/Forms/Migrations";
import { Microservices } from "./components/Forms/Microservices";
import { Microserviceexample } from "./components/Forms/Microserviceexample";
import { Microservicebenefit } from "./components/Forms/Microservicebenefit";
import { Microservicechallenge } from "./components/Forms/Microservicechallenge";
import { Microservicehelp } from "./components/Forms/Microservicehelp";
import { Publiccloud } from "./components/Forms/Publiccloud";
import { Privatecloud } from "./components/Forms/Privatecloud";
import { Hybridcloud } from "./components/Forms/Hybridcloud";
import { CloudDisasterRecovery } from "./components/Forms/CloudDisasterRecovery";
import { Colocation } from "./components/Forms/colocation";
import { CloudManagedBackup } from "./components/Forms/CloudManagedBackup";
import { HostedInfrastructure } from "./components/Forms/HostedInfrastructure";
import { Applicationservices } from "./components/Forms/Applicationservices";
import { Managedservices } from "./components/Forms/Managedservices";
import { Networkservices } from "./components/Forms/Networkservices";
import { Privacypolicy } from "./components/Forms/Privacypolicy";
import { Askfordemo } from "./components/Forms/Askfordemo";
import { ByUseCase } from "./components/Forms/ByUseCase";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
    <HashRouter>
      <div>
        <Route component={Header} />    

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Forms} />
          <Route path="/Forms" component={Forms} />
          <Route path="/foundation" component={Foundation} />
          <Route path="/contactus" component={Contact} />
          <Route path="/featured" component={Featured} />
          <Route path="/casestudy" component={Casestudy} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/careers" component={Careers} />
          <Route path="/partners" component={Partners} />  
          <Route path="/audit" component={Audit} />
          <Route path="/enterprisemanagedservice" component={EnterpriseManagedservice} />
          <Route path="/operations" component={Operations} />
          <Route path="/softwaredefined" component={Softwaredefined} /> 
          <Route path="/realtime" component={Realtime} /> 
          <Route path="/storagemigration" component={Storagemigration} /> 
          <Route path="/networkdesign" component={Networkdesign} /> 
          <Route path="/storagetier" component={Storagetier} /> 
          <Route path="/disasterrecovery" component={Disasterrecovery} />  
          <Route path="/transformation" component={Transformation} />     
          <Route path="/devops" component={Devops} /> 
          <Route path="/migrations" component={Migrations} />  
          <Route path="/microservices" component={Microservices} /> 
          <Route path="/microserviceexample" component={Microserviceexample} /> 
          <Route path="/microservicebenefit" component={Microservicebenefit} /> 
          <Route path="/microservicechallenge" component={Microservicechallenge} /> 
          <Route path="/microservicehelp" component={Microservicehelp} />           
          <Route path="/publiccloud" component={Publiccloud} />
          <Route path="/privatecloud" component={Privatecloud} />
          <Route path="/hybridcloud" component={Hybridcloud} />
          <Route path="/colocation" component={Colocation} />
          <Route path="/CloudDisasterRecovery" component={CloudDisasterRecovery} />
          <Route path="/CloudManagedBackup" component={CloudManagedBackup} />
          <Route path="/HostedInfrastructure" component={HostedInfrastructure} />
          <Route path="/applicationservices" component={Applicationservices} />
          <Route path="/managedservices" component={Managedservices} />
          <Route path="/networkservices" component={Networkservices} />
          <Route path="/privacypolicy" component={Privacypolicy} /> 
          <Route path="/askfordemo" component={Askfordemo} />  
          <Route path="/byusecase" component={ByUseCase} />                                      
        </Switch>

        <Route component={Footer} />
      </div>
      </HashRouter>
    </BrowserRouter>
  );
};

export default AppRouter;