import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
<<<<<<< HEAD
import { HashRouter } from 'react-router-dom'
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { About } from "./components/About";
=======
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
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
<<<<<<< HEAD
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

// import { Services, Company, Solutions, Resources } from "./components";
=======

import { Services, Company, Solutions, Resources } from "./components";
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <HashRouter>
      <div>
        <Route component={Header} />    

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Forms} />
          {/* <Route exact path="/company" component={Company} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/resources" component={Resources} /> */}
=======
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Forms} />
          <Route exact path="/company" component={Company} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/resources" component={Resources} />
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
          <Route path="/Forms" component={Forms} />
          <Route path="/foundation" component={Foundation} />
          <Route path="/contactus" component={Contact} />
          <Route path="/featured" component={Featured} />
          <Route path="/casestudy" component={Casestudy} />
          <Route path="/videos" component={Videos} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/careers" component={Careers} />
<<<<<<< HEAD
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
        </Switch>

        <Route component={Footer} />
      </div>
      </HashRouter>
    </BrowserRouter>
  );
};

export default AppRouter;
=======
          <Route path="/partners" component={Partners} />          
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
