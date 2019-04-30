import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const Migrations: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>

            <div className='bg-theme mt-3'>
                <h1 className='text-center text-white pt-theme mt-2'>Cloud Migrations &amp; Optimization</h1>
            </div>
         
            <div className="px-5 pt-4 text-center" data-aos="fade-up" data-aos-duration="2000">
                <h4><i>
                    Transformation for Todays Digital Business!
                </i></h4>
            </div>
            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <p className="lineHeight-24">
                    Synectiks accelerated migration allows customer to leverage the data processing benefits of cloud
                    sooner, providing cost-savings and solving scalability issues. Our approach is to use a combination
                    of latest industry tools, processes, experience and best practices to provide the best solutions to
                    our customers. The teams perform a quick requirements analysis and GAP analysis to understand the
                    current setup and provide solutions to optimize your applications, storage, databases and overall
                    infrastructure. Synectiks optimization services provides customer the ability to optimize the existing
                    application and infrastructure as follows:
            </p>
                <p className="lineHeight-24">
                    <i>
                        <ul>
                            <li>
                                By taking advantage of cloud native services without having to rewrite the code
                    </li>
                            <li>
                                By doing Monolith to SOA transformation. Customers enjoy the flexibility to reuse the
                                Synectiks Foundation Microservices components across many applications.
                    </li>
                            <li>
                                By adopting the hybrid model where some workload moves to public cloud in private address
                                space ensuring security and performance.
                    </li>
                        </ul>

                    </i>
                </p>
            </div>
            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                    Rehost-
               </h4>
                <div className="d-flex justify-content-around align-items-center flex-col">
                    <div className="">
                        <img src="img/Rehost.png" width="100%" alt="DevOps Transformation" />{" "}
                    </div>
                </div>             
            </div>

            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Refactor-
               </h4>
                <div className="d-flex justify-content-around align-items-center flex-col">
                    <div className="">
                        <img src="img/Refactor.png" width="100%" alt="DevOps Transformation" />{" "}
                    </div>
                </div>             
            </div>

            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Legacy Application Migration– 
               </h4>
               <p className="lineHeight-24 pt-3">
               Two ways to extract value from legacy apps Extracting the data in a Data Lake and exposing that
               data through analytical tools. Business Logic: Creating microservices that become APIs enabling
               business user to assemble various functionalities and truly become a API driven organization with
               a API centric application architecture. This allows the organization to become a low-code organization
               where they 'assemble apps' rather than write apps.
               </p>
                <div className="d-flex justify-content-around align-items-center flex-col">
                    <div className="">
                        <img src="img/LegacyApp2.png" width="100%" alt="DevOps Transformation" />{" "}
                    </div>
                </div>             
            </div>



            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Accelerated Migration– 
               </h4>               
                <p className="lineHeight-24 pt-3">
                With synectiks xformation  platform, companies can take advantage of an API-driven cloud 
                architecture and get moving faster. Synectiks open xformation platform  offers App/ Delivery/ Automation blocks 
                based on cloud native services that customers can leverage to build application and services 
                rapidly with adequate security and governance.
            </p>
            <div className=" text-center">
                    <img src="img/Foundation.svg" width="75%" alt="DevOps Transformation" />{" "}
                </div>
            </div>

            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Delivery Pipeline– 
               </h4>               
                <p className="lineHeight-24 pt-3">
                Synectiks xformation platform comes with industry standard CI/CD blueprint infrastructure 
                provisioning and validation, container driven services delivery across clouds,  functional testing, performance 
                testing and security testing and stagewise production deployment tasks. By truly adopting a DevOps 
                based cultural adoption, customers can ensure their product quality , security and compliance 
                posture is continually maintained along with the capability to rapidly deliver features and services 
                with ever increasing security and compliance guidelines.
                </p>
            <div className=" text-center">
                    <img src="img/transformation_2.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
            </div>


            <div className="px-5 pt-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Redevelopment –
                Microservices Based App Development – 
               </h4>               
                <p className="lineHeight-24 pt-3">
                Synectiks application development service offering allow customers to realize the real 
                benefit of using cloud native services and boosting innovation agility. The offerings 
                involves application redevelopment to implement use cases for batch processing, workflow 
                processing , transient server less functionality or container based microservices. Synectiks 
                open xformation platform  offers App/ Delivery/ Automation blocks based on cloud native 
                services that customers can leverage to build application and services rapidly. A typical 
                microservice based enterprise application component diagram is below:
            </p>
            <div className=" text-center">
                    <img src="img/Enterprise-Platform.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
            </div>

            
            <div className="px-5 py-3" data-aos="fade-up" data-aos-duration="2000">
                <h4>
                Bigdata Analytic – 
               </h4>               
                <p className="lineHeight-24 pt-3">
                Synectiks analytic service offering allow customers to create data lake for their 
                unstructured, semi structured and structured data and derive real time visibility across 
                their business processes by doing bigdata processing projects. Synectiks simplify the 
                operations complexity by running the multistage transactional services, batch workloads and 
                analytics inside a single platform. Synectiks deep expertise on hardware aggregation coupled 
                with its analytics services offerings, customers can seamlessly run every mission critical 
                workloads inside a single cluster platform and can truly focus on outcomes.
                </p>
            <div className=" text-center">
                    <img src="img/Migration_1.png" width="75%" alt="DevOps Transformation" />{" "}
                </div>
            </div>

            {/* Contact Starts */}
            {/* <div className='py-3' data-aos="fade-up" data-aos-duration="3000">
                <h2 className='text-center text-black'>Ask for Demo</h2>
                <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
            </div>

            <div className="px-5 py-3" data-aos="fade-up" data-aos-duration="3000">

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;First Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Email" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;City" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Mobile" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Phone" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2 " >
                       
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Contact&nbsp;Source</option>
                            <option value="enterprise">&nbsp;Advertisement</option>
                            <option value="foundation">&nbsp;Customer&nbsp;Event</option>
                            <option value="migration">&nbsp;Employee&nbsp;Referral</option>
                            <option value="operations">&nbsp;Google&nbsp;Adwords</option>
                            <option value="others">&nbsp;Other</option>
                            <option value="optimization">&nbsp;Partner</option>
                            <option value="optimization">&nbsp;Purchased&nbsp;List</option>
                            <option value="optimization">&nbsp;Trade&nbsp;Show</option>
                            <option value="optimization">&nbsp;Webinar</option>
                            <option value="optimization">&nbsp;Website</option>
                        </select>
                    </div>
                    <div className="col-sm-4 p-2" >
                        
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Select&nbsp;Service</option>
                            <option value="enterprise">&nbsp;Enterprise&nbsp;Transformation</option>
                            <option value="foundation">&nbsp;Foundation</option>
                            <option value="migration">&nbsp;Migration&nbsp;&amp;&nbsp;Deployment</option>
                            <option value="operations">&nbsp;Operations</option>
                            <option value="optimization">&nbsp;Optimization</option>
                            <option value="others">&nbsp;Others</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='text-center p-5'>
                <button className='btn menu-bg btnSend'>Submit</button>
            </div> */}
            {/* Contact Ends */}

        </div>

    );
};

export default Migrations;
