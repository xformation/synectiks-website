import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// export const Microservicehelp: React.StatelessComponent<{}> = () => {
  export class Microservicehelp extends React.Component<{},{}> {
    constructor(props:any) {
      super(props);  
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
  return (
    <div className='bg-lightgrey text-justify '>
<div className="w-100 py-5 mt-5">
                <img height="auto" width="100%"
                    className=""
                    src="img/Microservicesmain.jpg"
                    alt="Devopsmain Services"
                />
            </div>
      
  {/* Help */}
  <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
        <h4>
          How can SYNECTIKS help you?
            </h4>
        <p className="lineHeight-24">
        SYNECTIKS, a trusted partner with experience migrating monolithic applications to cloud and 
        microservices architecture, can help make the process seamless. Let us help you make the shift 
        so you can capitalize on business opportunities faster.
            <br /></p>
            <p>
            SYNECTIKS has a flexible and effective way of migrating monolithic applications to 
            microservices, which includes the following steps:
            </p>
        <div className="w-40 p-5 text-center">
          <img src="img/Microservice_10.png" width="75%" alt="DevOps Transformation" />{" "}
        </div>
        <ul className="lineHeight-24">
          <li>Discovery and Assessment</li>
            <ul><li>
            Meet with the Stakeholders, Infrastructure and Application SME’s to gather detailed information about the applications and databases.
            </li></ul>
          <li>Business Readiness
                <ul>
              <li>Business Transformation Challenges</li>
              <li>Cultural Readiness</li>
            </ul>
          </li>
          <li>
            Existing Infrastructure and Applications Review
              <ul>
              <li>Application Functionality</li>
              <li>Infrastructure &amp; Deployment</li>
              <li>Technology Stack</li>
              <li>Data Structure</li>
              <li>Interfaces</li>
              <li>Security &amp; Governance </li>
              <li>Existing Pain Points</li>
            </ul>
          </li>
          <li>
            Provide modernization options, along with Demo / POC how the transition would look like.
              </li>
          <li>
            Based on the SYNECTIKS recommendations, provide proposed LOE (Level of Effort)
              </li>
          <li>
            After mutual agreement, SYNECTIKS begins with agile methodology, including:
              <ul>
              <li>Get a deep understanding of the functionality of the existing application</li>
              <li>Create Migration RoadMap</li>
              <li>Create Risk Plan</li>
              <li>Create Target Architectures</li>
              <li>Create a project plan and share with all the stakeholders</li>
              <li>Split the application into smaller domains</li>
              <li>Define the boundaries of the domains and microservices</li>
              <li>Finalize the technology stack</li>
              <li>Generate infrastructure blueprints</li>
              <li>Set up the foundation environment</li>
              <li>Put Continuous Integration/Continuous Delivery (CI/CD) pipelines in place</li>
              <li>Begin development sprints (SYNECTIKS prefers test-driven development to minimize manual testing)</li>
              <li>Help to use SYNECTIKS Application blocks / libraries to do rapid transformation.</li>
            </ul>
          </li>
        </ul>
        <p>
        SYNECTIKS is committed to working with its customers to meet almost any need:
            </p>
        <ul className="lineHeight-24">
          <li>Adapt DevOps culture across organization, essential for developing microservices, foster small,
            independent teams within the organization to take over ownership of the services.
              </li>
          <li>
            Transform your hardware driven infrastructure to a complete multi-cloud hybrid software driven system
              </li>
          <li>
            Streamline communications to ensure success
              </li>
          <li>
            Embrace CI best practices and automate CI/CD processes
              </li>
          <li>
            Embrace operation automations to manage distributed cluster and services
              </li>
        </ul>
        <p className="lineHeight-24">
          With SYNECTIKS Xformation  platform, companies can take advantage of an API driven cloud architecture and get going faster.
            </p>
        <div className="w-40 p-5 text-center">
          <img src="img/Foundation.svg" width="75%" alt="DevOps Transformation" />{" "}
        </div>
        <p className="lineHeight-24">
          How much effort it takes to perform a Monolith to Microservices transformation?<br /></p>
          <p>
          Though it depends on complexity &amp; sizing of the existing applications, you could accelerate the
            transformation process by engaging a microservices SYNECTIKS who can help you as follows:<br />       <ul>
            <li>Accelerate the transformation by using open application and automation blocks and frameworks built by SYNECTIKS team,
              so that you can leverage lot of existing code and reuse your maximum existing codebase.
              A typical large transformation project can take a year long effort and often don’t yield results.
              We recommend taking bottom up approach, take a small piece of functionality,
              and develop the services and foundation for it rapidly by using existing application blocks and automation framework.
              You would minimize your risks by investing a small time &amp; money and continue to do so when you see a significant
              ROI.  The key aspect is time. The advantage of making us your microservices partner is ,
              our open source contribution helps us to deliver values vary rapidly.
              </li>
            <li>
              Embrace DevOps centric culture by delivering you skilled DevOps resources.
              </li>
          </ul>
        </p>
        <h4>
          Why SYNECTIKS should be your trusted microservice partner?
            </h4>
        <div className="w-40 p-5 text-center">
          <img src="img/Microservice_11.png" width="75%" alt="DevOps Transformation" />{" "}
        </div>
              
  {/* Help End */}
      <div className="d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12">
            <div className="pb-3 col-sm-3" >
            <Link to="/microserviceexample">
                        <button className='btn text-white bg-logoblue     btnLearn'>Example of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicebenefit">
                        <button className='btn text-white bg-logoblue     btnLearn'>Benefits of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicechallenge">
                        <button className='btn text-white bg-logoblue     btnLearn'>Challenges of Microservices</button>
                        </Link>
                    </div>
                    <div className="pb-3 col-sm-3" >
                    <Link to="/microservicehelp">
                        <button className='btn text-white bg-logoblue     btnLearn '>How we can help you?</button>
                        </Link>
                    </div>
                    </div>

      {/* Contact Starts */}
     
      {/* Contact Ends */}

      </div>
    </div>


  );
};
}
export default Microservicehelp;
