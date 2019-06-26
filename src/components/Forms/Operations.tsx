import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

// export const Operations: React.StatelessComponent<{render()}> = () => {
  export class Operations extends React.Component<{},{}> {
    constructor(props:any) {
      super(props);  
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
  return (
    <div className="bg-lightgrey">
      <div className="container pb-5">
        <div className="row main-card pb-5">
          <div className="col-md-12   card-deck">
            {/* */}
            <div className="card btn card-shadow mx-3 pt-3">
              <Link to="/foundation" className="noLine">
                <img
                  className="card-img-top"
                  src="img/Foundation.png"
                  alt="Foundation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Foundation</h2>
                </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
              <Link to="/transformation" className="noLine">
                <img
                  className="card-img-top"
                  src="img/Transformation.png"
                  alt="Transformation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Transformation</h2>
                </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
              <Link to="/operations" className="noLine">
                <img
                  className="card-img-top"
                  src="img/Operation.png"
                  alt="Operation"
                />
                <div className="card-body">
                  <h2 className="text-center text-uppercase">Operation</h2>
                  <h1 className="pointer text-center">&#187;</h1>
                </div>
              </Link>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      <div
        className="text-center mt-5 px-4">
        <h3 className="pt-5">
          24x7 Operations for enterprise managed services
        </h3>
      </div>
      <div className="pb-5 text-center" data-aos="fade-up" data-aos-duration="2000">
        <div >
          <img
            src="img/OperationsGraph.png"
            width="75%"
            alt="Operations for enterprise managed services"
          />{" "}
        </div>
      </div>

      <div
        className="container-fluid py-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="row justify-content-around align-items-center">
          <div className="card card-hd mx-3">          
            <div className="w-100 card-bd bg-maroon" >
            <img className="card-hd-img text-center brdr-maroon" src="img/DiscoveryAssessmentOperation.png" 
            width="75%" alt="Discovery Assessment"/>
            </div>
            {/* <img className="card-img-top bg-maroon"  alt="Card image cap"></img> */}
            <div className="card-body">
            
              <small className="text-center  ">
                We advise on assessment, migration, multi cloud hybrid
                architecture adoption coupled with our services, software,
                methodologies to accelerate enterprise transformation towards
                operation excellence.
              </small>
            </div>
          </div>

          <div className="card card-hd mx-3">
            <div className="w-100 card-bd bg-teal" >
            <img className="card-hd-img text-center brdr-teal" src="img/ContinuousComplianceOperations.png" 
            width="75%" alt="Continuous Compliance"/>
            </div>
            <div className="card-body">
              <small className="text-center">
                Synectiks xformation platform perform continuous audits on
                infrastructure, application, access management and ensure
                security compliances (CISP, HIPPA,PCI-DSS, DISA, NIST) across
                clouds, products and environment.
              </small>
            </div>
          </div>
          <div className="card card-hd mx-3">
            <div className="w-100 card-bd bg-orange" >
            <img className="card-hd-img text-center brdr-orange" src="img/ContinuousBillingOperations.png" 
            width="75%" alt="Continuous Billing"/>
            </div>
            <div className="card-body">
              <small className="text-center">
                Synectiks xformation platform perform continuous billing
                monitoring across the accounts, services, environments,
                identifies capex spending and underutilized resources.
              </small>
            </div>
          </div>
          <div className="card card-hd mx-3">
            <div className="w-100 card-bd bg-green" >
            <img className="card-hd-img text-center brdr-green" src="img/ContinuousDeliveryOperations.png" 
            width="75%" alt="Continuous Delivery"/>
            </div>
            <div className="card-body">
              <small className="text-center">
                Synectiks continuous delivery platform enables you to
                continuously release new features and changes with superior
                quality. The delivery mechanism includes multiple quality gates
                and staged deployment, that ensures rapid releases with less
                tests efforts.
              </small>
            </div>
          </div>
          <div className="card card-hd mx-3">
            <div className="w-100 card-bd bg-pink" >
            <img className="card-hd-img text-center brdr-pink" src="img/ContinuousAutomationOperations.png" 
            width="75%" alt="Continuous Automation"/>
            </div>
            <div className="card-body">
              <small className="text-center">
                Synectiks automation platform automates frequently occurring IT
                tasks, reducing IT tickets 80%. The intelligent diagnostics
                platform auto fixes more that 50% general alarms.
              </small>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
  }

export default Operations;
